$(function() {

	let bars = document.querySelector('#bars');
	let menu = document.querySelector('#main-menu');
	let menuWraper = document.querySelector('#menu-wraper');
	let close = document.querySelector('#close');
	let scrolls = document.querySelectorAll('[data-scroll]');
	
	let btns = document.querySelectorAll('.btn');
	let modal = document.querySelector('.modal-wrapper');
	let modalClose = document.querySelector('#modal-close');
	let body = document.querySelector('body');
	let feedBacks = document.querySelectorAll('.feedback');
	

	bars.onclick = function() {
		menu.classList.add('mobile');
		menuWraper.classList.add('mobile');
	};

	close.onclick = function() {
		menu.classList.remove('mobile');
		menuWraper.classList.remove('mobile');
	};


	for (let btn of btns) {
		btn.addEventListener('click', function(evt) {
			evt.preventDefault();
			modal.classList.add('block');
			body.classList.add('overflow');
			menu.classList.remove('mobile');
			menuWraper.classList.remove('mobile');
		});
	};

	for (let feedBack of feedBacks) {
		feedBack.addEventListener('click', function(evt) {
			evt.preventDefault();
			modal.classList.add('block');
			body.classList.add('overflow');
			menu.classList.remove('mobile');
			menuWraper.classList.remove('mobile');
		});
	};

	modalClose.onclick = function() {
		modal.classList.remove('block');
		body.classList.remove('overflow');
	};


	$('#third-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	  mobileFirst: true,
	  responsive: [{
	    breakpoint: 480,
	    settings: 'unslick'
	  }]
	});
	
	$('#sixth-slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 2,
	  dots: true,
	  responsive: [
	  {
	  	breakpoint: 769,
    	settings: {
    		slidesToShow: 2,
	 		slidesToScroll: 1
    	}
      },
      {
	  	breakpoint: 480,
    	settings: {
    		slidesToShow: 1,
	 		slidesToScroll: 1
    	}
	  }
	  ]
	});


	for (let scroll of scrolls) {
		scroll.addEventListener('click', function(evt) {
			evt.preventDefault();
			let dataId = scroll.getAttribute('data-scroll');
			document.querySelector(dataId).scrollIntoView();
			menu.classList.remove('mobile');
			menuWraper.classList.remove('mobile');
		});
	};

	
	



});
