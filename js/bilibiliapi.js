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
            bilibilifans.text(info.data.follower);

        },
        error: function () {
            bilibilifans.text("未知")
        }
    })
}
})()


