(function($){

	// hide arrows on scroll
	$(window).on("scroll", animateElems);
	// on arrow click scroll down
	$(".header-arrow-wrapper, .header-arrow").on("click", {element: ".goods"}, onArrowClick);
	// to top function
	$("#toTop").on("click", toTop);
	// shows modal window
	$(".showModal").on("click", showModal);
	
	// functions
	function animateElems(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop >= 300 ){
			$(".header-arrow-wrapper, .header-arrow").fadeOut(500);
		}else{
			$(".header-arrow-wrapper, .header-arrow").fadeIn(500);	
		}
		
		if(scrollTop >= $(window).height()){
			$("#toTop").fadeIn(500);
			
		}else{			
			$("#toTop").fadeOut(500);				
		}
		
		// animate how we work icons
		if(scrollTop >= $("#workBox").offset().top-700){
			$(".work-wrap .col-xs-3").addClass("animate-elems");						
		}
		
		if(scrollTop >= $("#whyUsBox").offset().top-700){
			$(".whyUsBox-wrap  .col-xs-3").addClass("animate-elems");						
		}
		
		if(scrollTop >= $("#about-box").offset().top-600){
			$("#aboutUsWrap  .col-xs-4").addClass("animate-elems");						
		}
		
	}	
	
	function onArrowClick(event){
		var offset = $(event.data.element).offset();
		$("html,body").animate({
			scrollTop:offset.top		
		});
	}
	
	function toTop(){
		$("html,body").animate({
			scrollTop:0
		})	
	}
	
	// ----- modal window
	function showModal(event){
		event.preventDefault();
		var $modal = $("#orderCall");
		var $formWrapper = $("#formWrapper");
		$("#formWrapper input, #formWrapper select").each(function(){
			$(this).focus(function(){
				$(this).prev().find("i").animate({color: "#FFA000"},400);				
			} );
			$(this).focusout(function(){
					$(this).prev().find("i").css({color: "#383838"},400);
			});
		});
		$(".close-icon").on("click", function(){
			$modal .fadeOut();
			$("#callForm").trigger("reset");
			$formWrapper.css("display", "none");			
		})
		$formWrapper.slideDown( 400, function() {	
		});
		$modal.fadeIn();
			
		
	}
	
	
})(jQuery)
