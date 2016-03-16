$(function(){
	var trigger = false;
	$(".header .mobile").click(function(){
		$(".menu").slideToggle();
	});

	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top == 0){
			if(trigger){
				$(".totop").fadeOut();
				trigger = false;
			}
		}else{
			if(!trigger){
				$(".totop").fadeIn();
				trigger = true;
			}
		}
	});

	$(".totop").click(function(){
		$("html, body").stop().animate({scrollTop:0}, 400);
	});

	$(".menu ul li a").click(function(){
		var data = $(this).data("block");
		$("html, body").stop().animate({scrollTop:$(data).offset().top}, 600);
		if($(window).width < 1024){
			$(".menu").slideToggle();
		}
	});
})