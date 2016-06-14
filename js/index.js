$(function(){
	// var mySwiper = new Swiper('.swiper-container',{
	//     autoplay : 5000,
	// })

	// //反方向自动切换简单示例
	// var mySwiper = new Swiper('.swiper-container',{
	//     loop : true,
	// })
	// setInterval("mySwiper.slidePrev()", 2000);

	// var mySwiper = new Swiper('.swiper-container',{
	//     freeMode : true,
	// })

	// var mySwiper = new Swiper('.swiper-container',{
	// })
	// $('#btn').click(function(){
	// mySwiper.slideTo(0, 1000, false);//切换到第一个slide，速度为1秒
	// })
	
	var swiper = new Swiper('.index-slide', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        // spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
	
	
	 var swiper2 = new Swiper('.rec-prds', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 6,
        loop: true
    });
	

 
    touch.on('.close-app','touchstart',function(){
		$(this).hide();
		$(this).parent().hide();
	})
	touch.on('.fix','dragstart',function(){
		$(this).css('display','block');
	})
	touch.on('.fix','touchstart',function(){
		$(this).css('display','none');
	})
})