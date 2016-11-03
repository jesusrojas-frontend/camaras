$(document).ready(function(){

	var banner = {
		padre: $('#banner'),
		numeroSlides: $('#banner').children('.slide').length,
		posicion: 1
	}
	
	banner.padre.children('.slide').first().css({
		'left': 0
	});
	banner.padre.children('.slide').first().addClass('active');


	/*-----------------------------
	 *----- Banner
	 *-----------------------------*/

	 //Boton Siguiente

	 $('#banner-next').on('click', function(e){
	 	e.preventDefault();

	 	if(banner.posicion < banner.numeroSlides){

	 		banner.padre.children().not('.active').css({
	 			'left': '100%',

	 		});

	 		$('#banner .active').removeClass('active').next().addClass('active').animate({
		 		'left': '0%'
		 	});


	 		$('#banner .active').prev().animate({
	 			'left': '-100%'
	 		});
	 		$('#banner-botones .active').removeClass('active').next().addClass('active');


		 	banner.posicion = banner.posicion + 1;
	 	}else {

	 		$('#banner .active').animate({
	 			'left': '-100%'
	 		});

	 		banner.padre.children().not('.active').css({
	 			'left': '100%'
	 		});
	 		$('#banner-botones .active').removeClass('active');
	 		$('#banner-botones').children('span').first().addClass('active');


	 		$('#banner .active').removeClass('active');
	 		banner.padre.children('.slide').first().addClass('active').animate({
	 			'left': '0'
	 		});


	 		banner.posicion = 1;
	 	}
	 	
 		
	 	
	 });

	 //Boton anterior

	 $('#banner-prev').on('click', function(e){
	 	e.preventDefault();

	 	if(banner.posicion > 1){

	 		banner.padre.children().not('.active').css({
	 			'left': '-100%'
	 		});

	 		$('#banner .active').removeClass('active').prev().addClass('active').animate({
		 		'left': '0'
		 	});
		 	$('#banner-botones .active').removeClass('active').prev().addClass('active');


	 		$('#banner .active').next().animate({
	 			'left': '100%'
	 		});
	 		banner.posicion = banner.posicion - 1;



		 	
	 	}else {

	 		$('#banner .active').animate({
	 			'left': '100%'
	 		});

	 		banner.padre.children().not('.active').css({
	 			'left': '-100%'
	 		});
	 		$('#banner-botones .active').removeClass('active');
	 		$('#banner-botones').children('span').last().addClass('active');


	 		$('#banner .active').removeClass('active');
	 		banner.padre.children('.slide').last().addClass('active').animate({
	 			'left': '0'
	 		});


	 		banner.posicion = banner.numeroSlides;
	 	}
	 	
	 });
	 /*----- Temporizador ------*/

	var milisegundos = 1000;
		//timer = setInterval('temporizador()', 2000);


});

