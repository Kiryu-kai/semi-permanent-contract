(this["webpackJsonpsemi-permanent-contract"]=this["webpackJsonpsemi-permanent-contract"]||[]).push([[0],[,,function(e,t,a){e.exports={wrap:"Timeline_wrap__3Tvn7",h2:"Timeline_h2__FXIiC",p:"Timeline_p__ynSU1",ul:"Timeline_ul__2O40y",li:"Timeline_li__1y-P1",panel:"Timeline_panel__DQXWh",text:"Timeline_text__1Qixr",img:"Timeline_img__x9DZb"}},function(e,t,a){e.exports={wrap:"ContractTexts_wrap__3bIAB",last:"ContractTexts_last__1O7HU",note:"ContractTexts_note__11KuR",note__inner:"ContractTexts_note__inner__2Q9JI",note__mark:"ContractTexts_note__mark__ZAdRm",note__br:"ContractTexts_note__br__H9nVk"}},function(e,t,a){e.exports={wrap:"Footer_wrap__3n2zi",material:"Footer_material__1ZpMd",material__inner:"Footer_material__inner__Fq6Pm",material__hdg:"Footer_material__hdg__2NH78",material__p:"Footer_material__p__1mew-",material__ul:"Footer_material__ul__301uL",material__li:"Footer_material__li__1Swyf",copyright:"Footer_copyright__3DGjo",btn:"Footer_btn__fswW5"}},function(e,t,a){e.exports={wrap:"Header_wrap__C0zzT",title:"Header_title__284EO",h1:"Header_h1__2mCcs",en:"Header_en__oLmZ6",logo:"Header_logo__2XG30",img:"Header_img__38alG"}},,,function(e,t,a){e.exports={wrap:"ScrollLink_wrap__1zmo_",a:"ScrollLink_a__Ddav1"}},,,function(e,t,a){e.exports={wrap:"AgreeBtn_wrap__38Bki",a:"AgreeBtn_a__n-LXc"}},,function(e,t,a){e.exports={wrap:"TextWrap_wrap__3wYXG"}},,,,,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(12),s=a.n(i),c=(a(20),a(21),a(8)),l=a.n(c),o=a(5),h=a.n(o),j=a(13),m=a.n(j),_=a(0);function d(e){var t=e.children;return Object(_.jsx)("span",{className:m.a.wrap,children:t})}function u(){return Object(_.jsxs)("header",{className:h.a.wrap,children:[Object(_.jsxs)("div",{className:h.a.title,children:[Object(_.jsxs)("h1",{className:h.a.h1,children:["\u6850\u751f\u4f1a",Object(_.jsx)(d,{children:"\u305f\u3064\u306e\u3053\u534a\u6c38\u4e45\u7684\u7d99\u7d9a"}),Object(_.jsx)(d,{children:"\u5951\u7d04\u66f8"})]}),Object(_.jsx)("p",{className:h.a.en,children:"[Kiryu-kai] Tatsunoko Semi-Permanent Contract"})]}),Object(_.jsx)("div",{className:h.a.logo,children:Object(_.jsx)("img",{src:"./image/logo.png",alt:"",className:h.a.img})})]})}var p=a(6),b=a(4),x=a.n(b);function O(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){window.addEventListener("click",(function(e){a&&r(!a)}))})),Object(_.jsxs)("footer",{className:x.a.wrap,children:[Object(_.jsx)("p",{className:x.a.copyright,children:Object(_.jsxs)("small",{children:["\xa9\ufe0e 2020 Coco Kiryu - ",Object(_.jsx)("button",{type:"button",className:x.a.btn,onClick:function(e){e.stopPropagation(),r(!a)},"aria-expanded":a,children:"Material"})," - ",Object(_.jsx)("a",{href:"https://github.com/Kiryu-kai/semi-permanent-contract",children:"Repository"})," - ",Object(_.jsx)("a",{href:"/",children:"Home"})]})}),Object(_.jsx)("div",{className:x.a.material,hidden:!a,children:Object(_.jsxs)("div",{className:x.a.material__inner,onClick:function(e){return e.stopPropagation()},children:[Object(_.jsx)("h2",{className:x.a.material__hdg,children:"Material"}),Object(_.jsx)("p",{className:x.a.material__p,children:"The collaborators are different for each directory."}),Object(_.jsx)("p",{className:x.a.material__p,children:"This top page is supported by the following works."}),Object(_.jsxs)("ul",{className:x.a.material__ul,children:[Object(_.jsx)("li",{className:x.a.material__li,children:Object(_.jsx)("a",{href:"https://twitter.com/buff47213168/status/1360166763317526532",children:"buff\ud83d\udc09 (@buff47213168) - Twitter"})}),Object(_.jsx)("li",{className:x.a.material__li,children:Object(_.jsx)("a",{href:"https://twitter.com/same_kiryukaIll/status/1403628837867442184",children:"\u6850\u751f\u4f1a\u661f\u8a60\u307f\u7d44 \u7d44\u9577 \u7051\u660e/\u3055\u3081(@same_kiryukaIll) - Twitter"})})]})]})})]})}var f=a(10),w=a.n(f),y=a(14),g=a(15),k=a(2),N=a.n(k);function v(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(g.a)(w.a.mark((function e(){var t,a,n,i,s,c,l,o,h,j,m,d;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://kiryukai-semi-permanent-contract.heppokofrontend.dev/api.php?include_entities=false&a").then((function(e){return e.text()}));case 2:t=e.sent,a=JSON.parse(t),n=[],i=Object(y.a)(a),e.prev=6,i.s();case 8:if((s=i.n()).done){e.next=18;break}if((c=s.value).extended_entities.media&&c.extended_entities.media[0]){e.next=13;break}return console.log(c),e.abrupt("continue",16);case 13:l=c.extended_entities.media[0],o=l.media_url_https,h=l.sizes,j=h.small,m=j.w,d=j.h,n.unshift(Object(_.jsx)("li",{lang:c.lang,className:N.a.li,children:Object(_.jsxs)("a",{href:"https://twitter.com/".concat(c.user.screen_name,"/status/").concat(c.id_str),className:N.a.panel,children:[Object(_.jsx)("img",{src:o,alt:c.user.name,className:N.a.img,width:m,height:d}),Object(_.jsx)("span",{className:N.a.text,children:c.text})]})},c.id_str));case 16:e.next=8;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),i.e(e.t0);case 23:return e.prev=23,i.f(),e.finish(23);case 26:for(;n.length<7;)n.push(Object(_.jsx)("li",{className:N.a.li,children:Object(_.jsxs)("span",{className:N.a.panel,children:[Object(_.jsx)("img",{src:a[0].extended_entities.media[0].media_url_https,alt:"",className:N.a.img}),Object(_.jsx)("span",{className:N.a.text,children:a[0].text})]})},Math.random()));r(n);case 28:case"end":return e.stop()}}),e,null,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(_.jsxs)("div",{className:N.a.wrap,children:[Object(_.jsx)("h2",{className:N.a.h2,children:"#\u6850\u751f\u4f1a\u534a\u6c38\u4e45\u7684\u7d99\u7d9a\u5951\u7d04\u66f8"}),Object(_.jsxs)("p",{className:N.a.p,children:[Object(_.jsx)("a",{href:"https://twitter.com/kiryu_kai_contr",children:"@kiryu_kai_contr"}),"\u304c\u3044\u3044\u306d\u3057\u305f\u3082\u306e\u304c\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002"]}),Object(_.jsx)("p",{className:N.a.p,children:"\u30cf\u30c3\u30b7\u30e5\u30bf\u30b0\u3092\u3064\u3051\u3066\u3064\u3076\u3084\u3044\u3066\u304f\u3060\u3055\u3044\u306d\uff01"}),Object(_.jsx)("ul",{className:N.a.ul,children:a})]})}var T=a(11),C=a.n(T);function F(e){return Object(_.jsx)("p",{className:C.a.wrap,children:Object(_.jsx)("a",{href:e.href,className:C.a.a,children:e.label})})}var K=a(3),S=a.n(K),I={ja:Object(_.jsxs)("div",{className:S.a.wrap,children:[Object(_.jsxs)("p",{children:["\u3053\u306e\u5951\u7d04\u66f8\u306b\u7f72\u540d\u3059\u308b\u3068",Object(_.jsx)(d,{children:"\u30db\u30ed\u30e9\u30a4\u30d6\u56db\u671f\u751f \u6850\u751f\u30b3\u30b3\u69d8\u304c\u904b\u55b6\u3059\u308b"}),Object(_.jsx)(d,{children:"\u300c\u6850\u751f\u4f1a\u300d\u53ca\u3073\u300c\u305f\u3064\u306e\u3053\u300d\u306b"}),Object(_.jsx)(d,{children:"\u534a\u6c38\u4e45\u7684\u306b\uff08\u52dd\u624b\u306b\uff09\u4efb\u547d\u3057\u307e\u3059\u3002"})]}),Object(_.jsx)("p",{children:"\u3053\u306e\u5951\u7d04\u66f8\u306b\u7f72\u540d\u8005\u306f\u4ee5\u4e0b\u306e\u3053\u3068\u3092\u8a8d\u3081\u307e\u3059\u3002"}),Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:"\u300c\u6850\u751f\u4f1a\u300d\u53ca\u3073\u300c\u305f\u3064\u306e\u3053\u300d\u306b\u534a\u6c38\u4e45\u7684\u306b\u306a\u308a\u307e\u3059\u3002"}),Object(_.jsx)("li",{children:"\u6850\u751f\u4f1a4\u4ee3\u76ee\u4f1a\u9577 \u6850\u751f\u30b3\u30b3\u69d8\u3078\u306e\u30ac\u30c1\u604b\u3092\u8a8d\u3081\u307e\u3059\u3002"}),Object(_.jsx)("li",{children:"\u3044\u3064\u307e\u3067\u3082\u6850\u751f\u4f1a4\u4ee3\u76ee\u4f1a\u9577 \u6850\u751f\u30b3\u30b3\u69d8\u3092\u5e03\u6559\u3057\u7d9a\u3051\u307e\u3059\u3002"}),Object(_.jsx)("li",{children:"\u3044\u3064\u3067\u3082\u81ea\u5206\u304c\u6850\u751f\u4f1a\u3067\u3042\u308b\u3068\u3044\u3046\u81ea\u899a\u3092\u3082\u3063\u3066\u6850\u751f\u4f1a\u3068\u3057\u3066\u6065\u305a\u304b\u3057\u304f\u306a\u3044\u884c\u52d5\u3092\u5fc3\u304c\u3051\u307e\u3059\u3002"})]}),Object(_.jsxs)("p",{children:["\u6b63\u88c5\u306f\u300c",Object(_.jsx)("a",{href:"https://booth.pm/ja/items/1796466",children:"\u30af\u30bd\u30b6\u30b3\uff34"}),"\u300dor\u300c",Object(_.jsx)("a",{href:"https://booth.pm/ja/items/2213532",children:"\u30ac\u30c1\u30b3\u30a4\uff34"}),"\u300d\u306b\u6850\u751f\u4f1a\u4ee3\u7d0b\u3067\u3059\u3002"]}),Object(_.jsx)("p",{children:"\u5916\u51fa\u306e\u969b\u306b\u306f\u5fc5\u305a\u6850\u751f\u4f1a\u4ee3\u7d0b\u3092\u8eab\u306b\u7740\u3051\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),Object(_.jsx)("p",{children:"\u203b\uff18\u6708\uff11\uff16\u65e5\u4ee5\u5f8c\u306b\u6850\u751f\u4f1a\u4ee3\u7d0b\u30b9\u30de\u30db\u30b1\u30fc\u30b9\u304c\u5c4a\u3044\u305f\u3068\u304d\u306b\u306f\u5916\u51fa\u306e\u969b\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u3092\u6301\u3063\u3066\u3044\u304f\u5834\u5408\u306f\u6850\u751f\u4f1a\u4ee3\u7d0b\u30b9\u30de\u30db\u30b1\u30fc\u30b9\u3092\u5fc5\u305a\u88c5\u7740\u3057\u305f\u72b6\u614b\u3067\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),Object(_.jsxs)("p",{className:S.a.last,children:["\u203b\u3053\u306e\u5951\u7d04\u66f8\u306e\u6709\u52b9\u671f\u9650\u306f\u897f\u66a6",Object(_.jsx)("strong",{children:"2021\u5e747\u67081\u65e5\u304b\u30892521\u5e747\u67081\u65e5"}),"\u307e\u3067\u3067\u3059\u3002"]}),Object(_.jsx)("p",{children:"2521\u5e747\u67081\u65e5\u306b\u307e\u305f\u6850\u751f\u4f1a4\u4ee3\u76ee\u4f1a\u9577 \u6850\u751f\u30b3\u30b3\u69d8\u306e\u3082\u3068\u3078\u81ea\u5206\u304b\u3089\u8a2a\u308c\u3066\u201c\u5fc5\u305a\u201d\u66f4\u65b0\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})]}),en:Object(_.jsxs)("div",{className:S.a.wrap,children:[Object(_.jsx)("p",{children:"Those who sign this contract are appointed (appoint themselves) as semi-permanent members titled \u201ctatsunoko\u201d of the organization Kiryu-kai as headed by Kiryu Coco-sama, Hololive 4th Gen."}),Object(_.jsx)("p",{children:"By signing this contract, you acknowledge the following:"}),Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:"You become semi-permanent members of Kiryu-kai as tatsunoko."}),Object(_.jsx)("li",{children:"You acknowledge you are gachikoi towards Kiryu Coco-sama, the Fourth Generation Chairman of Kiryu-kai."}),Object(_.jsx)("li",{children:"You will continue evangelizing about Kiryu Coco-sama, the Fourth Generation Chairman of Kiryu-kai."}),Object(_.jsx)("li",{children:"You promise to always be aware of your identity as a member of Kiryu-kai and to carry yourself in a way that does not bring shame to the organization."})]}),Object(_.jsxs)("p",{children:["The official uniform is a Kiryu-kai Daimon Pin together with either ",Object(_.jsx)("a",{href:"https://booth.pm/ja/items/1796466",children:"a Kusozako T-Shirt"})," or ",Object(_.jsx)("a",{href:"https://booth.pm/ja/items/2213532",children:"a Gachikoi T-Shirt"}),"."]}),Object(_.jsx)("p",{children:"Always remember to bear the Kiryu-kai Daimon Pin whenever out in public."}),Object(_.jsx)("p",{children:"\u203b After you receive your shipment of the Kiryu-kai Daimon Smartphone Case after August 16, 2021, always remember to store your smartphone within your Kiryu-kai Daimon Smartphone Case whenever out in public."}),Object(_.jsxs)("p",{className:S.a.last,children:["\u203b This contract is effective from ",Object(_.jsx)("strong",{children:"July 1, 2021 until July 1, 2521"}),". Make sure to visit Kiryu Coco-sama, the Fourth Generation Chairman of Kiryu-kai, on July 1, 2521 to renew this contract in person."]})]})},D={ja:Object(_.jsxs)(_.Fragment,{children:["\u7f72\u540d\u3059\u308b",Object(_.jsx)("sup",{children:"\u203b"})]}),en:Object(_.jsxs)(_.Fragment,{children:["Sign",Object(_.jsx)("sup",{children:"*"})]})},H={ja:"https://twitter.com/same_kiryukaIll/status/1403628837867442184",en:"https://twitter.com/same_kiryukaIll/status/1403746332540502017"},z={ja:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("span",{className:S.a.note__mark,children:"\u203b"}),Object(_.jsxs)("span",{className:S.a.note__txt,children:["\u3053\u306e\u4e00\u89a7\u306b\u63b2\u8f09\u3057\u3066\u307b\u3057\u304f\u306a\u3044\uff01\u3068\u3044\u3046\u65b9\u306f",Object(_.jsx)("a",{href:"https://twitter.com/kiryu_kai_contr",children:"@kiryu_kai_contr"}),"\u306b\u30ea\u30d7\u30e9\u30a4\u304bDM\u3067\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",Object(_.jsx)("span",{className:S.a.note__br,children:"\u9006\u306b\u63b2\u8f09\u3057\u3066\u307b\u3057\u3044\uff01\u3068\u3044\u3046\u65b9\u3082\u3054\u9023\u7d61\u3044\u305f\u3060\u3051\u308b\u3068\u3046\u308c\u3057\u3044\u3067\u3059\uff01"})]})]}),en:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("span",{className:S.a.note__mark,children:"*"}),Object(_.jsxs)("span",{className:S.a.note__txt,children:["If you don't want your post to be included in this list, please let me know via reply or DM to ",Object(_.jsx)("a",{href:"https://twitter.com/kiryu_kai_contr",children:"@kiryu_kai_contr"}),".",Object(_.jsx)("span",{className:S.a.note__br,children:"On the other hand, if you want us to publish it, please let us know! I'd be happy to hear from you!"})]})]})};function G(){var e=function(){switch(window.navigator.language){case"ja":case"ja-jp":return"ja";default:return"en"}}();return Object(_.jsxs)(_.Fragment,{children:[I[e],Object(_.jsx)(F,{label:D[e],href:H[e]}),Object(_.jsx)("p",{className:S.a.note,children:Object(_.jsx)("small",{className:S.a.note__inner,children:z[e]})})]})}var P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),i(e),s(e)}))};function B(){return Object(n.useEffect)((function(){var e=document.createElement("style");document.head.append(e),e.textContent="\n      @keyframes scroll-move {\n        0% {\n          transform: translateY(0);\n        }\n\n        100% {\n          transform: translateY(-4px);\n        }\n      }\n\n      @keyframes blurIn {\n        0% {\n          filter: blur(50px);\n        }\n\n        100% {\n          filter: none;\n        }\n      }\n\n      @media (prefers-reduced-motion: no-preference) {\n        body::before {\n          animation: 2s blurIn linear;\n        }\n      }\n\n      .".concat(l.a.a,"::after {\n        animation: 1s scroll-move infinite alternate-reverse linear;\n      }\n    ")})),Object(_.jsx)("p",{className:l.a.wrap,children:Object(_.jsx)("a",{href:"#timeline",className:l.a.a,onClick:function(e){var t=e.target.hash,a=document.querySelector(t);a&&(e.preventDefault(),window.history.pushState(null,document.title,t),window.scroll({top:a.getBoundingClientRect().top+window.pageYOffset,behavior:"smooth"}))},children:"\u540c\u610f\u66f8\u4e00\u89a7"})})}s.a.render(Object(_.jsxs)(r.a.StrictMode,{children:[Object(_.jsx)(u,{}),Object(_.jsxs)("main",{children:[Object(_.jsx)(B,{}),Object(_.jsx)(G,{}),Object(_.jsx)("div",{id:"timeline",children:Object(_.jsx)(v,{})})]}),Object(_.jsx)(O,{})]}),document.getElementById("root")),P()}],[[24,1,2]]]);
//# sourceMappingURL=main.b484084a.chunk.js.map