$(function () {
    const mvs = new Swiper('.main_visual_slide', {

        loop: true,
        navigation: {
            nextEl: ".main_visual .arrows .next",
            prevEl: ".main_visual .arrows .prev",
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    })
})

$(function () {
    $('.main_solution .txt_box a').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.main_solution .txt_box a').removeClass('on')
        $(this).addClass('on')
        $('.main_solution .finale .more_box').removeClass('on')
        $('.main_solution .finale .more_box').eq(idx).addClass('on')

    })
})

$(function () {
    const mls = new Swiper('.main_last_slide', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".main_last .arrows .next ",
            prevEl: ".main_last .arrows .prev",
        },
        breakpoints: {

            768: {
                slidesPerView: 3,
                // spaceBetween: 40,
            },

        },
    });

    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on')
        $('.header .gnb').toggleClass('on');
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul>li ul').slideUp();
            $(this).next().stop().slideDown();

        }
    });

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on')
        $('.header .gnb>ul>li ul').removeAttr('style')
    })
})