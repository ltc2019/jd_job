/*
茅台秒杀脚本
自动预约茅台 执行时间大家自己改下
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#茅台秒杀脚本
0 52 11,19 * * ? https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js, tag=茅台秒杀脚本, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "0 52 11,19 * * ?" script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js,tag=茅台秒杀脚本
===================================Surge================================
茅台秒杀脚本 = type=cron,cronexp="0 52 11,19 * * ?",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js
====================================小火箭=============================
茅台秒杀脚本 = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js, cronexpr="0 52 11,19 * * ?", timeout=3600, enable=true
 */
const $ = new Env('茅台秒杀脚本');
var _0xodU='jsjiami.com.v6',_0xodU_=['_0xodU'],_0x2984=[_0xodU,'\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x2e\x2f\x6a\x64\x43\x6f\x6f\x6b\x69\x65\x2e\x6a\x73','\x6e\x6f\x64\x65\x2d\x66\x65\x74\x63\x68','\x6b\x65\x79\x73','\x66\x6f\x72\x45\x61\x63\x68','\x70\x75\x73\x68','\x65\x6e\x76','\x4a\x44\x5f\x44\x45\x42\x55\x47','\x66\x61\x6c\x73\x65','\x6c\x6f\x67','\x67\x65\x74\x64\x61\x74\x61','\x43\x6f\x6f\x6b\x69\x65\x4a\x44','\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32','\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44','\x6d\x61\x70','\x63\x6f\x6f\x6b\x69\x65','\x66\x69\x6c\x74\x65\x72','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x46\x6f\x72\x6d\x61\x74','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73','\x74\x65\x73\x74','\x72\x65\x70\x6c\x61\x63\x65','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x73\x75\x62\x73\x74\x72','\x6c\x65\x6e\x67\x74\x68','\x3a\x30\x30\x3a\x30\x30','\x6d\x73\x67','\x6e\x61\x6d\x65','\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\u4eac\u4e1c\u8d26\u53f7\u4e00\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x2e\x2f\x71\x6c\x32\x31\x32\x37\x39\x36\x36\x36\x38\x2e\x6a\x73','\x0a\x0a\u6211\u89c9\u5f97\u4f60\u6ca1\u62c9\u6211\u4ed3\u5e93\uff0c\u811a\u672c\u4e0d\u6267\u884c\u4e86\x0a\x0a','\x0a\u62c9\u4ed3\u5e93\u52a0\x51\x51\u7fa4\uff1a\x32\x31\x32\x37\x39\x36\x36\x36\x38\x20\uff0c\u770b\u7fa4\u516c\u544a\x0a','\u5bf9\u4e0d\u8d77\uff0c\u811a\u672c\u5df2\u8fc7\u6d4b\u8bd5\u671f\uff1b\u8bf7\u6dfb\u52a0\x51\x51\u7fa4\uff1a\x32\x31\x32\x37\x39\x36\x36\x36\x38\x20\u83b7\u53d6\u6700\u65b0\u811a\u672c','\x0a\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\u3010\u4eac\u4e1c\u65f6\u95f4\u6821\u51c6\u3011\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x71\x75\x65\x72\x79\x4d\x61\x74\x65\x72\x69\x61\x6c\x50\x72\x6f\x64\x75\x63\x74\x73\x26\x63\x6c\x69\x65\x6e\x74\x3d\x77\x68\x35','\x74\x65\x78\x74\x2f\x68\x74\x6d\x6c\x2c\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x68\x74\x6d\x6c\x2b\x78\x6d\x6c\x2c\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x6d\x6c\x3b\x71\x3d\x30\x2e\x39\x2c\x69\x6d\x61\x67\x65\x2f\x61\x76\x69\x66\x2c\x69\x6d\x61\x67\x65\x2f\x77\x65\x62\x70\x2c\x69\x6d\x61\x67\x65\x2f\x61\x70\x6e\x67\x2c\x2a\x2f\x2a\x3b\x71\x3d\x30\x2e\x38\x2c\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x73\x69\x67\x6e\x65\x64\x2d\x65\x78\x63\x68\x61\x6e\x67\x65\x3b\x76\x3d\x62\x33\x3b\x71\x3d\x30\x2e\x39','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39','\x6d\x61\x78\x2d\x61\x67\x65\x3d\x30','\x22\x20\x4e\x6f\x74\x3b\x41\x20\x42\x72\x61\x6e\x64\x22\x3b\x76\x3d\x22\x39\x39\x22\x2c\x20\x22\x47\x6f\x6f\x67\x6c\x65\x20\x43\x68\x72\x6f\x6d\x65\x22\x3b\x76\x3d\x22\x39\x37\x22\x2c\x20\x22\x43\x68\x72\x6f\x6d\x69\x75\x6d\x22\x3b\x76\x3d\x22\x39\x37\x22','\x22\x57\x69\x6e\x64\x6f\x77\x73\x22','\x64\x6f\x63\x75\x6d\x65\x6e\x74','\x6e\x61\x76\x69\x67\x61\x74\x65','\x6e\x6f\x6e\x65','\x73\x74\x72\x69\x63\x74\x2d\x6f\x72\x69\x67\x69\x6e\x2d\x77\x68\x65\x6e\x2d\x63\x72\x6f\x73\x73\x2d\x6f\x72\x69\x67\x69\x6e','\x47\x45\x54','\x74\x68\x65\x6e','\x6a\x73\x6f\x6e','\x63\x75\x72\x72\x65\x6e\x74\x54\x69\x6d\x65\x32','\x67\x65\x74\x54\x69\x6d\x65','\u4eac\u4e1c\u65f6\u95f4\u6233\uff1a','\u670d\u52a1\u5668\u65f6\u95f4\u6233\uff1a','\u6821\u51c6\u6beb\u79d2\u6570\uff1a','\x0a\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x0a\u5f00\u62a2\u65f6\u95f4\x3a\x20','\x0a\u7b49\u5f85\x20','\x20\u79d2\u540e\u6267\u884c\u4ee3\u7801','\u7b49\u5f85\u65f6\u95f4\u5927\u4e8e\x20\x33\x36\x30\x30\x20\u79d2\uff0c\u7ec8\u6b62\u8fd0\u884c\x0a','\x0a\u300b\u300b\u300b\u300b\u300b\u300b\u6267\u884c\u65f6\u95f4\x3a\x20','\u300a\u300a\u300a\u300a\u300a\u300a','\x55\x73\x65\x72\x4e\x61\x6d\x65','\x6d\x61\x74\x63\x68','\x69\x6e\x64\x65\x78','\x69\x73\x4c\x6f\x67\x69\x6e','\x6e\x69\x63\x6b\x4e\x61\x6d\x65','\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7','\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a','\u3010\u63d0\u793a\u3011\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548','\u4eac\u4e1c\u8d26\u53f7','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548\x20\x2d\x20','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6d\x61\x72\x61\x74\x68\x6f\x6e\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x73\x65\x63\x6b\x69\x6c\x6c\x6e\x65\x77\x2f\x6f\x72\x64\x65\x72\x53\x65\x72\x76\x69\x63\x65\x2f\x73\x75\x62\x6d\x69\x74\x4f\x72\x64\x65\x72\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x73\x6b\x75\x49\x64\x3d\x31\x30\x30\x30\x31\x32\x30\x34\x33\x39\x37\x38','\x6d\x61\x72\x61\x74\x68\x6f\x6e\x2e\x6a\x64\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x36\x39\x38','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x2c\x20\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x2c\x20\x2a\x2f\x2a','\x6a\x64\x61\x70\x70\x3b\x61\x6e\x64\x72\x6f\x69\x64\x3b\x31\x30\x2e\x33\x2e\x30\x3b\x3b\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x39\x31\x37\x39\x35\x3b\x65\x66\x2f\x31\x3b\x65\x70\x2f\x25\x37\x42\x25\x32\x32\x68\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x4a\x4d\x39\x46\x31\x79\x77\x55\x50\x77\x66\x6c\x76\x4d\x49\x70\x59\x50\x6f\x6b\x30\x74\x74\x35\x6b\x39\x6b\x57\x34\x41\x72\x4a\x45\x55\x33\x6c\x66\x4c\x68\x78\x42\x71\x77\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x73\x25\x32\x32\x25\x33\x41\x31\x36\x34\x31\x32\x39\x37\x36\x30\x31\x37\x37\x34\x25\x32\x43\x25\x32\x32\x72\x69\x64\x78\x25\x32\x32\x25\x33\x41\x2d\x31\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x73\x76\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4a\x4f\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x77\x4f\x32\x5a\x77\x59\x32\x44\x4a\x71\x31\x45\x51\x5a\x72\x43\x4e\x72\x72\x43\x6d\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6f\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4e\x5a\x72\x5a\x4e\x50\x76\x59\x74\x63\x34\x44\x57\x53\x31\x44\x51\x4f\x7a\x44\x6d\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6f\x76\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x7a\x4b\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x75\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x77\x4f\x32\x5a\x77\x59\x32\x44\x4a\x71\x31\x45\x51\x5a\x72\x43\x4e\x72\x72\x43\x6d\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x35\x25\x32\x43\x25\x32\x32\x76\x65\x72\x73\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x2e\x32\x2e\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x6e\x61\x6d\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x63\x6f\x6d\x2e\x6a\x69\x6e\x67\x64\x6f\x6e\x67\x2e\x61\x70\x70\x2e\x6d\x61\x6c\x6c\x25\x32\x32\x25\x37\x44\x3b\x6a\x64\x53\x75\x70\x70\x6f\x72\x74\x44\x61\x72\x6b\x4d\x6f\x64\x65\x2f\x30\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x31\x31\x3b\x20\x4d\x32\x31\x30\x32\x4b\x31\x41\x43\x20\x42\x75\x69\x6c\x64\x2f\x52\x4b\x51\x31\x2e\x32\x30\x31\x31\x31\x32\x2e\x30\x30\x32\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x39\x30\x2e\x30\x2e\x34\x34\x33\x30\x2e\x32\x31\x30\x20\x4d\x6f\x62\x69\x6c\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6d\x61\x72\x61\x74\x68\x6f\x6e\x2e\x6a\x64\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x6a\x69\x6e\x67\x64\x6f\x6e\x67\x2e\x61\x70\x70\x2e\x6d\x61\x6c\x6c','\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6d\x61\x72\x61\x74\x68\x6f\x6e\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x73\x65\x63\x6b\x69\x6c\x6c\x4d\x2f\x73\x65\x63\x6b\x69\x6c\x6c\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x73\x6b\x75\x49\x64\x3d\x31\x30\x30\x30\x31\x32\x30\x34\x33\x39\x37\x38\x26\x6e\x75\x6d\x3d\x31\x26\x72\x69\x64\x3d\x31\x36\x34\x31\x32\x39\x37\x36\x30\x33','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x5f\x5f\x6a\x64\x63\x3d\x31\x32\x32\x32\x37\x30\x36\x37\x32\x3b\x20\x75\x6e\x70\x6c\x3d\x3b\x20\x73\x68\x73\x68\x73\x68\x66\x70\x3d\x37\x31\x38\x66\x65\x38\x61\x37\x38\x31\x61\x37\x66\x34\x61\x33\x38\x34\x63\x30\x34\x31\x62\x30\x63\x38\x30\x39\x33\x65\x37\x33\x3b\x20\x73\x68\x73\x68\x73\x68\x66\x70\x61\x3d\x64\x63\x35\x33\x35\x61\x35\x38\x2d\x37\x61\x33\x34\x2d\x36\x36\x63\x36\x2d\x36\x63\x30\x38\x2d\x64\x32\x32\x38\x30\x62\x30\x30\x61\x63\x33\x30\x2d\x31\x36\x34\x31\x32\x37\x34\x36\x33\x39\x3b\x20\x73\x68\x73\x68\x73\x68\x66\x70\x62\x3d\x6a\x32\x53\x62\x6d\x4e\x54\x5f\x65\x52\x62\x75\x67\x45\x6b\x58\x78\x54\x75\x54\x42\x57\x41\x3b\x20\x33\x41\x42\x39\x44\x32\x33\x46\x37\x41\x34\x42\x33\x43\x39\x42\x3d\x33\x44\x4e\x50\x33\x48\x56\x48\x34\x4b\x59\x41\x4e\x59\x58\x4f\x32\x4c\x4b\x4b\x34\x4e\x45\x43\x57\x50\x37\x46\x57\x52\x4b\x51\x32\x32\x44\x50\x41\x47\x53\x57\x56\x37\x56\x34\x55\x33\x50\x54\x51\x5a\x37\x41\x32\x52\x56\x4e\x4d\x4e\x52\x41\x43\x54\x51\x46\x51\x37\x44\x50\x4e\x4b\x37\x4a\x49\x32\x4e\x45\x4d\x42\x45\x44\x58\x49\x59\x36\x41\x47\x5a\x52\x56\x4d\x3b\x20\x42\x41\x54\x51\x57\x37\x32\x32\x51\x54\x4c\x59\x56\x43\x52\x44\x3d\x7b\x22\x74\x6b\x22\x3a\x22\x6a\x64\x64\x30\x31\x53\x4f\x52\x56\x4f\x58\x36\x46\x52\x54\x46\x33\x48\x54\x48\x4e\x49\x4a\x37\x59\x52\x4a\x54\x35\x4f\x4e\x4e\x45\x41\x55\x35\x42\x57\x50\x45\x4f\x43\x53\x47\x52\x59\x4c\x46\x36\x59\x56\x4e\x4c\x57\x48\x59\x56\x4c\x41\x37\x54\x56\x53\x4a\x54\x41\x4e\x4f\x34\x44\x55\x46\x56\x56\x44\x33\x50\x42\x36\x36\x48\x44\x46\x4a\x51\x36\x4a\x51\x57\x44\x4d\x51\x4a\x4c\x32\x51\x58\x4f\x55\x4c\x51\x5a\x36\x4b\x4c\x4e\x55\x41\x30\x31\x32\x33\x34\x35\x36\x37\x22\x2c\x22\x74\x22\x3a\x31\x36\x34\x31\x32\x37\x34\x36\x34\x33\x33\x34\x34\x7d\x3b\x20','\x20\x70\x77\x64\x74\x5f\x69\x64\x3d\x74\x31\x34\x32\x31\x37\x31\x3b\x20\x73\x69\x64\x3d\x37\x39\x31\x64\x38\x64\x38\x30\x31\x33\x39\x37\x30\x31\x35\x37\x39\x35\x64\x66\x64\x66\x31\x39\x64\x63\x36\x32\x66\x62\x63\x77\x3b\x20\x77\x78\x61\x5f\x6c\x65\x76\x65\x6c\x3d\x31\x3b\x20\x63\x69\x64\x3d\x38\x3b\x20\x76\x69\x73\x69\x74\x6b\x65\x79\x3d\x36\x30\x32\x35\x35\x35\x35\x38\x31\x32\x35\x37\x35\x35\x38\x30\x33\x3b\x20\x5f\x5f\x6a\x64\x61\x3d\x31\x32\x32\x32\x37\x30\x36\x37\x32\x2e\x31\x36\x34\x31\x32\x37\x34\x36\x33\x30\x34\x30\x32\x31\x34\x31\x32\x30\x34\x37\x34\x32\x32\x2e\x31\x36\x34\x31\x32\x37\x34\x36\x33\x30\x2e\x31\x36\x34\x31\x32\x39\x37\x32\x35\x37\x2e\x31\x36\x34\x31\x32\x39\x37\x32\x35\x37\x2e\x39\x3b\x20\x73\x65\x63\x6b\x69\x6c\x6c\x53\x6b\x75\x3d\x31\x30\x30\x30\x31\x32\x30\x34\x33\x39\x37\x38\x3b\x20\x6d\x69\x64\x3d\x66\x77\x53\x6c\x31\x64\x6e\x4f\x67\x49\x70\x4f\x66\x6f\x38\x47\x6a\x49\x67\x33\x65\x4d\x57\x70\x67\x30\x59\x6a\x4d\x76\x68\x68\x38\x33\x6e\x50\x42\x71\x53\x5a\x39\x48\x45\x3b\x20\x73\x65\x63\x6b\x69\x6c\x6c\x53\x69\x64\x3d\x3b\x20\x73\x65\x63\x6b\x69\x6c\x6c\x31\x30\x30\x30\x31\x32\x30\x34\x33\x39\x37\x38\x3d\x32\x47\x55\x73\x47\x44\x41\x4c\x67\x61\x73\x42\x46\x57\x46\x4e\x58\x6b\x32\x75\x70\x4d\x51\x49\x7a\x6a\x31\x79\x57\x35\x6f\x2b\x34\x69\x62\x4a\x63\x4d\x31\x76\x35\x65\x63\x42\x64\x45\x69\x4f\x62\x6a\x78\x48\x79\x66\x7a\x65\x68\x45\x4a\x2b\x49\x36\x4e\x31\x49\x7a\x42\x48\x58\x36\x68\x76\x64\x4d\x55\x49\x56\x45\x37\x52\x4f\x72\x53\x4d\x77\x4e\x72\x4b\x6d\x78\x50\x69\x71\x57\x61\x34\x64\x61\x66\x52\x4d\x31\x45\x64\x2b\x47\x51\x50\x43\x47\x61\x38\x6c\x78\x46\x65\x77\x42\x45\x77\x6a\x66\x31\x43\x7a\x2b\x56\x2b\x78\x57\x56\x31\x35\x48\x44\x39\x52\x39\x49\x45\x50\x5a\x35\x58\x32\x37\x6c\x53\x4f\x47\x54\x7a\x47\x41\x54\x55\x63\x48\x6a\x65\x6f\x44\x55\x77\x4b\x51\x51\x36\x4e\x2f\x6c\x69\x74\x4c\x2f\x77\x59\x4c\x4f\x72\x52\x57\x33\x53\x37\x36\x52\x72\x2f\x71\x77\x6c\x33\x74\x33\x36\x79\x51\x47\x72\x2f\x63\x6a\x73\x71\x54\x43\x52\x3b\x20\x5f\x5f\x6a\x64\x62\x3d\x31\x32\x32\x32\x37\x30\x36\x37\x32\x2e\x32\x2e\x31\x36\x34\x31\x32\x37\x34\x36\x33\x30\x34\x30\x32\x31\x34\x31\x32\x30\x34\x37\x34\x32\x32\x7c\x39\x2e\x31\x36\x34\x31\x32\x39\x37\x32\x35\x37\x3b\x20\x6d\x62\x61\x5f\x73\x69\x64\x3d\x34\x2e\x33\x39\x3b\x20\x70\x72\x65\x5f\x73\x65\x73\x73\x69\x6f\x6e\x3d\x6e\x53\x62\x5a\x56\x33\x52\x4d\x57\x78\x74\x53\x4a\x49\x55\x42\x68\x36\x32\x42\x66\x58\x30\x42\x79\x72\x64\x59\x7a\x57\x34\x75\x7c\x31\x33\x3b\x20\x70\x72\x65\x5f\x73\x65\x71\x3d\x33\x37\x3b\x20\x5f\x5f\x6a\x64\x76\x3d\x31\x32\x32\x32\x37\x30\x36\x37\x32\x25\x37\x43\x69\x6f\x73\x61\x70\x70\x25\x37\x43\x74\x5f\x33\x33\x35\x31\x33\x39\x37\x37\x34\x25\x37\x43\x61\x70\x70\x73\x68\x61\x72\x65\x25\x37\x43\x43\x6f\x70\x79\x55\x52\x4c\x25\x37\x43\x31\x36\x34\x31\x32\x39\x37\x36\x30\x30\x34\x37\x32\x3b\x20\x5f\x5f\x6a\x64\x5f\x72\x65\x66\x5f\x63\x6c\x73\x3d\x4d\x53\x65\x63\x4b\x69\x6c\x6c\x42\x61\x6c\x61\x6e\x63\x65\x5f\x4f\x72\x64\x65\x72\x5f\x53\x75\x62\x6d\x69\x74\x3b\x20\x6d\x62\x61\x5f\x6d\x75\x69\x64\x3d\x31\x36\x34\x31\x32\x37\x34\x36\x33\x30\x34\x30\x32\x31\x34\x31\x32\x30\x34\x37\x34\x32\x32\x2e\x34\x2e\x31\x36\x34\x31\x32\x39\x37\x36\x30\x37\x39\x39\x34','\x6e\x75\x6d\x3d\x31\x26\x61\x64\x64\x72\x65\x73\x73\x49\x64\x3d\x31\x33\x38\x35\x31\x32\x34\x32\x36\x26\x6e\x61\x6d\x65\x3d\x25\x45\x35\x25\x39\x34\x25\x39\x30\x25\x45\x36\x25\x41\x44\x25\x41\x33\x26\x70\x72\x6f\x76\x69\x6e\x63\x65\x49\x64\x3d\x31\x35\x26\x70\x72\x6f\x76\x69\x6e\x63\x65\x4e\x61\x6d\x65\x3d\x25\x45\x36\x25\x42\x35\x25\x39\x39\x25\x45\x36\x25\x42\x31\x25\x39\x46\x26\x63\x69\x74\x79\x49\x64\x3d\x31\x32\x31\x33\x26\x63\x69\x74\x79\x4e\x61\x6d\x65\x3d\x25\x45\x36\x25\x39\x44\x25\x41\x44\x25\x45\x35\x25\x42\x37\x25\x39\x45\x25\x45\x35\x25\x42\x38\x25\x38\x32\x26\x63\x6f\x75\x6e\x74\x79\x49\x64\x3d\x33\x34\x31\x30\x26\x63\x6f\x75\x6e\x74\x79\x4e\x61\x6d\x65\x3d\x25\x45\x36\x25\x38\x42\x25\x42\x31\x25\x45\x35\x25\x41\x32\x25\x38\x35\x25\x45\x35\x25\x38\x43\x25\x42\x41\x26\x74\x6f\x77\x6e\x49\x64\x3d\x37\x31\x37\x31\x39\x26\x74\x6f\x77\x6e\x4e\x61\x6d\x65\x3d\x25\x45\x34\x25\x42\x38\x25\x39\x43\x25\x45\x36\x25\x39\x36\x25\x42\x30\x25\x45\x38\x25\x41\x31\x25\x39\x37\x25\x45\x39\x25\x38\x31\x25\x39\x33\x26\x61\x64\x64\x72\x65\x73\x73\x44\x65\x74\x61\x69\x6c\x3d\x25\x45\x36\x25\x42\x43\x25\x42\x45\x25\x45\x36\x25\x42\x32\x25\x42\x33\x25\x45\x35\x25\x42\x43\x25\x38\x34\x31\x33\x25\x45\x35\x25\x38\x46\x25\x42\x37\x25\x45\x36\x25\x42\x43\x25\x42\x45\x25\x45\x36\x25\x42\x32\x25\x42\x33\x25\x45\x35\x25\x38\x35\x25\x41\x43\x25\x45\x35\x25\x41\x46\x25\x39\x33\x26\x6d\x6f\x62\x69\x6c\x65\x3d\x31\x37\x37\x25\x32\x41\x25\x32\x41\x25\x32\x41\x25\x32\x41\x38\x38\x32\x34\x26\x6d\x6f\x62\x69\x6c\x65\x4b\x65\x79\x3d\x36\x64\x62\x39\x33\x37\x61\x37\x36\x35\x33\x30\x33\x64\x30\x62\x36\x31\x33\x39\x36\x37\x66\x37\x35\x32\x31\x61\x39\x31\x61\x32\x26\x65\x6d\x61\x69\x6c\x3d\x26\x69\x6e\x76\x6f\x69\x63\x65\x54\x69\x74\x6c\x65\x3d\x34\x26\x69\x6e\x76\x6f\x69\x63\x65\x43\x6f\x6e\x74\x65\x6e\x74\x3d\x31\x26\x69\x6e\x76\x6f\x69\x63\x65\x50\x68\x6f\x6e\x65\x3d\x31\x37\x37\x25\x32\x41\x25\x32\x41\x25\x32\x41\x25\x32\x41\x38\x38\x32\x34\x26\x69\x6e\x76\x6f\x69\x63\x65\x50\x68\x6f\x6e\x65\x4b\x65\x79\x3d\x36\x64\x62\x39\x33\x37\x61\x37\x36\x35\x33\x30\x33\x64\x30\x62\x36\x31\x33\x39\x36\x37\x66\x37\x35\x32\x31\x61\x39\x31\x61\x32\x26\x69\x6e\x76\x6f\x69\x63\x65\x3d\x74\x72\x75\x65\x26\x70\x61\x73\x73\x77\x6f\x72\x64\x3d\x26\x63\x6f\x64\x54\x69\x6d\x65\x54\x79\x70\x65\x3d\x33\x26\x70\x61\x79\x6d\x65\x6e\x74\x54\x79\x70\x65\x3d\x34\x26\x6f\x76\x65\x72\x73\x65\x61\x73\x3d\x30\x26\x70\x68\x6f\x6e\x65\x3d\x26\x61\x72\x65\x61\x43\x6f\x64\x65\x3d\x38\x36\x26\x74\x6f\x6b\x65\x6e\x3d\x38\x38\x31\x39\x63\x61\x64\x32\x37\x34\x62\x38\x31\x62\x38\x37\x36\x36\x65\x32\x32\x36\x31\x63\x62\x36\x37\x31\x38\x64\x39\x35\x26\x73\x6b\x3d\x6e\x6a\x32\x6a\x71\x78\x6f\x7a\x79\x78\x36\x68\x71\x31\x57\x34\x69\x4b\x38\x26\x73\x6b\x75\x49\x64\x3d\x31\x30\x30\x30\x31\x32\x30\x34\x33\x39\x37\x38','\x50\x4f\x53\x54','\x65\x72\x72\x6f\x72\x4d\x65\x73\x73\x61\x67\x65','\x69\x6e\x64\x65\x78\x4f\x66','\u62a2\u5230\u4e86','\u98de\u5929\u8305\u53f0\u79d2\u6740','\u8d26\u53f7\x3a\u3010','\x63\x61\x74\x63\x68','\x2c\x20\u5931\u8d25\x21\x20\u539f\u56e0\x3a\x20','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x6a\x44\x4b\x73\x70\x47\x62\x46\x6a\x55\x66\x69\x61\x6d\x57\x58\x6c\x4d\x59\x62\x77\x69\x2e\x63\x6f\x6d\x2e\x76\x36\x3d\x3d'];function _0x2374(_0x3e3eac,_0x125b33){_0x3e3eac=~~'0x'['concat'](_0x3e3eac['slice'](0x0));var _0xee13d8=_0x2984[_0x3e3eac];return _0xee13d8;};(function(_0x1675f3,_0x2e5f4d){var _0x401779=0x0;for(_0x2e5f4d=_0x1675f3['shift'](_0x401779>>0x2);_0x2e5f4d&&_0x2e5f4d!==(_0x1675f3['pop'](_0x401779>>0x3)+'')['replace'](/[DKpGbFUfWXlMYbw=]/g,'');_0x401779++){_0x401779=_0x401779^0xcdf19;}}(_0x2984,_0x2374));const notify=$[_0x2374('0')]()?require(_0x2374('1')):'';const jdCookieNode=$[_0x2374('0')]()?require(_0x2374('2')):'';const fetch=require(_0x2374('3'));let cookiesArr=[],cookie='',message;if($[_0x2374('0')]()){Object[_0x2374('4')](jdCookieNode)[_0x2374('5')](_0x5754ac=>{cookiesArr[_0x2374('6')](jdCookieNode[_0x5754ac]);});if(process[_0x2374('7')][_0x2374('8')]&&process[_0x2374('7')][_0x2374('8')]===_0x2374('9'))console[_0x2374('a')]=()=>{};}else{cookiesArr=[$[_0x2374('b')](_0x2374('c')),$[_0x2374('b')](_0x2374('d')),...jsonParse($[_0x2374('b')](_0x2374('e'))||'\x5b\x5d')[_0x2374('f')](_0x4b9066=>_0x4b9066[_0x2374('10')])][_0x2374('11')](_0x2babe0=>!!_0x2babe0);}Date[_0x2374('12')][_0x2374('13')]=function(_0x45742f){var _0x4abac2={'M+':this[_0x2374('14')]()+0x1,'d+':this[_0x2374('15')](),'h+':this[_0x2374('16')](),'m+':this[_0x2374('17')](),'s+':this[_0x2374('18')](),'S':this[_0x2374('19')]()};if(/(y+)/[_0x2374('1a')](_0x45742f))_0x45742f=_0x45742f[_0x2374('1b')](RegExp['\x24\x31'],(this[_0x2374('1c')]()+'')[_0x2374('1d')](0x4-RegExp['\x24\x31'][_0x2374('1e')]));for(var _0x1b103b in _0x4abac2)if(new RegExp('\x28'+_0x1b103b+'\x29')[_0x2374('1a')](_0x45742f))_0x45742f=_0x45742f[_0x2374('1b')](RegExp['\x24\x31'],RegExp['\x24\x31'][_0x2374('1e')]==0x1?_0x4abac2[_0x1b103b]:('\x30\x30'+_0x4abac2[_0x1b103b])[_0x2374('1d')]((''+_0x4abac2[_0x1b103b])[_0x2374('1e')]));return _0x45742f;};var date=new Date();function getCurrentDateTimeT(){var _0x3cc07d=new Date();var _0x52ce28=_0x3cc07d[_0x2374('1c')]();var _0x2c07ae=_0x3cc07d[_0x2374('14')]()+0x1;var _0x5117a1=_0x3cc07d[_0x2374('15')]();var _0x5ae7bf=_0x3cc07d[_0x2374('16')]();var _0x34b6c0=_0x3cc07d[_0x2374('17')]();var _0x5a010a=_0x3cc07d[_0x2374('18')]();return _0x52ce28+'\u5e74'+formatZero(_0x2c07ae)+'\u6708'+formatZero(_0x5117a1)+'\u65e5\x20'+formatZero(_0x5ae7bf)+'\x3a'+formatZero(_0x34b6c0)+'\x3a'+formatZero(_0x5a010a);}function getCurrentDateTime(){var _0x7bb15c=new Date();var _0x2a5202=_0x7bb15c[_0x2374('1c')]();var _0x369dcf=_0x7bb15c[_0x2374('14')]()+0x1;var _0x228697=_0x7bb15c[_0x2374('15')]();var _0x43b878=_0x7bb15c[_0x2374('16')]();var _0x5015b3=_0x7bb15c[_0x2374('17')]();var _0x373465=_0x7bb15c[_0x2374('18')]();return _0x2a5202+'\x2d'+formatZero(_0x369dcf)+'\x2d'+formatZero(_0x228697)+'\x20'+formatZero(_0x43b878)+'\x3a'+formatZero(_0x5015b3)+'\x3a'+formatZero(_0x373465);}function getCurrentDateTimeA(){var _0x469297=new Date();var _0x1a87d3=_0x469297[_0x2374('1c')]();var _0x4c74c4=_0x469297[_0x2374('14')]()+0x1;var _0x28ad2b=_0x469297[_0x2374('15')]();var _0x3a90fe=_0x469297[_0x2374('16')]();var _0x4e4b8b=_0x469297[_0x2374('17')]();var _0x3c47be=_0x469297[_0x2374('18')]();return _0x1a87d3+formatZero(_0x4c74c4)+formatZero(_0x28ad2b)+formatZero(_0x3a90fe)+formatZero(_0x4e4b8b)+formatZero(_0x3c47be);}function getCurrentDateTimeZ(_0x26d94f){var _0x4622ef=new Date();var _0x10c424=_0x4622ef[_0x2374('1c')]();var _0x350384=_0x4622ef[_0x2374('14')]()+0x1;var _0x3da6af=_0x4622ef[_0x2374('15')]();return _0x10c424+'\x2d'+formatZero(_0x350384)+'\x2d'+formatZero(_0x3da6af)+'\x20'+_0x26d94f+_0x2374('1f');}function formatZero(_0x87cba1){if(_0x87cba1>=0x0&&_0x87cba1<=0x9){return'\x30'+_0x87cba1;}else{return _0x87cba1;}}function sleep(_0x4919a5){return new Promise(_0x4eee37=>setTimeout(_0x4eee37,_0x4919a5));}!(async()=>{if(!cookiesArr[0x0]){$[_0x2374('20')]($[_0x2374('21')],_0x2374('22'),_0x2374('23'),{'open-url':_0x2374('23')});return;}try{$[_0x2374('0')]()?require(_0x2374('24')):'';}catch(_0x434d3a){console[_0x2374('a')](_0x2374('25'));console[_0x2374('a')](_0x2374('26'));return;}if(getCurrentDateTimeA()>0x1263e1e78cc3){console[_0x2374('a')](_0x2374('27'));return;}let _0x57bba8=parseInt(formatZero(date[_0x2374('16')]()));let _0x343f9c='';_0x57bba8=parseInt(_0x57bba8);let _0x42d3ca=0x0;if(_0x57bba8<0xc)_0x343f9c=0xc;if(0xc<=_0x57bba8)_0x343f9c=0x14;if(0x16<=_0x57bba8)_0x343f9c=0x0;let _0x35a6c4='';let _0x2f7490='';console[_0x2374('a')](_0x2374('28'));await fetch(_0x2374('29'),{'headers':{'accept':_0x2374('2a'),'accept-language':_0x2374('2b'),'cache-control':_0x2374('2c'),'sec-ch-ua':_0x2374('2d'),'sec-ch-ua-mobile':'\x3f\x30','sec-ch-ua-platform':_0x2374('2e'),'sec-fetch-dest':_0x2374('2f'),'sec-fetch-mode':_0x2374('30'),'sec-fetch-site':_0x2374('31'),'sec-fetch-user':'\x3f\x31','upgrade-insecure-requests':'\x31'},'referrerPolicy':_0x2374('32'),'body':null,'method':_0x2374('33')})[_0x2374('34')](_0x12f02e=>_0x12f02e[_0x2374('35')]())[_0x2374('34')](_0x4a5950=>{_0x35a6c4=_0x4a5950[_0x2374('36')];_0x2f7490=new Date()[_0x2374('37')]();console[_0x2374('a')](_0x2374('38')+_0x4a5950[_0x2374('36')]);console[_0x2374('a')](_0x2374('39')+_0x2f7490);});let _0xbebd82=_0x2f7490-_0x35a6c4;console[_0x2374('a')](_0x2374('3a')+_0xbebd82);_0x42d3ca=new Date(getCurrentDateTimeZ(_0x343f9c))[_0x2374('37')]()-new Date()[_0x2374('37')]();console[_0x2374('a')](_0x2374('3b'));console[_0x2374('a')](_0x2374('3c')+getCurrentDateTimeZ(_0x343f9c));_0x42d3ca=(_0x42d3ca-_0xbebd82)/0x3e8;console[_0x2374('a')](_0x2374('3d')+_0x42d3ca+_0x2374('3e'));if(_0x42d3ca>0xe10){console[_0x2374('a')](_0x2374('3f'));return;}_0x42d3ca=_0x42d3ca*0x3e8;await sleep(_0x42d3ca);for(let _0x319591=0x0;_0x319591<0x2;_0x319591++){console[_0x2374('a')](_0x2374('40')+getCurrentDateTimeT()+_0x2374('41'));console[_0x2374('a')](_0x2374('3b'));for(let _0x143b2e=0x0;_0x143b2e<cookiesArr[_0x2374('1e')];_0x143b2e++){if(cookiesArr[_0x143b2e]){cookie=cookiesArr[_0x143b2e];$[_0x2374('42')]=decodeURIComponent(cookie[_0x2374('43')](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x2374('43')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0x2374('44')]=_0x143b2e+0x1;$[_0x2374('45')]=!![];$[_0x2374('46')]='';message='';console[_0x2374('a')](_0x2374('47')+$[_0x2374('44')]+'\u3011'+($[_0x2374('46')]||$[_0x2374('42')])+_0x2374('48'));if(!$[_0x2374('45')]){$[_0x2374('20')]($[_0x2374('21')],_0x2374('49'),_0x2374('4a')+$[_0x2374('44')]+'\x20'+($[_0x2374('46')]||$[_0x2374('42')])+_0x2374('4b'),{'open-url':_0x2374('23')});if($[_0x2374('0')]()){await notify[_0x2374('4c')]($[_0x2374('21')]+_0x2374('4d')+$[_0x2374('42')],_0x2374('4a')+$[_0x2374('44')]+'\x20'+$[_0x2374('42')]+_0x2374('4e'));}continue;}try{fetch(_0x2374('4f'),{'headers':{'Host':_0x2374('50'),'Connection':_0x2374('51'),'Content-Length':_0x2374('52'),'Accept':_0x2374('53'),'User-Agent':_0x2374('54'),'Content-Type':_0x2374('55'),'Origin':_0x2374('56'),'X-Requested-With':_0x2374('57'),'Sec-Fetch-Site':_0x2374('58'),'Sec-Fetch-Mode':_0x2374('59'),'Sec-Fetch-Dest':_0x2374('5a'),'Referer':_0x2374('5b'),'Accept-Encoding':_0x2374('5c'),'Accept-Language':_0x2374('5d'),'Cookie':_0x2374('5e')+cookie+_0x2374('5f')},'body':_0x2374('60'),'method':_0x2374('61')})[_0x2374('34')](_0x400094=>_0x400094[_0x2374('35')]())[_0x2374('34')](_0x348476=>{console[_0x2374('a')](_0x348476);if(_0x348476[_0x2374('62')][_0x2374('63')](_0x2374('64'))!=-0x1)notify[_0x2374('4c')](_0x2374('65'),_0x2374('66')+$[_0x2374('42')]+'\u3011'+_0x348476[_0x2374('62')]);if(_0x348476[_0x2374('62')][_0x2374('63')]('\u606d\u559c')!=-0x1)notify[_0x2374('4c')](_0x2374('65'),_0x2374('66')+$[_0x2374('42')]+'\u3011'+_0x348476[_0x2374('62')]);});}catch(_0xe03b2e){}}}await sleep(0x32);}})()[_0x2374('67')](_0x57521a=>{$[_0x2374('a')]('','\u274c\x20'+$[_0x2374('21')]+_0x2374('68')+_0x57521a+'\x21','');})[_0x2374('69')](()=>{$[_0x2374('6a')]();});;_0xodU='jsjiami.com.v6';
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
