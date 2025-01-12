jQuery(document).ready(function(){
		jQuery('.spoiler_text').hide()
		jQuery('.spoiler').click(function(){
			jQuery(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle()
			$("html, body").animate({scrollTop: $('html, body').get(1).scrollHeight}, 300);
		})
	})
