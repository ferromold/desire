import $ from "jquery";
import 'slick-carousel'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui"

$(function () {
    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close')
    })
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close')
    })

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
    })

    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
    })

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow--left"><img src="img/back.svg" alt=""></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow--right"><img src="img/next.svg" alt=""></button>',
    })
})

