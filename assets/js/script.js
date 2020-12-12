/* Author: 

*/
$(document).ready(function () {

    // ---------------back to top js
    $(".top-btn").click(() => $(window).scrollTop(0));  


    // iterator
    $(".filter-links").click(function () {
        let value = $(this).attr("data-filter");
        if (value == "all") {
            $(".image-list-li").show();
            $(".image-list").css({
                "justify-content": "space-between",
                "margin-right" : "0"
            })
        } else {
            $(".image-list").css({
                "justify-content": "flex-start",
                "margin-right" : "15px"
            })
            $(".image-list-li").not("." + value).hide();
            $(".image-list-li").filter("." + value).show();

        }
    })

})

