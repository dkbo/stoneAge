(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{409:function(t,n,e){"use strict";var r={name:"CalcInput",props:{v:Array,PH:Array}},a=e(2),o=Object(a.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Row",t._l(t.v,function(n,r){return e("Col",{key:r,attrs:{span:24/t.v.length}},[e("Input",{attrs:{number:"",placeholder:t.PH[r]},model:{value:t.v[r],callback:function(n){t.$set(t.v,r,n)},expression:"v[i]"}})],1)}))},[],!1,null,null,null);n.a=o.exports},410:function(t,n,e){"use strict";e.d(n,"b",function(){return u}),e.d(n,"a",function(){return f}),e.d(n,"i",function(){return s}),e.d(n,"h",function(){return m}),e.d(n,"g",function(){return k}),e.d(n,"c",function(){return R}),e.d(n,"f",function(){return _}),e.d(n,"d",function(){return O}),e.d(n,"e",function(){return j});var r=e(412),a=e.n(r),o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},c=function(){return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,n){var e=[],r=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(t){a=!0,o=t}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return e}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function i(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}function l(t){return Array.isArray(t)?t:Array.from(t)}var u=function(t){return a.a.encode(t)},f=function(t){return a.a.decode(t)},s=function(t,n){arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?localStorage[u(t)]=u(n):localStorage[u(t)]=u(JSON.stringify(n))},m=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=localStorage[u(t)];if(e)try{var r=f(e);return n?function(t){try{return JSON.parse(t)}catch(t){return""}}(r):r}catch(t){return""}return""},h=function(t){return((t.LV-1)*t.GC+t.IA)*t.ISI/100},v=function(t){var n=t.ISI,e=t.ISR;return 100*((n+(void 0===e?2.5:e))*t.FV/100).toFixed(3)/100},F=function(t,n,e,r,a){return~~(Math.min(t+r,150)*(e+4*n)/(a+4*r))},d=function(t,n){return~~(t+139*n)},g=function(t){var n=c(t,4);return 4*n[0]+n[1]+n[2]+n[3]},p=function(t){var n=c(t,4),e=n[0],r=n[1];return.1*(e+n[2])+r+.05*n[3]},P=function(t){var n=c(t,4);return.1*(n[0]+n[1])+n[2]+.05*n[3]},G=function(t){var n=c(t,4);n[0],n[1],n[2];return n[3]},y=[{h:5,m:4.75,l:4.5},{h:5.2,m:4.95,l:4.7},{h:5.4,m:5.15,l:4.9},{h:5.6,m:5.35,l:5.1},{h:5.8,m:5.55,l:5.3},{h:6,m:5.75,l:5.5}],k=function(t){var n=t.reduce(function(t,n){return t+n});return n>=100?y[0]:n>=95?y[1]:n>=90?y[2]:n>=85?y[3]:n>=80?y[4]:y[5]},C=function(t){var n=t.reduce(function(t,n){return t+n});return n>=130?y[0]:n>=100?y[1]:n>=95?y[2]:n>=85?y[3]:n>=80?y[4]:y[5]},b={4.75:0,4.95:1,5.15:2,5.35:3,5.55:4,5.75:5},R=function(t){var n=t.GC,e=void 0===n?4:n,r=t.GPF,a=t.GPFR,o=t.f,c=t.FV,i=l(r),u=i[0],f=i[1],s=i.slice(2),m=s.map(function(t,n){return t+a[n]+o[n]}).map(function(t){return h({LV:u,GC:e,IA:f,ISI:t})}),F=s.map(function(t,n){return v({ISI:t+o[n],FV:c})}),d=+g(m).toFixed(2),y=+p(m).toFixed(2),k=+P(m).toFixed(2),C=+G(m).toFixed(2),b=~~(~~d/4)+~~y+~~k+~~C,R=+g(F).toFixed(4),_=+p(F).toFixed(4),x=+P(F).toFixed(4),I=+G(F).toFixed(4),N=+(_+x+I).toFixed(4);return{health:{hhp:m[0],hatk:m[1],hdef:m[2],hagi:m[3]},fourWei:[d,y,k,C,b],gRate:{vhp:R,vatk:_,vdef:x,vagi:I,vSum:N}}},_=function(t){var n=t.GC,e=void 0===n?4:n,r=t.GPF,a=t.GPFR,o=t.f,c=t.gf,u=t.tf,f=t.FV,s=l(r),m=s[0],y=s[1],k=s.slice(2),R=[].concat(i(k),i(o)).reduce(function(t,n){return t+n}),_=Math.min(c.reduce(function(t,n){return t+n}),150),x=~~(1.3*Math.max(~~Math.pow(_/100,5),0))+~~((m-100)/(1.2*(5-b[f])+5)),I=[F(x,k[0]+o[0],c[0],R,_),F(x,k[1]+o[1],c[1],R,_),F(x,k[2]+o[2],c[2],R,_),F(x,k[3]+o[3],c[3],R,_)],N=I.map(function(t,n){return t+a[n]+ +u[n]}),w=C(I.map(function(t,n){return t+ +u[n]})).m,A=N.map(function(t){return h({LV:1,GC:e,IA:y,ISI:t})}),O=I.map(function(t,n){return v({ISI:t+u[n],FV:w})}),S=+g(A).toFixed(2),j=+p(A).toFixed(2),V=+P(A).toFixed(2),H=+G(A).toFixed(2),W=~~(~~S/4)+~~j+~~V+~~H,B=+g(O).toFixed(4),D=+p(O).toFixed(4),E=+P(O).toFixed(4),J=+G(O).toFixed(4),T=+(D+E+J).toFixed(4),L=d(+S,+B),M=d(+j,+D),$=d(+V,+E),q=d(+J,+J),z=~~(L/4)+M+$+q;return{health:{hhp:A[0],hatk:A[1],hdef:A[2],hagi:A[3]},fourWei:[S,j,V,H,W],tGpf:I,gRate:{vhp:B,vatk:D,vdef:E,vagi:J,vSum:T},fullFourWei:{ffhp:L,ffatk:M,ffdef:$,ffagi:q,ffscore:z}}},x=function(t){var n=[],e=[];return function t(r,a){for(var o=0;o<r[a].length;o++)e[a]=r[a][o],a!==r.length-1?t(r,a+1):n.push([].concat(e))}(t,0),n},I=[-2,-1,0,1,2],N=x([I,I,I,I]),w=[].concat(i(Array(11).keys())),A=x([w,w,w,w]).filter(function(t){return 10===t.reduce(function(t,n){return t+n})}),O=function(t){return new Promise(function(n){var e={},r=l(t),a=(r[0],r[1],r.slice(2)),i=k(a).m;setTimeout(function(){N.forEach(function(n){var r=c(n,4),a=r[0],l=r[1],u=r[2],f=r[3];A.forEach(function(n){var r=c(n,4),s=r[0],m=r[1],h=r[2],v=r[3],F=R({GPF:t,GPFR:[s,m,h,v],f:[a,l,u,f],FV:i}),d=c(F.fourWei,5),g=d[0],p=d[1],P=d[2],G=d[3],y=d[4],k=F.health,C=F.gRate,b=o({hp:g,atk:p,def:P,agi:G,score:y,ghp:s,gatk:m,gdef:h,gagi:v,fhp:a,fatk:l,fdef:u,fagi:f},k,C),_=~~g+","+~~p+","+~~P+","+~~G;e[_]?e[_].push(b):e[_]=[b]})}),n(e)},50)})},S=function(t,n){return Math.round(100*t/n-2.5,0)},j=function(t){var n=t.P,e=function(t){var n=c(t,4);return(1.1*n[0]-n[1]-n[2]-n[3])/4.2}(n),r=function(t){var n=c(t,5),e=(n[0],n[1]),r=n[2],a=n[3];return(10*e-r-.9*n[4]-.45*a)/9.9}([].concat(i(n),[e])),a=function(t){var n=c(t,5),e=(n[0],n[1]),r=n[2],a=n[3];return(10*r-e-.9*n[4]-.45*a)/9.9}([].concat(i(n),[e])),o=function(t){var n=c(t,4);n[0],n[1],n[2];return n[3]}(n),l=[];return y.forEach(function(t){var n=t.m,c=S(e,n)-2,i=S(r,n)-2,u=S(a,n)-2,f=S(o,n)-2;return k([c,i,u,f]).m===n&&(l.push({hp:c,atk:i,def:u,agi:f,m:n}),!0)}),l}},411:function(t,n,e){"use strict";n.a=[{arr:[{name:"葛雷基歐",GPF:[39,24,40,27,22]},{name:"葛雷洛比",GPF:[39,27,40,24,22]},{name:"葛雷吉魯",GPF:[39,24,44,24,22]},{name:"葛雷馬恩",GPF:[39,23,40,22,30]}]},{name:"老虎系",arr:[{name:"貝魯卡",GPF:[24,23,28,16,25]},{name:"貝魯伊卡",GPF:[23,21,30,13,28]},{name:"格魯西斯",GPF:[21,20,30,13,28]},{name:"金格薩貝魯",GPF:[25,19,29,18,29]}]},{name:"雷龍系",arr:[{name:"布洛多斯",GPF:[25,37,27,33,6]},{name:"布林帖斯",GPF:[26,40,23,32,7]},{name:"布拉奇多斯",GPF:[24,35,35,28,6]},{name:"斯天多斯",GPF:[28,40,25,35,5]},{name:"邦恩多斯",GPF:[28,37,30,27,10]}]},{name:"暴龍系",arr:[{name:"奧卡洛斯",GPF:[25,26,34,28,19]},{name:"左迪洛斯",GPF:[26,28,30,22,22]},{name:"巴朵蘭恩",GPF:[27,23,37,20,25]},{name:"帖拉所伊朵",GPF:[28,23,35,25,21]}]},{name:"人龍系",arr:[{name:"利則諾頓",GPF:[22,27,37,19,17]},{name:"揚奇洛斯",GPF:[29,28,39,16,21]},{name:"邦奇諾",GPF:[26,24,39,16,20]},{name:"布魯頓",GPF:[25,25,39,14,26]}]},{name:"2D人龍系",arr:[{name:"2D揚奇洛斯",GPF:[32,28,42,18,25]},{name:"2D布魯頓",GPF:[26,26,41,17,29]},{name:"2D利則諾頓",GPF:[26,26,41,22,22]},{name:"2D邦奇洛",GPF:[26,25,43,20,23]}]},{name:"鯊魚系",arr:[{name:"加格",GPF:[23,30,36,15,19]}]},{name:"犀牛系",arr:[{name:"多洛布斯",GPF:[14,26,38,26,18]},{name:"貝恩達斯",GPF:[16,30,35,26,14]},{name:"多利諾布斯",GPF:[12,27,37,25,16]}]},{name:"鴕鳥系",arr:[{name:"克克洛斯",GPF:[20,20,34,12,36]},{name:"奇寶",GPF:[20,20,36,14,34]}]},{name:"水龍系",arr:[{name:"蘭貝魯斯",GPF:[21,26,37,21,21]}]},{name:"飛龍系",arr:[{name:"朵拉比斯",GPF:[23,22,36,18,28]}]},{name:"威威系",arr:[{name:"威威",GPF:[15,21,36,10,33]},{name:"烏卡魯",GPF:[13,25,35,11,29]},{name:"烏寶寶",GPF:[15,20,35,12,34]},{name:"威伯",GPF:[20,20,35,16,29]}]},{name:"拳王系",arr:[{name:"柏克爾",GPF:[20,23,38,22,24]}]},{name:"跳狗系",arr:[{name:"拉奇魯哥",GPF:[23,24,39,15,22]}]}]},413:function(t,n,e){},418:function(t,n,e){"use strict";var r=e(413);e.n(r).a},431:function(t,n,e){"use strict";e.r(n);var r=e(410),a=e(411),o=e(409),c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},i=function(){return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,n){var e=[],r=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(t){a=!0,o=t}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return e}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function l(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}var u={name:"Home",data:function(){var t=Object(r.h)("CalcTurnFourWei")||[],n=["","","",""];return{petData:a.a,name:"",name2:"",GPF:[130,""].concat(n),GPFR:[3,3,2,2],f:[].concat(n),gf:[].concat(l(n.map(function(){return 50}))),tf:[].concat(n),FV:null,columns:[{title:"Lv1 四圍",align:"center",className:"color1",children:[{title:"血",key:"fhp",align:"center",className:"color1"},{title:"攻",key:"fatk",align:"center",className:"color1"},{title:"防",key:"fdef",align:"center",className:"color1"},{title:"敏",key:"fagi",align:"center",className:"color1"},{title:"戰",key:"fscore",align:"center",className:"color1"}]},{title:"轉後成長檔",align:"center",className:"color1",children:[{title:"體",key:"chp",align:"center",className:"color1"},{title:"腕",key:"catk",align:"center",className:"color1"},{title:"耐",key:"cdef",align:"center",className:"color1"},{title:"速",key:"cagi",align:"center",className:"color1"}]},{title:"成長率",align:"center",className:"color5",children:[{title:"血",key:"vhp",align:"center",className:"color5"},{title:"攻",key:"vatk",align:"center",className:"color5"},{title:"防",key:"vdef",align:"center",className:"color5"},{title:"敏",key:"vagi",align:"center",className:"color5"},{title:"成長",key:"vSum",align:"center",className:"color5"}]},{title:"Lv140 四圍",align:"center",className:"color5",children:[{title:"血",key:"ffhp",align:"center",className:"color5"},{title:"攻",key:"ffatk",align:"center",className:"color5"},{title:"防",key:"ffdef",align:"center",className:"color5"},{title:"敏",key:"ffagi",align:"center",className:"color5"},{title:"戰",key:"ffscore",align:"center",className:"color5"}]}],data:[],storage:t}},mounted:function(){try{var t=JSON.parse(Object(r.a)(this.$route.query.search)),n=t.GPF,e=t.GPFR,a=t.name,o=t.f,c=t.gf,i=t.tf;this.GPF=n,this.GPFR=e,this.name=a,this.f=o,this.gf=c,this.tf=i,this.handleCalc(!1)}catch(t){}},computed:{},methods:{handleChange:function(t){var n=t.split("."),e=i(n,2),r=e[0],o=e[1],c=a.a[r].arr[o],u=c.name,f=c.GPF;this.GPF=[this.GPF[0]].concat(l(f)),this.name=u},handleCalc:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=function(t){return Array.isArray(t)?t:Array.from(t)}(this.GPF),e=(n[0],n[1],n.slice(2));this.FV=Object(r.g)(e).m;var a=Object(r.f)(this),o=i(a.fourWei,5),u=o[0],f=o[1],s=o[2],m=o[3],h=o[4],v=a.health,F=a.gRate,d=i(a.tGpf,4),g=d[0],p=d[1],P=d[2],G=d[3],y=a.fullFourWei,k=Object(r.b)(JSON.stringify({GPF:this.GPF,f:this.f,GPFR:this.GPFR,name:this.name,gf:this.gf,tf:this.tf}));if(this.$router.push({path:"",query:{search:k}}),this.data=[c({fhp:u,fatk:f,fdef:s,fagi:m,fscore:h},v,F,{chp:g,catk:p,cdef:P,cagi:G},y)],t){var C=[].concat(l(this.GPFR)),b=[].concat(l(this.GPF)),R=[].concat(l(this.f)),_=[].concat(l(this.gf)),x=[].concat(l(this.tf)),I=this.name;this.storage.unshift({name:I,GPFR:C,GPF:b,f:R,gf:_,tf:x}),this.storage.length>11&&this.storage.pop(),Object(r.i)("CalcTurnFourWei",this.storage)}},handleRecodeCalc:function(t){var n=this.storage[t],e=n.GPFR,r=n.GPF,a=n.f,o=n.name,c=n.tf,i=n.gf;this.name=o,this.GPF=[].concat(l(r)),this.GPFR=[].concat(l(e)),this.f=[].concat(l(a)),this.gf=[].concat(l(i)),this.tf=[].concat(l(c)),this.handleCalc(!1)}},components:{CalcInput:o.a}},f=(e(418),e(2)),s=Object(f.a)(u,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("Row",[e("Col",{attrs:{span:"12"}},[e("Row",[e("Col",{attrs:{span:"8"}},[e("Button",{attrs:{type:"info",long:""}},[t._v("\n                      基礎素質\n                  ")])],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Select",{attrs:{filterable:"",long:""},on:{input:t.handleChange},model:{value:t.name2,callback:function(n){t.name2=n},expression:"name2"}},t._l(t.petData,function(n,r){return e("OptionGroup",{key:n.name,attrs:{label:n.name}},t._l(n.arr,function(t,n){return e("Option",{key:t.name,attrs:{value:r+"."+n,label:t.name}})}))}))],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Input",{attrs:{placeholder:"寵物名稱"},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}})],1)],1),t._v(" "),e("CalcInput",{attrs:{v:t.GPF,PH:["轉前等級","係數","體","腕","耐","速"]}}),t._v(" "),e("Row",[e("Col",{attrs:{span:"24"}},[e("Button",{attrs:{type:"info",long:""}},[t._v("\n                      初始隨機(相加總合10)\n                  ")])],1)],1),t._v(" "),e("CalcInput",{attrs:{v:t.GPFR,PH:["檔次體","檔次腕","檔次耐","檔次速"]}}),t._v(" "),e("Row",[e("Col",{attrs:{span:"24"}},[e("Button",{attrs:{type:"info",long:""}},[t._v("\n                      隨機檔次(-2 ~ +2)\n                  ")])],1)],1),t._v(" "),e("CalcInput",{attrs:{v:t.f,PH:["檔次體","檔次腕","檔次耐","檔次速"]}}),t._v(" "),e("Row",[e("Col",{attrs:{span:"24"}},[e("Button",{attrs:{type:"info",long:""}},[t._v("\n                      女寵餵食(0 ~ 50)\n                  ")])],1)],1),t._v(" "),e("CalcInput",{attrs:{v:t.gf,PH:["體","腕","耐","速"]}}),t._v(" "),e("Row",[e("Col",{attrs:{span:"24"}},[e("Button",{attrs:{type:"info",long:""}},[t._v("\n                      1轉隨機檔次(-2 ~ +2)\n                  ")])],1)],1),t._v(" "),e("CalcInput",{attrs:{v:t.tf,PH:["檔次體","檔次腕","檔次耐","檔次速"]}}),t._v(" "),e("Row",[e("Col",{attrs:{span:"24"}},[e("Button",{attrs:{type:"success",long:"",icon:"ios-search"},on:{click:t.handleCalc}},[t._v("\n                      計算\n                  ")])],1)],1)],1),t._v(" "),e("Col",{attrs:{span:"12"}},t._l(t.storage,function(n,r){var a=n.name,o=n.GPF,c=n.GPFR,i=n.f;return e("Button",{key:r,attrs:{type:"ghost",long:"",icon:"ios-search"},on:{click:function(n){t.handleRecodeCalc(r)}}},[t._v("\n              "+t._s(a+" "+o.join()+"|"+c.join()+"|"+i.join())+"\n          ")])}))],1),t._v(" "),e("Row",[e("Col",{attrs:{span:"24"}},[e("Table",{attrs:{border:"",columns:t.columns,data:t.data}})],1)],1)],1)},[],!1,null,"499e6ca6",null);n.default=s.exports}}]);
//# sourceMappingURL=CalcTurnFourWei1dfeaab64a7836bcaee6.js.map