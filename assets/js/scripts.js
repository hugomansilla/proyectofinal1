$(document).ready(function(){
	var altura = $('.navbar').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.navbar').addClass('menu-fixed');
		} else {
			$('.navbar').removeClass('menu-fixed');
		}
	});

	$('.grid').masonry({
		  // options
		  itemSelector: '.grid-item',
		  columnWidth: 220
		});
 
});

$(document).ready(function(){
	$.smallBox({
	  position:3,
	  title:"Despacho gratuito",
	  content:"Por compras superiores a $20.000.",
	  width:280,
	  img:"assets/img/despacho.jpg",
	  sound:false,
	  color:"#63B999",
	});

});