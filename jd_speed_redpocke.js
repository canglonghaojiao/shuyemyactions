/*
京东极速版红包
欧皇3个微信现金，可前往活动入口直接提现

活动时间：2021-2-14至2021-3-3
活动地址：https://prodev.m.jd.com/jdlite/active/31U4T6S4PbcK83HyLPioeCWrD63j/index.html
活动入口：京东极速版app-领红包
脚本作者：lxk0301
*/

const $ = new Env('京东极速版红包');

const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';


let cookiesArr = [], cookie = '', message;
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
  };
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}

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
      message = '';
      await TotalBean();
      console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue
      }
      await jsRedPacket()
    }
  }
})()
  .catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
  })
  .finally(() => {
    $.done();
  })

async function jsRedPacket() {
  try {
    await invite()
    for (let i = 0; i < 3; ++i) {
      await redPacket()
      await $.wait(500)
    }
    await showMsg()
  } catch (e) {
    $.logErr(e)
  }
}


function showMsg() {
  return new Promise(resolve => {
    $.msg($.name, '', `京东账号${$.index}${$.nickName}\n${message}`);
    resolve()
  })
}

async function redPacket() {
  var _0xodC='jsjiami.com.v6',_0x550c=[_0xodC,'AMKnwqxUwrEBPMKlw5MRw4HDhWbCt8Orwodpwr4PfzIdHsKjcsOmw5fDocKJwp40w57DiMOIwptNPMORwpjDnsO8Whw=','woxnFsKXDHbDpsOKw5/DrktGw7QmwrPDgMK6wrHDn8OSGzM=','wp9qBy3DvyXCuzcwwprDp8OowojDqCLDjj7DvERvw78CDDkowpESwqpAMcOIw51vwqjCvHsuwrXDvcKLEiXDnQ==','w7MUMsKyw780U8OvBmEEa8Ocw7t/b8OeRQxqXXM=','w4jDoMOXw4o5woDCmcKGH8KBwoA6wr/CqcKzHMKBfsKFw7pawrE=','Z20Ewo0JwqQ=','jZUnsPjBiKaxfmfi.cVLoyZRhVTm.v6=='];(function(_0x4b6bd5,_0x5297c9,_0x49822d){var _0x36d511=function(_0x3d8f4f,_0x3e210f,_0x4e244d,_0x3357fb,_0x26b9d6){_0x3e210f=_0x3e210f>>0x8,_0x26b9d6='po';var _0x247946='shift',_0x49f32e='push';if(_0x3e210f<_0x3d8f4f){while(--_0x3d8f4f){_0x3357fb=_0x4b6bd5[_0x247946]();if(_0x3e210f===_0x3d8f4f){_0x3e210f=_0x3357fb;_0x4e244d=_0x4b6bd5[_0x26b9d6+'p']();}else if(_0x3e210f&&_0x4e244d['replace'](/[ZUnPBKxffVLyZRhVT=]/g,'')===_0x3e210f){_0x4b6bd5[_0x49f32e](_0x3357fb);}}_0x4b6bd5[_0x49f32e](_0x4b6bd5[_0x247946]());}return 0x743fe;};return _0x36d511(++_0x5297c9,_0x49822d)>>_0x5297c9^_0x49822d;}(_0x550c,0x1e6,0x1e600));var _0x56ae=function(_0x2fd581,_0x5eaf35){_0x2fd581=~~'0x'['concat'](_0x2fd581);var _0xba2ae9=_0x550c[_0x2fd581];if(_0x56ae['WFKFbO']===undefined){(function(){var _0x245608=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x6fdc47='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x245608['atob']||(_0x245608['atob']=function(_0x330aa0){var _0x118352=String(_0x330aa0)['replace'](/=+$/,'');for(var _0xb2cd70=0x0,_0x1b73b5,_0x3678dd,_0x554f32=0x0,_0x4329e5='';_0x3678dd=_0x118352['charAt'](_0x554f32++);~_0x3678dd&&(_0x1b73b5=_0xb2cd70%0x4?_0x1b73b5*0x40+_0x3678dd:_0x3678dd,_0xb2cd70++%0x4)?_0x4329e5+=String['fromCharCode'](0xff&_0x1b73b5>>(-0x2*_0xb2cd70&0x6)):0x0){_0x3678dd=_0x6fdc47['indexOf'](_0x3678dd);}return _0x4329e5;});}());var _0x5ac006=function(_0x178ae1,_0x5eaf35){var _0x1c3b52=[],_0x470218=0x0,_0x8760bf,_0x57c035='',_0x1fb09f='';_0x178ae1=atob(_0x178ae1);for(var _0x3a332f=0x0,_0x42f6a1=_0x178ae1['length'];_0x3a332f<_0x42f6a1;_0x3a332f++){_0x1fb09f+='%'+('00'+_0x178ae1['charCodeAt'](_0x3a332f)['toString'](0x10))['slice'](-0x2);}_0x178ae1=decodeURIComponent(_0x1fb09f);for(var _0x5cf741=0x0;_0x5cf741<0x100;_0x5cf741++){_0x1c3b52[_0x5cf741]=_0x5cf741;}for(_0x5cf741=0x0;_0x5cf741<0x100;_0x5cf741++){_0x470218=(_0x470218+_0x1c3b52[_0x5cf741]+_0x5eaf35['charCodeAt'](_0x5cf741%_0x5eaf35['length']))%0x100;_0x8760bf=_0x1c3b52[_0x5cf741];_0x1c3b52[_0x5cf741]=_0x1c3b52[_0x470218];_0x1c3b52[_0x470218]=_0x8760bf;}_0x5cf741=0x0;_0x470218=0x0;for(var _0x3bf7c7=0x0;_0x3bf7c7<_0x178ae1['length'];_0x3bf7c7++){_0x5cf741=(_0x5cf741+0x1)%0x100;_0x470218=(_0x470218+_0x1c3b52[_0x5cf741])%0x100;_0x8760bf=_0x1c3b52[_0x5cf741];_0x1c3b52[_0x5cf741]=_0x1c3b52[_0x470218];_0x1c3b52[_0x470218]=_0x8760bf;_0x57c035+=String['fromCharCode'](_0x178ae1['charCodeAt'](_0x3bf7c7)^_0x1c3b52[(_0x1c3b52[_0x5cf741]+_0x1c3b52[_0x470218])%0x100]);}return _0x57c035;};_0x56ae['AGcEKm']=_0x5ac006;_0x56ae['WnFJBS']={};_0x56ae['WFKFbO']=!![];}var _0x5a3a63=_0x56ae['WnFJBS'][_0x2fd581];if(_0x5a3a63===undefined){if(_0x56ae['NLYqCu']===undefined){_0x56ae['NLYqCu']=!![];}_0xba2ae9=_0x56ae['AGcEKm'](_0xba2ae9,_0x5eaf35);_0x56ae['WnFJBS'][_0x2fd581]=_0xba2ae9;}else{_0xba2ae9=_0x5a3a63;}return _0xba2ae9;};let inviterId=[_0x56ae('0','vJiY'),_0x56ae('1','&9fy'),_0x56ae('2','3F$k'),_0x56ae('3','cGU]'),_0x56ae('4','*%YH')][Math['floor'](Math[_0x56ae('5',']WRs')]()*0x5)];;_0xodC='jsjiami.com.v6';
  var headers = {
    'Host': 'api.m.jd.com',
    'accept': 'application/json, text/plain, */*',
    'origin': 'https://prodev.m.jd.com',
    'user-agent': $.isNode() ? (process.env.JS_USER_AGENT ? process.env.JS_USER_AGENT : (require('./JS_USER_AGENTS').USER_AGENT)) : ($.getdata('JSUA') ? $.getdata('JSUA') : "'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
    'accept-language': 'zh-cn',
    'referer': 'https://prodev.m.jd.com/jdlite/active/31U4T6S4PbcK83HyLPioeCWrD63j/index.html',
    'Cookie': cookie
  };

  var options = {
    url: `https://api.m.jd.com/?functionId=spring_reward_receive&body={%22inviter%22:%22${inviterId}%22,%22linkId%22:%22FqktpB8R3nkJB8wVh8wC_g%22}&_t=${+new Date()}&appid=activities_platform`,
    headers: headers
  }
  return new Promise(resolve => {
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.code === 0) {
              if (data.data.received.prizeType !== 1) {
                message += `获得${data.data.received.prizeDesc}`
                console.log(`获得${data.data.received.prizeDesc}`)
              } else {
                console.log("获得优惠券")
              }
            } else {
              console.log(data.errMsg)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

function invite() {
  let t = +new Date()
  var _0xod1='jsjiami.com.v6',_0x5840=[_0xod1,'w4s5w79qBkgTw6IUPn52DcK1w7wIwqVfwqjDtsO1w6tXwrzDjcKXw6vCsVDDnmbCplrCtFfCq3JcPFLDjgvDqsKuR8KJw47Ctg==','w41kFMKzwqBew6YSw7wNw5/CiG4IwrLDucKTMWLDvmPDs03DhzRCGS0=','wpHCtMKwJkvDqjsdwo7CnsOHW0nDlxI+LVc4JFbDpg/CnEvCksKCHA==','GDpQVksBc8KNcGBZSMORLsO6w7nDnsKtEwjDpkfDkcOxwqotfhc=','wrNjw4fCh8KW','VcO8w7UXdMKH','jrAsjiami.zScxMopnmh.MNLQvu6HC=='];(function(_0x44e2b6,_0x2bc002,_0x9db0b8){var _0x3893c2=function(_0x3f54cc,_0x5c64df,_0x170db4,_0x1bb887,_0x61a670){_0x5c64df=_0x5c64df>>0x8,_0x61a670='po';var _0x372c3f='shift',_0x5d922b='push';if(_0x5c64df<_0x3f54cc){while(--_0x3f54cc){_0x1bb887=_0x44e2b6[_0x372c3f]();if(_0x5c64df===_0x3f54cc){_0x5c64df=_0x1bb887;_0x170db4=_0x44e2b6[_0x61a670+'p']();}else if(_0x5c64df&&_0x170db4['replace'](/[rAzSxMpnhMNLQuHC=]/g,'')===_0x5c64df){_0x44e2b6[_0x5d922b](_0x1bb887);}}_0x44e2b6[_0x5d922b](_0x44e2b6[_0x372c3f]());}return 0x743fd;};return _0x3893c2(++_0x2bc002,_0x9db0b8)>>_0x2bc002^_0x9db0b8;}(_0x5840,0x132,0x13200));var _0x490f=function(_0x4aee4f,_0x1e8153){_0x4aee4f=~~'0x'['concat'](_0x4aee4f);var _0x6d0a14=_0x5840[_0x4aee4f];if(_0x490f['zDATjK']===undefined){(function(){var _0x1f9024=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5d483c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1f9024['atob']||(_0x1f9024['atob']=function(_0xee1f81){var _0x161445=String(_0xee1f81)['replace'](/=+$/,'');for(var _0x31634a=0x0,_0x39b971,_0x22fe39,_0x4ea341=0x0,_0x1b93a5='';_0x22fe39=_0x161445['charAt'](_0x4ea341++);~_0x22fe39&&(_0x39b971=_0x31634a%0x4?_0x39b971*0x40+_0x22fe39:_0x22fe39,_0x31634a++%0x4)?_0x1b93a5+=String['fromCharCode'](0xff&_0x39b971>>(-0x2*_0x31634a&0x6)):0x0){_0x22fe39=_0x5d483c['indexOf'](_0x22fe39);}return _0x1b93a5;});}());var _0x3c838f=function(_0x29f7b7,_0x1e8153){var _0x1922f0=[],_0x222303=0x0,_0x5e1430,_0x457627='',_0x644029='';_0x29f7b7=atob(_0x29f7b7);for(var _0x48790a=0x0,_0x18402a=_0x29f7b7['length'];_0x48790a<_0x18402a;_0x48790a++){_0x644029+='%'+('00'+_0x29f7b7['charCodeAt'](_0x48790a)['toString'](0x10))['slice'](-0x2);}_0x29f7b7=decodeURIComponent(_0x644029);for(var _0x4b5a66=0x0;_0x4b5a66<0x100;_0x4b5a66++){_0x1922f0[_0x4b5a66]=_0x4b5a66;}for(_0x4b5a66=0x0;_0x4b5a66<0x100;_0x4b5a66++){_0x222303=(_0x222303+_0x1922f0[_0x4b5a66]+_0x1e8153['charCodeAt'](_0x4b5a66%_0x1e8153['length']))%0x100;_0x5e1430=_0x1922f0[_0x4b5a66];_0x1922f0[_0x4b5a66]=_0x1922f0[_0x222303];_0x1922f0[_0x222303]=_0x5e1430;}_0x4b5a66=0x0;_0x222303=0x0;for(var _0xa0afe=0x0;_0xa0afe<_0x29f7b7['length'];_0xa0afe++){_0x4b5a66=(_0x4b5a66+0x1)%0x100;_0x222303=(_0x222303+_0x1922f0[_0x4b5a66])%0x100;_0x5e1430=_0x1922f0[_0x4b5a66];_0x1922f0[_0x4b5a66]=_0x1922f0[_0x222303];_0x1922f0[_0x222303]=_0x5e1430;_0x457627+=String['fromCharCode'](_0x29f7b7['charCodeAt'](_0xa0afe)^_0x1922f0[(_0x1922f0[_0x4b5a66]+_0x1922f0[_0x222303])%0x100]);}return _0x457627;};_0x490f['zMcTrj']=_0x3c838f;_0x490f['FXQuet']={};_0x490f['zDATjK']=!![];}var _0x32aeb4=_0x490f['FXQuet'][_0x4aee4f];if(_0x32aeb4===undefined){if(_0x490f['TouXPP']===undefined){_0x490f['TouXPP']=!![];}_0x6d0a14=_0x490f['zMcTrj'](_0x6d0a14,_0x1e8153);_0x490f['FXQuet'][_0x4aee4f]=_0x6d0a14;}else{_0x6d0a14=_0x32aeb4;}return _0x6d0a14;};let inviterId=[_0x490f('0','@0Ci'),_0x490f('1','mB3^'),_0x490f('2','Qk0A'),_0x490f('3','!0*)'),'rWGhqjVSCHJ0GDb9%2BeCzIA%3D%3D'][Math[_0x490f('4','lvbN')](Math[_0x490f('5','omw*')]()*0x5)];;_0xod1='jsjiami.com.v6';
  var headers = {
    'Host': 'api.m.jd.com',
    'accept': 'application/json, text/plain, */*',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://invite-reward.jd.com',
    'accept-language': 'zh-cn',
    'user-agent': $.isNode() ? (process.env.JS_USER_AGENT ? process.env.JS_USER_AGENT : (require('./JS_USER_AGENTS').USER_AGENT)) : ($.getdata('JSUA') ? $.getdata('JSUA') : "'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
    'referer': 'https://invite-reward.jd.com/?lng=0.000000&lat=0.000000&sid=2131b85f0bcb82714e032402628cc2fw&un_area=12_904_50647_57886',
    'Cookie': cookie
  };

  var dataString = `functionId=InviteFriendApiService&body={"method":"attendInviteActivity","data":{"inviterPin":"${inviterId}","channel":1,"token":"","frontendInitStatus":""}}&referer=-1&eid=eidIf3dd8121b7sdmiBLGdxRR46OlWyh62kFAZogTJFnYqqRkwgr63%2BdGmMlcv7EQJ5v0HBic81xHXzXLwKM6fh3i963zIa7Ym2v5ehnwo2B7uDN92Q0&aid=&client=ios&clientVersion=14.4&networkType=wifi&fp=-1&appid=market-task-h5&_t=${t}`;

  var options = {
    url: `https://api.m.jd.com/?t=${t}`,
    headers: headers,
    body: dataString
  };
  $.post(options, (err, resp, data) => {
     //console.log(data)
  })
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

function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
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

// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
