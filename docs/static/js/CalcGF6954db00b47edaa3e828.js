(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{412:function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"a",(function(){return m})),t.d(e,"i",(function(){return f})),t.d(e,"h",(function(){return h})),t.d(e,"g",(function(){return x})),t.d(e,"c",(function(){return I})),t.d(e,"f",(function(){return w})),t.d(e,"d",(function(){return j})),t.d(e,"e",(function(){return R}));var a=t(415),r=t.n(a),o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},i=function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,e){var t=[],a=!0,r=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(a=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);a=!0);}catch(n){r=!0,o=n}finally{try{!a&&c.return&&c.return()}finally{if(r)throw o}}return t}(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function c(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}function l(n){return Array.isArray(n)?n:Array.from(n)}var u=function(n){return r.a.encode(n)},m=function(n){return r.a.decode(n)},s=function(n){try{return JSON.parse(n)}catch(n){return""}},f=function(n,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];localStorage[u(n)]=u(t?JSON.stringify(e):e)},h=function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=localStorage[u(n)];if(t)try{var a=m(t);return e?s(a):a}catch(n){return""}return""},d=function(n){return((n.LV-1)*n.GC+n.IA)*n.ISI/100},F=function(n){var e=n.ISI,t=n.ISR;return 100*((e+(void 0===t?2.5:t))*n.FV/100).toFixed(3)/100},p=function(n,e,t,a,r){return~~(Math.min(n+a,150)*(t+4*e)/(r+4*a))},g=function(n,e){return~~(n+139*e)},v=function(n){var e=i(n,4);return 4*e[0]+e[1]+e[2]+e[3]},P=function(n){var e=i(n,4),t=e[0],a=e[1];return.1*(t+e[2])+a+.05*e[3]},G=function(n){var e=i(n,4);return.1*(e[0]+e[1])+e[2]+.05*e[3]},y=function(n){var e=i(n,4);e[0],e[1],e[2];return e[3]},k=[{h:5,m:4.75,l:4.5},{h:5.2,m:4.95,l:4.7},{h:5.4,m:5.15,l:4.9},{h:5.6,m:5.35,l:5.1},{h:5.8,m:5.55,l:5.3},{h:6,m:5.75,l:5.5}],x=function(n){var e=n.reduce((function(n,e){return n+e}));return e>=100?k[0]:e>=95?k[1]:e>=90?k[2]:e>=85?k[3]:e>=80?k[4]:k[5]},b=function(n){var e=n.reduce((function(n,e){return n+e}));return e>=130?k[0]:e>=100?k[1]:e>=95?k[2]:e>=85?k[3]:e>=80?k[4]:k[5]},C={4.75:0,4.95:1,5.15:2,5.35:3,5.55:4,5.75:5},I=function(n){var e=n.GC,t=void 0===e?4:e,a=n.GPF,r=n.GPFR,o=n.f,i=n.FV,c=l(a),u=c[0],m=c[1],s=c.slice(2),f=s.map((function(n,e){return n+r[e]+o[e]})).map((function(n){return d({LV:u,GC:t,IA:m,ISI:n})})),h=s.map((function(n,e){return F({ISI:n+o[e],FV:i})})),p=+v(f).toFixed(2),g=+P(f).toFixed(2),k=+G(f).toFixed(2),x=+y(f).toFixed(2),b=~~(~~p/4)+~~g+~~k+~~x,C=+v(h).toFixed(4),I=+P(h).toFixed(4),w=+G(h).toFixed(4),N=+y(h).toFixed(4),_=+(I+w+N).toFixed(4);return{health:{hhp:f[0],hatk:f[1],hdef:f[2],hagi:f[3]},fourWei:[p,g,k,x,b],gRate:{vhp:C,vatk:I,vdef:w,vagi:N,vSum:_}}},w=function(n){var e=n.GC,t=void 0===e?4:e,a=n.GPF,r=n.GPFR,o=n.f,i=n.gf,u=n.tf,m=n.FV,s=l(a),f=s[0],h=s[1],k=s.slice(2),x=[].concat(c(k),c(o)).reduce((function(n,e){return n+e})),I=Math.min(i.reduce((function(n,e){return n+e})),150),w=~~(1.3*Math.max(~~Math.pow(I/100,5),0))+~~((f-100)/(1.2*(5-C[m])+5)),N=[p(w,k[0]+o[0],i[0],x,I),p(w,k[1]+o[1],i[1],x,I),p(w,k[2]+o[2],i[2],x,I),p(w,k[3]+o[3],i[3],x,I)],_=N.map((function(n,e){return n+r[e]+ +u[e]})),S=b(N.map((function(n,e){return n+ +u[e]}))).m,A=_.map((function(n){return d({LV:1,GC:t,IA:h,ISI:n})})),O=N.map((function(n,e){return F({ISI:n+u[e],FV:S})})),j=+v(A).toFixed(2),D=+P(A).toFixed(2),R=+G(A).toFixed(2),W=+y(A).toFixed(2),E=~~(~~j/4)+~~D+~~R+~~W,V=+v(O).toFixed(4),J=+P(O).toFixed(4),H=+G(O).toFixed(4),M=+y(O).toFixed(4),T=+(J+H+M).toFixed(4),$=g(+j,+V),B=g(+D,+J),L=g(+R,+H),q=g(+M,+M),z=~~($/4)+B+L+q;return{health:{hhp:A[0],hatk:A[1],hdef:A[2],hagi:A[3]},fourWei:[j,D,R,W,E],tGpf:N,gRate:{vhp:V,vatk:J,vdef:H,vagi:M,vSum:T},fullFourWei:{ffhp:$,ffatk:B,ffdef:L,ffagi:q,ffscore:z}}},N=function(n){var e=[],t=[];return function n(a,r){for(var o=0;o<a[r].length;o++)t[r]=a[r][o],r!==a.length-1?n(a,r+1):e.push([].concat(t))}(n,0),e},_=[-2,-1,0,1,2],S=N([_,_,_,_]),A=[].concat(c(Array(11).keys())),O=N([A,A,A,A]).filter((function(n){return 10===n.reduce((function(n,e){return n+e}))})),j=function(n){return new Promise((function(e){var t={},a=l(n),r=(a[0],a[1],a.slice(2)),c=x(r).m;setTimeout((function(){S.forEach((function(e){var a=i(e,4),r=a[0],l=a[1],u=a[2],m=a[3];O.forEach((function(e){var a=i(e,4),s=a[0],f=a[1],h=a[2],d=a[3],F=I({GPF:n,GPFR:[s,f,h,d],f:[r,l,u,m],FV:c}),p=i(F.fourWei,5),g=p[0],v=p[1],P=p[2],G=p[3],y=p[4],k=F.health,x=F.gRate,b=o({hp:g,atk:v,def:P,agi:G,score:y,ghp:s,gatk:f,gdef:h,gagi:d,fhp:r,fatk:l,fdef:u,fagi:m},k,x),C=~~g+","+~~v+","+~~P+","+~~G;t[C]?t[C].push(b):t[C]=[b]}))})),e(t)}),50)}))},D=function(n,e){return Math.round(100*n/e-2.5,0)},R=function(n){var e,t,a,r,o,l,u=n.P,m=(1.1*(e=i(u,4))[0]-e[1]-e[2]-e[3])/4.2,s=(t=[].concat(c(u),[m]),(a=i(t,5))[0],r=a[1],o=a[2],l=a[3],(10*r-o-.9*a[4]-.45*l)/9.9),f=function(n){var e=i(n,5),t=(e[0],e[1]),a=e[2],r=e[3];return(10*a-t-.9*e[4]-.45*r)/9.9}([].concat(c(u),[m])),h=function(n){var e=i(n,4);e[0],e[1],e[2];return e[3]}(u),d=[];return k.forEach((function(n){var e=n.m,t=D(m,e)-2,a=D(s,e)-2,r=D(f,e)-2,o=D(h,e)-2;return x([t,a,r,o]).m===e&&(d.push({hp:t,atk:a,def:r,agi:o,m:e}),!0)})),d}},413:function(n,e,t){"use strict";var a={name:"CalcInput",props:{v:Array,PH:Array}},r=t(2),o=Object(r.a)(a,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("Row",n._l(n.v,(function(e,a){return t("Col",{key:a,attrs:{span:24/n.v.length}},[t("Input",{attrs:{number:"",placeholder:n.PH[a]},model:{value:n.v[a],callback:function(e){n.$set(n.v,a,e)},expression:"v[i]"}})],1)})),1)}),[],!1,null,null,null);e.a=o.exports},414:function(n,e,t){"use strict";var a=[{platform:"石器傳說",data:[{name:"人龍系",arr:[{name:"邦奇洛",GPF:[26,28,40,19,21]},{name:"利則諾頓",GPF:[25,28,39,21,19]},{name:"布魯頓",GPF:[25,28,40,15,24]}]},{name:"老虎系",arr:[{name:"貝魯卡",GPF:[27,28,35,18,25]},{name:"貝魯伊卡",GPF:[27,28,35,17,26]}]},{name:"雷龍系",arr:[{name:"紅雷",GPF:[27,34,36,26,14]}]},{name:"星星系",arr:[{name:"格爾頓",GPF:[28,28,37,18,25]}]},{name:"海主人系",arr:[{name:"姆依",GPF:[28,31,20,40,18]}]}]},{platform:"石器EE",data:[{name:"馬年獸系",arr:[{name:"葛雷基歐",GPF:[39,24,40,27,22]},{name:"葛雷洛比",GPF:[39,27,40,24,22]},{name:"葛雷吉魯",GPF:[39,24,44,24,22]},{name:"葛雷馬恩",GPF:[39,23,40,22,30]}]},{name:"老虎系",arr:[{name:"貝魯卡",GPF:[24,23,28,16,25]},{name:"貝魯伊卡",GPF:[23,21,30,13,28]},{name:"格魯西斯",GPF:[21,20,30,13,28]},{name:"金格薩貝魯",GPF:[25,19,29,18,29]}]},{name:"雷龍系",arr:[{name:"布洛多斯",GPF:[25,37,27,33,6]},{name:"布林帖斯",GPF:[26,40,23,32,7]},{name:"布拉奇多斯",GPF:[24,35,35,28,6]},{name:"斯天多斯",GPF:[28,40,25,35,5]},{name:"邦恩多斯",GPF:[28,37,30,27,10]}]},{name:"暴龍系",arr:[{name:"奧卡洛斯",GPF:[25,26,34,28,19]},{name:"左迪洛斯",GPF:[26,28,30,22,22]},{name:"巴朵蘭恩",GPF:[27,23,37,20,25]},{name:"帖拉所伊朵",GPF:[28,23,35,25,21]}]},{name:"人龍系",arr:[{name:"利則諾頓",GPF:[22,27,37,19,17]},{name:"揚奇洛斯",GPF:[29,28,39,16,21]},{name:"邦奇諾",GPF:[26,24,39,16,20]},{name:"布魯頓",GPF:[25,25,39,14,26]}]},{name:"2D人龍系",arr:[{name:"2D揚奇洛斯",GPF:[32,28,42,18,25]},{name:"2D布魯頓",GPF:[26,26,41,17,29]},{name:"2D利則諾頓",GPF:[26,26,41,22,22]},{name:"2D邦奇洛",GPF:[26,25,43,20,23]}]},{name:"鯊魚系",arr:[{name:"加格",GPF:[23,30,36,15,19]}]},{name:"犀牛系",arr:[{name:"多洛布斯",GPF:[14,26,38,26,18]},{name:"貝恩達斯",GPF:[16,30,35,26,14]},{name:"多利諾布斯",GPF:[12,27,37,25,16]}]},{name:"鴕鳥系",arr:[{name:"克克洛斯",GPF:[20,20,34,12,36]},{name:"奇寶",GPF:[20,20,36,14,34]}]},{name:"水龍系",arr:[{name:"蘭貝魯斯",GPF:[21,26,37,21,21]}]},{name:"飛龍系",arr:[{name:"朵拉比斯",GPF:[23,22,36,18,28]}]},{name:"威威系",arr:[{name:"威威",GPF:[15,21,36,10,33]},{name:"烏卡魯",GPF:[13,25,35,11,29]},{name:"烏寶寶",GPF:[15,20,35,12,34]},{name:"威伯",GPF:[20,20,35,16,29]}]},{name:"拳王系",arr:[{name:"柏克爾",GPF:[20,23,38,22,24]}]},{name:"跳狗系",arr:[{name:"拉奇魯哥",GPF:[23,24,39,15,22]},{name:"魯尼帖斯",GPF:[22,27,37,16,20]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,27,23,48,5]}]},{name:"穿山甲系",arr:[{name:"卡達魯卡斯",GPF:[22,25,23,40,6]}]},{name:"海主人系",arr:[{name:"邦奇",GPF:[22,32,37,24,13]},{name:"姆伊",GPF:[20,35,35,22,13]},{name:"海主人",GPF:[21,31,35,26,14]},{name:"多魯寶",GPF:[24,30,38,24,14]}]},{name:"加美系",arr:[{name:"邦奇",GPF:[18,20,37,13,34]}]}]},{platform:"水藍石器",data:[{name:"暴龍系",arr:[{name:"朵巴奈特",GPF:[25,28,43,29,27]}]},{name:"人龍系",arr:[{name:"楊格斯",GPF:[27,30,42,23,28]}]},{name:"鴕鳥系",arr:[{name:"塔斯夫",GPF:[19,22,24,13,38]}]},{name:"威威系",arr:[{name:"威比",GPF:[17,22,24,13,39]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,26,21,46,4]}]}]}];e.a=a},429:function(n,e,t){"use strict";t.r(e);var a=t(412),r=t(414),o=t(413),i=function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,e){var t=[],a=!0,r=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(a=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);a=!0);}catch(n){r=!0,o=n}finally{try{!a&&c.return&&c.return()}finally{if(r)throw o}}return t}(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function c(n){return function(){var e=n.apply(this,arguments);return new Promise((function(n,t){return function a(r,o){try{var i=e[r](o),c=i.value}catch(n){return void t(n)}if(!i.done)return Promise.resolve(c).then((function(n){a("next",n)}),(function(n){a("throw",n)}));n(c)}("next")}))}}function l(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}var u={name:"Home",data:function(){var n=Object(a.h)("CalcGF")||[],e=["","","",""];return{loading:!1,platform:Object(a.h)("platform")||0,pageIndex:1,name:"",name2:"",GPF:["",""].concat(e),FW:[].concat(e),petData:r.a,columns:[{title:"四圍",align:"center",className:"color1",children:[{title:"體",key:"hp",align:"center",className:"color1"},{title:"腕",key:"atk",align:"center",className:"color1"},{title:"耐",key:"def",align:"center",className:"color1"},{title:"速",key:"agi",align:"center",className:"color1"},{title:"戰",key:"score",align:"center",className:"color1"}]},{title:"隨機係數(10)",align:"center",className:"color2",children:[{title:"體",key:"ghp",align:"center",className:"color2"},{title:"腕",key:"gatk",align:"center",className:"color2"},{title:"耐",key:"gdef",align:"center",className:"color2"},{title:"速",key:"gagi",align:"center",className:"color2"}]},{title:"檔次",align:"center",className:"color3",children:[{title:"體",key:"fhp",align:"center",className:"color3"},{title:"腕",key:"fatk",align:"center",className:"color3"},{title:"耐",key:"fdef",align:"center",className:"color3"},{title:"速",key:"fagi",align:"center",className:"color3"}]},{title:"成長率",align:"center",className:"color5",children:[{title:"血",key:"vhp",align:"center",className:"color5"},{title:"攻",key:"vatk",align:"center",className:"color5"},{title:"防",key:"vdef",align:"center",className:"color5"},{title:"敏",key:"vagi",align:"center",className:"color5"},{title:"成長",key:"vSum",align:"center",className:"color5"}]}],data:[],pageData:[],storage:n}},mounted:function(){try{var n=JSON.parse(Object(a.a)(this.$route.query.search)),e=n.GPF,t=n.name,r=n.FW;this.GPF=e,this.name=t,this.FW=r,this.handleCalc(!1)}catch(n){}},computed:{getPetData:function(){return this.petData[this.platform].data}},methods:{handleChange:function(n){var e=n.split("."),t=i(e,2),a=t[0],r=t[1],o=this.getPetData[a].arr[r],c=o.name,u=o.GPF;this.GPF=[this.GPF[0]].concat(l(u)),this.name=c},handleChangePlatform:function(n){Object(a.i)("platform",n)},handleCalc:function(){var n=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return c(regeneratorRuntime.mark((function t(){var r,o,i,c,u,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.loading=!0,r=[].concat(l(n.GPF)),o=[].concat(l(n.FW)),i=n.name,c=Object(a.b)(JSON.stringify({GPF:r,FW:o,name:i})),n.$router.push({path:"CalcGF",query:{search:c}}),u=r.join(),m=n.tempDate[u]){t.next=12;break}return t.next=11,Object(a.d)(r);case 11:n.tempDate[u]=m=t.sent;case 12:setTimeout((function(){n.data=m[o.join()]?[].concat(l(m[o.join()])):[],e&&(n.storage.unshift({name:i,GPF:r,FW:o}),n.storage.length>5&&n.storage.pop(),Object(a.i)("CalcGF",n.storage)),n.pageIndex=1,n.pageData=[].concat(l(n.data.slice(30*(n.pageIndex-1),30))),n.loading=!1}),50);case 13:case"end":return t.stop()}}),t,n)})))()},handleRecodeCalc:function(n){var e=this.storage[n],t=e.GPF,a=e.FW,r=e.name;this.name=r,this.GPF=[].concat(l(t)),this.FW=[].concat(l(a)),this.handleCalc(!1)},handleChangePage:function(n){this.pageIndex=n,this.pageData=[].concat(l(this.data.slice(30*(n-1),30*n)))}},components:{CalcInput:o.a}},m=t(2),s=Object(m.a)(u,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"container"},[t("Row",[t("Col",{attrs:{span:"12"}},[t("Row",[t("Col",{attrs:{span:"6"}},[t("Button",{attrs:{type:"info",long:""}},[n._v("\n                      基礎素質\n                  ")])],1),n._v(" "),t("Col",{attrs:{span:"6"}},[t("Select",{attrs:{filterable:"",long:""},on:{input:n.handleChangePlatform},model:{value:n.platform,callback:function(e){n.platform=e},expression:"platform"}},n._l(n.petData,(function(n,e){var a=n.platform;return t("Option",{key:a,attrs:{label:a,value:e}})})),1)],1),n._v(" "),t("Col",{attrs:{span:"6"}},[t("Select",{attrs:{filterable:"",long:""},on:{input:n.handleChange},model:{value:n.name2,callback:function(e){n.name2=e},expression:"name2"}},n._l(n.getPetData,(function(e,a){return t("OptionGroup",{key:e.name,attrs:{label:e.name}},n._l(e.arr,(function(n,e){return t("Option",{key:n.name,attrs:{value:a+"."+e,label:n.name}})})),1)})),1)],1),n._v(" "),t("Col",{attrs:{span:"6"}},[t("Input",{attrs:{placeholder:"寵物名稱"},model:{value:n.name,callback:function(e){n.name=e},expression:"name"}})],1)],1),n._v(" "),t("CalcInput",{attrs:{v:n.GPF,PH:["等級","係數","體","腕","耐","速"]}}),n._v(" "),t("Row",[t("Col",{attrs:{span:"24"}},[t("Button",{attrs:{type:"info",long:""}},[n._v("\n                      初始四圍\n                  ")])],1)],1),n._v(" "),t("CalcInput",{attrs:{v:n.FW,PH:["生命","攻擊","防禦","速度"]}}),n._v(" "),t("Row",[t("Col",{attrs:{span:"24"}},[t("Button",{attrs:{type:"success",long:"",icon:"ios-search"},on:{click:n.handleCalc}},[n._v("\n                      計算\n                  ")])],1)],1)],1),n._v(" "),t("Col",{attrs:{span:"12"}},n._l(n.storage,(function(e,a){var r=e.GPF,o=e.FW,i=e.name;return t("Button",{key:a,attrs:{type:"ghost",long:"",icon:"ios-search"},on:{click:function(e){return n.handleRecodeCalc(a)}}},[n._v("\n              "+n._s(i+" "+r.join()+"|"+o.join())+"\n          ")])})),1)],1),n._v(" "),t("Row",[t("Col",{attrs:{span:"24"}},[n.data.length?t("Page",{staticClass:"paging",attrs:{total:n.data.length,"page-size":30,"show-total":""},on:{"on-change":n.handleChangePage}}):n._e(),n._v(" "),t("Table",{attrs:{border:"",columns:n.columns,data:n.pageData,loading:n.loading}})],1)],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);
//# sourceMappingURL=CalcGF6954db00b47edaa3e828.js.map