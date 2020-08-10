(function () {
    //随机图片
    var full_page = document.getElementsByClassName("full_page")[0];
    var footer_bg = document.getElementById("footer");

    var img = "https://cdn.jsdelivr.net/gh/zykjofficial/zykjimg/anime/anime" + Math.floor(Math.random() * 50) + ".png";

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

//手机侧边栏默认不展开
var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
if (mobile_sidebar_menus != null) {
    var menus_item_child = mobile_sidebar_menus.getElementsByClassName("menus_item_child");
    var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
    for (var i = 0; i < menus_item_child.length; i++) {
        menus_item_child[i].style.display = "none";
        menus_expand[i].className += " closed";
    }
}

// 针对不同域名的Url变化
var post_copyright_info = document.getElementsByClassName("post-copyright-info")[1]

if (post_copyright_info) {
    postUrl = post_copyright_info.getElementsByTagName("a")[0];
    postUrl.href = postUrl.innerText = window.location.origin + window.location.pathname
}

// 获取最后活动时间
function diaplayTime(data) {
    var str = data;
    //将字符串转换成时间格式
    var timePublish = new Date(str);
    var timeNow = new Date();
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var diffValue = timeNow - timePublish;
    var diffMonth = diffValue / month; 
    var diffWeek = diffValue / (7 * day);
    var diffDay = diffValue / day;
    var diffHour = diffValue / hour;
    var diffMinute = diffValue / minute;
    if (diffValue < 0) {
        result = "未知时间"
    }
    else if (diffMonth > 3) {
        result = timePublish.getFullYear()+"-";
        result += timePublish.getMonth() + "-";
        result += timePublish.getDate();
    }
    else if (diffMonth > 1) {
        result = parseInt(diffMonth) + "月前";
    }
    else if (diffWeek > 1) {
        result = parseInt(diffWeek) + "周前";
    }
    else if (diffDay > 1) {
        result = parseInt(diffDay) + "天前";
    }
    else if (diffHour > 1) {
        result = parseInt(diffHour) + "小时前";
    }
    else if (diffMinute > 1) {
        result = parseInt(diffMinute) + "分钟前";
    }
    else {
        result = "刚刚";
    }
    return result;
}

var activity_time = document.querySelector("#activity_time")

if(activity_time){
    let modified_time = document.querySelector('meta[property="article:modified_time"]').getAttribute("content")
    let published_time = diaplayTime(modified_time)
    activity_time.innerHTML = published_time
} 

// if (window.location.host.indexOf("js.org" || "github.io") > -1 && window.location.protocol !== "https:") {
//     window.location.protocol = "https";
// }

//获取当前IP地址和浏览器标识
// function getBrowserInfo() {
//     var agent = navigator.userAgent.toLowerCase();

//     var regStr_ie = /msie [\d.]+;/gi;
//     var regStr_ff = /firefox\/[\d.]+/gi
//     var regStr_chrome = /chrome\/[\d.]+/gi;
//     var regStr_saf = /safari\/[\d.]+/gi;

//     //IE
//     if (agent.indexOf("msie") > 0) {
//         return agent.match(regStr_ie);
//     }

//     //firefox
//     if (agent.indexOf("firefox") > 0) {
//         return agent.match(regStr_ff);
//     }

//     //Chrome
//     if (agent.indexOf("chrome") > 0) {
//         return agent.match(regStr_chrome);
//     }

//     //Safari
//     if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
//         return agent.match(regStr_saf);
//     }
// }

// var ip_content = document.querySelector(".ip_content");

// if (ip_content != null && typeof (returnCitySN) != undefined) {
//     ip_content.innerHTML = '欢迎来自 <span class="p red">' + returnCitySN["cname"] + "</span> 的小伙伴<br>" + "访问IP为： <span class='p cyan'>" + returnCitySN["cip"] + "</span><br>浏览器版本：<span class='p blue'>" + getBrowserInfo() + '</span>';
// }

// if (returnCitySN) {
//     console.log("\n %c " + '欢迎来自 ' + returnCitySN["cname"] + " 的小伙伴" + "来到卓越科技的个人博客 " + " %c https://zykj.js.org \n", "color: #fff; background: #4285f4; padding:5px 0;", "background: #66CCFF; padding:5px 0;");
// }
