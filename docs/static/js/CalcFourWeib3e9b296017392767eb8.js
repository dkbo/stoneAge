(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{410:function(n,t,a){"use strict";var e={name:"CalcInput",props:{v:Array,PH:Array}},r=a(2),o=Object(r.a)(e,function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("Row",n._l(n.v,function(t,e){return a("Col",{key:e,attrs:{span:24/n.v.length}},[a("Input",{attrs:{number:"",placeholder:n.PH[e]},model:{value:n.v[e],callback:function(t){n.$set(n.v,e,t)},expression:"v[i]"}})],1)}))},[],!1,null,null,null);t.a=o.exports},411:function(n,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return m}),a.d(t,"j",function(){return f}),a.d(t,"i",function(){return s}),a.d(t,"h",function(){return b}),a.d(t,"c",function(){return x}),a.d(t,"g",function(){return R}),a.d(t,"d",function(){return S}),a.d(t,"e",function(){return N}),a.d(t,"f",function(){return D});var e=a(413),r=a.n(e),o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},i=function(){return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var a=[],e=!0,r=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);e=!0);}catch(n){r=!0,o=n}finally{try{!e&&c.return&&c.return()}finally{if(r)throw o}}return a}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function c(n){if(Array.isArray(n)){for(var t=0,a=Array(n.length);t<n.length;t++)a[t]=n[t];return a}return Array.from(n)}function u(n){return Array.isArray(n)?n:Array.from(n)}var l=function(n){return r.a.encode(n)},m=function(n){return r.a.decode(n)},f=function(n,t){arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?localStorage[l(n)]=l(t):localStorage[l(n)]=l(JSON.stringify(t))},s=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=localStorage[l(n)];if(a)try{var e=m(a);return t?function(n){try{return JSON.parse(n)}catch(n){return""}}(e):e}catch(n){return""}return""},h=function(n){return((n.LV-1)*n.GC+n.IA)*n.ISI/100},F=function(n){var t=n.ISI,a=n.ISR;return 100*((t+(void 0===a?2.5:a))*n.FV/100).toFixed(3)/100},P=function(n,t,a,e,r){return~~(Math.min(n+e,150)*(a+4*t)/(r+4*e))},G=function(n,t){return~~(n+139*t)},v=function(n){var t=i(n,4);return 4*t[0]+t[1]+t[2]+t[3]},p=function(n){var t=i(n,4),a=t[0],e=t[1];return.1*(a+t[2])+e+.05*t[3]},d=function(n){var t=i(n,4);return.1*(t[0]+t[1])+t[2]+.05*t[3]},g=function(n){var t=i(n,4);t[0],t[1],t[2];return t[3]},y=[{h:5,m:4.75,l:4.5},{h:5.2,m:4.95,l:4.7},{h:5.4,m:5.15,l:4.9},{h:5.6,m:5.35,l:5.1},{h:5.8,m:5.55,l:5.3},{h:6,m:5.75,l:5.5}],b=function(n){var t=n.reduce(function(n,t){return n+t});return t>=100?y[0]:t>=95?y[1]:t>=90?y[2]:t>=85?y[3]:t>=80?y[4]:y[5]},k=function(n){var t=n.reduce(function(n,t){return n+t});return t>=130?y[0]:t>=100?y[1]:t>=95?y[2]:t>=85?y[3]:t>=80?y[4]:y[5]},C={4.75:0,4.95:1,5.15:2,5.35:3,5.55:4,5.75:5},x=function(n){var t=n.GC,a=void 0===t?4:t,e=n.GPF,r=n.GPFR,o=n.f,i=n.FV,c=u(e),l=c[0],m=c[1],f=c.slice(2),s=f.map(function(n,t){return n+r[t]+o[t]}).map(function(n){return h({LV:l,GC:a,IA:m,ISI:n})}),P=f.map(function(n,t){return F({ISI:n+o[t],FV:i})}),G=+v(s).toFixed(2),y=+p(s).toFixed(2),b=+d(s).toFixed(2),k=+g(s).toFixed(2),C=~~(~~G/4)+~~y+~~b+~~k,x=+v(P).toFixed(4),R=+p(P).toFixed(4),_=+d(P).toFixed(4),A=+g(P).toFixed(4),I=+(R+_+A).toFixed(4);return{health:{hhp:s[0],hatk:s[1],hdef:s[2],hagi:s[3]},fourWei:[G,y,b,k,C],gRate:{vhp:x,vatk:R,vdef:_,vagi:A,vSum:I}}},R=function(n){var t=n.GC,a=void 0===t?4:t,e=n.GPF,r=n.GPFR,o=n.f,i=n.gf,l=n.tf,m=n.FV,f=u(e),s=f[0],y=f[1],b=f.slice(2),x=[].concat(c(b),c(o)).reduce(function(n,t){return n+t}),R=Math.min(i.reduce(function(n,t){return n+t}),150),_=~~(1.3*Math.max(~~Math.pow(R/100,5),0))+~~((s-100)/(1.2*(5-C[m])+5)),A=[P(_,b[0]+o[0],i[0],x,R),P(_,b[1]+o[1],i[1],x,R),P(_,b[2]+o[2],i[2],x,R),P(_,b[3]+o[3],i[3],x,R)],I=A.map(function(n,t){return n+r[t]+ +l[t]}),O=k(A.map(function(n,t){return n+ +l[t]})).m,w=I.map(function(n){return h({LV:1,GC:a,IA:y,ISI:n})}),S=A.map(function(n,t){return F({ISI:n+l[t],FV:O})}),j=+v(w).toFixed(2),N=+p(w).toFixed(2),D=+d(w).toFixed(2),V=+g(w).toFixed(2),E=~~(~~j/4)+~~N+~~D+~~V,W=+v(S).toFixed(4),H=+p(S).toFixed(4),J=+d(S).toFixed(4),B=+g(S).toFixed(4),M=+(H+J+B).toFixed(4),$=G(+j,+W),T=G(+N,+H),L=G(+D,+J),q=G(+B,+B),z=~~($/4)+T+L+q;return{health:{hhp:w[0],hatk:w[1],hdef:w[2],hagi:w[3]},fourWei:[j,N,D,V,E],tGpf:A,gRate:{vhp:W,vatk:H,vdef:J,vagi:B,vSum:M},fullFourWei:{ffhp:$,ffatk:T,ffdef:L,ffagi:q,ffscore:z}}},_=function(n){var t=[],a=[];return function n(e,r){for(var o=0;o<e[r].length;o++)a[r]=e[r][o],r!==e.length-1?n(e,r+1):t.push([].concat(a))}(n,0),t},A=[-2,-1,0,1,2],I=_([A,A,A,A]),O=[].concat(c(Array(11).keys())),w=_([O,O,O,O]).filter(function(n){return 10===n.reduce(function(n,t){return n+t})}),S=function(n){return new Promise(function(t){var a={},e=u(n),r=(e[0],e[1],e.slice(2)),c=b(r).m;setTimeout(function(){I.forEach(function(t){var e=i(t,4),r=e[0],u=e[1],l=e[2],m=e[3];w.forEach(function(t){var e=i(t,4),f=e[0],s=e[1],h=e[2],F=e[3],P=x({GPF:n,GPFR:[f,s,h,F],f:[r,u,l,m],FV:c}),G=i(P.fourWei,5),v=G[0],p=G[1],d=G[2],g=G[3],y=G[4],b=P.health,k=P.gRate,C=o({hp:v,atk:p,def:d,agi:g,score:y,ghp:f,gatk:s,gdef:h,gagi:F,fhp:r,fatk:u,fdef:l,fagi:m},b,k),R=~~v+","+~~p+","+~~d+","+~~g;a[R]?a[R].push(C):a[R]=[C]})}),t(a)},50)})},j=function(n,t){return Math.round(100*n/t-2.5,0)},N=function(n){var t=n.P,a=function(n){var t=i(n,4);return(1.1*t[0]-t[1]-t[2]-t[3])/4.2}(t),e=function(n){var t=i(n,5),a=(t[0],t[1]),e=t[2],r=t[3];return(10*a-e-.9*t[4]-.45*r)/9.9}([].concat(c(t),[a])),r=function(n){var t=i(n,5),a=(t[0],t[1]),e=t[2],r=t[3];return(10*e-a-.9*t[4]-.45*r)/9.9}([].concat(c(t),[a])),o=function(n){var t=i(n,4);t[0],t[1],t[2];return t[3]}(t),u=[];return y.forEach(function(n){var t=n.m,i=j(a,t)-2,c=j(e,t)-2,l=j(r,t)-2,m=j(o,t)-2;return b([i,c,l,m]).m===t&&(u.push({hp:i,atk:c,def:l,agi:m,m:t}),!0)}),u},D=function(n){for(var t=[],a=u(n),e=a[0],r=void 0===e?"":e,o=a[1],i=a.slice(2),l=(r+"").split("."),m=i.reduce(function(n,t){return n+t})+10,f=function(n){var a={};[].concat(c(Array(17))).map(function(n,t){return 8-t}).forEach(function(t){a["c"+t]=~~(((4*(n-1)+o)*(m+t)/100-20)/4).strip()}),a.lv=n,t.push(a)},s=1;s<=140;s++)f(s);return r&&(console.log(l),t=t.filter(function(n){var t=n.lv;return l.find(function(n){return+n==+t})})),t}},412:function(n,t,a){"use strict";var e=[{platform:"石器初心",data:[{name:"人龍系",arr:[{name:"邦奇諾",GPF:[26,25,42,18,24]},{name:"楊奇洛斯",GPF:[29,27,39,21,24]},{name:"利則諾頓",GPF:[23,25,38,25,21]},{name:"邦蒲洛斯",GPF:[27,25,40,20,24]},{name:"布魯頓",GPF:[25,25,39,18,27]}]},{name:"暴龍系",arr:[{name:"巴朵蘭恩",GPF:[27,27,40,20,25]},{name:"奧卡洛斯",GPF:[25,26,35,31,19]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,26,27,42,19]}]},{name:"兔子系",arr:[{name:"克雷爾",GPF:[18,21,29,25,30]},{name:"克克爾",GPF:[18,22,30,25,29]},{name:"克洛爾",GPF:[18,21,32,22,30]},{name:"里斯基",GPF:[17,23,28,27,29]},{name:"克拉爾",GPF:[18,21,28,27,31]}]},{name:"舌頭系",arr:[{name:"貝洛恩",GPF:[24,38,30,35,15]}]},{name:"犀牛系",arr:[{name:"貝恩達斯",GPF:[16,28,29,32,21]}]},{name:"飛龍系",arr:[{name:"加寶格恩",GPF:[24,26,37,23,26]}]}]},{platform:"石器傳說",data:[{name:"人龍系",arr:[{name:"邦奇洛",GPF:[26,28,40,19,21]},{name:"利則諾頓",GPF:[25,28,39,21,19]},{name:"布魯頓",GPF:[25,28,40,15,24]}]},{name:"凱比系",arr:[{name:"凱比特",GPF:[25,28,37,11,31]}]},{name:"舌頭系",arr:[{name:"貝洛恩",GPF:[28,30,36,19,24]}]},{name:"老虎系",arr:[{name:"貝魯卡",GPF:[27,28,35,18,25]},{name:"貝魯伊卡",GPF:[27,28,35,17,26]}]},{name:"雷龍系",arr:[{name:"水雷",GPF:[27,35,26,36,14]},{name:"紅雷",GPF:[27,34,36,26,14]}]},{name:"星星系",arr:[{name:"格爾頓",GPF:[28,28,37,18,25]}]},{name:"海主人系",arr:[{name:"姆依",GPF:[28,31,20,40,18]}]},{name:"跳狗系",arr:[{name:"拉奇魯哥",GPF:[27,29,38,15,25]}]}]},{platform:"石器EE",data:[{name:"馬年獸系",arr:[{name:"葛雷基歐",GPF:[39,24,40,27,22]},{name:"葛雷洛比",GPF:[39,27,40,24,22]},{name:"葛雷吉魯",GPF:[39,24,44,24,22]},{name:"葛雷馬恩",GPF:[39,23,40,22,30]}]},{name:"老虎系",arr:[{name:"貝魯卡",GPF:[24,23,28,16,25]},{name:"貝魯伊卡",GPF:[23,21,30,13,28]},{name:"格魯西斯",GPF:[21,20,30,13,28]},{name:"金格薩貝魯",GPF:[25,19,29,18,29]}]},{name:"雷龍系",arr:[{name:"布洛多斯",GPF:[25,37,27,33,6]},{name:"布林帖斯",GPF:[26,40,23,32,7]},{name:"布拉奇多斯",GPF:[24,35,35,28,6]},{name:"斯天多斯",GPF:[28,40,25,35,5]},{name:"邦恩多斯",GPF:[28,37,30,27,10]}]},{name:"暴龍系",arr:[{name:"奧卡洛斯",GPF:[25,26,34,28,19]},{name:"左迪洛斯",GPF:[26,28,30,22,22]},{name:"巴朵蘭恩",GPF:[27,23,37,20,25]},{name:"帖拉所伊朵",GPF:[28,23,35,25,21]}]},{name:"人龍系",arr:[{name:"利則諾頓",GPF:[22,27,37,19,17]},{name:"揚奇洛斯",GPF:[29,28,39,16,21]},{name:"邦奇諾",GPF:[26,24,39,16,20]},{name:"布魯頓",GPF:[25,25,39,14,26]}]},{name:"2D人龍系",arr:[{name:"2D揚奇洛斯",GPF:[32,28,42,18,25]},{name:"2D布魯頓",GPF:[26,26,41,17,29]},{name:"2D利則諾頓",GPF:[26,26,41,22,22]},{name:"2D邦奇洛",GPF:[26,25,43,20,23]}]},{name:"鯊魚系",arr:[{name:"加格",GPF:[23,30,36,15,19]}]},{name:"犀牛系",arr:[{name:"多洛布斯",GPF:[14,26,38,26,18]},{name:"貝恩達斯",GPF:[16,30,35,26,14]},{name:"多利諾布斯",GPF:[12,27,37,25,16]}]},{name:"鴕鳥系",arr:[{name:"克克洛斯",GPF:[20,20,34,12,36]},{name:"奇寶",GPF:[20,20,36,14,34]}]},{name:"水龍系",arr:[{name:"蘭貝魯斯",GPF:[21,26,37,21,21]}]},{name:"飛龍系",arr:[{name:"朵拉比斯",GPF:[23,22,36,18,28]}]},{name:"威威系",arr:[{name:"威威",GPF:[15,21,36,10,33]},{name:"烏卡魯",GPF:[13,25,35,11,29]},{name:"烏寶寶",GPF:[15,20,35,12,34]},{name:"威伯",GPF:[20,20,35,16,29]}]},{name:"拳王系",arr:[{name:"柏克爾",GPF:[20,23,38,22,24]}]},{name:"跳狗系",arr:[{name:"拉奇魯哥",GPF:[23,24,39,15,22]},{name:"魯尼帖斯",GPF:[22,27,37,16,20]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,27,23,48,5]}]},{name:"穿山甲系",arr:[{name:"卡達魯卡斯",GPF:[22,25,23,40,6]}]},{name:"海主人系",arr:[{name:"邦奇",GPF:[22,32,37,24,13]},{name:"姆伊",GPF:[20,35,35,22,13]},{name:"海主人",GPF:[21,31,35,26,14]},{name:"多魯寶",GPF:[24,30,38,24,14]}]},{name:"加美系",arr:[{name:"邦奇",GPF:[18,20,37,13,34]}]}]},{platform:"水藍石器",data:[{name:"暴龍系",arr:[{name:"朵巴奈特",GPF:[25,28,43,29,27]}]},{name:"人龍系",arr:[{name:"楊格斯",GPF:[27,30,42,23,28]}]},{name:"鴕鳥系",arr:[{name:"塔斯夫",GPF:[19,22,24,13,38]}]},{name:"威威系",arr:[{name:"威比",GPF:[17,22,24,13,39]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,26,21,46,4]}]}]}];t.a=e},417:function(n,t,a){},425:function(n,t,a){"use strict";var e=a(417);a.n(e).a},431:function(n,t,a){"use strict";a.r(t);var e=a(411),r=a(412),o=a(410),i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},c=function(){return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var a=[],e=!0,r=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);e=!0);}catch(n){r=!0,o=n}finally{try{!e&&c.return&&c.return()}finally{if(r)throw o}}return a}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function u(n){if(Array.isArray(n)){for(var t=0,a=Array(n.length);t<n.length;t++)a[t]=n[t];return a}return Array.from(n)}var l={name:"Home",data:function(){var n=Object(e.i)("CalcFourWei")||[],t=Object(e.i)("platform")||0,a=["","","",""];return{petData:r.a,name:"",name2:"",platform:t,GPF:["",""].concat(a),GPFR:[3,3,2,2],f:[].concat(a),FV:null,columns:[{title:"四圍",align:"center",className:"color1",children:[{title:"血",key:"fhp",align:"center",className:"color1"},{title:"攻",key:"fatk",align:"center",className:"color1"},{title:"防",key:"fdef",align:"center",className:"color1"},{title:"敏",key:"fagi",align:"center",className:"color1"},{title:"戰",key:"fscore",align:"center",className:"color1"}]},{title:"成長率",align:"center",className:"color5",children:[{title:"血",key:"vhp",align:"center",className:"color5"},{title:"攻",key:"vatk",align:"center",className:"color5"},{title:"防",key:"vdef",align:"center",className:"color5"},{title:"敏",key:"vagi",align:"center",className:"color5"},{title:"成長",key:"vSum",align:"center",className:"color5"}]}],data:[],storage:n}},mounted:function(){try{var n=JSON.parse(Object(e.a)(this.$route.query.search)),t=n.GPF,a=n.GPFR,r=n.name,o=n.f;this.GPF=t,this.GPFR=a,this.name=r,this.f=o,this.handleCalc(!1)}catch(n){}},computed:{getPetData:function(){return this.petData[this.platform].data}},methods:{handleChange:function(n){var t=n.split("."),a=c(t,2),e=a[0],r=a[1],o=this.getPetData[e].arr[r],i=o.name,l=o.GPF;this.GPF=[this.GPF[0]].concat(u(l)),this.name=i},handleChangePlatform:function(n){Object(e.j)("platform",n)},handleCalc:function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=function(n){return Array.isArray(n)?n:Array.from(n)}(this.GPF),a=(t[0],t[1],t.slice(2));this.FV=Object(e.h)(a).m;var r=Object(e.c)(this),o=c(r.fourWei,5),l=o[0],m=o[1],f=o[2],s=o[3],h=o[4],F=r.health,P=r.gRate,G=Object(e.b)(JSON.stringify({GPF:this.GPF,f:this.f,GPFR:this.GPFR,name:this.name}));if(this.$router.push({path:"",query:{search:G}}),this.data=[i({fhp:l,fatk:m,fdef:f,fagi:s,fscore:h},F,P)],n){var v=[].concat(u(this.GPFR)),p=[].concat(u(this.GPF)),d=[].concat(u(this.f)),g=this.name;this.storage.unshift({name:g,GPFR:v,GPF:p,f:d}),this.storage.length>7&&this.storage.pop(),Object(e.j)("CalcFourWei",this.storage)}},handleRecodeCalc:function(n){var t=this.storage[n],a=t.GPFR,e=t.GPF,r=t.f,o=t.name;this.name=o,this.GPF=[].concat(u(e)),this.GPFR=[].concat(u(a)),this.f=[].concat(u(r)),this.handleCalc(!1)}},components:{CalcInput:o.a}},m=(a(425),a(2)),f=Object(m.a)(l,function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"container"},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Row",[a("Col",{attrs:{span:"6"}},[a("Button",{attrs:{type:"info",long:""}},[n._v("\n                      基礎素質\n                  ")])],1),n._v(" "),a("Col",{attrs:{span:"6"}},[a("Select",{attrs:{filterable:"",long:""},on:{input:n.handleChangePlatform},model:{value:n.platform,callback:function(t){n.platform=t},expression:"platform"}},n._l(n.petData,function(n,t){var e=n.platform;return a("Option",{key:e,attrs:{label:e,value:t}})}))],1),n._v(" "),a("Col",{attrs:{span:"6"}},[a("Select",{attrs:{filterable:"",long:""},on:{input:n.handleChange},model:{value:n.name2,callback:function(t){n.name2=t},expression:"name2"}},n._l(n.getPetData,function(t,e){return a("OptionGroup",{key:t.name,attrs:{label:t.name}},n._l(t.arr,function(n,t){return a("Option",{key:n.name,attrs:{value:e+"."+t,label:n.name}})}))}))],1),n._v(" "),a("Col",{attrs:{span:"6"}},[a("Input",{attrs:{placeholder:"寵物名稱"},model:{value:n.name,callback:function(t){n.name=t},expression:"name"}})],1)],1),n._v(" "),a("CalcInput",{attrs:{v:n.GPF,PH:["等級","係數","體","腕","耐","速"]}}),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Button",{attrs:{type:"info",long:""}},[n._v("\n                      初始隨機(相加總合10)\n                  ")])],1)],1),n._v(" "),a("CalcInput",{attrs:{v:n.GPFR,PH:["檔次體","檔次腕","檔次耐","檔次速"]}}),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Button",{attrs:{type:"info",long:""}},[n._v("\n                      隨機檔次(-2 ~ +2)\n                  ")])],1)],1),n._v(" "),a("CalcInput",{attrs:{v:n.f,PH:["檔次體","檔次腕","檔次耐","檔次速"]}}),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Button",{attrs:{type:"success",long:"",icon:"ios-search"},on:{click:n.handleCalc}},[n._v("\n                      計算\n                  ")])],1)],1)],1),n._v(" "),a("Col",{attrs:{span:"12"}},n._l(n.storage,function(t,e){var r=t.name,o=t.GPF,i=t.GPFR,c=t.f;return a("Button",{key:e,attrs:{type:"ghost",long:"",icon:"ios-search"},on:{click:function(t){n.handleRecodeCalc(e)}}},[n._v("\n              "+n._s(r+" "+o.join()+"|"+i.join()+"|"+c.join())+"\n          ")])}))],1),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Table",{attrs:{border:"",columns:n.columns,data:n.data}})],1)],1)],1)},[],!1,null,"ecae3c2a",null);t.default=f.exports}}]);
//# sourceMappingURL=CalcFourWeib3e9b296017392767eb8.js.map