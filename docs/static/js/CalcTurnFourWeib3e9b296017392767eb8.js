(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{410:function(n,t,a){"use strict";var e={name:"CalcInput",props:{v:Array,PH:Array}},r=a(2),o=Object(r.a)(e,function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("Row",n._l(n.v,function(t,e){return a("Col",{key:e,attrs:{span:24/n.v.length}},[a("Input",{attrs:{number:"",placeholder:n.PH[e]},model:{value:n.v[e],callback:function(t){n.$set(n.v,e,t)},expression:"v[i]"}})],1)}))},[],!1,null,null,null);t.a=o.exports},411:function(n,t,a){"use strict";a.d(t,"b",function(){return u}),a.d(t,"a",function(){return f}),a.d(t,"j",function(){return s}),a.d(t,"i",function(){return m}),a.d(t,"h",function(){return k}),a.d(t,"c",function(){return _}),a.d(t,"g",function(){return R}),a.d(t,"d",function(){return O}),a.d(t,"e",function(){return j}),a.d(t,"f",function(){return D});var e=a(413),r=a.n(e),o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},c=function(){return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var a=[],e=!0,r=!1,o=void 0;try{for(var c,i=n[Symbol.iterator]();!(e=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);e=!0);}catch(n){r=!0,o=n}finally{try{!e&&i.return&&i.return()}finally{if(r)throw o}}return a}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function i(n){if(Array.isArray(n)){for(var t=0,a=Array(n.length);t<n.length;t++)a[t]=n[t];return a}return Array.from(n)}function l(n){return Array.isArray(n)?n:Array.from(n)}var u=function(n){return r.a.encode(n)},f=function(n){return r.a.decode(n)},s=function(n,t){arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?localStorage[u(n)]=u(t):localStorage[u(n)]=u(JSON.stringify(t))},m=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=localStorage[u(n)];if(a)try{var e=f(a);return t?function(n){try{return JSON.parse(n)}catch(n){return""}}(e):e}catch(n){return""}return""},h=function(n){return((n.LV-1)*n.GC+n.IA)*n.ISI/100},F=function(n){var t=n.ISI,a=n.ISR;return 100*((t+(void 0===a?2.5:a))*n.FV/100).toFixed(3)/100},P=function(n,t,a,e,r){return~~(Math.min(n+e,150)*(a+4*t)/(r+4*e))},v=function(n,t){return~~(n+139*t)},G=function(n){var t=c(n,4);return 4*t[0]+t[1]+t[2]+t[3]},p=function(n){var t=c(n,4),a=t[0],e=t[1];return.1*(a+t[2])+e+.05*t[3]},d=function(n){var t=c(n,4);return.1*(t[0]+t[1])+t[2]+.05*t[3]},g=function(n){var t=c(n,4);t[0],t[1],t[2];return t[3]},y=[{h:5,m:4.75,l:4.5},{h:5.2,m:4.95,l:4.7},{h:5.4,m:5.15,l:4.9},{h:5.6,m:5.35,l:5.1},{h:5.8,m:5.55,l:5.3},{h:6,m:5.75,l:5.5}],k=function(n){var t=n.reduce(function(n,t){return n+t});return t>=100?y[0]:t>=95?y[1]:t>=90?y[2]:t>=85?y[3]:t>=80?y[4]:y[5]},b=function(n){var t=n.reduce(function(n,t){return n+t});return t>=130?y[0]:t>=100?y[1]:t>=95?y[2]:t>=85?y[3]:t>=80?y[4]:y[5]},C={4.75:0,4.95:1,5.15:2,5.35:3,5.55:4,5.75:5},_=function(n){var t=n.GC,a=void 0===t?4:t,e=n.GPF,r=n.GPFR,o=n.f,c=n.FV,i=l(e),u=i[0],f=i[1],s=i.slice(2),m=s.map(function(n,t){return n+r[t]+o[t]}).map(function(n){return h({LV:u,GC:a,IA:f,ISI:n})}),P=s.map(function(n,t){return F({ISI:n+o[t],FV:c})}),v=+G(m).toFixed(2),y=+p(m).toFixed(2),k=+d(m).toFixed(2),b=+g(m).toFixed(2),C=~~(~~v/4)+~~y+~~k+~~b,_=+G(P).toFixed(4),R=+p(P).toFixed(4),x=+d(P).toFixed(4),I=+g(P).toFixed(4),N=+(R+x+I).toFixed(4);return{health:{hhp:m[0],hatk:m[1],hdef:m[2],hagi:m[3]},fourWei:[v,y,k,b,C],gRate:{vhp:_,vatk:R,vdef:x,vagi:I,vSum:N}}},R=function(n){var t=n.GC,a=void 0===t?4:t,e=n.GPF,r=n.GPFR,o=n.f,c=n.gf,u=n.tf,f=n.FV,s=l(e),m=s[0],y=s[1],k=s.slice(2),_=[].concat(i(k),i(o)).reduce(function(n,t){return n+t}),R=Math.min(c.reduce(function(n,t){return n+t}),150),x=~~(1.3*Math.max(~~Math.pow(R/100,5),0))+~~((m-100)/(1.2*(5-C[f])+5)),I=[P(x,k[0]+o[0],c[0],_,R),P(x,k[1]+o[1],c[1],_,R),P(x,k[2]+o[2],c[2],_,R),P(x,k[3]+o[3],c[3],_,R)],N=I.map(function(n,t){return n+r[t]+ +u[t]}),w=b(I.map(function(n,t){return n+ +u[t]})).m,A=N.map(function(n){return h({LV:1,GC:a,IA:y,ISI:n})}),O=I.map(function(n,t){return F({ISI:n+u[t],FV:w})}),S=+G(A).toFixed(2),j=+p(A).toFixed(2),D=+d(A).toFixed(2),V=+g(A).toFixed(2),E=~~(~~S/4)+~~j+~~D+~~V,H=+G(O).toFixed(4),W=+p(O).toFixed(4),B=+d(O).toFixed(4),J=+g(O).toFixed(4),T=+(W+B+J).toFixed(4),L=v(+S,+H),M=v(+j,+W),$=v(+D,+B),q=v(+J,+J),z=~~(L/4)+M+$+q;return{health:{hhp:A[0],hatk:A[1],hdef:A[2],hagi:A[3]},fourWei:[S,j,D,V,E],tGpf:I,gRate:{vhp:H,vatk:W,vdef:B,vagi:J,vSum:T},fullFourWei:{ffhp:L,ffatk:M,ffdef:$,ffagi:q,ffscore:z}}},x=function(n){var t=[],a=[];return function n(e,r){for(var o=0;o<e[r].length;o++)a[r]=e[r][o],r!==e.length-1?n(e,r+1):t.push([].concat(a))}(n,0),t},I=[-2,-1,0,1,2],N=x([I,I,I,I]),w=[].concat(i(Array(11).keys())),A=x([w,w,w,w]).filter(function(n){return 10===n.reduce(function(n,t){return n+t})}),O=function(n){return new Promise(function(t){var a={},e=l(n),r=(e[0],e[1],e.slice(2)),i=k(r).m;setTimeout(function(){N.forEach(function(t){var e=c(t,4),r=e[0],l=e[1],u=e[2],f=e[3];A.forEach(function(t){var e=c(t,4),s=e[0],m=e[1],h=e[2],F=e[3],P=_({GPF:n,GPFR:[s,m,h,F],f:[r,l,u,f],FV:i}),v=c(P.fourWei,5),G=v[0],p=v[1],d=v[2],g=v[3],y=v[4],k=P.health,b=P.gRate,C=o({hp:G,atk:p,def:d,agi:g,score:y,ghp:s,gatk:m,gdef:h,gagi:F,fhp:r,fatk:l,fdef:u,fagi:f},k,b),R=~~G+","+~~p+","+~~d+","+~~g;a[R]?a[R].push(C):a[R]=[C]})}),t(a)},50)})},S=function(n,t){return Math.round(100*n/t-2.5,0)},j=function(n){var t=n.P,a=function(n){var t=c(n,4);return(1.1*t[0]-t[1]-t[2]-t[3])/4.2}(t),e=function(n){var t=c(n,5),a=(t[0],t[1]),e=t[2],r=t[3];return(10*a-e-.9*t[4]-.45*r)/9.9}([].concat(i(t),[a])),r=function(n){var t=c(n,5),a=(t[0],t[1]),e=t[2],r=t[3];return(10*e-a-.9*t[4]-.45*r)/9.9}([].concat(i(t),[a])),o=function(n){var t=c(n,4);t[0],t[1],t[2];return t[3]}(t),l=[];return y.forEach(function(n){var t=n.m,c=S(a,t)-2,i=S(e,t)-2,u=S(r,t)-2,f=S(o,t)-2;return k([c,i,u,f]).m===t&&(l.push({hp:c,atk:i,def:u,agi:f,m:t}),!0)}),l},D=function(n){for(var t=[],a=l(n),e=a[0],r=void 0===e?"":e,o=a[1],c=a.slice(2),u=(r+"").split("."),f=c.reduce(function(n,t){return n+t})+10,s=function(n){var a={};[].concat(i(Array(17))).map(function(n,t){return 8-t}).forEach(function(t){a["c"+t]=~~(((4*(n-1)+o)*(f+t)/100-20)/4).strip()}),a.lv=n,t.push(a)},m=1;m<=140;m++)s(m);return r&&(console.log(u),t=t.filter(function(n){var t=n.lv;return u.find(function(n){return+n==+t})})),t}},412:function(n,t,a){"use strict";var e=[{platform:"石器初心",data:[{name:"人龍系",arr:[{name:"邦奇諾",GPF:[26,25,42,18,24]},{name:"楊奇洛斯",GPF:[29,27,39,21,24]},{name:"利則諾頓",GPF:[23,25,38,25,21]},{name:"邦蒲洛斯",GPF:[27,25,40,20,24]},{name:"布魯頓",GPF:[25,25,39,18,27]}]},{name:"暴龍系",arr:[{name:"巴朵蘭恩",GPF:[27,27,40,20,25]},{name:"奧卡洛斯",GPF:[25,26,35,31,19]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,26,27,42,19]}]},{name:"兔子系",arr:[{name:"克雷爾",GPF:[18,21,29,25,30]},{name:"克克爾",GPF:[18,22,30,25,29]},{name:"克洛爾",GPF:[18,21,32,22,30]},{name:"里斯基",GPF:[17,23,28,27,29]},{name:"克拉爾",GPF:[18,21,28,27,31]}]},{name:"舌頭系",arr:[{name:"貝洛恩",GPF:[24,38,30,35,15]}]},{name:"犀牛系",arr:[{name:"貝恩達斯",GPF:[16,28,29,32,21]}]},{name:"飛龍系",arr:[{name:"加寶格恩",GPF:[24,26,37,23,26]}]}]},{platform:"石器傳說",data:[{name:"人龍系",arr:[{name:"邦奇洛",GPF:[26,28,40,19,21]},{name:"利則諾頓",GPF:[25,28,39,21,19]},{name:"布魯頓",GPF:[25,28,40,15,24]}]},{name:"凱比系",arr:[{name:"凱比特",GPF:[25,28,37,11,31]}]},{name:"舌頭系",arr:[{name:"貝洛恩",GPF:[28,30,36,19,24]}]},{name:"老虎系",arr:[{name:"貝魯卡",GPF:[27,28,35,18,25]},{name:"貝魯伊卡",GPF:[27,28,35,17,26]}]},{name:"雷龍系",arr:[{name:"水雷",GPF:[27,35,26,36,14]},{name:"紅雷",GPF:[27,34,36,26,14]}]},{name:"星星系",arr:[{name:"格爾頓",GPF:[28,28,37,18,25]}]},{name:"海主人系",arr:[{name:"姆依",GPF:[28,31,20,40,18]}]},{name:"跳狗系",arr:[{name:"拉奇魯哥",GPF:[27,29,38,15,25]}]}]},{platform:"石器EE",data:[{name:"馬年獸系",arr:[{name:"葛雷基歐",GPF:[39,24,40,27,22]},{name:"葛雷洛比",GPF:[39,27,40,24,22]},{name:"葛雷吉魯",GPF:[39,24,44,24,22]},{name:"葛雷馬恩",GPF:[39,23,40,22,30]}]},{name:"老虎系",arr:[{name:"貝魯卡",GPF:[24,23,28,16,25]},{name:"貝魯伊卡",GPF:[23,21,30,13,28]},{name:"格魯西斯",GPF:[21,20,30,13,28]},{name:"金格薩貝魯",GPF:[25,19,29,18,29]}]},{name:"雷龍系",arr:[{name:"布洛多斯",GPF:[25,37,27,33,6]},{name:"布林帖斯",GPF:[26,40,23,32,7]},{name:"布拉奇多斯",GPF:[24,35,35,28,6]},{name:"斯天多斯",GPF:[28,40,25,35,5]},{name:"邦恩多斯",GPF:[28,37,30,27,10]}]},{name:"暴龍系",arr:[{name:"奧卡洛斯",GPF:[25,26,34,28,19]},{name:"左迪洛斯",GPF:[26,28,30,22,22]},{name:"巴朵蘭恩",GPF:[27,23,37,20,25]},{name:"帖拉所伊朵",GPF:[28,23,35,25,21]}]},{name:"人龍系",arr:[{name:"利則諾頓",GPF:[22,27,37,19,17]},{name:"揚奇洛斯",GPF:[29,28,39,16,21]},{name:"邦奇諾",GPF:[26,24,39,16,20]},{name:"布魯頓",GPF:[25,25,39,14,26]}]},{name:"2D人龍系",arr:[{name:"2D揚奇洛斯",GPF:[32,28,42,18,25]},{name:"2D布魯頓",GPF:[26,26,41,17,29]},{name:"2D利則諾頓",GPF:[26,26,41,22,22]},{name:"2D邦奇洛",GPF:[26,25,43,20,23]}]},{name:"鯊魚系",arr:[{name:"加格",GPF:[23,30,36,15,19]}]},{name:"犀牛系",arr:[{name:"多洛布斯",GPF:[14,26,38,26,18]},{name:"貝恩達斯",GPF:[16,30,35,26,14]},{name:"多利諾布斯",GPF:[12,27,37,25,16]}]},{name:"鴕鳥系",arr:[{name:"克克洛斯",GPF:[20,20,34,12,36]},{name:"奇寶",GPF:[20,20,36,14,34]}]},{name:"水龍系",arr:[{name:"蘭貝魯斯",GPF:[21,26,37,21,21]}]},{name:"飛龍系",arr:[{name:"朵拉比斯",GPF:[23,22,36,18,28]}]},{name:"威威系",arr:[{name:"威威",GPF:[15,21,36,10,33]},{name:"烏卡魯",GPF:[13,25,35,11,29]},{name:"烏寶寶",GPF:[15,20,35,12,34]},{name:"威伯",GPF:[20,20,35,16,29]}]},{name:"拳王系",arr:[{name:"柏克爾",GPF:[20,23,38,22,24]}]},{name:"跳狗系",arr:[{name:"拉奇魯哥",GPF:[23,24,39,15,22]},{name:"魯尼帖斯",GPF:[22,27,37,16,20]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,27,23,48,5]}]},{name:"穿山甲系",arr:[{name:"卡達魯卡斯",GPF:[22,25,23,40,6]}]},{name:"海主人系",arr:[{name:"邦奇",GPF:[22,32,37,24,13]},{name:"姆伊",GPF:[20,35,35,22,13]},{name:"海主人",GPF:[21,31,35,26,14]},{name:"多魯寶",GPF:[24,30,38,24,14]}]},{name:"加美系",arr:[{name:"邦奇",GPF:[18,20,37,13,34]}]}]},{platform:"水藍石器",data:[{name:"暴龍系",arr:[{name:"朵巴奈特",GPF:[25,28,43,29,27]}]},{name:"人龍系",arr:[{name:"楊格斯",GPF:[27,30,42,23,28]}]},{name:"鴕鳥系",arr:[{name:"塔斯夫",GPF:[19,22,24,13,38]}]},{name:"威威系",arr:[{name:"威比",GPF:[17,22,24,13,39]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,26,21,46,4]}]}]}];t.a=e},415:function(n,t,a){},421:function(n,t,a){"use strict";var e=a(415);a.n(e).a},433:function(n,t,a){"use strict";a.r(t);var e=a(411),r=a(412),o=a(410),c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},i=function(){return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var a=[],e=!0,r=!1,o=void 0;try{for(var c,i=n[Symbol.iterator]();!(e=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);e=!0);}catch(n){r=!0,o=n}finally{try{!e&&i.return&&i.return()}finally{if(r)throw o}}return a}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function l(n){if(Array.isArray(n)){for(var t=0,a=Array(n.length);t<n.length;t++)a[t]=n[t];return a}return Array.from(n)}var u={name:"Home",data:function(){var n=Object(e.i)("CalcTurnFourWei")||[],t=Object(e.i)("platform")||0,a=["","","",""];return{petData:r.a,platform:t,name:"",name2:"",GPF:[130,""].concat(a),GPFR:[3,3,2,2],f:[].concat(a),gf:[].concat(l(a.map(function(){return 50}))),tf:[].concat(a),FV:null,columns:[{title:"Lv1 四圍",align:"center",className:"color1",children:[{title:"血",key:"fhp",align:"center",className:"color1"},{title:"攻",key:"fatk",align:"center",className:"color1"},{title:"防",key:"fdef",align:"center",className:"color1"},{title:"敏",key:"fagi",align:"center",className:"color1"},{title:"戰",key:"fscore",align:"center",className:"color1"}]},{title:"轉後成長檔",align:"center",className:"color1",children:[{title:"體",key:"chp",align:"center",className:"color1"},{title:"腕",key:"catk",align:"center",className:"color1"},{title:"耐",key:"cdef",align:"center",className:"color1"},{title:"速",key:"cagi",align:"center",className:"color1"}]},{title:"成長率",align:"center",className:"color5",children:[{title:"血",key:"vhp",align:"center",className:"color5"},{title:"攻",key:"vatk",align:"center",className:"color5"},{title:"防",key:"vdef",align:"center",className:"color5"},{title:"敏",key:"vagi",align:"center",className:"color5"},{title:"成長",key:"vSum",align:"center",className:"color5"}]},{title:"Lv140 四圍",align:"center",className:"color5",children:[{title:"血",key:"ffhp",align:"center",className:"color5"},{title:"攻",key:"ffatk",align:"center",className:"color5"},{title:"防",key:"ffdef",align:"center",className:"color5"},{title:"敏",key:"ffagi",align:"center",className:"color5"},{title:"戰",key:"ffscore",align:"center",className:"color5"}]}],data:[],storage:n}},mounted:function(){try{var n=JSON.parse(Object(e.a)(this.$route.query.search)),t=n.GPF,a=n.GPFR,r=n.name,o=n.f,c=n.gf,i=n.tf;this.GPF=t,this.GPFR=a,this.name=r,this.f=o,this.gf=c,this.tf=i,this.handleCalc(!1)}catch(n){}},computed:{getPetData:function(){return this.petData[this.platform].data}},methods:{handleChange:function(n){var t=n.split("."),a=i(t,2),e=a[0],r=a[1],o=this.getPetData[e].arr[r],c=o.name,u=o.GPF;this.GPF=[this.GPF[0]].concat(l(u)),this.name=c},handleChangePlatform:function(n){Object(e.j)("platform",n)},handleCalc:function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=function(n){return Array.isArray(n)?n:Array.from(n)}(this.GPF),a=(t[0],t[1],t.slice(2));this.FV=Object(e.h)(a).m;var r=Object(e.g)(this),o=i(r.fourWei,5),u=o[0],f=o[1],s=o[2],m=o[3],h=o[4],F=r.health,P=r.gRate,v=i(r.tGpf,4),G=v[0],p=v[1],d=v[2],g=v[3],y=r.fullFourWei,k=Object(e.b)(JSON.stringify({GPF:this.GPF,f:this.f,GPFR:this.GPFR,name:this.name,gf:this.gf,tf:this.tf}));if(this.$router.push({path:"",query:{search:k}}),this.data=[c({fhp:u,fatk:f,fdef:s,fagi:m,fscore:h},F,P,{chp:G,catk:p,cdef:d,cagi:g},y)],n){var b=[].concat(l(this.GPFR)),C=[].concat(l(this.GPF)),_=[].concat(l(this.f)),R=[].concat(l(this.gf)),x=[].concat(l(this.tf)),I=this.name;this.storage.unshift({name:I,GPFR:b,GPF:C,f:_,gf:R,tf:x}),this.storage.length>11&&this.storage.pop(),Object(e.j)("CalcTurnFourWei",this.storage)}},handleRecodeCalc:function(n){var t=this.storage[n],a=t.GPFR,e=t.GPF,r=t.f,o=t.name,c=t.tf,i=t.gf;this.name=o,this.GPF=[].concat(l(e)),this.GPFR=[].concat(l(a)),this.f=[].concat(l(r)),this.gf=[].concat(l(i)),this.tf=[].concat(l(c)),this.handleCalc(!1)}},components:{CalcInput:o.a}},f=(a(421),a(2)),s=Object(f.a)(u,function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"container"},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Row",[a("Col",{attrs:{span:"6"}},[a("Button",{attrs:{type:"info",long:""}},[n._v("\n                      基礎素質\n                  ")])],1),n._v(" "),a("Col",{attrs:{span:"6"}},[a("Select",{attrs:{filterable:"",long:""},on:{input:n.handleChangePlatform},model:{value:n.platform,callback:function(t){n.platform=t},expression:"platform"}},n._l(n.petData,function(n,t){var e=n.platform;return a("Option",{key:e,attrs:{label:e,value:t}})}))],1),n._v(" "),a("Col",{attrs:{span:"6"}},[a("Select",{attrs:{filterable:"",long:""},on:{input:n.handleChange},model:{value:n.name2,callback:function(t){n.name2=t},expression:"name2"}},n._l(n.getPetData,function(t,e){return a("OptionGroup",{key:t.name,attrs:{label:t.name}},n._l(t.arr,function(n,t){return a("Option",{key:n.name,attrs:{value:e+"."+t,label:n.name}})}))}))],1),n._v(" "),a("Col",{attrs:{span:"6"}},[a("Input",{attrs:{placeholder:"寵物名稱"},model:{value:n.name,callback:function(t){n.name=t},expression:"name"}})],1)],1),n._v(" "),a("CalcInput",{attrs:{v:n.GPF,PH:["轉前等級","係數","體","腕","耐","速"]}}),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Button",{attrs:{type:"info",long:""}},[n._v("\n                      初始隨機(相加總合10)\n                  ")])],1)],1),n._v(" "),a("CalcInput",{attrs:{v:n.GPFR,PH:["檔次體","檔次腕","檔次耐","檔次速"]}}),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Button",{attrs:{type:"info",long:""}},[n._v("\n                      隨機檔次(-2 ~ +2)\n                  ")])],1)],1),n._v(" "),a("CalcInput",{attrs:{v:n.f,PH:["檔次體","檔次腕","檔次耐","檔次速"]}}),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Button",{attrs:{type:"info",long:""}},[n._v("\n                      女寵餵食(0 ~ 50)\n                  ")])],1)],1),n._v(" "),a("CalcInput",{attrs:{v:n.gf,PH:["體","腕","耐","速"]}}),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Button",{attrs:{type:"info",long:""}},[n._v("\n                      1轉隨機檔次(-2 ~ +2)\n                  ")])],1)],1),n._v(" "),a("CalcInput",{attrs:{v:n.tf,PH:["檔次體","檔次腕","檔次耐","檔次速"]}}),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Button",{attrs:{type:"success",long:"",icon:"ios-search"},on:{click:n.handleCalc}},[n._v("\n                      計算\n                  ")])],1)],1)],1),n._v(" "),a("Col",{attrs:{span:"12"}},n._l(n.storage,function(t,e){var r=t.name,o=t.GPF,c=t.GPFR,i=t.f;return a("Button",{key:e,attrs:{type:"ghost",long:"",icon:"ios-search"},on:{click:function(t){n.handleRecodeCalc(e)}}},[n._v("\n              "+n._s(r+" "+o.join()+"|"+c.join()+"|"+i.join())+"\n          ")])}))],1),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Table",{attrs:{border:"",columns:n.columns,data:n.data}})],1)],1)],1)},[],!1,null,"36f1b218",null);t.default=s.exports}}]);
//# sourceMappingURL=CalcTurnFourWeib3e9b296017392767eb8.js.map