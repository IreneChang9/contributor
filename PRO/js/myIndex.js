$(function(){
	$(".slider-bar li").click(function(){
		var sliderNum=$(this).attr("sliderNum");
		$(this).addClass("actived").siblings().removeClass("actived");
		$(".banner").fadeOut("1000",function(){
			$(this).css({background:"url(./images/banner"+sliderNum+".jpg)"}).fadeIn("1000");
		})
	})
})