(function(){
var bilibilifans = $('.bilibilifans_num');

if (bilibilifans.length > 0) {
    $.ajax({
        url: "https://api.yancat.top/index.php?vmid=241230332",
        // https://www.ndjx.group/api/card
        type: "get",
        dataType: "json",
        /*data:{
            mid: "241230332&photo=true"
        },*/
        success: function (info) {
			if(info.data.follower!=null){
				bilibilifans.text(info.data.follower);
			}else{
				bilibilifans.text("未知")
			}
        },
        error: function () {
            bilibilifans.text("未知")
        }
    })
}
})()


