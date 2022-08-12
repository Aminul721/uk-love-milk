jQuery(function(){
	jQuery('.mobile_menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});
	jQuery('.scroll_down').click(function () {
		var Lochref = jQuery(this).attr('href');
		jQuery("html, body").stop().animate({
		scrollTop: jQuery(Lochref).offset().top
		}, 1500);
		return false;
	});
});
jQuery(window).scroll(function(){
    if (jQuery(window).scrollTop() >= 140) {
        jQuery('.header-sticky').addClass('is_stuck');
    }
    else {
        jQuery('.header-sticky').removeClass('is_stuck');
    }
});
jQuery(window).load(function(){
	jQuery('#slider').flexslider({
		animation: "fade",
		controlNav: true,              
		directionNav: true,
		prevText: "",
    	nextText: "", 
		start: function(slider){
		jQuery('body').removeClass('loading'); 
		}
	});
});
(function($){
	jQuery('.feature_carousel').owlCarousel({
		loop:false,
		nav:true,
		margin:30,
		items:3,
		dots:false,
		mouseDrag: true,
		responsiveClass:true,
		stagePadding: 0,
		responsive:{
			0:{
				items:1,
				dots:true,
				margin:0,
			},
			641:{
				items:2,
				dots:true,
				margin:20,
			},
			992:{
				items:3,
			}
		}
	})
	
	jQuery('.gallery_carousel').owlCarousel({
		loop:false,
		nav:true,
		margin:0,
		items:1,
		dots:true,
		mouseDrag: true,
		responsiveClass:true,
		stagePadding: 0,
		responsive:{
			0:{
				items:1,
			}
		}
	})
})(jQuery);

(function($){
	var submitIcon = $('.searchbox-icon');
	var inputBox = $('.searchbox-input');
	var searchBox = $('.searchbox');
	var isOpen = false;
	submitIcon.click(function(){
		if(isOpen == false){
			searchBox.addClass('searchbox-open');
			inputBox.focus();
			isOpen = true;
		} else {
			searchBox.removeClass('searchbox-open');
			inputBox.focusout();
			isOpen = false;
		}
	});  
	 submitIcon.mouseup(function(){
			return false;
		});
	searchBox.mouseup(function(){
			return false;
		});
	jQuery(document).mouseup(function(){
			if(isOpen == true){
				jQuery('.searchbox-icon').css('display','block');
				submitIcon.click();
			}
		});	
})(jQuery);
function buttonUp(){
	var inputVal = jQuery('.searchbox-input').val();
	inputVal = jQuery.trim(inputVal).length;
	if( inputVal !== 0){
		jQuery('.searchbox-icon').css('display','none');
	} else {
		jQuery('.searchbox-input').val('');
		jQuery('.searchbox-icon').css('display','block');
	}
}
