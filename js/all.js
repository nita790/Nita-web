// 漢堡選單
$('.menu-icon').click(function (e) {
	e.preventDefault();
	$('.navbar').toggleClass('active');
})


// 篩選功能＋幻燈片
$(document).ready(function () {

	$('.btn').click(function () {


		$(this).addClass('active').siblings().removeClass('active');

		var filter = $(this).data('filter');

		console.log(filter);

		if (filter == 'all') {
			$('.all').show(400);
		} else {
			// $('.all').hide(400);
			// $('.'+filter).show(400);

			$('.all').not('.' + filter).hide(200);
			$('.all').filter('.' + filter).show(400);
		}

	});


	$('.portfolio-container').magnificPopup({

		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		}

	});


	// goTop 
	var $body=$('body,html');
	var $goTop=$('#gotop');

	$(window).scroll(function(){
			var _top=$body.scrollTop();
			// console.log(_top);
			if (_top>300){
				$goTop.show();
				$goTop.find('i').css('opacity','0.5');
			}else{
				$goTop.hide(); 
				$goTop.find('i').css('opacity','0.5');
			}
	});

	$goTop.click(function(){
			$body.animate({scrollTop: 0 },300);
	})

});












