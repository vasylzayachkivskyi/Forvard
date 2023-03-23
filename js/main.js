
$(function () {
    // change header on scroll --------------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".header").addClass("header-active");
        } else {
            $(".header").removeClass("header-active");
        }
    });

    //  BURGER MENU -------------------------------- //
    $('.burger-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
    });
    $('.header__menu').find('li').on('click', function () {
        $('.burger-btn').removeClass('active');
        $('.header__menu').removeClass('active');
    });

    // POPUP ---------------------------------------------- //

    $('.popup_btn').on('click', function () {
        var indexPopup = $(this).attr('data-popup');
        $('.popup__window').removeClass('active');
        $('.' + indexPopup).addClass('active');
        return false;
    });
    $('.popup__close').on('click', function () {
        $('.popup__window').removeClass('active');
    });



    //  padding on full width blocks---------------------- //
    let windowWidth = $(window).width(),
        containerWidth = $('.container').width(),
        sideWidth = (windowWidth - containerWidth) / 2;

    $('.right-padding').css('padding-right', sideWidth + 'px');
    $('.left-padding').css('padding-left', sideWidth + 'px');

    $(window).resize(function () {
        let windowWidth = $(window).width(),
            containerWidth = $('.container').width(),
            sideWidth = (windowWidth - containerWidth) / 2;

        $('.right-padding').css('padding-right', sideWidth + 'px');
        $('.left-padding').css('padding-left', sideWidth + 'px');
    });

    // products slider --------------------------------- //
    $('.products__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        // cssEase: 'linear',
        // autoplay: true,
        // autoplaySpeed: 700,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false
                }
            }
        ]
    });

    // partners slider --------------------------------- //
    $('.partners__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2500,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        ]
    });

    $('.partners__slider a').click(function (e) {
        e.preventDefault();
    });

    //  product page slider ---------------------------- //

    $('.big-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.small-slider'
    });
    $('.small-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.big-slider',
        focusOnSelect: true,
        arrows: false,
        infinite: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 767.8,
                settings: {
                    slidesToShow: 4,
                    vertical: false,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                }
            },
        ]
    });

    //  INPUT NUMBER MASK ------------------------ //
    if ($(".phoneinp").length) {
        $('.phoneinp').inputmask({
            "mask": "+38 ( 9 9 9 ) - 9 9 9 - 9 9 - 9 9",
            showMaskOnHover: false,
            showMaskOnFocus: true,
        });
    }

    //  AOS  ---------------------------------------- //
    AOS.init({
        disable: 'phone',
        duration: 1000,
        once: true,
    });

});