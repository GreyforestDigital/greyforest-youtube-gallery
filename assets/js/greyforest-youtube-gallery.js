////////////////////////////////////////////////////////////	
//   FUNCTION : INIT                                      //	
////////////////////////////////////////////////////////////
jQuery(document).ready(function(){

	////////////////////////////////////////////////////////////
	//   FUNCTION : SCROLL TO GALLERY TOP                     //
	////////////////////////////////////////////////////////////
	jQuery(".youtubegallery-scroll").on('click', function(event) {
		jQuery("html, body").animate({ scrollTop: jQuery(".youtubegallery-destination").offset().top -1 }, 300);
		return true;
	});
	////////////////////////////////////////////////////////////
	
	////////////////////////////////////////////////////////////	
	//   FUNCTION : FILTER VIDEOS                             //
	////////////////////////////////////////////////////////////
	jQuery('body').on('click','.youtubegallery-filters li', function(event) {
		
		jQuery('.youtubegallery-filters li').removeClass('selected');	
		jQuery(this).addClass('selected');	
		
		var $filterchoice = jQuery(this).attr('data-filter');
	
		jQuery( ".youtubegallery-thumb" ).each(function() {
			if ( jQuery(this).hasClass("youtubegallery-filter-" + $filterchoice) ) {
				jQuery(this).show(500, function() { });
			}
			else {
				jQuery(this).hide(500);
			}
		});
		
	}); 
	////////////////////////////////////////////////////////////


});
//////////////////////////////////////////////////////////////