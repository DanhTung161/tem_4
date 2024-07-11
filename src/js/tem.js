var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 640px
        767: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 4.5,
            spaceBetween: 20
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".vector_right",
        prevEl: ".vector_left",
    },
});

var swiper = new Swiper(".mySwiperDoctor", {
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 640px
        767: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".vector_right",
        prevEl: ".vector_left",
    },
});

var swiper = new Swiper(".mySwiperDV", {
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 640px
        767: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 20
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".arrow_right",
        prevEl: ".arrow_left",
    },
});

// box-show
var GUI = (function () {
    var intTabShow = function () {
        $(".box_show .box_title").click(function () {
            var parentBox = $(this).parent();
            var contentItem = parentBox.find(".box_des");
            if (parentBox.hasClass("active")) {
                parentBox.removeClass("active");
                contentItem.slideUp(200);
            } else {
                $(".box_show .box_des").slideUp(200);
                $(".box_show").removeClass("active");
                parentBox.addClass("active");
                contentItem.slideDown(200);
            }
        });
    };
    return {
        _: function () {
            intTabShow();
        },
    };
})();
$(document).ready(function () {
    GUI._();
});


// tab item
$(document).ready(function () {
    var tabContentItems = () => {
        if (typeof $(".tab-items") == "undefined") return;
        $(".tab-items li:first-child").addClass("active");
        $(".list-tab-items .tab-content").hide();
        $(".list-tab-items .tab-content:first").show();
        $(".tab-items li").click(function () {
            $(".tab-items li").removeClass("active");
            $(this).addClass("active");
            $(".list-tab-items .tab-content").hide();
            var currentTab = $(this).data("electronic");
            $("#" + currentTab).show();
            return false;
        });
    };
    tabContentItems();
});


