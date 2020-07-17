(function () {
//随机图片
    var full_page = document.getElementsByClassName("full_page")[0];
    var footer_bg = document.getElementById("footer");

    var img = "https://cdn.jsdelivr.net/gh/zykjofficial/zykjimg/anime/anime" + Math.floor(Math.random() * 37) + ".png";

    if (full_page != null && footer_bg != null) {
        full_page.style.backgroundImage = "url(" + img + ")";
        footer_bg.style.backgroundImage = "url(" + img + ")";
    }
})()

// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/zykjofficial/zykjofficial.github.io@master/img/funny.ico");
        document.title = '(っ °Д °;)っ 访问的页面不存在了';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/zykjofficial/zykjofficial.github.io@master/img/favicon.ico");
        document.title = '( •̀ ω •́ )✧ 又好啦 ~ ' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});

//获取当前IP地址和浏览器标识
function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();

    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;

    //IE
    if (agent.indexOf("msie") > 0) {
        return agent.match(regStr_ie);
    }

    //firefox
    if (agent.indexOf("firefox") > 0) {
        return agent.match(regStr_ff);
    }

    //Chrome
    if (agent.indexOf("chrome") > 0) {
        return agent.match(regStr_chrome);
    }

    //Safari
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        return agent.match(regStr_saf);
    }
}

var ip_content = document.querySelector(".ip_content");

if (ip_content != null && returnCitySN != undefined) {
    ip_content.innerHTML = '欢迎来自 <span class="p red">' + returnCitySN["cname"] + "</span> 的小伙伴<br>" + "访问IP为： <span class='p cyan'>" + returnCitySN["cip"] + "</span><br>浏览器版本：<span class='p blue'>" + getBrowserInfo() + '</span>';
}

// if (returnCitySN) {
//     console.log("\n %c " + '欢迎来自 ' + returnCitySN["cname"] + " 的小伙伴" + "来到卓越科技的个人博客 " + " %c https://zykj.js.org \n", "color: #fff; background: #4285f4; padding:5px 0;", "background: #66CCFF; padding:5px 0;");
// }

//手机侧边栏默认不展开
var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
if(mobile_sidebar_menus != null){
	var menus_item_child = mobile_sidebar_menus.getElementsByClassName("menus_item_child");
	var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
    for (var i = 0; i < menus_item_child.length; i++) {
        menus_item_child[i].style.display = "none";
        menus_expand[i].className += " closed";
    }
}
