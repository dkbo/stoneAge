(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{409:function(t,n,r){"use strict";var e={name:"CalcInput",props:{v:Array,PH:Array}},a=r(2),o=Object(a.a)(e,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("Row",t._l(t.v,function(n,e){return r("Col",{key:e,attrs:{span:24/t.v.length}},[r("Input",{attrs:{number:"",placeholder:t.PH[e]},model:{value:t.v[e],callback:function(n){t.$set(t.v,e,n)},expression:"v[i]"}})],1)}))},[],!1,null,null,null);n.a=o.exports},410:function(t,n,r){"use strict";r.d(n,"b",function(){return l}),r.d(n,"a",function(){return f}),r.d(n,"i",function(){return s}),r.d(n,"h",function(){return h}),r.d(n,"g",function(){return b}),r.d(n,"c",function(){return R}),r.d(n,"f",function(){return x}),r.d(n,"d",function(){return S}),r.d(n,"e",function(){return N});var e=r(412),a=r.n(e),o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},i=function(){return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,n){var r=[],e=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(e=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);e=!0);}catch(t){a=!0,o=t}finally{try{!e&&c.return&&c.return()}finally{if(a)throw o}}return r}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function c(t){if(Array.isArray(t)){for(var n=0,r=Array(t.length);n<t.length;n++)r[n]=t[n];return r}return Array.from(t)}function u(t){return Array.isArray(t)?t:Array.from(t)}var l=function(t){return a.a.encode(t)},f=function(t){return a.a.decode(t)},s=function(t,n){arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?localStorage[l(t)]=l(n):localStorage[l(t)]=l(JSON.stringify(n))},h=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=localStorage[l(t)];if(r)try{var e=f(r);return n?function(t){try{return JSON.parse(t)}catch(t){return""}}(e):e}catch(t){return""}return""},m=function(t){return((t.LV-1)*t.GC+t.IA)*t.ISI/100},v=function(t){var n=t.ISI,r=t.ISR;return 100*((n+(void 0===r?2.5:r))*t.FV/100).toFixed(3)/100},d=function(t,n,r,e,a){return~~(Math.min(t+e,150)*(r+4*n)/(a+4*e))},F=function(t,n){return~~(t+139*n)},p=function(t){var n=i(t,4);return 4*n[0]+n[1]+n[2]+n[3]},g=function(t){var n=i(t,4),r=n[0],e=n[1];return.1*(r+n[2])+e+.05*n[3]},P=function(t){var n=i(t,4);return.1*(n[0]+n[1])+n[2]+.05*n[3]},G=function(t){var n=i(t,4);n[0],n[1],n[2];return n[3]},y=[{h:5,m:4.75,l:4.5},{h:5.2,m:4.95,l:4.7},{h:5.4,m:5.15,l:4.9},{h:5.6,m:5.35,l:5.1},{h:5.8,m:5.55,l:5.3},{h:6,m:5.75,l:5.5}],b=function(t){var n=t.reduce(function(t,n){return t+n});return n>=100?y[0]:n>=95?y[1]:n>=90?y[2]:n>=85?y[3]:n>=80?y[4]:y[5]},k=function(t){var n=t.reduce(function(t,n){return t+n});return n>=130?y[0]:n>=100?y[1]:n>=95?y[2]:n>=85?y[3]:n>=80?y[4]:y[5]},C={4.75:0,4.95:1,5.15:2,5.35:3,5.55:4,5.75:5},R=function(t){var n=t.GC,r=void 0===n?4:n,e=t.GPF,a=t.GPFR,o=t.f,i=t.FV,c=u(e),l=c[0],f=c[1],s=c.slice(2),h=s.map(function(t,n){return t+a[n]+o[n]}).map(function(t){return m({LV:l,GC:r,IA:f,ISI:t})}),d=s.map(function(t,n){return v({ISI:t+o[n],FV:i})}),F=+p(h).toFixed(2),y=+g(h).toFixed(2),b=+P(h).toFixed(2),k=+G(h).toFixed(2),C=+p(d).toFixed(4),R=+g(d).toFixed(4),x=+P(d).toFixed(4),I=+G(d).toFixed(4),A=+(R+x+I).toFixed(4);return{health:{hhp:h[0],hatk:h[1],hdef:h[2],hagi:h[3]},fourWei:[F,y,b,k],gRate:{vhp:C,vatk:R,vdef:x,vagi:I,vSum:A}}},x=function(t){var n=t.GC,r=void 0===n?4:n,e=t.GPF,a=t.GPFR,o=t.f,i=t.gf,l=t.tf,f=t.FV,s=u(e),h=s[0],y=s[1],b=s.slice(2),R=[].concat(c(b),c(o)).reduce(function(t,n){return t+n}),x=Math.min(i.reduce(function(t,n){return t+n}),150),I=~~(1.3*Math.max(~~Math.pow(x/100,5),0))+~~((h-100)/(1.2*(5-C[f])+5)),A=[d(I,b[0]+o[0],i[0],R,x),d(I,b[1]+o[1],i[1],R,x),d(I,b[2]+o[2],i[2],R,x),d(I,b[3]+o[3],i[3],R,x)],_=A.map(function(t,n){return t+a[n]+ +l[n]}),w=k(A.map(function(t,n){return t+ +l[n]})).m,O=_.map(function(t){return m({LV:1,GC:r,IA:y,ISI:t})}),S=A.map(function(t,n){return v({ISI:t+l[n],FV:w})}),j=+p(O).toFixed(2),N=+g(O).toFixed(2),V=+P(O).toFixed(2),E=+G(O).toFixed(2),W=+p(S).toFixed(4),H=+g(S).toFixed(4),J=+P(S).toFixed(4),B=+G(S).toFixed(4),M=+(H+J+B).toFixed(4),$=F(+j,+W),D=F(+N,+H),T=F(+V,+J),L=F(+B,+B),q=~~($/4)+~~D+~~T+~~L;return{health:{hhp:O[0],hatk:O[1],hdef:O[2],hagi:O[3]},fourWei:[j,N,V,E],tGpf:A,gRate:{vhp:W,vatk:H,vdef:J,vagi:B,vSum:M},fullFourWei:{ffhp:$,ffatk:D,ffdef:T,ffagi:L,ffscore:q}}},I=function(t){var n=[],r=[];return function t(e,a){for(var o=0;o<e[a].length;o++)r[a]=e[a][o],a!==e.length-1?t(e,a+1):n.push([].concat(r))}(t,0),n},A=[-2,-1,0,1,2],_=I([A,A,A,A]),w=[].concat(c(Array(11).keys())),O=I([w,w,w,w]).filter(function(t){return 10===t.reduce(function(t,n){return t+n})}),S=function(t){return new Promise(function(n){var r={},e=u(t),a=(e[0],e[1],e.slice(2)),c=b(a).m;setTimeout(function(){_.forEach(function(n){var e=i(n,4),a=e[0],u=e[1],l=e[2],f=e[3];O.forEach(function(n){var e=i(n,4),s=e[0],h=e[1],m=e[2],v=e[3],d=R({GPF:t,GPFR:[s,h,m,v],f:[a,u,l,f],FV:c}),F=i(d.fourWei,4),p=F[0],g=F[1],P=F[2],G=F[3],y=d.health,b=d.gRate,k=o({hp:p,atk:g,def:P,agi:G,ghp:s,gatk:h,gdef:m,gagi:v,fhp:a,fatk:u,fdef:l,fagi:f},y,b),C=~~p+","+~~g+","+~~P+","+~~G;r[C]?r[C].push(k):r[C]=[k]})}),n(r)},50)})},j=function(t,n){return Math.round(100*t/n-2.5,0)},N=function(t){var n=t.P,r=function(t){var n=i(t,4);return(1.1*n[0]-n[1]-n[2]-n[3])/4.2}(n),e=function(t){var n=i(t,5),r=(n[0],n[1]),e=n[2],a=n[3];return(10*r-e-.9*n[4]-.45*a)/9.9}([].concat(c(n),[r])),a=function(t){var n=i(t,5),r=(n[0],n[1]),e=n[2],a=n[3];return(10*e-r-.9*n[4]-.45*a)/9.9}([].concat(c(n),[r])),o=function(t){var n=i(t,4);n[0],n[1],n[2];return n[3]}(n),u=[];return y.forEach(function(t){var n=t.m,i=j(r,n)-2,c=j(e,n)-2,l=j(a,n)-2,f=j(o,n)-2;return b([i,c,l,f]).m===n&&(u.push({hp:i,atk:c,def:l,agi:f,m:n}),!0)}),u}},411:function(t,n,r){"use strict";n.a=[{name:"老虎系",arr:[{name:"貝魯卡",GPF:[24,23,28,16,25]},{name:"貝魯伊卡",GPF:[23,21,30,13,28]},{name:"格魯西斯",GPF:[21,20,30,13,28]},{name:"金格薩貝魯",GPF:[25,19,29,18,29]}]},{name:"雷龍系",arr:[{name:"布洛多斯",GPF:[25,37,27,33,6]},{name:"布林帖斯",GPF:[26,40,23,32,7]},{name:"布拉奇多斯",GPF:[24,35,35,28,6]},{name:"斯天多斯",GPF:[28,40,25,35,5]},{name:"邦恩多斯",GPF:[28,37,30,27,10]}]},{name:"暴龍系",arr:[{name:"奧卡洛斯",GPF:[25,26,34,28,19]},{name:"左迪洛斯",GPF:[26,28,30,22,22]},{name:"巴朵蘭恩",GPF:[27,23,37,20,25]},{name:"帖拉所伊朵",GPF:[28,23,35,25,21]}]},{name:"人龍系",arr:[{name:"利則諾頓",GPF:[22,27,37,19,17]},{name:"揚奇洛斯",GPF:[29,28,39,16,21]},{name:"邦奇諾",GPF:[26,24,39,16,20]},{name:"布魯頓",GPF:[25,25,39,14,26]}]},{name:"2D人龍系",arr:[{name:"2D邦奇洛",GPF:[26,25,43,20,23]}]},{name:"鯊魚系",arr:[{name:"加格",GPF:[23,30,36,15,19]}]},{name:"犀牛系",arr:[{name:"多洛布斯",GPF:[14,26,38,26,18]},{name:"貝恩達斯",GPF:[16,30,35,26,14]},{name:"多利諾布斯",GPF:[12,27,37,25,16]}]},{name:"鴕鳥系",arr:[{name:"克克洛斯",GPF:[20,20,34,12,36]},{name:"奇寶",GPF:[20,20,36,14,34]}]},{name:"水龍系",arr:[{name:"蘭貝魯斯",GPF:[21,26,37,21,21]}]},{name:"飛龍系",arr:[{name:"朵拉比斯",GPF:[23,22,36,18,28]}]},{name:"威威系",arr:[{name:"威伯",GPF:[20,20,35,16,29]}]},{name:"拳王系",arr:[{name:"柏克爾",GPF:[20,23,38,22,24]}]},{name:"跳狗系",arr:[{name:"拉奇魯哥",GPF:[23,24,39,15,22]}]}]},416:function(t,n,r){},424:function(t,n,r){"use strict";var e=r(416);r.n(e).a},430:function(t,n,r){"use strict";r.r(n);var e=r(410),a=r(411),o=r(409),i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},c=function(){return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,n){var r=[],e=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(e=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);e=!0);}catch(t){a=!0,o=t}finally{try{!e&&c.return&&c.return()}finally{if(a)throw o}}return r}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function u(t){if(Array.isArray(t)){for(var n=0,r=Array(t.length);n<t.length;n++)r[n]=t[n];return r}return Array.from(t)}var l={name:"Home",data:function(){var t=Object(e.h)("CalcFourWei")||[],n=["","","",""];return{petData:a.a,name:"",name2:"",GPF:["",""].concat(n),GPFR:[3,3,2,2],f:[].concat(n),FV:null,columns:[{title:"四圍",align:"center",className:"color1",children:[{title:"血",key:"fhp",align:"center",className:"color1"},{title:"攻",key:"fatk",align:"center",className:"color1"},{title:"防",key:"fdef",align:"center",className:"color1"},{title:"敏",key:"fagi",align:"center",className:"color1"}]},{title:"成長率",align:"center",className:"color5",children:[{title:"血",key:"vhp",align:"center",className:"color5"},{title:"攻",key:"vatk",align:"center",className:"color5"},{title:"防",key:"vdef",align:"center",className:"color5"},{title:"敏",key:"vagi",align:"center",className:"color5"},{title:"成長",key:"vSum",align:"center",className:"color5"}]}],data:[],storage:t}},mounted:function(){try{var t=JSON.parse(Object(e.a)(this.$route.query.search)),n=t.GPF,r=t.GPFR,a=t.name,o=t.f;this.GPF=n,this.GPFR=r,this.name=a,this.f=o,this.handleCalc(!1)}catch(t){}},computed:{},methods:{handleChange:function(t){var n=t.split("."),r=c(n,2),e=r[0],o=r[1],i=a.a[e].arr[o],l=i.name,f=i.GPF;this.GPF=[this.GPF[0]].concat(u(f)),this.name=l},handleCalc:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=function(t){return Array.isArray(t)?t:Array.from(t)}(this.GPF),r=(n[0],n[1],n.slice(2));this.FV=Object(e.g)(r).m;var a=Object(e.c)(this),o=c(a.fourWei,4),l=o[0],f=o[1],s=o[2],h=o[3],m=a.health,v=a.gRate,d=Object(e.b)(JSON.stringify({GPF:this.GPF,f:this.f,GPFR:this.GPFR,name:this.name}));if(this.$router.push({path:"",query:{search:d}}),this.data=[i({fhp:l,fatk:f,fdef:s,fagi:h},m,v)],t){var F=[].concat(u(this.GPFR)),p=[].concat(u(this.GPF)),g=[].concat(u(this.f)),P=this.name;this.storage.unshift({name:P,GPFR:F,GPF:p,f:g}),this.storage.length>7&&this.storage.pop(),Object(e.i)("CalcFourWei",this.storage)}},handleRecodeCalc:function(t){var n=this.storage[t],r=n.GPFR,e=n.GPF,a=n.f,o=n.name;this.name=o,this.GPF=[].concat(u(e)),this.GPFR=[].concat(u(r)),this.f=[].concat(u(a)),this.handleCalc(!1)}},components:{CalcInput:o.a}},f=(r(424),r(2)),s=Object(f.a)(l,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"container"},[r("Row",[r("Col",{attrs:{span:"12"}},[r("Row",[r("Col",{attrs:{span:"8"}},[r("Button",{attrs:{type:"info",long:""}},[t._v("\n                      基礎素質\n                  ")])],1),t._v(" "),r("Col",{attrs:{span:"8"}},[r("Select",{attrs:{filterable:"",long:""},on:{input:t.handleChange},model:{value:t.name2,callback:function(n){t.name2=n},expression:"name2"}},t._l(t.petData,function(n,e){return r("OptionGroup",{key:n.name,attrs:{label:n.name}},t._l(n.arr,function(t,n){return r("Option",{key:t.name,attrs:{value:e+"."+n,label:t.name}})}))}))],1),t._v(" "),r("Col",{attrs:{span:"8"}},[r("Input",{attrs:{placeholder:"寵物名稱"},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}})],1)],1),t._v(" "),r("CalcInput",{attrs:{v:t.GPF,PH:["等級","係數","體","腕","耐","速"]}}),t._v(" "),r("Row",[r("Col",{attrs:{span:"24"}},[r("Button",{attrs:{type:"info",long:""}},[t._v("\n                      初始隨機(相加總合10)\n                  ")])],1)],1),t._v(" "),r("CalcInput",{attrs:{v:t.GPFR,PH:["檔次體","檔次腕","檔次耐","檔次速"]}}),t._v(" "),r("Row",[r("Col",{attrs:{span:"24"}},[r("Button",{attrs:{type:"info",long:""}},[t._v("\n                      隨機檔次(-2 ~ +2)\n                  ")])],1)],1),t._v(" "),r("CalcInput",{attrs:{v:t.f,PH:["檔次體","檔次腕","檔次耐","檔次速"]}}),t._v(" "),r("Row",[r("Col",{attrs:{span:"24"}},[r("Button",{attrs:{type:"success",long:"",icon:"ios-search"},on:{click:t.handleCalc}},[t._v("\n                      計算\n                  ")])],1)],1)],1),t._v(" "),r("Col",{attrs:{span:"12"}},t._l(t.storage,function(n,e){var a=n.name,o=n.GPF,i=n.GPFR,c=n.f;return r("Button",{key:e,attrs:{type:"ghost",long:"",icon:"ios-search"},on:{click:function(n){t.handleRecodeCalc(e)}}},[t._v("\n              "+t._s(a+" "+o.join()+"|"+i.join()+"|"+c.join())+"\n          ")])}))],1),t._v(" "),r("Row",[r("Col",{attrs:{span:"24"}},[r("Table",{attrs:{border:"",columns:t.columns,data:t.data}})],1)],1)],1)},[],!1,null,"634f84c2",null);n.default=s.exports}}]);
//# sourceMappingURL=CalcFourWei4b24288f853b6fb18120.js.map