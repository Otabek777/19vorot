$(".header__burgir").click(function() {
    $(this).toggleClass("active");
    $(".header__navbar").toggleClass("open");
});
if(document.querySelector(".basket__form")) {
    $(".basket__form .btn").click(function() {
        $(".basket__modal").addClass("open")
    });
    $(".basket__modal .close").click(function() {
        $(".basket__modal").removeClass("open")
    });
    $(".basket__modal .btn").click(function() {
        $(".basket__modal").removeClass("open")
    });
};
$(".header__search").click(function() {
    setTimeout(function () {
        $(".header__search").addClass("active");
    }, 0000000001);
});
$(".header__mobile_search").click(function() {
    setTimeout(function () {
        $(".header__search").addClass("active");
    }, 0000000001);
});
if(document.querySelector(".reviews__block")) {
    $(".reviews__block .link").click(function() {
        $(".reviews__block").removeClass("open");
        $(".reviews__block .link").removeClass("active");
        $(".reviews").removeClass("active");
        var classThis = $(this);
        setTimeout(function() {
            $(classThis).parent("div").parent("div").addClass("open");
            $(classThis).addClass("active");
            $(".reviews").addClass("active");
        }, 000001);
    });
    $(".reviews__block .close").click(function() {
        setTimeout(function() {
            $(".reviews__block").removeClass("open");
            $(".reviews__block .link").removeClass("active");
            $(".reviews").removeClass("active");
        }, 000002);
    });
};
if(document.querySelector(".category__aside")) {
    $(".btn_open_aside").click(function() {
       $(".category__aside").addClass("active"); 
    });
    $(".category__aside .close").click(function() {
        $(".category__aside").removeClass("active"); 
     });
}
$("body").click(function () {
    $(".header__search").removeClass("active");
});