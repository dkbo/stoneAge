(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{412:function(n,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return f})),a.d(t,"j",(function(){return m})),a.d(t,"i",(function(){return h})),a.d(t,"h",(function(){return k})),a.d(t,"c",(function(){return R})),a.d(t,"g",(function(){return _})),a.d(t,"d",(function(){return S})),a.d(t,"e",(function(){return D})),a.d(t,"f",(function(){return V}));var e=a(415),r=a.n(e),o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},i=function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var a=[],e=!0,r=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);e=!0);}catch(n){r=!0,o=n}finally{try{!e&&c.return&&c.return()}finally{if(r)throw o}}return a}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function c(n){if(Array.isArray(n)){for(var t=0,a=Array(n.length);t<n.length;t++)a[t]=n[t];return a}return Array.from(n)}function u(n){return Array.isArray(n)?n:Array.from(n)}var l=function(n){return r.a.encode(n)},f=function(n){return r.a.decode(n)},s=function(n){try{return JSON.parse(n)}catch(n){return""}},m=function(n,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];localStorage[l(n)]=l(a?JSON.stringify(t):t)},h=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=localStorage[l(n)];if(a)try{var e=f(a);return t?s(e):e}catch(n){return""}return""},F=function(n){return((n.LV-1)*n.GC+n.IA)*n.ISI/100},v=function(n){var t=n.ISI,a=n.ISR;return 100*((t+(void 0===a?2.5:a))*n.FV/100).toFixed(3)/100},P=function(n,t,a,e,r){return~~(Math.min(n+e,150)*(a+4*t)/(r+4*e))},p=function(n,t){return~~(n+139*t)},d=function(n){var t=i(n,4);return 4*t[0]+t[1]+t[2]+t[3]},G=function(n){var t=i(n,4),a=t[0],e=t[1];return.1*(a+t[2])+e+.05*t[3]},g=function(n){var t=i(n,4);return.1*(t[0]+t[1])+t[2]+.05*t[3]},y=function(n){var t=i(n,4);t[0],t[1],t[2];return t[3]},b=[{h:5,m:4.75,l:4.5},{h:5.2,m:4.95,l:4.7},{h:5.4,m:5.15,l:4.9},{h:5.6,m:5.35,l:5.1},{h:5.8,m:5.55,l:5.3},{h:6,m:5.75,l:5.5}],k=function(n){var t=n.reduce((function(n,t){return n+t}));return t>=100?b[0]:t>=95?b[1]:t>=90?b[2]:t>=85?b[3]:t>=80?b[4]:b[5]},C=function(n){var t=n.reduce((function(n,t){return n+t}));return t>=130?b[0]:t>=100?b[1]:t>=95?b[2]:t>=85?b[3]:t>=80?b[4]:b[5]},x={4.75:0,4.95:1,5.15:2,5.35:3,5.55:4,5.75:5},R=function(n){var t=n.GC,a=void 0===t?4:t,e=n.GPF,r=n.GPFR,o=n.f,i=n.FV,c=u(e),l=c[0],f=c[1],s=c.slice(2),m=s.map((function(n,t){return n+r[t]+o[t]})).map((function(n){return F({LV:l,GC:a,IA:f,ISI:n})})),h=s.map((function(n,t){return v({ISI:n+o[t],FV:i})})),P=+d(m).toFixed(2),p=+G(m).toFixed(2),b=+g(m).toFixed(2),k=+y(m).toFixed(2),C=~~(~~P/4)+~~p+~~b+~~k,x=+d(h).toFixed(4),R=+G(h).toFixed(4),_=+g(h).toFixed(4),A=+y(h).toFixed(4),I=+(R+_+A).toFixed(4);return{health:{hhp:m[0],hatk:m[1],hdef:m[2],hagi:m[3]},fourWei:[P,p,b,k,C],gRate:{vhp:x,vatk:R,vdef:_,vagi:A,vSum:I}}},_=function(n){var t=n.GC,a=void 0===t?4:t,e=n.GPF,r=n.GPFR,o=n.f,i=n.gf,l=n.tf,f=n.FV,s=u(e),m=s[0],h=s[1],b=s.slice(2),k=[].concat(c(b),c(o)).reduce((function(n,t){return n+t})),R=Math.min(i.reduce((function(n,t){return n+t})),150),_=~~(1.3*Math.max(~~Math.pow(R/100,5),0))+~~((m-100)/(1.2*(5-x[f])+5)),A=[P(_,b[0]+o[0],i[0],k,R),P(_,b[1]+o[1],i[1],k,R),P(_,b[2]+o[2],i[2],k,R),P(_,b[3]+o[3],i[3],k,R)],I=A.map((function(n,t){return n+r[t]+ +l[t]})),O=C(A.map((function(n,t){return n+ +l[t]}))).m,w=I.map((function(n){return F({LV:1,GC:a,IA:h,ISI:n})})),j=A.map((function(n,t){return v({ISI:n+l[t],FV:O})})),S=+d(w).toFixed(2),N=+G(w).toFixed(2),D=+g(w).toFixed(2),V=+y(w).toFixed(2),E=~~(~~S/4)+~~N+~~D+~~V,W=+d(j).toFixed(4),H=+G(j).toFixed(4),J=+g(j).toFixed(4),B=+y(j).toFixed(4),M=+(H+J+B).toFixed(4),$=p(+S,+W),T=p(+N,+H),L=p(+D,+J),q=p(+B,+B),z=~~($/4)+T+L+q;return{health:{hhp:w[0],hatk:w[1],hdef:w[2],hagi:w[3]},fourWei:[S,N,D,V,E],tGpf:A,gRate:{vhp:W,vatk:H,vdef:J,vagi:B,vSum:M},fullFourWei:{ffhp:$,ffatk:T,ffdef:L,ffagi:q,ffscore:z}}},A=function(n){var t=[],a=[];return function n(e,r){for(var o=0;o<e[r].length;o++)a[r]=e[r][o],r!==e.length-1?n(e,r+1):t.push([].concat(a))}(n,0),t},I=[-2,-1,0,1,2],O=A([I,I,I,I]),w=[].concat(c(Array(11).keys())),j=A([w,w,w,w]).filter((function(n){return 10===n.reduce((function(n,t){return n+t}))})),S=function(n){return new Promise((function(t){var a={},e=u(n),r=(e[0],e[1],e.slice(2)),c=k(r).m;setTimeout((function(){O.forEach((function(t){var e=i(t,4),r=e[0],u=e[1],l=e[2],f=e[3];j.forEach((function(t){var e=i(t,4),s=e[0],m=e[1],h=e[2],F=e[3],v=R({GPF:n,GPFR:[s,m,h,F],f:[r,u,l,f],FV:c}),P=i(v.fourWei,5),p=P[0],d=P[1],G=P[2],g=P[3],y=P[4],b=v.health,k=v.gRate,C=o({hp:p,atk:d,def:G,agi:g,score:y,ghp:s,gatk:m,gdef:h,gagi:F,fhp:r,fatk:u,fdef:l,fagi:f},b,k),x=~~p+","+~~d+","+~~G+","+~~g;a[x]?a[x].push(C):a[x]=[C]}))})),t(a)}),50)}))},N=function(n,t){return Math.round(100*n/t-2.5,0)},D=function(n){var t,a,e,r,o,u,l=n.P,f=(1.1*(t=i(l,4))[0]-t[1]-t[2]-t[3])/4.2,s=(a=[].concat(c(l),[f]),(e=i(a,5))[0],r=e[1],o=e[2],u=e[3],(10*r-o-.9*e[4]-.45*u)/9.9),m=function(n){var t=i(n,5),a=(t[0],t[1]),e=t[2],r=t[3];return(10*e-a-.9*t[4]-.45*r)/9.9}([].concat(c(l),[f])),h=function(n){var t=i(n,4);t[0],t[1],t[2];return t[3]}(l),F=[];return b.forEach((function(n){var t=n.m,a=N(f,t)-2,e=N(s,t)-2,r=N(m,t)-2,o=N(h,t)-2;return k([a,e,r,o]).m===t&&(F.push({hp:a,atk:e,def:r,agi:o,m:t}),!0)})),F},V=function(n){for(var t=[],a=u(n),e=a[0],r=void 0===e?"":e,o=a[1],i=a.slice(2),l=(r+"").split("."),f=i.reduce((function(n,t){return n+t}))+10,s=function(n){var a={};[].concat(c(Array(17))).map((function(n,t){return 8-t})).forEach((function(t){a["c"+t]=~~(((4*(n-1)+o)*(f+t)/100-20)/4).strip()})),a.lv=n,t.push(a)},m=1;m<=140;m++)s(m);return r&&(console.log(l),t=t.filter((function(n){var t=n.lv;return l.find((function(n){return+n==+t}))}))),t}},413:function(n,t,a){"use strict";var e={name:"CalcInput",props:{v:Array,PH:Array}},r=a(2),o=Object(r.a)(e,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("Row",n._l(n.v,(function(t,e){return a("Col",{key:e,attrs:{span:24/n.v.length}},[a("Input",{attrs:{number:"",placeholder:n.PH[e]},model:{value:n.v[e],callback:function(t){n.$set(n.v,e,t)},expression:"v[i]"}})],1)})),1)}),[],!1,null,null,null);t.a=o.exports},414:function(n,t,a){"use strict";var e=[{platform:"石器傳說",data:[{name:"人龍系",arr:[{name:"邦奇洛",GPF:[26,28,40,19,21]},{name:"利則諾頓",GPF:[25,28,39,21,19]},{name:"布魯頓",GPF:[25,28,40,15,24]}]},{name:"老虎系",arr:[{name:"貝魯卡",GPF:[27,28,35,18,25]},{name:"貝魯伊卡",GPF:[27,28,35,17,26]}]},{name:"雷龍系",arr:[{name:"水雷",GPF:[27,35,26,36,14]},{name:"紅雷",GPF:[27,34,36,26,14]}]},{name:"星星系",arr:[{name:"格爾頓",GPF:[28,28,37,18,25]}]},{name:"海主人系",arr:[{name:"姆依",GPF:[28,31,20,40,18]}]},{name:"跳狗系",arr:[{name:"拉奇魯哥",GPF:[27,29,38,15,25]}]}]},{platform:"石器EE",data:[{name:"馬年獸系",arr:[{name:"葛雷基歐",GPF:[39,24,40,27,22]},{name:"葛雷洛比",GPF:[39,27,40,24,22]},{name:"葛雷吉魯",GPF:[39,24,44,24,22]},{name:"葛雷馬恩",GPF:[39,23,40,22,30]}]},{name:"老虎系",arr:[{name:"貝魯卡",GPF:[24,23,28,16,25]},{name:"貝魯伊卡",GPF:[23,21,30,13,28]},{name:"格魯西斯",GPF:[21,20,30,13,28]},{name:"金格薩貝魯",GPF:[25,19,29,18,29]}]},{name:"雷龍系",arr:[{name:"布洛多斯",GPF:[25,37,27,33,6]},{name:"布林帖斯",GPF:[26,40,23,32,7]},{name:"布拉奇多斯",GPF:[24,35,35,28,6]},{name:"斯天多斯",GPF:[28,40,25,35,5]},{name:"邦恩多斯",GPF:[28,37,30,27,10]}]},{name:"暴龍系",arr:[{name:"奧卡洛斯",GPF:[25,26,34,28,19]},{name:"左迪洛斯",GPF:[26,28,30,22,22]},{name:"巴朵蘭恩",GPF:[27,23,37,20,25]},{name:"帖拉所伊朵",GPF:[28,23,35,25,21]}]},{name:"人龍系",arr:[{name:"利則諾頓",GPF:[22,27,37,19,17]},{name:"揚奇洛斯",GPF:[29,28,39,16,21]},{name:"邦奇諾",GPF:[26,24,39,16,20]},{name:"布魯頓",GPF:[25,25,39,14,26]}]},{name:"2D人龍系",arr:[{name:"2D揚奇洛斯",GPF:[32,28,42,18,25]},{name:"2D布魯頓",GPF:[26,26,41,17,29]},{name:"2D利則諾頓",GPF:[26,26,41,22,22]},{name:"2D邦奇洛",GPF:[26,25,43,20,23]}]},{name:"鯊魚系",arr:[{name:"加格",GPF:[23,30,36,15,19]}]},{name:"犀牛系",arr:[{name:"多洛布斯",GPF:[14,26,38,26,18]},{name:"貝恩達斯",GPF:[16,30,35,26,14]},{name:"多利諾布斯",GPF:[12,27,37,25,16]}]},{name:"鴕鳥系",arr:[{name:"克克洛斯",GPF:[20,20,34,12,36]},{name:"奇寶",GPF:[20,20,36,14,34]}]},{name:"水龍系",arr:[{name:"蘭貝魯斯",GPF:[21,26,37,21,21]}]},{name:"飛龍系",arr:[{name:"朵拉比斯",GPF:[23,22,36,18,28]}]},{name:"威威系",arr:[{name:"威威",GPF:[15,21,36,10,33]},{name:"烏卡魯",GPF:[13,25,35,11,29]},{name:"烏寶寶",GPF:[15,20,35,12,34]},{name:"威伯",GPF:[20,20,35,16,29]}]},{name:"拳王系",arr:[{name:"柏克爾",GPF:[20,23,38,22,24]}]},{name:"跳狗系",arr:[{name:"拉奇魯哥",GPF:[23,24,39,15,22]},{name:"魯尼帖斯",GPF:[22,27,37,16,20]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,27,23,48,5]}]},{name:"穿山甲系",arr:[{name:"卡達魯卡斯",GPF:[22,25,23,40,6]}]},{name:"海主人系",arr:[{name:"邦奇",GPF:[22,32,37,24,13]},{name:"姆伊",GPF:[20,35,35,22,13]},{name:"海主人",GPF:[21,31,35,26,14]},{name:"多魯寶",GPF:[24,30,38,24,14]}]},{name:"加美系",arr:[{name:"邦奇",GPF:[18,20,37,13,34]}]}]},{platform:"水藍石器",data:[{name:"暴龍系",arr:[{name:"朵巴奈特",GPF:[25,28,43,29,27]}]},{name:"人龍系",arr:[{name:"楊格斯",GPF:[27,30,42,23,28]}]},{name:"鴕鳥系",arr:[{name:"塔斯夫",GPF:[19,22,24,13,38]}]},{name:"威威系",arr:[{name:"威比",GPF:[17,22,24,13,39]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,26,21,46,4]}]}]}];t.a=e},416:function(n,t,a){},424:function(n,t,a){"use strict";a(416)},428:function(n,t,a){"use strict";a.r(t);var e=a(412),r=a(414),o=a(413),i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},c=function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var a=[],e=!0,r=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);e=!0);}catch(n){r=!0,o=n}finally{try{!e&&c.return&&c.return()}finally{if(r)throw o}}return a}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function u(n){return Array.isArray(n)?n:Array.from(n)}function l(n){if(Array.isArray(n)){for(var t=0,a=Array(n.length);t<n.length;t++)a[t]=n[t];return a}return Array.from(n)}var f={name:"Home",data:function(){var n=Object(e.i)("CalcFourWei")||[],t=Object(e.i)("platform")||0,a=["","","",""];return{petData:r.a,name:"",name2:"",platform:t,GPF:["",""].concat(a),GPFR:[3,3,2,2],f:[].concat(a),FV:null,columns:[{title:"四圍",align:"center",className:"color1",children:[{title:"血",key:"fhp",align:"center",className:"color1"},{title:"攻",key:"fatk",align:"center",className:"color1"},{title:"防",key:"fdef",align:"center",className:"color1"},{title:"敏",key:"fagi",align:"center",className:"color1"},{title:"戰",key:"fscore",align:"center",className:"color1"}]},{title:"成長率",align:"center",className:"color5",children:[{title:"血",key:"vhp",align:"center",className:"color5"},{title:"攻",key:"vatk",align:"center",className:"color5"},{title:"防",key:"vdef",align:"center",className:"color5"},{title:"敏",key:"vagi",align:"center",className:"color5"},{title:"成長",key:"vSum",align:"center",className:"color5"}]}],data:[],storage:n}},mounted:function(){try{var n=JSON.parse(Object(e.a)(this.$route.query.search)),t=n.GPF,a=n.GPFR,r=n.name,o=n.f;this.GPF=t,this.GPFR=a,this.name=r,this.f=o,this.handleCalc(!1)}catch(n){}},computed:{getPetData:function(){return this.petData[this.platform].data}},methods:{handleChange:function(n){var t=n.split("."),a=c(t,2),e=a[0],r=a[1],o=this.getPetData[e].arr[r],i=o.name,u=o.GPF;this.GPF=[this.GPF[0]].concat(l(u)),this.name=i},handleChangePlatform:function(n){Object(e.j)("platform",n)},handleCalc:function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=u(this.GPF),a=(t[0],t[1],t.slice(2));this.FV=Object(e.h)(a).m;var r=Object(e.c)(this),o=c(r.fourWei,5),f=o[0],s=o[1],m=o[2],h=o[3],F=o[4],v=r.health,P=r.gRate,p=Object(e.b)(JSON.stringify({GPF:this.GPF,f:this.f,GPFR:this.GPFR,name:this.name}));if(this.$router.push({path:"",query:{search:p}}),this.data=[i({fhp:f,fatk:s,fdef:m,fagi:h,fscore:F},v,P)],n){var d=[].concat(l(this.GPFR)),G=[].concat(l(this.GPF)),g=[].concat(l(this.f)),y=this.name;this.storage.unshift({name:y,GPFR:d,GPF:G,f:g}),this.storage.length>7&&this.storage.pop(),Object(e.j)("CalcFourWei",this.storage)}},handleRecodeCalc:function(n){var t=this.storage[n],a=t.GPFR,e=t.GPF,r=t.f,o=t.name;this.name=o,this.GPF=[].concat(l(e)),this.GPFR=[].concat(l(a)),this.f=[].concat(l(r)),this.handleCalc(!1)}},components:{CalcInput:o.a}},s=(a(424),a(2)),m=Object(s.a)(f,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"container"},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Row",[a("Col",{attrs:{span:"6"}},[a("Button",{attrs:{type:"info",long:""}},[n._v("\n                      基礎素質\n                  ")])],1),n._v(" "),a("Col",{attrs:{span:"6"}},[a("Select",{attrs:{filterable:"",long:""},on:{input:n.handleChangePlatform},model:{value:n.platform,callback:function(t){n.platform=t},expression:"platform"}},n._l(n.petData,(function(n,t){var e=n.platform;return a("Option",{key:e,attrs:{label:e,value:t}})})),1)],1),n._v(" "),a("Col",{attrs:{span:"6"}},[a("Select",{attrs:{filterable:"",long:""},on:{input:n.handleChange},model:{value:n.name2,callback:function(t){n.name2=t},expression:"name2"}},n._l(n.getPetData,(function(t,e){return a("OptionGroup",{key:t.name,attrs:{label:t.name}},n._l(t.arr,(function(n,t){return a("Option",{key:n.name,attrs:{value:e+"."+t,label:n.name}})})),1)})),1)],1),n._v(" "),a("Col",{attrs:{span:"6"}},[a("Input",{attrs:{placeholder:"寵物名稱"},model:{value:n.name,callback:function(t){n.name=t},expression:"name"}})],1)],1),n._v(" "),a("CalcInput",{attrs:{v:n.GPF,PH:["等級","係數","體","腕","耐","速"]}}),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Button",{attrs:{type:"info",long:""}},[n._v("\n                      初始隨機(相加總合10)\n                  ")])],1)],1),n._v(" "),a("CalcInput",{attrs:{v:n.GPFR,PH:["檔次體","檔次腕","檔次耐","檔次速"]}}),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Button",{attrs:{type:"info",long:""}},[n._v("\n                      隨機檔次(-2 ~ +2)\n                  ")])],1)],1),n._v(" "),a("CalcInput",{attrs:{v:n.f,PH:["檔次體","檔次腕","檔次耐","檔次速"]}}),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Button",{attrs:{type:"success",long:"",icon:"ios-search"},on:{click:n.handleCalc}},[n._v("\n                      計算\n                  ")])],1)],1)],1),n._v(" "),a("Col",{attrs:{span:"12"}},n._l(n.storage,(function(t,e){var r=t.name,o=t.GPF,i=t.GPFR,c=t.f;return a("Button",{key:e,attrs:{type:"ghost",long:"",icon:"ios-search"},on:{click:function(t){return n.handleRecodeCalc(e)}}},[n._v("\n              "+n._s(r+" "+o.join()+"|"+i.join()+"|"+c.join())+"\n          ")])})),1)],1),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Table",{attrs:{border:"",columns:n.columns,data:n.data}})],1)],1)],1)}),[],!1,null,"501c1a50",null);t.default=m.exports}}]);
//# sourceMappingURL=CalcFourWei6a00d3995501d3733524.js.map