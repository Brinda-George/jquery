$(document).ready(function(){
	$(".controls .btn").click(function(){
		var dir = $(this).attr('rel');
		const mask = $('#mask');
		let offset = mask.offset();
        const height = mask.innerHeight();
		const width = mask.innerWidth();
		const wrap = $('.maskWrapper');
		let offset = maskWrapper.offset();
		const temp = 2;
		switch (dir) {
			case 'up':
				offset.top = offset.top - height;
				$('.m1').toggleClass('m2');
				break;
			case 'left':
				offset.left = offset.left - width;
				$('.m1').toggleClass('m2');
				break;
			case 'right':
				offset.left = offset.left + width;
				$('.m1').toggleClass('m2');
				break;
			case 'down':
				offset.top = offset.top + height;
				$('.m1').toggleClass('m2');
				break;
			default:
            	break;
		}
	});
});