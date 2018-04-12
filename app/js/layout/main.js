TweenMax.fromTo('.header_title', 1.1, {y:500}, {y: 0, ease:Elastic.easeOut.config( 1.1 , 0.7 )});
TweenMax.fromTo('.header_nav', 0.5, {delay: 0.6, x: 1000}, {x: 0, delay: 0.6});
TweenMax.staggerFromTo('.header_menu_item', 2, {scale:0.5, opacity:0, delay:0.5},{scale:1, opacity:1, delay:0.5, ease:Elastic.easeOut.config(0.7, 0.2)}, 0.2);
TweenMax.staggerFromTo('.header_submenu_item', 2, {scale:0.5, opacity:0, delay:1},{scale:1, opacity:1, delay:1, ease:Elastic.easeOut.config(0.7, 0.2)}, 0.2);