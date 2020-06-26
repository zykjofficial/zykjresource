"use strict";function debounce(n,o,a){var r;return function(){var t=this,e=arguments,i=a&&!r;clearTimeout(r),r=setTimeout(function(){r=null,a||n.apply(t,e)},o),i&&n.apply(t,e)}}function throttle(i,n,o){var a,r,c,l=0;o=o||{};function s(){l=!1===o.leading?0:(new Date).getTime(),a=null,i.apply(r,c),a||(r=c=null)}return function(){var t=(new Date).getTime();l||!1!==o.leading||(l=t);var e=n-(t-l);r=this,c=arguments,e<=0||n<e?(a&&(clearTimeout(a),a=null),l=t,i.apply(r,c),a||(r=c=null)):a||!1===o.trailing||(a=setTimeout(s,e))}}function sidebarPaddingR(){var t=window.innerWidth,e=document.body.clientWidth,i=t-e;t!==e&&$("body").css("padding-right",i)}function isIpad(){return"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints}function isTMobile(){var t=navigator.userAgent;return window.screen.width<992&&/iPad|iPhone|iPod|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(t)}function isMobile(){return this.isIpad()||this.isTMobile()}function isDesktop(){return!this.isMobile()}function scrollToDest(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,i=$(t).offset();$("body,html").animate({scrollTop:i.top-e})}function loadScript(t,e){var i=document.createElement("script");i.type="text/javascript",i.readyState?i.onreadystatechange=function(){"loaded"!==i.readyState&&"complete"!==i.readyState||(i.onreadystatechange=null,e())}:i.onload=function(){e()},i.src=t,document.body.appendChild(i)}function snackbarShow(t,e,i){var n=void 0!==e&&e,o=void 0!==i?i:2e3,a=GLOBAL_CONFIG.Snackbar.position,r="light"===document.documentElement.getAttribute("data-theme")?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark;Snackbar.show({text:t,backgroundColor:r,showAction:n,duration:o,pos:a})}var Cookies={get:function(t){var e="; ".concat(document.cookie).split("; ".concat(t,"="));if(2===e.length)return e.pop().split(";").shift()},set:function(t,e,i){var n,o="";i&&((n=new Date).setTime(n.getTime()+24*i*60*60*1e3),o="; expires="+n.toUTCString()),document.cookie=t+"="+(e||"")+o+"; path=/"}},initJustifiedGallery=function(t){t.each(function(t,e){$(this).is(":visible")&&$(this).justifiedGallery({rowHeight:220,margins:4})})};GLOBAL_CONFIG.islazyload&&(window.lazyLoadOptions={elements_selector:"img",threshold:0});