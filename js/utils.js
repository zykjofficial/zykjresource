function debounce(t,n,e){let i;return function(){const o=this,c=arguments,a=function(){i=null,e||t.apply(o,c)},l=e&&!i;clearTimeout(i),i=setTimeout(a,n),l&&t.apply(o,c)}}function throttle(t,n,e){let i,o,c,a=0;e||(e={});const l=function(){a=!1===e.leading?0:(new Date).getTime(),i=null,t.apply(o,c),i||(o=c=null)};return function(){const s=(new Date).getTime();a||!1!==e.leading||(a=s);const u=n-(s-a);o=this,c=arguments,u<=0||u>n?(i&&(clearTimeout(i),i=null),a=s,t.apply(o,c),i||(o=c=null)):i||!1===e.trailing||(i=setTimeout(l,u))}}function sidebarPaddingR(){const t=window.innerWidth,n=document.body.clientWidth,e=t-n;t!==n&&$("body").css("padding-right",e)}function scrollToDest(t,n=0){const e=$(t).offset();$("body,html").animate({scrollTop:e.top-n})}function snackbarShow(t,n,e){const i=void 0!==n&&n,o=void 0!==e?e:2e3,c=GLOBAL_CONFIG.Snackbar.position,a="light"===document.documentElement.getAttribute("data-theme")?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark;Snackbar.show({text:t,backgroundColor:a,showAction:i,duration:o,pos:c})}const Cookies={get:function(t){const n=("; "+document.cookie).split(`; ${t}=`);if(2===n.length)return n.pop().split(";").shift()},set:function(t,n,e){let i="";if(e){const t=new Date;t.setTime(t.getTime()+24*e*60*60*1e3),i="; expires="+t.toUTCString()}document.cookie=t+"="+(n||"")+i+"; path=/"}},initJustifiedGallery=function(t){t.each((function(t,n){$(this).is(":visible")&&$(this).justifiedGallery({rowHeight:220,margins:4})}))},diffDate=function(t){const n=new Date,e=new Date(t.replace(/-/g,"/")),i=n.getTime()-e.getTime();return Math.floor(i/864e5)};