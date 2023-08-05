$(document).ready(function() {
    $(".menu_icon").click(function() {
        $(".menu").toggleClass("menu1");
        $("html").css({
            "overflow": "hidden"
        });

    });
    $(".cross").click(function() {
        $(".menu").removeClass("menu1");
        $("html").css({
            "overflow": "auto"
        });

    });
});

$(document).ready(function() {
    $(".experts_img-1, .dtls_1").mouseover(function() {
        $(".dtls_1").show();
    });
    $(".experts_img-1, .dtls_1").mouseleave(function() {
        $(".dtls_1").hide();
    });
});

$(document).ready(function() {
    $(".experts_img-2, .dtls_2").mouseover(function() {
        $(".dtls_2").show();
    });
    $(".experts_img-2, .dtls_2").mouseleave(function() {
        $(".dtls_2").hide();
    });
});

$(document).ready(function() {
    $(".experts_img-3, .dtls_3").mouseover(function() {
        $(".dtls_3").show();
    });
    $(".experts_img-3, .dtls_3").mouseleave(function() {
        $(".dtls_3").hide();
    });
});


$(document).ready(function() {
    $(".experts_img-4, .dtls_4").mouseover(function() {
        $(".dtls_4").show();
    });
    $(".experts_img-4, .dtls_4").mouseleave(function() {
        $(".dtls_4").hide();
    });
});


$(document).ready(function() {
    $(".experts_img-5, .dtls_5").mouseover(function() {
        $(".dtls_5").show();
    });
    $(".experts_img-5, .dtls_5").mouseleave(function() {
        $(".dtls_5").hide();
    });
});


$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {

        $(".header").addClass("affix");
        $(".logo_size").css({
            "width": "70px"
        });
    } else {
        $(".header").removeClass("affix");
        $(".logo_size").css({
            "width": "100px"
        });
    }

});