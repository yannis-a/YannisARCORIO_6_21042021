(()=>{var e={514:(e,t,r)=>{r(70),r(579).Array.filter},663:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},159:(e,t,r)=>{var a=r(727);e.exports=function(e){if(!a(e))throw TypeError(e+" is not an object!");return e}},523:(e,t,r)=>{var a=r(216),n=r(799),i=r(530),s=r(728),o=r(745);e.exports=function(e,t){var r=1==e,l=2==e,d=3==e,c=4==e,u=6==e,p=5==e||u,h=t||o;return function(t,o,m){for(var f,y,g=i(t),v=n(g),w=a(o,m,3),b=s(v.length),E=0,x=r?h(t,b):l?h(t,0):void 0;b>E;E++)if((p||E in v)&&(y=w(f=v[E],E,g),e))if(r)x[E]=y;else if(y)switch(e){case 3:return!0;case 5:return f;case 6:return E;case 2:x.push(f)}else if(c)return!1;return u?-1:d||c?c:x}}},161:(e,t,r)=>{var a=r(727),n=r(421),i=r(939)("species");e.exports=function(e){var t;return n(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!n(t.prototype)||(t=void 0),a(t)&&null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}},745:(e,t,r)=>{var a=r(161);e.exports=function(e,t){return new(a(e))(t)}},894:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},579:e=>{var t=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=t)},216:(e,t,r)=>{var a=r(663);e.exports=function(e,t,r){if(a(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,a){return e.call(t,r,a)};case 3:return function(r,a,n){return e.call(t,r,a,n)}}return function(){return e.apply(t,arguments)}}},333:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},666:(e,t,r)=>{e.exports=!r(929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},467:(e,t,r)=>{var a=r(727),n=r(938).document,i=a(n)&&a(n.createElement);e.exports=function(e){return i?n.createElement(e):{}}},856:(e,t,r)=>{var a=r(938),n=r(579),i=r(216),s=r(818),o=r(69),l=function(e,t,r){var d,c,u,p=e&l.F,h=e&l.G,m=e&l.S,f=e&l.P,y=e&l.B,g=e&l.W,v=h?n:n[t]||(n[t]={}),w=v.prototype,b=h?a:m?a[t]:(a[t]||{}).prototype;for(d in h&&(r=t),r)(c=!p&&b&&void 0!==b[d])&&o(v,d)||(u=c?b[d]:r[d],v[d]=h&&"function"!=typeof b[d]?r[d]:y&&c?i(u,a):g&&b[d]==u?function(e){var t=function(t,r,a){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,a)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(u):f&&"function"==typeof u?i(Function.call,u):u,f&&((v.virtual||(v.virtual={}))[d]=u,e&l.R&&w&&!w[d]&&s(w,d,u)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},929:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},938:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},69:e=>{var t={}.hasOwnProperty;e.exports=function(e,r){return t.call(e,r)}},818:(e,t,r)=>{var a=r(743),n=r(101);e.exports=r(666)?function(e,t,r){return a.f(e,t,n(1,r))}:function(e,t,r){return e[t]=r,e}},758:(e,t,r)=>{e.exports=!r(666)&&!r(929)((function(){return 7!=Object.defineProperty(r(467)("div"),"a",{get:function(){return 7}}).a}))},799:(e,t,r)=>{var a=r(894);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==a(e)?e.split(""):Object(e)}},421:(e,t,r)=>{var a=r(894);e.exports=Array.isArray||function(e){return"Array"==a(e)}},727:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},227:e=>{e.exports=!0},743:(e,t,r)=>{var a=r(159),n=r(758),i=r(206),s=Object.defineProperty;t.f=r(666)?Object.defineProperty:function(e,t,r){if(a(e),t=i(t,!0),a(r),n)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},101:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},250:(e,t,r)=>{var a=r(579),n=r(938),i="__core-js_shared__",s=n[i]||(n[i]={});(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:a.version,mode:r(227)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},875:(e,t,r)=>{"use strict";var a=r(929);e.exports=function(e,t){return!!e&&a((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},52:e=>{var t=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},728:(e,t,r)=>{var a=r(52),n=Math.min;e.exports=function(e){return e>0?n(a(e),9007199254740991):0}},530:(e,t,r)=>{var a=r(333);e.exports=function(e){return Object(a(e))}},206:(e,t,r)=>{var a=r(727);e.exports=function(e,t){if(!a(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!a(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!a(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!a(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")}},730:e=>{var t=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+r).toString(36))}},939:(e,t,r)=>{var a=r(250)("wks"),n=r(730),i=r(938).Symbol,s="function"==typeof i;(e.exports=function(e){return a[e]||(a[e]=s&&i[e]||(s?i:n)("Symbol."+e))}).store=a},70:(e,t,r)=>{"use strict";var a=r(856),n=r(523)(2);a(a.P+a.F*!r(875)([].filter,!0),"Array",{filter:function(e){return n(this,e,arguments[1])}})}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}(()=>{"use strict";r(514);class e{createTag(e){return $("<img></img>").attr("src","src/Sample Photos/"+e.photographerId+"/"+e.image).attr("alt",e.alt).attr("role","button").addClass("media")}}class t{createTag(e){return $("<video></video>").attr("controls","controls").attr("src","src/Sample Photos/"+e.photographerId+"/"+e.video).attr("role","button").addClass("media")}}class a{getMedia(r){let a=null;return r.hasOwnProperty("image")?a=new e:r.hasOwnProperty("video")&&(a=new t),a.createTag(r)}}class n{constructor(){this.currentIndex=0}init(e,t){return Array.from(document.getElementsByClassName("media")).forEach(((r,a)=>r.addEventListener("click",(()=>{let r=$("#carousel-media"),n=$("#carousel-media-name");this.currentIndex=a,document.getElementById("carousel").style.display="block",r.html(e[a]),n.html(t[a])})))),this.previous(document.querySelector(".left-arrow-carousel"),e,t),this.next(document.querySelector(".right-arrow-carousel"),e,t),this.close(),this.keyboard(e,t),this}previous(e,t,r){e.addEventListener("click",(()=>{this.currentIndex-=1;let e=$("#carousel-media"),a=$("#carousel-media-name");this.currentIndex<0&&(this.currentIndex=t.length-1,this.currentIndex=r.length-1),e.html(t[this.currentIndex]),a.html(r[this.currentIndex])}))}next(e,t,r){e.addEventListener("click",(()=>{this.currentIndex+=1;let e=$("#carousel-media"),a=$("#carousel-media-name");this.currentIndex>r.length-1&&(this.currentIndex=0),e.html(t[this.currentIndex]),a.html(r[this.currentIndex])}))}close(){document.querySelector(".close-carousel-icon").addEventListener("click",(()=>{document.getElementById("carousel").style.display="none"}))}keyboard(e,t){document.addEventListener("keydown",(r=>{let a=$("#carousel-media"),n=$("#carousel-media-name");"Escape"==r.code?document.getElementById("carousel").style.display="none":"ArrowRight"==r.code?(this.currentIndex+=1,this.currentIndex>t.length-1&&(this.currentIndex=0),a.html(e[this.currentIndex]),n.html(t[this.currentIndex])):"ArrowLeft"==r.code&&(this.currentIndex-=1,this.currentIndex<0&&(this.currentIndex=e.length-1,this.currentIndex=t.length-1),a.html(e[this.currentIndex]),n.html(t[this.currentIndex]))}))}}class i{constructor(){this.totalLike=0}getGallery(e){const t=window.location.search.split("id=")[1];let r=new a,i=[],s=[];return e.forEach((e=>{let a=r.getMedia(e);t==e.photographerId&&($("#medias").append($('<article class="media-container"></article>').append($('<a href="#" title="'+e.title+'"></a>').append($('<div class="media-div" aria-label="'+e.title+',closeup view"></div>').append(a)),$('<div class="media-infos"></div>').append($('<h2 class="media-title">'+e.title+"</h2>"),$('<div class="media-like"></div>').append($('<span class="media-like-number-'+e.id+'">'+e.likes+"</span>"),$('<i class="fas fa-heart heart-btn-'+e.id+'" aria-label="likes" role="button"></i>'))))),this.liked(e),this.totalLike+=parseInt(e.likes),i.push(a),s.push(e.title),(new n).init(i,s))})),this}liked(e){$(".heart-btn-"+e.id).on("click",(()=>{let t=$(".media-like-number-"+e.id),r=parseInt(t.text());r++,t.text(r);let a=$("#total-likes"),n=parseInt(a.text());n++,a.text(n)}))}}class s{scrollButton(){window.addEventListener("scroll",(()=>{window.scrollY>=130?$("#back-home").css("display","block"):$("#back-home").css("display","none")}))}dropDownMenu(e){const t=["[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'],r=document.querySelectorAll('[aria-haspopup="listbox"]'),a=document.querySelector("#profil");let n=document.getElementsByClassName("drop-btn"),i=document.getElementsByClassName("arrow-up-close");n&&(n[0].addEventListener("click",(()=>{r.forEach((e=>{let r=document.getElementById(e.getAttribute("aria-controls"));const n=r.querySelectorAll(t),i=n[0],s=n[n.length-1];r.setAttribute("aria-hidden",!1),r.style.display="block",a.setAttribute("aria-hidden",!0),i&&window.setTimeout((()=>{i.focus(),n.forEach((e=>{e.addEventListener&&e.addEventListener("keydown",(e=>{9===e.which&&(e.shiftKey?e.target===i&&(e.preventDefault(),s.focus()):e.target===s&&(e.preventDefault(),i.focus()))}))}))}),100)}))})),this.sortMedias(e,a)),i&&i[0].addEventListener("click",(()=>{optionSort[0].style.display="none"}))}sortMedias(e,t){let r=[],a=e.media,n=document.querySelector(".drop-btn"),i=document.getElementsByClassName("option-sort");Array.from(document.getElementsByClassName("sort")).forEach(((e,s)=>e.addEventListener("click",(()=>{i[0].style.display="none",0==s?(n.innerHTML='Popularité <span class="fas fa-chevron-down" role=\'button\' aria-hidden="true"></span>',r=a.sort(((e,t)=>t.likes-e.likes))):1==s?(n.innerHTML='Date <span class="fas fa-chevron-down" role=\'button\' aria-hidden="true"></span>',r=a.sort(((e,t)=>new Date(e.date)-new Date(t.date)))):2==s&&(n.innerHTML='Titre <span class="fas fa-chevron-down" role=\'button\' aria-hidden="true"></span>',r=a.sort(((e,t)=>e.title.toLowerCase()<t.title.toLowerCase()?-1:e.title.toLowerCase()>t.title.toLowerCase()?1:void 0))),this.displaySortMedia(r),t.setAttribute("aria-hidden",!1)}))))}displaySortMedia(e){document.getElementById("medias").innerHTML="",(new i).getGallery(e)}selectByTags(){let e=document.querySelectorAll(".card_user"),t=document.querySelector("#nav ul"),r=document.querySelectorAll(".tag-link");t.addEventListener("click",(t=>{-1===t.target.classList.value.indexOf("activated")?t.target.classList.add("activated"):t.target.classList.remove("activated"),this.diplayArticle(e)})),console.log(r),r.forEach((t=>{console.log("dans le for each : "+t),t.addEventListener("keydown",(t=>{if("Enter"==t.code){console.log(t);let r=t.target.classList.value;console.log("classValue : "+r),-1===r.indexOf("activated")?t.target.firstChild.classList.add("activated"):t.target.firstChild.classList.remove("activated"),this.diplayArticle(e)}}))}))}redirectedByTag(){if(""!=window.location.hash){let e=document.querySelectorAll(".card_user"),t=window.location.hash.split("#")[1];console.log(t);let r=document.getElementById(t);console.log(r.firstChild),r.firstChild.classList.add("activated"),console.log(r),this.diplayArticle(e)}}diplayArticle(e){e.forEach((e=>{this.isAvtivatedFilters(e)?e.style.display="block":e.style.display="none"}))}isAvtivatedFilters(e){let t=this.getActivatedFilters(),r=e.classList.value.split(" ");return t.filter((e=>r.includes(e))).length>=1||0==t.length}getActivatedFilters(){let e=document.querySelectorAll("#nav ul a li.activated"),t=[];return e.forEach((e=>{t.push(e.getAttribute("data-filter"))})),t}toUpperCaseFirst(e){return(e+"").charAt(0).toUpperCase()+e.substr(1)}}class o{getTags(e){e.tags.forEach((e=>{$("#nav ul").append($("<a></a>").addClass("tag-link").attr("href","#").attr("id",e).append($("<li></li>").attr("data-filter",e).append((new s).toUpperCaseFirst(e))))}))}getPhotographers(e){let t=e.photographers;return t.forEach((e=>{var t="";e.tags.forEach((e=>{t+='<a class="tag"><li>'+(new s).toUpperCaseFirst(e)+"</li></a>"})),$("#photographers").append($("<article></article>").addClass("card_user "+e.tags.join(" ")).append($('<a href="photographers.html?id='+e.id+'" title="'+e.name+'"></a>').addClass("card_user_link-profil").append($('<div id="'+e.id+'" class="img_user '+e.id+'"></div>'),$("<h2>"+e.name+"</h2>").addClass("name_user")),$("<div></div>").addClass("text_user").append($("<p>"+e.city+", "+e.country+"</p>").addClass("loc_user"),$("<p>"+e.tagline+"</p>").addClass("tagline_user"),$("<p>"+e.price+"€/jour</p>").addClass("price_user")),$("<div></div>").addClass("tags").append($("<ul></ul>").append(t))));var r="src/Sample Photos/Photos profil/"+e.portrait,a=new Image;a.onload=function(){document.getElementById(e.id).src=a.src,a.height<=a.width?$("."+e.id).addClass("imgP"):a.height>a.width&&$("."+e.id).addClass("imgL"),$("."+e.id).append(a)},a.src=r})),(new s).selectByTags(),(new s).scrollButton(),t}}class l{initialize(e){const t=document.querySelectorAll('[aria-haspopup="dialog"]'),r=document.querySelector("#profil"),a=["[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'],n=function(e){const t=e.querySelectorAll(a),n=t[0],i=t[t.length-1];e.setAttribute("aria-hidden",!1),e.style.display="block",r.setAttribute("aria-hidden",!0),n&&window.setTimeout((()=>{n.focus(),t.forEach((e=>{e.addEventListener&&e.addEventListener("keydown",(e=>{9===e.which&&(e.shiftKey?e.target===n&&(e.preventDefault(),i.focus()):e.target===i&&(e.preventDefault(),n.focus()))}))}))}),100)},i=function(e,t){e.setAttribute("aria-hidden",!0),e.style.display="none",r.setAttribute("aria-hidden",!1),t.focus()};t.forEach((t=>{const r=document.getElementById(t.getAttribute("aria-controls")),a=document.getElementById("close-form"),s=r.querySelectorAll("[data-dismiss]");this.getPhotographerName(e),t.addEventListener("click",(e=>{e.preventDefault(),n(r)})),t.addEventListener("keydown",(e=>{13===e.which&&(e.preventDefault(),n(r))})),r.addEventListener("keydown",(e=>{27===e.which&&i(r,t)})),a.addEventListener("click",(e=>{i(r,t)})),s.forEach((e=>{const r=document.getElementById(e.dataset.dismiss);e.addEventListener("click",(e=>{e.preventDefault(),i(r,t)}))})),window.addEventListener("click",(e=>{e.target===r&&i(r,t)}))}))}getPhotographerName(e){let t=window.location.search.split("id=")[1],r=t?e.filter((e=>e.id==t)):e;$("#form-name").append(r[0].name)}}class d{validate(){let e=document.getElementById("contact-form"),t=document.getElementById("first-name"),r=document.getElementById("last-name"),a=document.getElementById("email"),n=document.getElementById("message");const i=/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/,s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;e.addEventListener("submit",(e=>{e.preventDefault(),this.checkFirstName(t,i)&&this.checkLastName(r,i)&&this.checkEmail(a,s)&&this.checkMessage(n)&&(t.style.border="none",r.style.border="none",a.style.border="none",n.style.border="none",this.consoleMessageValid(t,r,a,n),document.getElementById("form-modal").style.display="none")}))}consoleMessageValid(e,t,r,a){console.group("Contact Message"),console.log("Prénom : "+e.value),console.log("Nom : "+t.value),console.log("Email : "+r.value),console.log("Message : "+a.value),console.groupEnd()}checkLastName(e,t){let r=document.getElementById("error-last-name");return e.value.trim().length<2||""===e.value.trim()?(e.style.border="2px solid red",r.innerHTML="2 caractères minimum",r.style.display="inline",!1):e.value.match(t)?(e.style.border="solid #279e7a 0.19rem",r.style.display="none",!0):(e.style.border="2px solid red",r.innerHTML="caractère non autorisé",r.style.display="inline",!1)}checkFirstName(e,t){let r=document.getElementById("error-first-name");return e.value.trim().length<2||""===e.value.trim()?(e.style.border="2px solid red",r.innerHTML="2 caractères minimum",r.style.display="inline",!1):e.value.match(t)?(e.style.border="solid #279e7a 0.19rem",r.style.display="none",!0):(e.style.border="2px solid red",r.innerHTML="caractère non autorisé",r.style.display="inline",!1)}checkEmail(e,t){let r=document.getElementById("error-mail");return e.value.trim().match(t)?(e.style.border="solid #279e7a 0.19rem",r.style.display="none",!0):(e.style.border="2px solid red",r.innerHTML="email non valide",r.style.display="inline",!1)}checkMessage(e){let t=document.getElementById("error-message");return""===e.value.trim()||null==e.value.trim()?(e.style.border="2px solid red",t.innerHTML="ne peut pas être vide",t.style.display="inline",!1):(e.style.border="solid #279e7a 0.19rem",t.style.display="none",!0)}}class c{getProfil(e){let t=e.photographers;const r=window.location.search.split("id=")[1],a=r?t.filter((e=>e.id==r)):t;var n="";a[0].tags.forEach((e=>{n+='<a aria-label="Tag" class="tag '+e+'" href="index.html#'+e+'"><li>'+(new s).toUpperCaseFirst(e)+"</li></a>"})),$("#profil-header").addClass("profil-header").append($('<div class="infos"></div>').append($("<h2>"+a[0].name+"</h2>"),$('<p class="city">'+a[0].city+", "+a[0].country+"</p>"),$('<p class="tagline">'+a[0].tagline+"</p>"),$('<div id="tags-profil"></div>').addClass("tags").append($("<ul></ul>").append(n))),$('<button id="contact" aria-haspopup="dialog" aria-controls="form-modal" title="Contact Me">Contactez-moi</button>'),$('<div class="image"></div>').append($('<div id="'+a[0].id+'" class="img_user '+a[0].id+'"></div>')));var i="src/Sample Photos/Photos profil/"+a[0].portrait,o=new Image;o.onload=function(){document.getElementById(a[0].id).src=o.src,o.height<=o.width?$("."+a[0].id).addClass("imgP"):o.height>o.width&&$("."+a[0].id).addClass("imgL"),$("."+a[0].id).append(o)},o.src=i,o.setAttribute("alt",""),(new l).initialize(t),(new d).validate()}}class u{createTag(e){return $("<img></img>").attr("src","src/Sample Photos/"+e.photographerId+"/"+e.image).attr("alt",e.alt).attr("role","button").addClass("media")}}class p{createTag(e){return $("<video></video>").attr("controls","controls").attr("src","src/Sample Photos/"+e.photographerId+"/"+e.video).attr("role","button").addClass("media")}}class h{getMedia(e){let t=null;return e.hasOwnProperty("image")?t=new u:e.hasOwnProperty("video")&&(t=new p),t.createTag(e)}}class m{constructor(){this.totalLike=0}getGallery(e){const t=window.location.search.split("id=")[1];let r=new h,a=[],i=[];return e.forEach((e=>{let s=r.getMedia(e);t==e.photographerId&&($("#medias").append($('<article class="media-container"></article>').append($('<a href="#" title="'+e.title+'"></a>').append($('<div class="media-div" aria-label="'+e.title+',closeup view"></div>').append(s)),$('<div class="media-infos"></div>').append($('<h2 class="media-title">'+e.title+"</h2>"),$('<div class="media-like"></div>').append($('<span class="media-like-number-'+e.id+'">'+e.likes+"</span>"),$('<i class="fas fa-heart heart-btn-'+e.id+'" aria-label="likes" role="button"></i>'))))),this.liked(e),this.totalLike+=parseInt(e.likes),a.push(s),i.push(e.title),(new n).init(a,i))})),this}liked(e){$(".heart-btn-"+e.id).on("click",(()=>{let t=$(".media-like-number-"+e.id),r=parseInt(t.text());r++,t.text(r);let a=$("#total-likes"),n=parseInt(a.text());n++,a.text(n)}))}}class f{getMedias(e){let t=e.media,r=(new m).getGallery(t);this.getLikesPrice(r.totalLike,e.photographers)}getLikesPrice(e,t){const r=window.location.search.split("id=")[1];t.forEach((t=>{r==t.id&&$("#price").append($('<span id="total-likes">'+e+"</span>"),$('<i class="fas fa-heart" aria-label="likes"></i>'),$("<span>"+t.price+" €/jour </span>"))}))}}class y{scrollButton(){window.addEventListener("scroll",(()=>{window.scrollY>=130?$("#back-home").css("display","block"):$("#back-home").css("display","none")}))}dropDownMenu(e){const t=["[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'],r=document.querySelectorAll('[aria-haspopup="listbox"]'),a=document.querySelector("#profil");let n=document.getElementsByClassName("drop-btn"),i=document.getElementsByClassName("arrow-up-close");n&&(n[0].addEventListener("click",(()=>{r.forEach((e=>{let r=document.getElementById(e.getAttribute("aria-controls"));const n=r.querySelectorAll(t),i=n[0],s=n[n.length-1];r.setAttribute("aria-hidden",!1),r.style.display="block",a.setAttribute("aria-hidden",!0),i&&window.setTimeout((()=>{i.focus(),n.forEach((e=>{e.addEventListener&&e.addEventListener("keydown",(e=>{9===e.which&&(e.shiftKey?e.target===i&&(e.preventDefault(),s.focus()):e.target===s&&(e.preventDefault(),i.focus()))}))}))}),100)}))})),this.sortMedias(e,a)),i&&i[0].addEventListener("click",(()=>{optionSort[0].style.display="none"}))}sortMedias(e,t){let r=[],a=e.media,n=document.querySelector(".drop-btn"),i=document.getElementsByClassName("option-sort");Array.from(document.getElementsByClassName("sort")).forEach(((e,s)=>e.addEventListener("click",(()=>{i[0].style.display="none",0==s?(n.innerHTML='Popularité <span class="fas fa-chevron-down" role=\'button\' aria-hidden="true"></span>',r=a.sort(((e,t)=>t.likes-e.likes))):1==s?(n.innerHTML='Date <span class="fas fa-chevron-down" role=\'button\' aria-hidden="true"></span>',r=a.sort(((e,t)=>new Date(e.date)-new Date(t.date)))):2==s&&(n.innerHTML='Titre <span class="fas fa-chevron-down" role=\'button\' aria-hidden="true"></span>',r=a.sort(((e,t)=>e.title.toLowerCase()<t.title.toLowerCase()?-1:e.title.toLowerCase()>t.title.toLowerCase()?1:void 0))),this.displaySortMedia(r),t.setAttribute("aria-hidden",!1)}))))}displaySortMedia(e){document.getElementById("medias").innerHTML="",(new i).getGallery(e)}selectByTags(){let e=document.querySelectorAll(".card_user"),t=document.querySelector("#nav ul"),r=document.querySelectorAll(".tag-link");t.addEventListener("click",(t=>{-1===t.target.classList.value.indexOf("activated")?t.target.classList.add("activated"):t.target.classList.remove("activated"),this.diplayArticle(e)})),console.log(r),r.forEach((t=>{console.log("dans le for each : "+t),t.addEventListener("keydown",(t=>{if("Enter"==t.code){console.log(t);let r=t.target.classList.value;console.log("classValue : "+r),-1===r.indexOf("activated")?t.target.firstChild.classList.add("activated"):t.target.firstChild.classList.remove("activated"),this.diplayArticle(e)}}))}))}redirectedByTag(){if(""!=window.location.hash){let e=document.querySelectorAll(".card_user"),t=window.location.hash.split("#")[1];console.log(t);let r=document.getElementById(t);console.log(r.firstChild),r.firstChild.classList.add("activated"),console.log(r),this.diplayArticle(e)}}diplayArticle(e){e.forEach((e=>{this.isAvtivatedFilters(e)?e.style.display="block":e.style.display="none"}))}isAvtivatedFilters(e){let t=this.getActivatedFilters(),r=e.classList.value.split(" ");return t.filter((e=>r.includes(e))).length>=1||0==t.length}getActivatedFilters(){let e=document.querySelectorAll("#nav ul a li.activated"),t=[];return e.forEach((e=>{t.push(e.getAttribute("data-filter"))})),t}toUpperCaseFirst(e){return(e+"").charAt(0).toUpperCase()+e.substr(1)}}(new class{async getDataFishEye(){let e=await fetch("../../src/data.json"),t=await e.json();return{photographers:[...t.photographers],media:[...t.media],tags:[...t.tags]}}}).getDataFishEye().then((e=>{if(window.location.pathname.includes("/photographers.html"))return(new c).getProfil(e),(new y).dropDownMenu(e),void(new f).getMedias(e);(new o).getTags(e),(new o).getPhotographers(e),(new y).redirectedByTag()})).catch((e=>{console.error("Failed to load DataFishEye :"+e)}))})()})();