$(window).scroll(function() {
			$('#promociones1').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+500) {
					$(this).addClass("fadeIn");
				}
			});
			$('#promociones2').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+500) {
					$(this).addClass("fadeIn2");
				}
			});
			$('#promociones3').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+500) {
					$(this).addClass("fadeIn3");
				}
			});

			$('.mejores_articulos').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+400) {
					$(this).addClass("pullUp");
				}
			});

			$('.super-promo').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+400) {
					$(this).addClass("stretchLeft");
				}
			});
			$('.servicios').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+200) {
					$(this).addClass("bigEntrance");
					$('.fa-truck').addClass("slideLeft");
					$('.fa-refresh').addClass("rotar");
					$('.fa-support').addClass("floating");
				}
			});
			$('.especiales').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+400) {
					$(this).addClass("slideExpandUp");
				}
			});
			$('.input-group').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+400) {
					$(this).addClass("expandOpen");
				}
			});

		});