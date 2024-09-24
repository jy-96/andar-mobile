// 헤더 슬라이드
headerSlide = new Swiper('.header-slide', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    autoplay : {
        delay: 2000
    }
})

// 마우스 스크롤 헤더변경
let lastScroll = 0;
$(window).scroll(function(){
    curr = $(this).scrollTop();

    if (curr > 3) { // 스크롤 내릴 때
        $('header').addClass('fixed');
    } else {    // 스크롤 맨 위에 있을 때
        $('header').removeClass('fixed');
    }
})

// 더보기 메뉴
$('#allMenuBtn').click(function(){
    $('.header .visible-menu').toggleClass('show');
    $('.header .hidden-menu').stop().slideToggle(300);
})


// 검색 팝업
$('.search').click(function(e){
    e.preventDefault();
    $('.search-pop').addClass('on');
})
$('.back').click(function(){
    $('.search-pop').removeClass('on');
})

$('.input').focus(function(){
    $('.label').hide();
})
$('.input').blur(function(){
    if ($(this).val() === '') {
        $('.label').show();
    }
})



// 사이드메뉴 슬라이드
$('.category').click(function(e){
    e.preventDefault();

    $('.aside').addClass('on');
    $('body').addClass('scrollLock');
})

$('.close').click(function(){
    $('.aside').removeClass('on');
    $('body').removeClass('scrollLock');
})

$('#sideNav .down').click(function(e){
    e.preventDefault();
    $(this).toggleClass('on').siblings('.sub').slideToggle();
})


// 메인슬라이드
mainSlide = new Swiper('.main-slide', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1000,
    loop: true,
    autoplay : {
        delay: 5000
    },
    pagination: {
        el: '.pagination',
        clickable: true
    },
})

// sc-best tab 클릭
$('.best-tab .btn').click(function(){
    tabName = $(this).data('tab');

    $(this).addClass('clicked').siblings().removeClass('clicked');x``
    $(tabName).addClass('on').siblings().removeClass('on');
})


// 추천아이템 슬라이드
recommendSlide = new Swiper(".recommend-slide", {
	slidesPerView: 2,
    // centeredSlides: true,
	// spaceBetween: 10,
	grid: {
		rows: 2,
	},
});


// 여성의류 슬라이드
fmSlide = new Swiper('.female-slide', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: false,
    freeMode:true,  // 슬라이드가 한번 넘기면 부드럽게 다 넘어가진다
})




// 상단버튼
$('.btn-top .up').click(function(){
    window.scrollTo({top:0, behavior:'smooth'})
})

prevScrollPos = $(window).scrollTop();
$(window).scroll(function(){
    currentScrollPos = $(this).scrollTop();

    if (currentScrollPos > prevScrollPos) {
        $('.btn-top').removeClass('on');
    } else {
        $('.btn-top').addClass('on');
    }

    prevScrollPos = currentScrollPos;
})