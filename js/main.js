$(window).scroll(function(){
    if ($(window).scrollTop() >0) {
       $('header').addClass('sticky');
       $("header.sticky img").attr("src","images/header_logo2.png");
    }
    else {
       $('header').removeClass('sticky');
       $("header img").attr("src","images/header_logo.png");
    }
});
