$('.page-scroll').on('click',function(e){

	var href= $(this).attr('href');

	var elementTujuan = $(tujuan);

	$('body').animation({
		scrollTop: elementTujuan.offset().top
	})

	e.preventDefault();

});