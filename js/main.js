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

// steps
if(document.querySelector(".steps")) {
    function stepsClick(num) {
        $("#steps-btn-"+num).click(function() {
            $(".steps__right .steps__text").removeClass("active");
            $(".steps__left .num").removeClass("active");
            $(this).addClass("active");
            $("#steps-"+num).addClass("active");
        });
    };
    for (let i = 1; i < 19; i++) {
        stepsClick(i);
    }
};

if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
}