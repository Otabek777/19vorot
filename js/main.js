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