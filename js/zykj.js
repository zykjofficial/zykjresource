(function(){
//随机图片 
var full_page = document.getElementsByClassName("full_page")[0];
var footer_bg = document.getElementById("footer");

var img = "https://cdn.jsdelivr.net/gh/zykjofficial/zykjimg/anime/anime"+Math.floor(Math.random()*36)+".png";

if(full_page != null && footer_bg!=null){
  full_page.style.backgroundImage = "url("+img + ")";
  footer_bg.style.backgroundImage =  "url("+img + ")";
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

//运行时间
var now = new Date();
var timeDate = document.getElementById("timeDate");
var times = document.getElementById("times");

function createtime() {
    var grt = new Date("03/21/2020 12:14:00");//在此处修改你的建站时间，格式：月/日/年 时:分:秒
    now.setTime(now.getTime() + 250);
    days = (now - grt) / 1000 / 60 / 60 / 24;
    dnum = Math.floor(days);
    hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
    hnum = Math.floor(hours);
    if (String(hnum).length == 1) {
        hnum = "0" + hnum;
    }
    minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes);
    if (String(mnum).length == 1) {
        mnum = "0" + mnum;
    }
    seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds);
    if (String(snum).length == 1) {
        snum = "0" + snum;
    }
    timeDate.innerHTML = "小破站运行了 " + dnum + " 天 ";
    times.innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
}

if (timeDate != null && times != null) {
    setInterval("createtime()", 250);
}

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

if (returnCitySN) {
    console.log("\n %c " + '欢迎来自 ' + returnCitySN["cname"] + " 的小伙伴" + "来到卓越科技的个人博客 " + " %c https://zykjofficial.tk \n", "color: #fff; background: #4285f4; padding:5px 0;", "background: #66CCFF; padding:5px 0;");
}

//手机侧边栏默认不展开
var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
if(mobile_sidebar_menus != null){
	var menus_item_child = mobile_sidebar_menus.getElementsByClassName("menus_item_child");
	var menus_expand = mobile_sidebar_menus.getElementsByClassName("menus-expand");
    for (var i = 0; i < menus_item_child.length; i++) {
        menus_item_child[i].style.display = "none";
        menus_expand[i].className += " menus-closed";
    }
}
