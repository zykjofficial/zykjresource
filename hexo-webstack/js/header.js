function search(){$(".search-icon").css("opacity","1");var s=-1,o=0,e={thisSearch:"https://www.baidu.com/s?wd=",thisSearchIcon:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png')",hotStatus:!0,data:[{name:"百度",img:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png') -80px 0px",position:"0px 0px",url:"https://www.baidu.com/s?wd="},{name:"谷歌",img:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png')  -105px 0px",position:"-40px 0px",url:"https://www.google.com/search?q="},{name:"必应",img:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png')  -80px -25px",position:"0px -40px",url:"https://cn.bing.com/search?q="},{name:"好搜",img:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png') -105px -25px",position:"-40px -40px",url:"https://www.so.com/s?q="},{name:"搜狗",img:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png') -80px -50px",position:"0px -80px",url:"https://www.sogou.com/web?query="},{name:"淘宝",img:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png') -105px -50px",position:"-40px -80px",url:"https://s.taobao.com/search?q="},{name:"京东",img:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png') -80px -75px",position:"0px -120px",url:"http://search.jd.com/Search?keyword="},{name:"天猫",img:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png') -105px -75px",position:"-40px -120px",url:"https://list.tmall.com/search_product.htm?q="},{name:"1688",img:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png') -80px -100px",position:"0px -160px",url:"https://s.1688.com/selloffer/offer_search.htm?keywords="},{name:"知乎",img:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png') -105px -100px",position:"-40px -160px",url:"https://www.zhihu.com/search?type=content&q="},{name:"微博",img:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png') -80px -125px",position:"0px -200px",url:"https://s.weibo.com/weibo/"},{name:"B站",img:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png') -105px -125px",position:"-40px -200px",url:"http://search.bilibili.com/all?keyword="},{name:"豆瓣",img:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png') -80px -150px",position:"0px -240px",url:"https://www.douban.com/search?source=suggest&q="},{name:"优酷",img:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png') -105px -150px",position:"-40px -240px",url:"https://so.youku.com/search_video/q_"},{name:"GitHub",img:"url('https://cdn.jsdelivr.net/gh/zykjofficial/zykjresource@master/hexo-webstack/images/search_icon.png') -80px -175px",position:"0px -280px",url:"https://github.com/search?utf8=✓&q="}]},t=localStorage.getItem("searchData");function n(s){return $(s).contents().filter((function(s,o){return 3===o.nodeType})).text().trim()}function i(s){$.ajax({type:"GET",url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",async:!0,data:{wd:s},dataType:"jsonp",jsonp:"cb",success:function(s){if($("#box ul").text(""),o=s.s.length){$("#box").css("display","block");for(var t=0;t<o;t++)$("#box ul").append("<li><span>"+(t+1)+"</span> "+s.s[t]+"</li>"),$("#box ul li").eq(t).click((function(){var s=n(this);$("#txt").val(s),window.open(e.thisSearch+s),$("#box").css("display","none")})),0===t?($("#box ul li").eq(t).css({"border-top":"none"}),$("#box ul span").eq(t).css({color:"#fff",background:"#f54545"})):1===t?$("#box ul span").eq(t).css({color:"#fff",background:"#ff8547"}):2===t&&$("#box ul span").eq(t).css({color:"#fff",background:"#ffac38"})}else $("#box").css("display","none")},error:function(s){console.log(s)}})}t&&(e=JSON.parse(t)),$("#txt").keyup((function(s){if($(this).val()){if(38==s.keyCode||40==s.keyCode||!e.hotStatus)return;i($(this).val())}else $(".search-clear").css("display","none"),$("#box").css("display","none")})),$("#txt").keydown((function(t){if(40===t.keyCode){s===o-1?s=0:s++,$("#box ul li").eq(s).addClass("current").siblings().removeClass("current");var i=n($("#box ul li").eq(s));$("#txt").val(i)}if(38===t.keyCode){t.preventDefault&&t.preventDefault(),t.returnValue&&(t.returnValue=!1),0===s||-1===s?s=o-1:s--,$("#box ul li").eq(s).addClass("current").siblings().removeClass("current");i=n($("#box ul li").eq(s));$("#txt").val(i)}13===t.keyCode&&(window.open(e.thisSearch+$("#txt").val()),$("#box").css("display","none"),$("#txt").blur(),$("#box ul li").removeClass("current"),s=-1)})),$("#txt").focus((function(){$(".search-box").css("box-show","inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3)"),$(this).val()&&e.hotStatus&&i($(this).val())})),$("#txt").blur((function(){setTimeout((function(){$("#box").css("display","none")}),250)}));for(var a=0;a<e.data.length;a++)$(".search-engine-list").append('<li><span style="background:'+e.data[a].img+'"/></span>'+e.data[a].name+"</li>");$(".search-icon, .search-engine").hover((function(){$(".search-engine").css("display","block")}),(function(){$(".search-engine").css("display","none")})),$("#hot-btn").click((function(){$(this).toggleClass("off"),e.hotStatus=!e.hotStatus,localStorage.searchData=JSON.stringify(e)})),e.hotStatus?$("#hot-btn").removeClass("off"):$("#hot-btn").addClass("off"),$(".search-engine-list li").click((function(){var s=$(this).index();e.thisSearchIcon=e.data[s].position,$(".search-icon").css("background-position",e.thisSearchIcon),e.thisSearch=e.data[s].url,$(".search-engine").css("display","none"),localStorage.searchData=JSON.stringify(e)})),$(".search-icon").css("background-position",e.thisSearchIcon),$("#search-btn").click((function(){var s=$("#txt").val();s?(window.open(e.thisSearch+s),$("#box ul").html("")):alert("请输入关键词！")}))}function switchNightMode(){"0"==(document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/,"$1")||"0")?(document.body.classList.add("night"),document.cookie="night=1;path=/",console.log(" ")):(document.body.classList.remove("night"),document.cookie="night=0;path=/",console.log(" "))}