/*
京东极速版_15-5券
自动预约茅台 执行时间大家自己改下
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#京东极速版_15-5券
0 0 10,15,16,18,21 * * ? https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js, tag=京东极速版_15-5券, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "0 0 10,15,16,18,21 * * ?" script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js,tag=京东极速版_15-5券
===================================Surge================================
京东极速版_15-5券 = type=cron,cronexp="0 0 10,15,16,18,21 * * ?",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js
====================================小火箭=============================
京东极速版_15-5券 = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js, cronexpr="0 0 10,15,16,18,21 * * ?", timeout=3600, enable=true
 */
const $ = new Env('京东极速版_15-5券');
var _0xodV='jsjiami.com.v6',_0xodV_=['_0xodV'],_0x5d1f=[_0xodV,'\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x2e\x2f\x6a\x64\x43\x6f\x6f\x6b\x69\x65\x2e\x6a\x73','\x6e\x6f\x64\x65\x2d\x66\x65\x74\x63\x68','\x6b\x65\x79\x73','\x66\x6f\x72\x45\x61\x63\x68','\x70\x75\x73\x68','\x65\x6e\x76','\x4a\x44\x5f\x44\x45\x42\x55\x47','\x66\x61\x6c\x73\x65','\x6c\x6f\x67','\x67\x65\x74\x64\x61\x74\x61','\x43\x6f\x6f\x6b\x69\x65\x4a\x44','\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32','\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44','\x6d\x61\x70','\x63\x6f\x6f\x6b\x69\x65','\x66\x69\x6c\x74\x65\x72','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x46\x6f\x72\x6d\x61\x74','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73','\x74\x65\x73\x74','\x72\x65\x70\x6c\x61\x63\x65','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x73\x75\x62\x73\x74\x72','\x6c\x65\x6e\x67\x74\x68','\x3a\x30\x30\x3a\x30\x30','\x6d\x73\x67','\x6e\x61\x6d\x65','\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\u4eac\u4e1c\u8d26\u53f7\u4e00\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x6e\x6f\x77','\u811a\u672c\u6d4b\u8bd5\u622a\u6b62','\u811a\u672c\u6d4b\u8bd5\u622a\u6b62\u65e5\u671f\x20\x32\x30\x32\x32\x2d\x30\x32\x2d\x32\x30','\x2e\x2f\x71\x6c\x32\x31\x32\x37\x39\x36\x36\x36\x38\x2e\x6a\x73','\x0a\x0a\u6211\u89c9\u5f97\u4f60\u6ca1\u62c9\u6211\u4ed3\u5e93\uff0c\u811a\u672c\u4e0d\u6267\u884c\u4e86\x0a\x0a','\x0a\u62c9\u4ed3\u5e93\u52a0\x51\x51\u7fa4\uff1a\x32\x31\x32\x37\x39\x36\x36\x36\x38\u3001\x36\x38\x31\x30\x33\x30\x30\x39\x37\x20\uff0c\u770b\u7fa4\u516c\u544a\x0a','\x0a\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\u3010\u4eac\u4e1c\u65f6\u95f4\u6821\u51c6\u3011\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x71\x75\x65\x72\x79\x4d\x61\x74\x65\x72\x69\x61\x6c\x50\x72\x6f\x64\x75\x63\x74\x73\x26\x63\x6c\x69\x65\x6e\x74\x3d\x77\x68\x35','\x74\x65\x78\x74\x2f\x68\x74\x6d\x6c\x2c\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x68\x74\x6d\x6c\x2b\x78\x6d\x6c\x2c\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x6d\x6c\x3b\x71\x3d\x30\x2e\x39\x2c\x69\x6d\x61\x67\x65\x2f\x61\x76\x69\x66\x2c\x69\x6d\x61\x67\x65\x2f\x77\x65\x62\x70\x2c\x69\x6d\x61\x67\x65\x2f\x61\x70\x6e\x67\x2c\x2a\x2f\x2a\x3b\x71\x3d\x30\x2e\x38\x2c\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x73\x69\x67\x6e\x65\x64\x2d\x65\x78\x63\x68\x61\x6e\x67\x65\x3b\x76\x3d\x62\x33\x3b\x71\x3d\x30\x2e\x39','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39','\x6d\x61\x78\x2d\x61\x67\x65\x3d\x30','\x22\x20\x4e\x6f\x74\x3b\x41\x20\x42\x72\x61\x6e\x64\x22\x3b\x76\x3d\x22\x39\x39\x22\x2c\x20\x22\x47\x6f\x6f\x67\x6c\x65\x20\x43\x68\x72\x6f\x6d\x65\x22\x3b\x76\x3d\x22\x39\x37\x22\x2c\x20\x22\x43\x68\x72\x6f\x6d\x69\x75\x6d\x22\x3b\x76\x3d\x22\x39\x37\x22','\x22\x57\x69\x6e\x64\x6f\x77\x73\x22','\x64\x6f\x63\x75\x6d\x65\x6e\x74','\x6e\x61\x76\x69\x67\x61\x74\x65','\x6e\x6f\x6e\x65','\x73\x74\x72\x69\x63\x74\x2d\x6f\x72\x69\x67\x69\x6e\x2d\x77\x68\x65\x6e\x2d\x63\x72\x6f\x73\x73\x2d\x6f\x72\x69\x67\x69\x6e','\x47\x45\x54','\x74\x68\x65\x6e','\x6a\x73\x6f\x6e','\x63\x75\x72\x72\x65\x6e\x74\x54\x69\x6d\x65\x32','\x67\x65\x74\x54\x69\x6d\x65','\u4eac\u4e1c\u65f6\u95f4\u6233\uff1a','\u670d\u52a1\u5668\u65f6\u95f4\u6233\uff1a','\u6821\u51c6\u6beb\u79d2\u6570\uff1a','\x0a\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x0a\u5f00\u62a2\u65f6\u95f4\x3a\x20','\x0a\u7b49\u5f85\x20','\x20\u79d2\u540e\u6267\u884c\u4ee3\u7801','\u7b49\u5f85\u65f6\u95f4\u5927\u4e8e\x20\x33\x36\x30\x30\x20\u79d2\uff08\x31\u5c0f\u65f6\uff09\uff0c\u7ec8\u6b62\u8fd0\u884c\x0a','\x0a\u300b\u300b\u300b\u300b\u300b\u300b\u6267\u884c\u65f6\u95f4\x3a\x20','\u300a\u300a\u300a\u300a\u300a\u300a','\x55\x73\x65\x72\x4e\x61\x6d\x65','\x6d\x61\x74\x63\x68','\x69\x6e\x64\x65\x78','\x69\x73\x4c\x6f\x67\x69\x6e','\x6e\x69\x63\x6b\x4e\x61\x6d\x65','\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7','\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a','\u3010\u63d0\u793a\u3011\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548','\u4eac\u4e1c\u8d26\u53f7','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548\x20\x2d\x20','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x6e\x65\x77\x42\x61\x62\x65\x6c\x41\x77\x61\x72\x64\x43\x6f\x6c\x6c\x65\x63\x74\x69\x6f\x6e\x26\x62\x6f\x64\x79\x3d\x25\x37\x42\x25\x32\x32\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x55\x63\x4c\x42\x74\x4b\x39\x6b\x68\x38\x72\x41\x38\x4d\x32\x68\x36\x70\x42\x66\x68\x64\x37\x72\x73\x64\x37\x25\x32\x32\x25\x32\x43\x25\x32\x32\x66\x72\x6f\x6d\x25\x32\x32\x25\x33\x41\x25\x32\x32\x48\x35\x6e\x6f\x64\x65\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x63\x65\x6e\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x72\x67\x73\x25\x32\x32\x25\x33\x41\x25\x32\x32\x6b\x65\x79\x3d\x33\x31\x43\x44\x38\x38\x41\x45\x33\x39\x39\x32\x41\x46\x44\x42\x45\x37\x32\x39\x46\x34\x34\x33\x37\x30\x36\x37\x31\x30\x37\x42\x39\x42\x33\x46\x36\x32\x35\x34\x37\x30\x45\x35\x36\x41\x32\x43\x41\x42\x38\x35\x37\x31\x31\x33\x41\x36\x32\x33\x45\x45\x38\x39\x31\x41\x35\x37\x43\x41\x35\x37\x38\x32\x34\x30\x30\x31\x32\x32\x38\x31\x42\x33\x37\x34\x33\x39\x41\x32\x42\x39\x45\x38\x30\x35\x5f\x62\x69\x6e\x67\x6f\x2c\x72\x6f\x6c\x65\x49\x64\x3d\x41\x30\x31\x39\x39\x38\x35\x39\x41\x41\x42\x38\x39\x38\x46\x32\x43\x42\x32\x36\x45\x35\x46\x38\x44\x43\x32\x30\x35\x38\x38\x41\x5f\x62\x69\x6e\x67\x6f\x2c\x73\x74\x72\x65\x6e\x67\x74\x68\x65\x6e\x4b\x65\x79\x3d\x31\x39\x46\x35\x31\x32\x44\x43\x44\x38\x45\x45\x33\x34\x41\x42\x45\x39\x43\x34\x46\x42\x34\x41\x39\x32\x43\x32\x46\x34\x32\x41\x31\x41\x35\x31\x33\x43\x32\x42\x35\x30\x43\x36\x41\x41\x36\x41\x33\x37\x44\x31\x32\x39\x39\x43\x37\x32\x34\x46\x34\x32\x37\x35\x5f\x62\x69\x6e\x67\x6f\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6d\x69\x74\x65\x6d\x41\x64\x64\x72\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x67\x65\x6f\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x6c\x6e\x67\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6c\x61\x74\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x37\x44\x25\x37\x44\x26\x63\x6c\x69\x65\x6e\x74\x3d\x77\x68\x35\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x2e\x30\x2e\x30','\x22\x20\x4e\x6f\x74\x20\x41\x3b\x42\x72\x61\x6e\x64\x22\x3b\x76\x3d\x22\x39\x39\x22\x2c\x20\x22\x43\x68\x72\x6f\x6d\x69\x75\x6d\x22\x3b\x76\x3d\x22\x39\x38\x22\x2c\x20\x22\x47\x6f\x6f\x67\x6c\x65\x20\x43\x68\x72\x6f\x6d\x65\x22\x3b\x76\x3d\x22\x39\x38\x22','\x73\x75\x62\x43\x6f\x64\x65\x4d\x73\x67','\x69\x6e\x64\x65\x78\x4f\x66','\u9886\u53d6\u6210\u529f\uff01','\u4eac\u4e1c\u6781\u901f\u7248\x31\x35\x2d\x35\u5238','\u8d26\u53f7\x3a\u3010','\x63\x61\x74\x63\x68','\x2c\x20\u5931\u8d25\x21\x20\u539f\u56e0\x3a\x20','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x53\x72\x75\x54\x66\x6a\x73\x79\x64\x74\x6a\x69\x61\x6d\x56\x69\x52\x49\x45\x2e\x63\x4b\x6f\x6d\x59\x2e\x79\x76\x4a\x36\x47\x3d\x3d'];function _0xae59(_0x522e9d,_0x5e6eb9){_0x522e9d=~~'0x'['concat'](_0x522e9d['slice'](0x0));var _0x5cdd24=_0x5d1f[_0x522e9d];return _0x5cdd24;};(function(_0x34a39a,_0x3431f8){var _0x4b14e8=0x0;for(_0x3431f8=_0x34a39a['shift'](_0x4b14e8>>0x2);_0x3431f8&&_0x3431f8!==(_0x34a39a['pop'](_0x4b14e8>>0x3)+'')['replace'](/[SruTfydtVRIEKYyJG=]/g,'');_0x4b14e8++){_0x4b14e8=_0x4b14e8^0xd0b59;}}(_0x5d1f,_0xae59));const notify=$[_0xae59('0')]()?require(_0xae59('1')):'';const jdCookieNode=$[_0xae59('0')]()?require(_0xae59('2')):'';const fetch=require(_0xae59('3'));let cookiesArr=[],cookie='',message;if($[_0xae59('0')]()){Object[_0xae59('4')](jdCookieNode)[_0xae59('5')](_0x4993fa=>{cookiesArr[_0xae59('6')](jdCookieNode[_0x4993fa]);});if(process[_0xae59('7')][_0xae59('8')]&&process[_0xae59('7')][_0xae59('8')]===_0xae59('9'))console[_0xae59('a')]=()=>{};}else{cookiesArr=[$[_0xae59('b')](_0xae59('c')),$[_0xae59('b')](_0xae59('d')),...jsonParse($[_0xae59('b')](_0xae59('e'))||'\x5b\x5d')[_0xae59('f')](_0x52fa9d=>_0x52fa9d[_0xae59('10')])][_0xae59('11')](_0x3a5248=>!!_0x3a5248);}Date[_0xae59('12')][_0xae59('13')]=function(_0x2536d1){var _0x5b6d13={'M+':this[_0xae59('14')]()+0x1,'d+':this[_0xae59('15')](),'h+':this[_0xae59('16')](),'m+':this[_0xae59('17')](),'s+':this[_0xae59('18')](),'S':this[_0xae59('19')]()};if(/(y+)/[_0xae59('1a')](_0x2536d1))_0x2536d1=_0x2536d1[_0xae59('1b')](RegExp['\x24\x31'],(this[_0xae59('1c')]()+'')[_0xae59('1d')](0x4-RegExp['\x24\x31'][_0xae59('1e')]));for(var _0x42cb88 in _0x5b6d13)if(new RegExp('\x28'+_0x42cb88+'\x29')[_0xae59('1a')](_0x2536d1))_0x2536d1=_0x2536d1[_0xae59('1b')](RegExp['\x24\x31'],RegExp['\x24\x31'][_0xae59('1e')]==0x1?_0x5b6d13[_0x42cb88]:('\x30\x30'+_0x5b6d13[_0x42cb88])[_0xae59('1d')]((''+_0x5b6d13[_0x42cb88])[_0xae59('1e')]));return _0x2536d1;};var date=new Date();function getCurrentDateTimeT(){var _0x58c9db=new Date();var _0x5837d1=_0x58c9db[_0xae59('1c')]();var _0x2a14fd=_0x58c9db[_0xae59('14')]()+0x1;var _0x218831=_0x58c9db[_0xae59('15')]();var _0x33641d=_0x58c9db[_0xae59('16')]();var _0x3f3436=_0x58c9db[_0xae59('17')]();var _0x4b3575=_0x58c9db[_0xae59('18')]();var _0x42f77a=_0x58c9db[_0xae59('19')]();return _0x5837d1+'\u5e74'+formatZero(_0x2a14fd)+'\u6708'+formatZero(_0x218831)+'\u65e5\x20'+formatZero(_0x33641d)+'\x3a'+formatZero(_0x3f3436)+'\x3a'+formatZero(_0x4b3575)+'\x3a'+formatZero(_0x42f77a);}function getCurrentDateTimeZ(_0x4216a2){var _0x2d1e4e=new Date();var _0x5a184e=_0x2d1e4e[_0xae59('1c')]();var _0x4184e1=_0x2d1e4e[_0xae59('14')]()+0x1;var _0x541a68=_0x2d1e4e[_0xae59('15')]();return _0x5a184e+'\x2d'+formatZero(_0x4184e1)+'\x2d'+formatZero(_0x541a68)+'\x20'+_0x4216a2+_0xae59('1f');}function formatZero(_0x4fdb0b){if(_0x4fdb0b>=0x0&&_0x4fdb0b<=0x9){return'\x30'+_0x4fdb0b;}else{return _0x4fdb0b;}}function sleep(_0x273148){return new Promise(_0xa494f4=>setTimeout(_0xa494f4,_0x273148));}!(async()=>{if(!cookiesArr[0x0]){$[_0xae59('20')]($[_0xae59('21')],_0xae59('22'),_0xae59('23'),{'open-url':_0xae59('23')});return;}if(Date[_0xae59('24')]()>0x17f12b62000){console[_0xae59('a')](_0xae59('25'));return;}else{console[_0xae59('a')](_0xae59('26'));}try{$[_0xae59('0')]()?require(_0xae59('27')):'';}catch(_0xbcb4a7){console[_0xae59('a')](_0xae59('28'));console[_0xae59('a')](_0xae59('29'));return;}let _0x53d4fc=parseInt(formatZero(date[_0xae59('16')]()));let _0x338e6e='';_0x53d4fc=parseInt(_0x53d4fc);let _0x1f2902=0x0;if(_0x53d4fc<0xa)_0x338e6e=0xa;else if(_0x53d4fc<0xf)_0x338e6e=0xf;else if(_0x53d4fc<0x10)_0x338e6e=0x10;else if(_0x53d4fc<0x12)_0x338e6e=0x12;else if(_0x53d4fc<0x15)_0x338e6e=0x15;else _0x338e6e=0x0;let _0x24a6be='';let _0x924f1b='';console[_0xae59('a')](_0xae59('2a'));await fetch(_0xae59('2b'),{'headers':{'accept':_0xae59('2c'),'accept-language':_0xae59('2d'),'cache-control':_0xae59('2e'),'sec-ch-ua':_0xae59('2f'),'sec-ch-ua-mobile':'\x3f\x30','sec-ch-ua-platform':_0xae59('30'),'sec-fetch-dest':_0xae59('31'),'sec-fetch-mode':_0xae59('32'),'sec-fetch-site':_0xae59('33'),'sec-fetch-user':'\x3f\x31','upgrade-insecure-requests':'\x31'},'referrerPolicy':_0xae59('34'),'body':null,'method':_0xae59('35')})[_0xae59('36')](_0x5dd2a3=>_0x5dd2a3[_0xae59('37')]())[_0xae59('36')](_0x1df938=>{_0x24a6be=_0x1df938[_0xae59('38')];_0x924f1b=new Date()[_0xae59('39')]();console[_0xae59('a')](_0xae59('3a')+_0x1df938[_0xae59('38')]);console[_0xae59('a')](_0xae59('3b')+_0x924f1b);});let _0xdcb9aa=_0x924f1b-_0x24a6be;console[_0xae59('a')](_0xae59('3c')+_0xdcb9aa);_0x1f2902=new Date(getCurrentDateTimeZ(_0x338e6e))[_0xae59('39')]()-new Date()[_0xae59('39')]();console[_0xae59('a')](_0xae59('3d'));console[_0xae59('a')](_0xae59('3e')+getCurrentDateTimeZ(_0x338e6e));_0x1f2902=(_0x1f2902-_0xdcb9aa)/0x3e8;console[_0xae59('a')](_0xae59('3f')+_0x1f2902+_0xae59('40'));if(_0x1f2902>0xe10){console[_0xae59('a')](_0xae59('41'));return;}_0x1f2902=_0x1f2902*0x3e8;await sleep(_0x1f2902);for(let _0x13ed33=0x0;_0x13ed33<0x1;_0x13ed33++){console[_0xae59('a')](_0xae59('3d'));console[_0xae59('a')](_0xae59('42')+getCurrentDateTimeT()+_0xae59('43'));for(let _0xf77b21=0x0;_0xf77b21<cookiesArr[_0xae59('1e')];_0xf77b21++){if(cookiesArr[_0xf77b21]){cookie=cookiesArr[_0xf77b21];$[_0xae59('44')]=decodeURIComponent(cookie[_0xae59('45')](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0xae59('45')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0xae59('46')]=_0xf77b21+0x1;$[_0xae59('47')]=!![];$[_0xae59('48')]='';message='';console[_0xae59('a')](_0xae59('49')+$[_0xae59('46')]+'\u3011'+($[_0xae59('48')]||$[_0xae59('44')])+_0xae59('4a'));if(!$[_0xae59('47')]){$[_0xae59('20')]($[_0xae59('21')],_0xae59('4b'),_0xae59('4c')+$[_0xae59('46')]+'\x20'+($[_0xae59('48')]||$[_0xae59('44')])+_0xae59('4d'),{'open-url':_0xae59('23')});if($[_0xae59('0')]()){await notify[_0xae59('4e')]($[_0xae59('21')]+_0xae59('4f')+$[_0xae59('44')],_0xae59('4c')+$[_0xae59('46')]+'\x20'+$[_0xae59('44')]+_0xae59('50'));}continue;}try{fetch(_0xae59('51'),{'headers':{'accept':_0xae59('2c'),'accept-language':_0xae59('2d'),'sec-ch-ua':_0xae59('52'),'sec-ch-ua-mobile':'\x3f\x30','sec-ch-ua-platform':_0xae59('30'),'sec-fetch-dest':_0xae59('31'),'sec-fetch-mode':_0xae59('32'),'sec-fetch-site':_0xae59('33'),'sec-fetch-user':'\x3f\x31','upgrade-insecure-requests':'\x31','cookie':cookie},'referrerPolicy':_0xae59('34'),'body':null,'method':_0xae59('35')})[_0xae59('36')](_0xd2e8d1=>_0xd2e8d1[_0xae59('37')]())[_0xae59('36')](_0x5e92c2=>{console[_0xae59('a')](_0x5e92c2);if(_0x5e92c2[_0xae59('53')][_0xae59('54')](_0xae59('55'))!=-0x1)notify[_0xae59('4e')](_0xae59('56'),_0xae59('57')+$[_0xae59('44')]+'\u3011'+_0x5e92c2[_0xae59('53')]);});}catch(_0x5c21b1){}}}}})()[_0xae59('58')](_0x292d3e=>{$[_0xae59('a')]('','\u274c\x20'+$[_0xae59('21')]+_0xae59('59')+_0x292d3e+'\x21','');})[_0xae59('5a')](()=>{$[_0xae59('5b')]();});;_0xodV='jsjiami.com.v6';
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
