(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{410:function(n,e,a){"use strict";var t={name:"CalcInput",props:{v:Array,PH:Array}},r=a(2),o=Object(r.a)(t,function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("Row",n._l(n.v,function(e,t){return a("Col",{key:t,attrs:{span:24/n.v.length}},[a("Input",{attrs:{number:"",placeholder:n.PH[t]},model:{value:n.v[t],callback:function(e){n.$set(n.v,t,e)},expression:"v[i]"}})],1)}))},[],!1,null,null,null);e.a=o.exports},411:function(n,e,a){"use strict";a.d(e,"b",function(){return u}),a.d(e,"a",function(){return m}),a.d(e,"j",function(){return s}),a.d(e,"i",function(){return f}),a.d(e,"h",function(){return k}),a.d(e,"c",function(){return C}),a.d(e,"g",function(){return I}),a.d(e,"d",function(){return j}),a.d(e,"e",function(){return D}),a.d(e,"f",function(){return R});var t=a(413),r=a.n(t),o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},c=function(){return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,e){var a=[],t=!0,r=!1,o=void 0;try{for(var c,i=n[Symbol.iterator]();!(t=(c=i.next()).done)&&(a.push(c.value),!e||a.length!==e);t=!0);}catch(n){r=!0,o=n}finally{try{!t&&i.return&&i.return()}finally{if(r)throw o}}return a}(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function i(n){if(Array.isArray(n)){for(var e=0,a=Array(n.length);e<n.length;e++)a[e]=n[e];return a}return Array.from(n)}function l(n){return Array.isArray(n)?n:Array.from(n)}var u=function(n){return r.a.encode(n)},m=function(n){return r.a.decode(n)},s=function(n,e){arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?localStorage[u(n)]=u(e):localStorage[u(n)]=u(JSON.stringify(e))},f=function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=localStorage[u(n)];if(a)try{var t=m(a);return e?function(n){try{return JSON.parse(n)}catch(n){return""}}(t):t}catch(n){return""}return""},F=function(n){return((n.LV-1)*n.GC+n.IA)*n.ISI/100},h=function(n){var e=n.ISI,a=n.ISR;return 100*((e+(void 0===a?2.5:a))*n.FV/100).toFixed(3)/100},d=function(n,e,a,t,r){return~~(Math.min(n+t,150)*(a+4*e)/(r+4*t))},p=function(n,e){return~~(n+139*e)},P=function(n){var e=c(n,4);return 4*e[0]+e[1]+e[2]+e[3]},g=function(n){var e=c(n,4),a=e[0],t=e[1];return.1*(a+e[2])+t+.05*e[3]},v=function(n){var e=c(n,4);return.1*(e[0]+e[1])+e[2]+.05*e[3]},G=function(n){var e=c(n,4);e[0],e[1],e[2];return e[3]},y=[{h:5,m:4.75,l:4.5},{h:5.2,m:4.95,l:4.7},{h:5.4,m:5.15,l:4.9},{h:5.6,m:5.35,l:5.1},{h:5.8,m:5.55,l:5.3},{h:6,m:5.75,l:5.5}],k=function(n){var e=n.reduce(function(n,e){return n+e});return e>=100?y[0]:e>=95?y[1]:e>=90?y[2]:e>=85?y[3]:e>=80?y[4]:y[5]},x=function(n){var e=n.reduce(function(n,e){return n+e});return e>=130?y[0]:e>=100?y[1]:e>=95?y[2]:e>=85?y[3]:e>=80?y[4]:y[5]},b={4.75:0,4.95:1,5.15:2,5.35:3,5.55:4,5.75:5},C=function(n){var e=n.GC,a=void 0===e?4:e,t=n.GPF,r=n.GPFR,o=n.f,c=n.FV,i=l(t),u=i[0],m=i[1],s=i.slice(2),f=s.map(function(n,e){return n+r[e]+o[e]}).map(function(n){return F({LV:u,GC:a,IA:m,ISI:n})}),d=s.map(function(n,e){return h({ISI:n+o[e],FV:c})}),p=+P(f).toFixed(2),y=+g(f).toFixed(2),k=+v(f).toFixed(2),x=+G(f).toFixed(2),b=~~(~~p/4)+~~y+~~k+~~x,C=+P(d).toFixed(4),I=+g(d).toFixed(4),w=+v(d).toFixed(4),N=+G(d).toFixed(4),_=+(I+w+N).toFixed(4);return{health:{hhp:f[0],hatk:f[1],hdef:f[2],hagi:f[3]},fourWei:[p,y,k,x,b],gRate:{vhp:C,vatk:I,vdef:w,vagi:N,vSum:_}}},I=function(n){var e=n.GC,a=void 0===e?4:e,t=n.GPF,r=n.GPFR,o=n.f,c=n.gf,u=n.tf,m=n.FV,s=l(t),f=s[0],y=s[1],k=s.slice(2),C=[].concat(i(k),i(o)).reduce(function(n,e){return n+e}),I=Math.min(c.reduce(function(n,e){return n+e}),150),w=~~(1.3*Math.max(~~Math.pow(I/100,5),0))+~~((f-100)/(1.2*(5-b[m])+5)),N=[d(w,k[0]+o[0],c[0],C,I),d(w,k[1]+o[1],c[1],C,I),d(w,k[2]+o[2],c[2],C,I),d(w,k[3]+o[3],c[3],C,I)],_=N.map(function(n,e){return n+r[e]+ +u[e]}),S=x(N.map(function(n,e){return n+ +u[e]})).m,A=_.map(function(n){return F({LV:1,GC:a,IA:y,ISI:n})}),j=N.map(function(n,e){return h({ISI:n+u[e],FV:S})}),O=+P(A).toFixed(2),D=+g(A).toFixed(2),R=+v(A).toFixed(2),W=+G(A).toFixed(2),E=~~(~~O/4)+~~D+~~R+~~W,V=+P(j).toFixed(4),J=+g(j).toFixed(4),H=+v(j).toFixed(4),M=+G(j).toFixed(4),T=+(J+H+M).toFixed(4),$=p(+O,+V),B=p(+D,+J),L=p(+R,+H),q=p(+M,+M),z=~~($/4)+B+L+q;return{health:{hhp:A[0],hatk:A[1],hdef:A[2],hagi:A[3]},fourWei:[O,D,R,W,E],tGpf:N,gRate:{vhp:V,vatk:J,vdef:H,vagi:M,vSum:T},fullFourWei:{ffhp:$,ffatk:B,ffdef:L,ffagi:q,ffscore:z}}},w=function(n){var e=[],a=[];return function n(t,r){for(var o=0;o<t[r].length;o++)a[r]=t[r][o],r!==t.length-1?n(t,r+1):e.push([].concat(a))}(n,0),e},N=[-2,-1,0,1,2],_=w([N,N,N,N]),S=[].concat(i(Array(11).keys())),A=w([S,S,S,S]).filter(function(n){return 10===n.reduce(function(n,e){return n+e})}),j=function(n){return new Promise(function(e){var a={},t=l(n),r=(t[0],t[1],t.slice(2)),i=k(r).m;setTimeout(function(){_.forEach(function(e){var t=c(e,4),r=t[0],l=t[1],u=t[2],m=t[3];A.forEach(function(e){var t=c(e,4),s=t[0],f=t[1],F=t[2],h=t[3],d=C({GPF:n,GPFR:[s,f,F,h],f:[r,l,u,m],FV:i}),p=c(d.fourWei,5),P=p[0],g=p[1],v=p[2],G=p[3],y=p[4],k=d.health,x=d.gRate,b=o({hp:P,atk:g,def:v,agi:G,score:y,ghp:s,gatk:f,gdef:F,gagi:h,fhp:r,fatk:l,fdef:u,fagi:m},k,x),I=~~P+","+~~g+","+~~v+","+~~G;a[I]?a[I].push(b):a[I]=[b]})}),e(a)},50)})},O=function(n,e){return Math.round(100*n/e-2.5,0)},D=function(n){var e=n.P,a=function(n){var e=c(n,4);return(1.1*e[0]-e[1]-e[2]-e[3])/4.2}(e),t=function(n){var e=c(n,5),a=(e[0],e[1]),t=e[2],r=e[3];return(10*a-t-.9*e[4]-.45*r)/9.9}([].concat(i(e),[a])),r=function(n){var e=c(n,5),a=(e[0],e[1]),t=e[2],r=e[3];return(10*t-a-.9*e[4]-.45*r)/9.9}([].concat(i(e),[a])),o=function(n){var e=c(n,4);e[0],e[1],e[2];return e[3]}(e),l=[];return y.forEach(function(n){var e=n.m,c=O(a,e)-2,i=O(t,e)-2,u=O(r,e)-2,m=O(o,e)-2;return k([c,i,u,m]).m===e&&(l.push({hp:c,atk:i,def:u,agi:m,m:e}),!0)}),l},R=function(n){for(var e=[],a=l(n),t=a[0],r=void 0===t?"":t,o=a[1],c=a.slice(2),u=(r+"").split("."),m=c.reduce(function(n,e){return n+e})+10,s=function(n){var a={};[].concat(i(Array(17))).map(function(n,e){return 8-e}).forEach(function(e){a["c"+e]=~~(((4*(n-1)+o)*(m+e)/100-20)/4).strip()}),a.lv=n,e.push(a)},f=1;f<=140;f++)s(f);return r&&(console.log(u),e=e.filter(function(n){var e=n.lv;return u.find(function(n){return+n==+e})})),e}},412:function(n,e,a){"use strict";var t=[{platform:"石器初心",data:[{name:"人龍系",arr:[{name:"邦奇諾",GPF:[26,25,42,18,24]},{name:"楊奇洛斯",GPF:[29,27,39,21,24]},{name:"利則諾頓",GPF:[23,25,38,25,21]},{name:"邦蒲洛斯",GPF:[27,25,40,20,24]},{name:"布魯頓",GPF:[25,25,39,18,27]}]},{name:"暴龍系",arr:[{name:"巴朵蘭恩",GPF:[27,27,40,20,25]},{name:"奧卡洛斯",GPF:[25,26,35,31,19]}]},{name:"雷龍系",arr:[{name:"斯天多斯",GPF:[28,34,27,40,15]},{name:"布拉奇多斯",GPF:[24,33,34,32,15]},{name:"布洛多斯",GPF:[25,34,27,42,12]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,26,27,42,19]}]},{name:"兔子系",arr:[{name:"克雷爾",GPF:[18,21,29,25,30]},{name:"克克爾",GPF:[18,22,30,25,29]},{name:"克洛爾",GPF:[18,21,32,22,30]},{name:"里斯基",GPF:[17,23,28,27,29]},{name:"克拉爾",GPF:[18,21,28,27,31]}]},{name:"舌頭系",arr:[{name:"貝洛恩",GPF:[24,38,30,35,15]}]},{name:"犀牛系",arr:[{name:"貝恩達斯",GPF:[16,28,29,32,21]}]},{name:"飛龍系",arr:[{name:"加寶格恩",GPF:[24,26,37,23,26]}]}]},{platform:"石器傳說",data:[{name:"人龍系",arr:[{name:"邦奇洛",GPF:[26,28,40,19,21]},{name:"利則諾頓",GPF:[25,28,39,21,19]},{name:"布魯頓",GPF:[25,28,40,15,24]}]},{name:"凱比系",arr:[{name:"凱比特",GPF:[25,28,37,11,31]}]},{name:"舌頭系",arr:[{name:"貝洛恩",GPF:[28,30,36,19,24]}]},{name:"老虎系",arr:[{name:"貝魯卡",GPF:[27,28,35,18,25]},{name:"貝魯伊卡",GPF:[27,28,35,17,26]}]},{name:"雷龍系",arr:[{name:"水雷",GPF:[27,35,26,36,14]},{name:"紅雷",GPF:[27,34,36,26,14]}]},{name:"星星系",arr:[{name:"格爾頓",GPF:[28,28,37,18,25]}]},{name:"海主人系",arr:[{name:"姆依",GPF:[28,31,20,40,18]}]},{name:"跳狗系",arr:[{name:"拉奇魯哥",GPF:[27,29,38,15,25]}]}]},{platform:"石器EE",data:[{name:"馬年獸系",arr:[{name:"葛雷基歐",GPF:[39,24,40,27,22]},{name:"葛雷洛比",GPF:[39,27,40,24,22]},{name:"葛雷吉魯",GPF:[39,24,44,24,22]},{name:"葛雷馬恩",GPF:[39,23,40,22,30]}]},{name:"老虎系",arr:[{name:"貝魯卡",GPF:[24,23,28,16,25]},{name:"貝魯伊卡",GPF:[23,21,30,13,28]},{name:"格魯西斯",GPF:[21,20,30,13,28]},{name:"金格薩貝魯",GPF:[25,19,29,18,29]}]},{name:"雷龍系",arr:[{name:"布洛多斯",GPF:[25,37,27,33,6]},{name:"布林帖斯",GPF:[26,40,23,32,7]},{name:"布拉奇多斯",GPF:[24,35,35,28,6]},{name:"斯天多斯",GPF:[28,40,25,35,5]},{name:"邦恩多斯",GPF:[28,37,30,27,10]}]},{name:"暴龍系",arr:[{name:"奧卡洛斯",GPF:[25,26,34,28,19]},{name:"左迪洛斯",GPF:[26,28,30,22,22]},{name:"巴朵蘭恩",GPF:[27,23,37,20,25]},{name:"帖拉所伊朵",GPF:[28,23,35,25,21]}]},{name:"人龍系",arr:[{name:"利則諾頓",GPF:[22,27,37,19,17]},{name:"揚奇洛斯",GPF:[29,28,39,16,21]},{name:"邦奇諾",GPF:[26,24,39,16,20]},{name:"布魯頓",GPF:[25,25,39,14,26]}]},{name:"2D人龍系",arr:[{name:"2D揚奇洛斯",GPF:[32,28,42,18,25]},{name:"2D布魯頓",GPF:[26,26,41,17,29]},{name:"2D利則諾頓",GPF:[26,26,41,22,22]},{name:"2D邦奇洛",GPF:[26,25,43,20,23]}]},{name:"鯊魚系",arr:[{name:"加格",GPF:[23,30,36,15,19]}]},{name:"犀牛系",arr:[{name:"多洛布斯",GPF:[14,26,38,26,18]},{name:"貝恩達斯",GPF:[16,30,35,26,14]},{name:"多利諾布斯",GPF:[12,27,37,25,16]}]},{name:"鴕鳥系",arr:[{name:"克克洛斯",GPF:[20,20,34,12,36]},{name:"奇寶",GPF:[20,20,36,14,34]}]},{name:"水龍系",arr:[{name:"蘭貝魯斯",GPF:[21,26,37,21,21]}]},{name:"飛龍系",arr:[{name:"朵拉比斯",GPF:[23,22,36,18,28]}]},{name:"威威系",arr:[{name:"威威",GPF:[15,21,36,10,33]},{name:"烏卡魯",GPF:[13,25,35,11,29]},{name:"烏寶寶",GPF:[15,20,35,12,34]},{name:"威伯",GPF:[20,20,35,16,29]}]},{name:"拳王系",arr:[{name:"柏克爾",GPF:[20,23,38,22,24]}]},{name:"跳狗系",arr:[{name:"拉奇魯哥",GPF:[23,24,39,15,22]},{name:"魯尼帖斯",GPF:[22,27,37,16,20]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,27,23,48,5]}]},{name:"穿山甲系",arr:[{name:"卡達魯卡斯",GPF:[22,25,23,40,6]}]},{name:"海主人系",arr:[{name:"邦奇",GPF:[22,32,37,24,13]},{name:"姆伊",GPF:[20,35,35,22,13]},{name:"海主人",GPF:[21,31,35,26,14]},{name:"多魯寶",GPF:[24,30,38,24,14]}]},{name:"加美系",arr:[{name:"邦奇",GPF:[18,20,37,13,34]}]}]},{platform:"水藍石器",data:[{name:"暴龍系",arr:[{name:"朵巴奈特",GPF:[25,28,43,29,27]}]},{name:"人龍系",arr:[{name:"楊格斯",GPF:[27,30,42,23,28]}]},{name:"鴕鳥系",arr:[{name:"塔斯夫",GPF:[19,22,24,13,38]}]},{name:"威威系",arr:[{name:"威比",GPF:[17,22,24,13,39]}]},{name:"烏龜系",arr:[{name:"石龜",GPF:[20,26,21,46,4]}]}]}];e.a=t},432:function(n,e,a){"use strict";a.r(e);var t=a(411),r=a(412),o=a(410),c=function(){return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,e){var a=[],t=!0,r=!1,o=void 0;try{for(var c,i=n[Symbol.iterator]();!(t=(c=i.next()).done)&&(a.push(c.value),!e||a.length!==e);t=!0);}catch(n){r=!0,o=n}finally{try{!t&&i.return&&i.return()}finally{if(r)throw o}}return a}(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function i(n){if(Array.isArray(n)){for(var e=0,a=Array(n.length);e<n.length;e++)a[e]=n[e];return a}return Array.from(n)}var l={name:"Home",data:function(){var n=Object(t.i)("CalcGF")||[],e=["","","",""];return{loading:!1,platform:Object(t.i)("platform")||0,pageIndex:1,name:"",name2:"",GPF:["",""].concat(e),FW:[].concat(e),petData:r.a,columns:[{title:"四圍",align:"center",className:"color1",children:[{title:"體",key:"hp",align:"center",className:"color1"},{title:"腕",key:"atk",align:"center",className:"color1"},{title:"耐",key:"def",align:"center",className:"color1"},{title:"速",key:"agi",align:"center",className:"color1"},{title:"戰",key:"score",align:"center",className:"color1"}]},{title:"隨機係數(10)",align:"center",className:"color2",children:[{title:"體",key:"ghp",align:"center",className:"color2"},{title:"腕",key:"gatk",align:"center",className:"color2"},{title:"耐",key:"gdef",align:"center",className:"color2"},{title:"速",key:"gagi",align:"center",className:"color2"}]},{title:"檔次",align:"center",className:"color3",children:[{title:"體",key:"fhp",align:"center",className:"color3"},{title:"腕",key:"fatk",align:"center",className:"color3"},{title:"耐",key:"fdef",align:"center",className:"color3"},{title:"速",key:"fagi",align:"center",className:"color3"}]},{title:"成長率",align:"center",className:"color5",children:[{title:"血",key:"vhp",align:"center",className:"color5"},{title:"攻",key:"vatk",align:"center",className:"color5"},{title:"防",key:"vdef",align:"center",className:"color5"},{title:"敏",key:"vagi",align:"center",className:"color5"},{title:"成長",key:"vSum",align:"center",className:"color5"}]}],data:[],pageData:[],storage:n}},mounted:function(){try{var n=JSON.parse(Object(t.a)(this.$route.query.search)),e=n.GPF,a=n.name,r=n.FW;this.GPF=e,this.name=a,this.FW=r,this.handleCalc(!1)}catch(n){}},computed:{getPetData:function(){return this.petData[this.platform].data}},methods:{handleChange:function(n){var e=n.split("."),a=c(e,2),t=a[0],r=a[1],o=this.getPetData[t].arr[r],l=o.name,u=o.GPF;this.GPF=[this.GPF[0]].concat(i(u)),this.name=l},handleChangePlatform:function(n){Object(t.j)("platform",n)},handleCalc:function(){var n=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(n){return function(){var e=n.apply(this,arguments);return new Promise(function(n,a){return function t(r,o){try{var c=e[r](o),i=c.value}catch(n){return void a(n)}if(!c.done)return Promise.resolve(i).then(function(n){t("next",n)},function(n){t("throw",n)});n(i)}("next")})}}(regeneratorRuntime.mark(function a(){var r,o,c,l,u,m;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(n.loading=!0,r=[].concat(i(n.GPF)),o=[].concat(i(n.FW)),c=n.name,l=Object(t.b)(JSON.stringify({GPF:r,FW:o,name:c})),n.$router.push({path:"CalcGF",query:{search:l}}),u=r.join(),m=n.tempDate[u]){a.next=12;break}return a.next=11,Object(t.d)(r);case 11:n.tempDate[u]=m=a.sent;case 12:setTimeout(function(){n.data=m[o.join()]?[].concat(i(m[o.join()])):[],e&&(n.storage.unshift({name:c,GPF:r,FW:o}),n.storage.length>5&&n.storage.pop(),Object(t.j)("CalcGF",n.storage)),n.pageIndex=1,n.pageData=[].concat(i(n.data.slice(30*(n.pageIndex-1),30))),n.loading=!1},50);case 13:case"end":return a.stop()}},a,n)}))()},handleRecodeCalc:function(n){var e=this.storage[n],a=e.GPF,t=e.FW,r=e.name;this.name=r,this.GPF=[].concat(i(a)),this.FW=[].concat(i(t)),this.handleCalc(!1)},handleChangePage:function(n){this.pageIndex=n,this.pageData=[].concat(i(this.data.slice(30*(n-1),30*n)))}},components:{CalcInput:o.a}},u=a(2),m=Object(u.a)(l,function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{staticClass:"container"},[a("Row",[a("Col",{attrs:{span:"12"}},[a("Row",[a("Col",{attrs:{span:"6"}},[a("Button",{attrs:{type:"info",long:""}},[n._v("\n                      基礎素質\n                  ")])],1),n._v(" "),a("Col",{attrs:{span:"6"}},[a("Select",{attrs:{filterable:"",long:""},on:{input:n.handleChangePlatform},model:{value:n.platform,callback:function(e){n.platform=e},expression:"platform"}},n._l(n.petData,function(n,e){var t=n.platform;return a("Option",{key:t,attrs:{label:t,value:e}})}))],1),n._v(" "),a("Col",{attrs:{span:"6"}},[a("Select",{attrs:{filterable:"",long:""},on:{input:n.handleChange},model:{value:n.name2,callback:function(e){n.name2=e},expression:"name2"}},n._l(n.getPetData,function(e,t){return a("OptionGroup",{key:e.name,attrs:{label:e.name}},n._l(e.arr,function(n,e){return a("Option",{key:n.name,attrs:{value:t+"."+e,label:n.name}})}))}))],1),n._v(" "),a("Col",{attrs:{span:"6"}},[a("Input",{attrs:{placeholder:"寵物名稱"},model:{value:n.name,callback:function(e){n.name=e},expression:"name"}})],1)],1),n._v(" "),a("CalcInput",{attrs:{v:n.GPF,PH:["等級","係數","體","腕","耐","速"]}}),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Button",{attrs:{type:"info",long:""}},[n._v("\n                      初始四圍\n                  ")])],1)],1),n._v(" "),a("CalcInput",{attrs:{v:n.FW,PH:["生命","攻擊","防禦","速度"]}}),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Button",{attrs:{type:"success",long:"",icon:"ios-search"},on:{click:n.handleCalc}},[n._v("\n                      計算\n                  ")])],1)],1)],1),n._v(" "),a("Col",{attrs:{span:"12"}},n._l(n.storage,function(e,t){var r=e.GPF,o=e.FW,c=e.name;return a("Button",{key:t,attrs:{type:"ghost",long:"",icon:"ios-search"},on:{click:function(e){n.handleRecodeCalc(t)}}},[n._v("\n              "+n._s(c+" "+r.join()+"|"+o.join())+"\n          ")])}))],1),n._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[n.data.length?a("Page",{staticClass:"paging",attrs:{total:n.data.length,"page-size":30,"show-total":""},on:{"on-change":n.handleChangePage}}):n._e(),n._v(" "),a("Table",{attrs:{border:"",columns:n.columns,data:n.pageData,loading:n.loading}})],1)],1)],1)},[],!1,null,null,null);e.default=m.exports}}]);
//# sourceMappingURL=CalcGFfb32422b280a1cbd7caa.js.map