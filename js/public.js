
 $(function() {

	// navbar start
	$('.brand-origin-show').click(function() {
		$('#happy-skin').hide();
		$('#special-feature').hide();
		$('.navbar').removeClass('spceial_color');
		$('.navbar').addClass('origin_color');
		$('.nav-link').removeClass('active');
		$(this).find('.nav-link').addClass('active');
		$('#brand-origin').show("slide", { direction: "left" }, 400);
		$('*').removeClass('slide-up slide-up-2 slide-right slide-right-2 slide-left');
	})

	$('.happy-skin-show').click(function() {
		$('#special-feature').hide();
		$('#brand-origin').hide();
		$('.navbar').removeClass('spceial_color');
		$('.navbar').removeClass('origin_color');
		$('.nav-link').removeClass('active');
		$(this).find('.nav-link').addClass('active');
		$('#happy-skin').show("slide", { direction: "down" }, 10);
		$('*').removeClass('slide-up slide-up-2 slide-right slide-right-2 slide-left');
	})

	$('.special-feature-show').click(function() {
		$('#happy-skin').hide();
		$('#brand-origin').hide();
		$('.navbar').removeClass('origin_color');
		$('.navbar').addClass('spceial_color');
		$('.nav-link').removeClass('active');
		$(this).find('.nav-link').addClass('active');
		$('#special-feature').show("slide", { direction: "right" }, 400);
		$('*').removeClass('slide-up slide-up-2 slide-right slide-right-2 slide-left');
	})
	// navbar end

	// slick start
	$('.slick-items').slick({
		infinite: true,
		slidesToShow: 3,
  		slidesToScroll: 1,
		prevArrow:"<img class='slick-prev' src='img/arrow_l.svg'>",
      	nextArrow:"<img class='slick-next' src='img/arrow_r.svg'>",
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});
	// slick end
	
	// mobile btn click start
	$('.btn_m').click(function() {
		let content = $(this).parents('.item').find('.modal_content_hover');
		let color = content.attr('data-ph');
		let ph = content.find('.modal_ph_hover').text();
		let title = content.find('.modal_title_hover').text();
		let effect = content.find('.modal_effect_hover').text();
		let text = content.find('.modal_text_hover').text();
		let oldColor = $('.modal_content_mobile').attr('data-ph'); 

		$('.modal_ph_mobile').removeClass(oldColor);
		$('.modal_ph_mobile').addClass(color);
		$('.modal_ph_mobile').text(ph);
		$('.modal_title_mobile').text(title);
		$('.modal_effect_mobile').removeClass(oldColor);
		$('.modal_effect_mobile').addClass(color);
		$('.modal_effect_mobile').text(effect);
		$('.modal_text_mobile').text(text);

		$('.modal_content_mobile').attr('data-ph', color);
		$(".modal_mask").show();
		$('.modal_content_mobile').show();

		$(".modal_mask").click(function() {
			$(".modal_mask").hide();
			$('.modal_content_mobile').hide();	
		})
	})
	// mobile btn click end

	// animation start
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		// brand-origin 		
		if($('#brand-origin').css('display') !== 'none') {
			if(scroll > $('.navbar').offset().top) {
				$('.brand-origin-slide-1').addClass('slide-right');	
				$('.brand-origin-slide').addClass('slide-right-2')
				$('.brand-origin-slide-2').addClass('slide-left');	
				$('.brand-origin-slide-3').addClass('slide-up');	
			}
		}

		// happy-skin
		if($('#happy-skin').css('display') != 'none') {
			if(scroll > $('.navbar').offset().top) {
				$('.happy-skin-title-slide-up').addClass('slide-up');	
				$('.happy-skin-item1-slide-up').addClass('slide-up');	
				$('.happy-skin-item2-slide-up').addClass('slide-up');	
			}
		}

		// special-feature
		if($('#special-feature').css('display') != 'none') {
			if(scroll > $('.navbar').offset().top) {
				$('.special-feature-title-slide-up').addClass('slide-up-2')
			}

			if(scroll > $('.special-feature-title-slide-up').offset().top) {
				$('.special-feature-item-slide-up').addClass('slide-up')
			}
		}

		// mixing
		if(scroll > $('.mixing').offset().top) {
			$('.hand').addClass('fade-in');
			$('.mixing-title-slide-up-1').addClass('fade-in');
		}

		if(scroll > $('.mixing-title-slide-up-1').eq(0).offset().top) {
			$('.mixing-title-slide-up-2').addClass('fade-in');			
		}

		// elephant 
		if(scroll > $('.elephant').offset().top){
			$(".slick-items").addClass('slide-right-3')
		}

		//form 
		if(scroll > $('.form').offset().top){
			$(".form-slide-up-item").addClass('slide-up')
		}	
	})
	// animation end
});
