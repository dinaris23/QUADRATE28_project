TweenMax.fromTo('.header_title', 0.7, {y:-400, opacity: 0}, {y: 0, opacity: 1, ease:Back.easeOut.config(2)});
TweenMax.fromTo('.header_nav', 1, {delay: 2, x: 1000}, {x: 0});
TweenMax.staggerFromTo('.header_menu_item', 1, { scale:0},{ scale:1, delay:0.7, ease:Back.easeInOut}, 0.05);
TweenMax.staggerFromTo('.header_submenu_item', 1, { scale:0},{ scale:1, delay:0.7, ease:Back.easeInOut}, 0.05);
TweenMax.fromTo('.burger', 1, {y:-50}, {y: 0, ease:Back.easeInOut.config(2)});
TweenMax.fromTo('.header_btn', 1, {scale:0}, {delay: 1.5, scale:1});


    

jQuery(document).ready(function(){  
	$('.burger').click(function(){
        $('.burger_l__top').toggleClass('active');
        $('.burger_l__middle').toggleClass('active');
        $('.burger_l__bottom').toggleClass('active');
        $('.m_nav').slideToggle(300, function(){
            if($(this).css('display') === 'none') {
                $(this).removeAttr('style')
                }
        });
    });
   // $('.dots').click(function(){
       // $('.departments_block').css("background-color","#dc1921");
        //});
        
});    