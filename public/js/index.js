$(document).scroll(function(){
	if($(document).width() < 1024)
		return false;
	if($(document).scrollTop() > $(".full-page").height() / 2)
		$("header").addClass("fixed");
	else
		$("header").removeClass("fixed");
});

$(".home").on("click", function(){
	$("html, body").animate({
		scrollTop: 0
	}, "slow");
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event){
        event.preventDefault();

		var id = $(this).attr('href'),
		top = $(id).offset().top;
	
		$("html, body").animate({
			scrollTop: top
		}, "slow");
	});
});

$(document).ready(function(){
    $("#hidden-menu").on("click","a", function (event){
        event.preventDefault();

		var id = $(this).attr('href'),
		top = $(id).offset().top;
	
		$("html, body").animate({
			scrollTop: top
		}, "slow");
	});
});

$(".up-btn").on("click", function(){
	$("html, body").animate({
		scrollTop: 0
	}, "slow");
});

$("#show-menu").on("click", function(){
	$("#hidden-menu").animate({
		"right" : 0
	}, 500);
});

$("#hidden-menu .close").on("click", function(){
	$("#hidden-menu").animate({
		"right" : "-300px"
	}, 300);
});

$(document).ready(function(){
	if($(document).width() < 600)
		$("#slider").slick('unslick');
	else
		$("#slider").slick({
			dots: false,
			prevArrow: '<div class="arrow-prev"><i class="fas fa-arrow-left"></i></div>',
			nextArrow: '<div class="arrow-next"><i class="fas fa-arrow-right"></i></div>',
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 2
		});
});