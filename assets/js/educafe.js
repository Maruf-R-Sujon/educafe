// teacher js start //

$('.teacher-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fa fa-angle-left">','<i class="fa fa-angle-right">'],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

// home js start //
$('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fa fa-angle-left">','<i class="fa fa-angle-right">'],
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marufur Rahman Sujon</small>';
			}
		}
	});
});