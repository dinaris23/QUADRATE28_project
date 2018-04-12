TweenMax.fromTo('.header_title', 1.1, {y:-300}, {y: 0, ease:Back.easeInOut.config(2)});
TweenMax.fromTo('.header_nav', 0.7, {delay: 1, x: 1000}, {x: 0});
TweenMax.staggerFromTo('.header_menu_item', 1, {opasity: 0, scale:0.5, delay:1.5},{opasity: 1, scale:1, ease:Back.easeInOut.config(2,1)}, 0.2);
TweenMax.staggerFromTo('.header_submenu_item', 1, {opasity: 0, scale:0.5, delay:4},{opasity: 1, scale:1, ease:Back.easeInOut.config(2,1)}, 0.2);
TweenMax.fromTo('.burger', 1, {y:-50}, {y: 0, ease:Back.easeInOut.config(2)});


    

jQuery(document).ready(function(){  
	$('.burger').click(function(){
        $('.burger_l__top').toggleClass('active');
        $('.burger_l__middle').toggleClass('active');
        $('.burger_l__bottom').toggleClass('active');
        $('.header_nav').slideToggle(300, function(){
            if($(this).css('display') === 'none') {
                $(this).removeAttr('style')
                }
        });
    });
});    