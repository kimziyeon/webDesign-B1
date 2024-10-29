$(function () {

    // 팝업

    $('.popup_on').click(function () {
        $('.popup').show();
    })

    $('.popup_off').click(function () {
        $('.popup').hide();
    })



    // 헤더 네브

    $('nav ul li').mouseenter(function () {
        $('.sub').stop().slideDown();
    })

    $('nav ul li').mouseleave(function () {
        $('.sub').stop().slideUp();
    })


    //슬라이드
    function slide() {

        $('.slide ul').animate({ left: '-1200px' }, 1000, function () {
            $('.slide ul').append(
                $('.slide ul li').first());
            $('.slide ul').css({ left: '0' });
        })

    }
    setInterval(slide, 3000)


    //탭

    $('.tap>ul>li').click(function () {
        $('.tap>ul>li').removeClass();
        $(this).addClass('on');

        var i = $(this).index();
        // console.log(i)
        $('.tabcon').hide();
        $('.tabcon').eq(i).show();
    })



    //포커스인 // 헤더 네브
    $('nav>ul>li>a').focusin(function () {
        $('.sub').slideDown();
        $(this).addClass('on');

    })

    $('.sub li a').focusin(function () {
        $(this).addClass('on');
    })

    $('.sub li a').focusout(function () {
        $(this).removeClass('on');
    })

    $('nav>ul>li>a').focusout(function () {
        $(this).removeClass('on');

    })

    $('nav>ul>li:last-child .sub li:last-child').focusout(function () {
        $('.sub').slideUp();
    })


})
