(window["webpackJsonpdragalia-lost"]=window["webpackJsonpdragalia-lost"]||[]).push([[5],{162:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),i=a.n(c),l=(a(4),a(3)),o=a(27),u=a(5),s=a(102),d=a(7),m=i.a.forwardRef(function(e,t){e.checked;var a=e.classes,c=e.className,u=e.control,m=e.disabled,b=(e.inputRef,e.label),f=e.labelPlacement,p=void 0===f?"end":f,v=(e.name,e.onChange,e.value,Object(r.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),h=Object(o.a)(),g=m;"undefined"===typeof g&&"undefined"!==typeof u.props.disabled&&(g=u.props.disabled),"undefined"===typeof g&&h&&(g=h.disabled);var O={disabled:g};return["checked","name","onChange","value","inputRef"].forEach(function(t){"undefined"===typeof u.props[t]&&"undefined"!==typeof e[t]&&(O[t]=e[t])}),i.a.createElement("label",Object(n.a)({className:Object(l.a)(a.root,c,"end"!==p&&a["labelPlacement".concat(Object(d.a)(p))],g&&a.disabled),ref:t},v),i.a.cloneElement(u,O),i.a.createElement(s.a,{component:"span",className:Object(l.a)(a.label,g&&a.disabled)},b))});t.a=Object(u.a)(function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}},{name:"MuiFormControlLabel"})(m)},163:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),i=a.n(c),l=(a(4),a(3)),o=a(27),u=a(5),s=a(22),d=a(103),m=a(7),b=i.a.forwardRef(function(e,t){var a=e.edge,c=void 0!==a&&a,o=e.children,u=e.classes,s=e.className,b=e.color,f=void 0===b?"default":b,p=e.disabled,v=void 0!==p&&p,h=e.disableFocusRipple,g=void 0!==h&&h,O=e.size,y=void 0===O?"medium":O,j=Object(r.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return i.a.createElement(d.a,Object(n.a)({className:Object(l.a)(u.root,s,"default"!==f&&u["color".concat(Object(m.a)(f))],v&&u.disabled,{small:u["size".concat(Object(m.a)(y))]}[y],{start:u.edgeStart,end:u.edgeEnd}[c]),centerRipple:!0,focusRipple:!g,disabled:v,ref:t},j),i.a.createElement("span",{className:u.label},o))}),f=Object(u.a)(function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(s.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},{name:"MuiIconButton"})(b),p=i.a.forwardRef(function(e,t){var a=e.autoFocus,c=e.checked,u=e.checkedIcon,s=e.classes,d=e.className,m=e.defaultChecked,b=e.disabled,p=e.icon,v=e.id,h=e.inputProps,g=e.inputRef,O=e.name,y=e.onBlur,j=e.onChange,E=e.onFocus,k=e.readOnly,x=e.required,w=e.tabIndex,C=e.type,S=e.value,H=Object(r.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),P=i.a.useRef(null!=c).current,R=i.a.useState(Boolean(m)),M=R[0],D=R[1],I=P?c:M,N=Object(o.a)(),_=b;N&&"undefined"===typeof _&&(_=N.disabled);var F="checkbox"===C||"radio"===C;return i.a.createElement(f,Object(n.a)({component:"span",className:Object(l.a)(s.root,d,I&&s.checked,_&&s.disabled),disabled:_,tabIndex:null,role:void 0,onFocus:function(e){E&&E(e),N&&N.onFocus&&N.onFocus(e)},onBlur:function(e){y&&y(e),N&&N.onBlur&&N.onBlur(e)},ref:t},H),i.a.createElement("input",Object(n.a)({autoFocus:a,checked:c,defaultChecked:m,className:s.input,disabled:_,id:F&&v,name:O,onChange:function(e){var t=e.target.checked;P||D(t),j&&j(e,t)},readOnly:k,ref:g,required:x,tabIndex:w,type:C,value:S},h)),I?u:p)}),v=Object(u.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(p),h=a(63),g=Object(h.a)(i.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),O=Object(h.a)(i.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),y=Object(h.a)(i.a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),j=i.a.createElement(O,null),E=i.a.createElement(g,null),k=i.a.createElement(y,null),x=i.a.forwardRef(function(e,t){var a=e.checkedIcon,c=void 0===a?j:a,o=e.classes,u=e.color,s=void 0===u?"secondary":u,d=e.disabled,b=void 0!==d&&d,f=e.icon,p=void 0===f?E:f,h=e.indeterminate,g=void 0!==h&&h,O=e.indeterminateIcon,y=void 0===O?k:O,x=e.inputProps,w=Object(r.a)(e,["checkedIcon","classes","color","disabled","icon","indeterminate","indeterminateIcon","inputProps"]);return i.a.createElement(v,Object(n.a)({type:"checkbox",checkedIcon:g?y:c,classes:{root:Object(l.a)(o.root,o["color".concat(Object(m.a)(s))],g&&o.indeterminate),checked:o.checked,disabled:o.disabled},color:s,inputProps:Object(n.a)({"data-indeterminate":g},x),icon:g?y:p,ref:t,disabled:b},w))});t.a=Object(u.a)(function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}},{name:"MuiCheckbox"})(x)},164:function(e,t,a){"use strict";a.r(t);var n=a(21),r=a(0),c=a.n(r),i=a(31),l=a(162),o=a(163),u=a(141),s=a(10),d=a(8),m=function(e,t){switch(e){case"adventurer":return function(e){var t,a,n=e.ex,r=e.id,c=e.mana,i=e.rarity,l=s.i["adventurerSkill_".concat(c)];return t="5"===i||"100001_01"===r?"5_".concat(c):"rest_".concat(c),c>=40?a="40":c>=10&&(a="10"),l+s.a[t].reduce(function(t,a){return e[a]?t+e[a]:t},0)+(s.i["fs_".concat(a)]||0)+s.i["coAbility_".concat(i,"_").concat(n)]}(t);case"weapon":return function(e){var t="4"===e.unbind?"4":"0",a=e.skill?s.i["itemSkill_".concat(t)]:0;return e.abilities11+e.abilities21+a}(t);case"wyrmprint1":case"wyrmprint2":return"4"===(a=t).unbind?a.abilities13+a.abilities23+a.abilities33:a.unbind>="2"?a.abilities12+a.abilities22+a.abilities32:a.abilities11+a.abilities21+a.abilities31;case"dragon":return function(e){var t=10*e.bond;return"4"===e.unbind?e.abilities12+e.abilities22+t+s.i.itemSkill_4:e.abilities11+e.abilities21+t+s.i.itemSkill_0}(t);default:return 0}var a},b=function(e,t){var a=["Hp","Atk"][t],n=["50","45","40","30","20","10","0"].indexOf(e.mana);return[e["McFullBonus".concat(a,"5")],e["Plus".concat(a,"4")],e["Plus".concat(a,"3")],e["Plus".concat(a,"2")],e["Plus".concat(a,"1")],e["Plus".concat(a,"0")],0].slice(n).reduce(function(e,t){return e+t},0)},f=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t)return{hp:0,str:0,might:0,augHp:0,augStr:0,tHp:0,tStr:0,tMight:0};var n=t.curRarity,r=t.rarity,c=t.level,i=t.augHp,l=void 0===i?0:i,o=t.augStr,u=void 0===o?0:o;c=Number(c),l=Number(l),u=Number(u),"adventurer"===e&&(r=5);var s,f,p,v,h=Object(d.d)(e,r),g=0,O=0;c===h?(g=t.MaxHp,O=t.MaxAtk):("adventurer"===e?(s=t["MinHp".concat(n)],f=t["MinAtk".concat(n)],p="MinHp5",v="MinAtk5"):(s=t.MinHp,f=t.MinAtk,p="MinHp",v="MinAtk"),1===c?(g=s,O=f):(g=s+(c-1)/(h-1)*(t.MaxHp-t[p]),O=f+(c-1)/(h-1)*(t.MaxAtk-t[v])));"adventurer"===e&&(g+=b(t,0),O+=b(t,1)),g=Object(d.a)(g),O=Object(d.a)(O),a&&(g=Object(d.a)(1.5*g+.5*l),O=Object(d.a)(1.5*O+.5*u));var y=g+l,j=O+u,E=m(e,t),k=g+O+E,x=y+j+E;return{hp:g,str:O,might:k,augHp:l,augStr:u,tHp:y,tStr:j,tMight:x}},p=function(e,t){for(var a=0,n=0,r=0;r<e.length;r+=1){var c=t[e[r]];if(c){var i=s.g[c.type][c.level];a+=i[0],n+=i[1]}}return{hp:a,str:n}},v=function(e,t){if(!e.adventurer)return null;for(var a={},n=e.adventurer,r=e.wyrmprint1,c=e.wyrmprint2,i=e.dragon,l=0,o=0,u=0,m=0,b=0,v=n.element,h=0;h<s.k.length;h+=1){var g=s.k[h],O=e[g],y=("weapon"===g||"dragon"===g)&&O&&v===O.element,j=f(g,O,y);l+=j.tHp,o+=j.tStr,u+=j.tMight,m+=j.augHp,b+=j.augStr,a[g]=j}a.augments={hp:m,str:b,might:m+b};var E=function(e,t,a){var n=t.adventurer,r=t.dragon,c=n.element,i=n.weapon,l=["adventurer_".concat(c),i],o=s.e.filter(function(e){return l.some(function(t){return e.includes(t)})}),u=p(o,a),m={hp:0,str:0};if(r){var b=s.e.filter(function(e){return e.includes("dragon_".concat(r.element))});m=p(b,a)}var f=e.adventurer.tHp*u.hp*.01,v=e.adventurer.tStr*u.str*.01,h=e.dragon.tHp*m.hp*.01,g=e.dragon.tStr*m.str*.01,O=Object(d.a)(f)+Object(d.a)(h),y=Object(d.a)(v)+Object(d.a)(g);return{hp:O,str:y,might:O+y}}(a,e,t);a.halidom=E;var k=0,x=0;if(i&&v.includes(i.reqEle)){var w="4"===i.unbind?"2":"1";k=i["incHP".concat(w)],x=i["incSTR".concat(w)]}n.incSTR2&&n.mana>=n.STRLV2?x+=n.incSTR2:n.incSTR1&&n.mana>=n.STRLV1&&(x+=n.incSTR1),e.weapon&&e.weapon.incSTR&&v.includes(e.weapon.reqEle)&&(x+=e.weapon.incSTR);var C=0,S=0,H=!1,P=!1;if(r){var R=r.unbind,M=1;"4"===R?(M=3,H=!0):R>="2"&&(M=2),C+=r["incHP".concat(M)]||0,S+=r["incSTR".concat(M)]||0}if(c){var D=c.unbind,I=1;"4"===D?(I=3,P=!0):D>="2"&&(I=2),C+=c["incHP".concat(I)]||0,S+=c["incSTR".concat(I)]||0}C>8&&(C=8),!(S>20)||H&&P||(S=20),k+=C,x+=S;var N=l+E.hp,_=o+E.str,F=u+E.might,T=N*k*.01,A=_*x*.01;return a.ability={hp:Object(d.a)(T),str:Object(d.a)(A),might:0},N+=T,_+=A,a.total={hp:N,str:_,might:F},a},h=function(e,t){var a=e.adventurer,n=e.weapon,r=e.wyrmprint1,c=e.wyrmprint2,i=e.dragon,l=t.dungeon,o=t.str,u=t.multiplier,d=[],m=1*t.def+1*t.exDef;a.incDef2&&a.mana>=a.defLV2?(m+=a.incDef2,d.push("adventurer,def,".concat(a.incDef2))):a.incDef1&&a.mana>=a.defLv1&&(m+=a.incDef1,d.push("adventurer,def,".concat(a.incDef1))),n&&n.incDef&&a.element.includes(n.reqEle)&&(m+=n.incDef,d.push("weapon,def,".concat(n.incDef)));var b=0,f=0,p=0,v=0,h=s.p[l].element;if(r){var g=1;if("4"===r.unbind?g=3:r.unbind>="2"&&(g=2),r.incHP1){var O=r["incHP".concat(g)];b+=O,d.push("wyrmprint1,hp,".concat(O))}if(r.incDef1){var y=r["incDef".concat(g)];f+=y,d.push("wyrmprint1,def,".concat(y))}if(r.dungeon===l){var j=r["reduce".concat(g)];v+=j,d.push("wyrmprint1,reduce,".concat(j))}if(r.resEle===h){var E=r["incRes".concat(g)];p+=E,d.push("wyrmprint1,res,".concat(E))}}if(c){var k=1;if("4"===c.unbind?k=3:c.unbind>="2"&&(k=2),c.incHP1){var x=r["incHP".concat(k)];(b+=x)>8?d.push("wyrmprint2,hp,".concat(x," -> ").concat(8-b+x)):d.push("wyrmprint2,hp,".concat(x))}if(c.incDef1){var w=c["incDef".concat(k)];(f+=w)>20?(d.push("wyrmprint2,def,".concat(w," -> ").concat(20-f+w)),f=20):d.push("wyrmprint2,def,".concat(w))}if(c.dungeon===l){var C=c["reduce".concat(k)];(v+=C)>25?d.push("wyrmprint2,reduce,".concat(C," -> ").concat(25-v+C)):d.push("wyrmprint2,reduce,".concat(C))}if(c.resEle===h){var S=c["incRes".concat(k)];(p+=S)>15?d.push("wyrmprint2,res,".concat(S," -> ").concat(15-p+S)):d.push("wyrmprint2,res,".concat(S))}}var H=p;if(m+=f,(i||{}).resEle===h){var P=i.incRes;H+=P,d.push("dragon,res,".concat(P))}var R=1;a.element===s.d[h].da?R=.5:a.element===s.d[h].ad&&(R=1.5);var M=5/3*o*u*R*(1-.01*v)*(1-.01*H)/(a.DefCoef*(1+.01*m)),D=function(e){var t=Math.round(e);return Math.abs(e-t)<1e-5?t:Math.floor(e)};return{min:D(.95*M),max:D(1.05*M),arr:d}},g=a(13),O=a(3),y=a(56),j=["adventurer","weapon","wyrmprint1","wyrmprint2","dragon","augments","ability","halidom"];var E=c.a.memo(function(e){var t=e.collapse,a=e.details,n=c.a.useContext(y.b).lang,i=Object(r.useMemo)(function(){return{body:Object(O.a)("body",{collapse:t}),footer:Object(O.a)("footer",{collapse:t})}},[t]),l=i.body,o=i.footer;return a?c.a.createElement("div",{id:"stats-table"},c.a.createElement("div",{className:"header"},c.a.createElement("span",null),c.a.createElement("span",null,"HP"),c.a.createElement("span",null,Object(d.k)("str",n)),c.a.createElement("span",null,Object(d.k)("might",n))),c.a.createElement("div",{className:l},j.map(function(e){var t=a[e],i=t.hp,l=t.str,o=t.might;return c.a.createElement(r.Fragment,{key:e},c.a.createElement("span",null,Object(d.k)(e,n)),c.a.createElement("span",null,i),c.a.createElement("span",null,l),c.a.createElement("span",null,o))})),c.a.createElement("div",{className:o},c.a.createElement("span",null,Object(d.k)("total",n)),c.a.createElement("span",null,Object(d.a)(a.total.hp)),c.a.createElement("span",null,Object(d.a)(a.total.str)),c.a.createElement("span",null,a.total.might))):null}),k=a(6);var x=c.a.memo(function(e){var t,a=e.damageState,n=a.arr,r=a.hp,i=a.max,l=a.min,o=c.a.useContext(y.b).lang,u="linear-gradient(120deg, green, #4ba946 "+"".concat(t=r>i?100:r<=l?0:100*(r-1-l)/(i-l),"%, #deb887 ").concat(t+5,"%, #be3223 , #800000)");return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"damage-bar",style:{background:u}},c.a.createElement("span",null,l),c.a.createElement("span",{style:{fontSize:"20px"}},"".concat(r," (").concat(t.toFixed(2),"%)")),c.a.createElement("span",null,i)),c.a.createElement("table",null,c.a.createElement("tbody",null,n.map(function(e){var t=e.split(",");return c.a.createElement("tr",{key:"".concat(t[0],"_").concat(t[1])},c.a.createElement("td",null,Object(d.k)(t[0],o)),c.a.createElement("td",null,Object(d.k)(t[1],o)),c.a.createElement("td",null,Object(d.k)(t[2],o)))}))))});function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach(function(t){Object(k.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var S=Object.keys(s.p),H=["N","H","VH","EX"],P=["str","multiplier","exHp","exDef","hp","def"];var R=Object(i.b)(function(e){return{stats:e.stats}})(function(e){var t=e.stats,a=e.totalHp,i=Object(r.useState)(function(){var e=s.m[t.adventurer.element],a=Object(n.a)(s.p[e].VH,2);return{dungeon:e,str:a[0],multiplier:a[1],difficulty:"VH",exHp:"",exDef:"",hp:"",def:""}}),l=Object(n.a)(i,2),o=l[0],u=l[1],m=function(e){var t=e.target,a=t.name,n=t.value;n!==o[a]&&u(function(e){return C({},e,Object(k.a)({},a,n))})},b=Object(r.useRef)(!1);Object(r.useEffect)(function(){if(b.current){var e=Object(n.a)(s.p[o.dungeon][o.difficulty],2),t=e[0],a=e[1];u(function(e){return C({},e,{str:t,multiplier:a})})}else b.current=!0},[o.dungeon,o.difficulty,u]),Object(r.useEffect)(function(){if(t.adventurer){var e=t.adventurer,a=e.ex,n=e.rarity,r=e.weapon,c=e.element,i=s.m[c];if(i!==o.dungeon&&u(function(e){return C({},e,{dungeon:i})}),"Axe"===r||"Lance"===r){var l="",d="",m=s.b["".concat(r,"_").concat(n)][a];"Axe"===r?d=m:"Lance"===r&&(l=m),u(function(e){return C({},e,{exHp:l,exDef:d})})}}},[t.adventurer]);var f=c.a.useMemo(function(){var e=h(t,o);return C({hp:Object(d.a)(a*(1+.01*o.hp)*(1+.01*o.exHp))},e)},[t,a,o]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-2"},c.a.createElement(y.l,{label:"dungeon",options:S,value:o.dungeon,onChange:m}),c.a.createElement(y.l,{label:"difficulty",options:H,value:o.difficulty,onChange:m}),P.map(function(e){return c.a.createElement(y.j,{key:e,label:e,value:o[e],onChange:m})})),c.a.createElement(x,{damageState:f}))});var M={resetStats:g.d},D=Object(i.b)(function(e){return{stats:e.stats,halidom:e.halidom}},M)(function(e){var t=e.stats,a=e.halidom,r=e.setPanel,i=e.resetStats,s=c.a.useState(!1),d=Object(n.a)(s,2),m=d[0],b=d[1],f=c.a.useMemo(function(){return v(t,a)},[t,a]);return c.a.createElement("div",{id:"col1"},c.a.createElement("div",{className:"col-2"},c.a.createElement(l.a,{control:c.a.createElement(o.a,{disabled:!f,color:"primary",checked:m,onChange:function(e){b(e.target.checked)}}),label:"CHECK"}),c.a.createElement(u.a,{variant:"outlined",onClick:function(){r("stats"),i()}},"RESET")),c.a.createElement(E,{details:f,collapse:m}),t.adventurer&&m&&c.a.createElement(R,{stats:t,totalHp:f.total.hp}))}),I={mana_3:["30","20","10","0"],mana_4:["40","30","20","10","0"],mana_5:["50","45","40","30","20","10","0"],curRarity_3:["5","4","3"],curRarity_4:["5","4"],curRarity_5:["5"],rest:["4","3","2","1","0"]};var N=c.a.memo(function(e){var t=e.label,a=e.value,n=e.rarity,r=e.disabled,i=e.onChange,l=c.a.useMemo(function(){return"curRarity"===t||"mana"===t?I["".concat(t,"_").concat(n)]:"ex"===t||"unbind"===t?I.rest:[]},[t,n]);return c.a.createElement(y.l,{label:t,value:a,options:l,disabled:r,onChange:i})});var _={selectFocus:g.g,selectItem:g.h},F=Object(i.b)(function(e,t){var a=e.focused,n=e.stats,r=t.statsKey;return{scale:a===r&&!n[r]}},_)(function(e){var t=e.image,a=e.name,n=e.scale,r=e.statsKey,i=e.setPanel,l=e.selectFocus,o=e.selectItem,u=c.a.useContext(y.b).lang,s=Object(d.b)(r),m=a?a[u]:Object(d.k)(r,u),b=Object(O.a)("lg",{scale:n});return c.a.createElement("div",null,c.a.createElement(y.i,{field:s,image:t,size:b,tabIndex:"-1",onClick:function(){n||o(r),i("stats"),l(r),Object(d.j)(d.g.col3)}}),c.a.createElement("div",null,m))});function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach(function(t){Object(k.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var z={updateItem:g.j},L=Object(i.b)(null,z)(function(e){var t=e.statsKey,a=e.item,r=e.setPanel,i=e.updateItem,l=a||{},o=l.bond,u=l.curRarity,s=l.ex,m=l.level,b=l.mana,f=l.name,p=l.rarity,v=l.unbind,h=l.augHp,g=void 0===h?"":h,O=l.augStr,j=void 0===O?"":O,E=Object(d.c)(a,t),x=c.a.useState({bond:o,level:m,augHp:g,augStr:j}),w=Object(n.a)(x,2),C=w[0],S=w[1],H=function(e){var n=e.target,r=n.name,c=n.value,l=function(e,n){if(C[e]&&n===C[e])return null;if(!C[e]&&n===a[e])return null;var r=Object(k.a)({},e,n);switch(e){case"augHp":case"augStr":case"bond":case"level":var c="level"===e?t:e,i="adventurer"===t?u:p,l=Object(d.d)(c,i,v);r[e]=n>l?l:n;break;case"curRarity":r=A({},r,{level:Object(d.d)(t,n),mana:Object(d.d)("mana",n),ex:"5"===n?"4":"0"});break;case"mana":r.ex="50"===n?"4":"0";break;case"ex":r.mana="45";break;case"unbind":r.level=Object(d.d)(t,p,n)}return r}(r,c);if(null!==l){var o={statsKey:t,updates:l};if(Object.prototype.hasOwnProperty.call(C,r)){var s,m=C["".concat(r,"Id")];clearTimeout(m),m=setTimeout(function(){"level"!==r&&"bond"!==r||""!==l[r]||(l[r]=1,S(A({},C,Object(k.a)({},r,1)))),i(o)},1e3),S(A({},C,(s={},Object(k.a)(s,"".concat(r,"Id"),m),Object(k.a)(s,r,l[r]),s)))}else l.level&&S(A({},C,{level:l.level})),i(o)}};return c.a.createElement("div",{className:"stats-field",ref:d.g[t]},c.a.createElement(F,{name:f,statsKey:t,image:E,setPanel:r}),a&&("adventurer"===t?c.a.createElement("div",null,c.a.createElement(N,{label:"mana",value:b,rarity:u,onChange:H}),c.a.createElement(N,{label:"ex",value:s,onChange:H}),c.a.createElement(y.j,{label:"augHp",value:C.augHp,onChange:H}),c.a.createElement(y.j,{label:"augStr",value:C.augStr,onChange:H}),c.a.createElement(y.j,{label:"level",value:C.level,onChange:H}),c.a.createElement(N,{label:"curRarity",value:u,rarity:p,onChange:H})):c.a.createElement("div",null,c.a.createElement(y.j,{label:"level",value:C.level,onChange:H}),c.a.createElement(N,{label:"unbind",value:v,onChange:H}),c.a.createElement(y.j,{label:"augHp",value:C.augHp,onChange:H}),c.a.createElement(y.j,{label:"augStr",value:C.augStr,onChange:H}),"dragon"===t&&c.a.createElement(y.j,{label:"bond",value:C.bond,onChange:H}))))});var B=Object(i.b)(function(e){return{stats:e.stats}})(function(e){var t=e.setPanel,a=e.stats,r=c.a.useState("adventurer"),i=Object(n.a)(r,2),l=i[0],o=i[1];return c.a.useEffect(function(){var e=(a.adventurer||{}).id;o(void 0===e?"adventurer":e)},[a.adventurer]),c.a.createElement("div",{id:"col2"},c.a.createElement("div",null,c.a.createElement("a",{href:"https://dragalialost.info",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"20px"}},"New Website, \u65b0\u3057\u3044\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8, \u65b0\u9875\u9762")),s.k.map(function(e){var n=a[e],r=(n||{}).id,i=void 0===r?e:r;return c.a.createElement(L,{key:"".concat(l,"_").concat(i),statsKey:e,item:n,setPanel:t})}))}),V=["del","refresh","save"];var K={loadHalidom:g.b},$=Object(i.b)(function(e){var t=e.stats,a=t.adventurer,n=t.dragon,r=e.halidom,c=a||{};return{element:c.element,weapon:c.weapon,dragonEle:(n||{}).element,halidom:r}},K)(function(e){var t,a=e.element,n=e.weapon,r=e.dragonEle,i=e.halidom,l=e.loadHalidom;if(!a)return null;t=a===r?[a,n]:r?["adventurer_".concat(a),n,"dragon_".concat(r)]:["adventurer_".concat(a),n];var o=s.e.filter(function(e){return t.some(function(t){return e.includes(t)})});return c.a.createElement(c.a.Fragment,null,c.a.createElement(y.h,{btns:V,onClick:function(e){switch(e.currentTarget.name){case"del":Object(d.h)("halidom");break;case"refresh":l();break;case"save":Object(d.i)("halidom",i)}}}),c.a.createElement("div",null,o.map(function(e){return c.a.createElement(y.e,{key:e,itemKey:e})})))}),q=a(158);var J={selectFilter:g.e,resetFilters:g.c},U=Object(i.b)(function(e){return{filters:e.filters}},J)(function(e){var t=e.filters,a=e.search,r=e.setSearch,i=e.resetFilters,l=e.selectFilter,o=c.a.useContext(y.b).lang,s=Object(d.l)(function(e){r(e.target.value)}),m=Object(d.l)(function(e){var t=e.target,a=t.checked,n=t.name,r=t.value;l({checked:a,name:n,value:r})});return c.a.createElement(c.a.Fragment,null,Object.entries(t).map(function(e){var t=Object(n.a)(e,2),a=t[0],r=t[1];return c.a.createElement(y.a,{key:a,btns:r,name:a,onChange:m})}),c.a.createElement("div",{id:"search-bar"},c.a.createElement(q.a,{variant:"filled",value:a,label:Object(d.k)("search",o),InputProps:{spellCheck:!1},onChange:s}),c.a.createElement(u.a,{color:"secondary",variant:"contained",onClick:function(){r(""),i()}},"RESET")))}),W=a(26),X=a(160),G=a(159),Q=a(51);var Y={selectItem:g.h},Z=Object(i.b)(function(e){return{focused:e.focused}},Y)(function(e){var t=e.focused,a=e.index,n=e.style,r=e.data,i=r.cols,l=r.field,o=r.arr,u=e.selectItem,s=c.a.useContext(y.b).lang,m=o[a],b=m.name[s],f=Object(d.c)(m,l);return c.a.createElement("div",{style:n,className:"item-list"},c.a.createElement(y.i,{field:l,image:f,onClick:function(){u({statsKey:t,item:m}),Object(d.j)(d.g[t],!0)}}),c.a.createElement("span",{className:"name"},b),i.map(function(e){if("weapon"===e||"element"===e){var t="".concat(e,"_").concat(m[e]);return c.a.createElement(y.i,{key:e,size:"sm",field:"icon",image:t})}return c.a.createElement("span",{key:e},m[e])}))});var ee=Object(i.b)(function(e){return{filters:e.filters}})(function(e){var t=e.field,a=e.fields,i=e.filters,l=e.search,o=c.a.useContext(y.b).lang,u=c.a.useState("hide"),d=Object(n.a)(u,2),m=d[0],b=d[1];Object(r.useEffect)(function(){setTimeout(function(){b(null)},250)},[]);var f=c.a.useMemo(function(){var e={};return a.forEach(function(t){e[t]=Object(Q.c)(i[t])}),{arr:Object.values(s.n[t]).filter(function(t){return a.every(function(a){return 0===e[a].length||e[a].includes(t[a])})&&t.name[o].toUpperCase().includes(l.toUpperCase())}).sort(function(e,a){if(e.rarity>a.rarity)return-1;if(e.rarity<a.rarity)return 1;if(e.element){var n=[].concat(Object(W.a)(s.c),["None"]),r=n.indexOf(e.element),c=n.indexOf(a.element);if(r>c)return 1;if(r<c)return-1}if(e.weapon){var i=s.l.indexOf(e.weapon),l=s.l.indexOf(a.weapon);if(i>l)return 1;if(i<l)return-1}if("wyrmprint"===t){if(e.dungeon&&!a.dungeon)return-1;if(!e.dungeon&&a.dungeon)return 1;if(e.MaxAtk+e.MaxHp+e.abilities13+e.abilities23+e.abilities33>a.MaxAtk+a.MaxHp+a.abilities13+a.abilities23+a.abilities33)return-1;if(e.MaxAtk+e.MaxHp+e.abilities13+e.abilities23+e.abilities33<a.MaxAtk+a.MaxHp+a.abilities13+a.abilities23+a.abilities33)return 1}else{if(e.MaxAtk+e.MaxHp>a.MaxAtk+a.MaxHp)return-1;if(e.MaxAtk+e.MaxHp<a.MaxAtk+a.MaxHp)return 1}return e.id>a.id?1:e.id<a.id?-1:0}),cols:a,field:t}},[t,a,i,o,l]),p=c.a.useRef(null);return Object(r.useEffect)(function(){p.current&&p.current.scrollToItem(0)},[t,i]),c.a.createElement("div",{className:m},c.a.createElement(G.a,null,function(e){var t=e.height,a=e.width;return c.a.createElement(X.b,{ref:p,height:t,width:a,itemSize:80,itemCount:f.arr.length,itemData:f},Z)}))}),te={adventurer:["weapon","element","rarity"],weapon:["weapon","element","rarity"],wyrmprint:["rarity"],dragon:["element","rarity"]};var ae=Object(i.b)(function(e){var t=e.focused;return{field:Object(d.b)(t)}})(function(e){var t=e.field,a=c.a.useState(""),r=Object(n.a)(a,2),i=r[0],l=r[1];return c.a.useEffect(function(){l("")},[t]),c.a.createElement(c.a.Fragment,null,c.a.createElement(U,{fields:te[t],search:i,setSearch:l}),c.a.createElement(ee,{field:t,fields:te[t],search:i}))}),ne=["stats","halidom"];var re=c.a.memo(function(e){var t=e.panel,a=e.setPanel;return c.a.createElement("div",{id:"col3",ref:d.g.col3},c.a.createElement(y.k,{name:"panel",checked:t,btns:ne,onChange:a}),"stats"===t?c.a.createElement(ae,null):c.a.createElement($,null))});var ce=function(){var e=c.a.useState("stats"),t=Object(n.a)(e,2),a=t[0],r=t[1];return c.a.createElement("main",{id:"stats"},c.a.createElement(D,{setPanel:r}),c.a.createElement(B,{setPanel:r}),c.a.createElement(re,{panel:a,setPanel:r}))};t.default=ce}}]);
//# sourceMappingURL=5.225b516f.chunk.js.map