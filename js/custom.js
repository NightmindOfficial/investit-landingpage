jQuery(document).ready(function () {
    'use strict';
    /*** =====================================
    * Wow Active
    * =====================================***/
     new WOW().init();
     /*** =====================================
     * Navbar fixed
     * =====================================***/
     $(window).scroll(function() {
       if ($(document).scrollTop() > 50) {
         $('.navbar').addClass('scroll-nav');
       } else {
         $('.navbar').removeClass('scroll-nav');
       }
     });
     /*** =====================================
     * Slick Slider
     * =====================================***/
     $('.responsive3').slick({
    dots: true,
    infinite: true,
    speed: 1500,
     autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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
    /*** =====================================
    * Slick Slider
    * =====================================***/
    $('.responsive2').slick({
   dots: true,
   infinite: false,
   speed: 1500,
    autoplay: true,
   autoplaySpeed: 2000,
   slidesToShow: 6,
   slidesToScroll: 3,
   responsive: [
   {
     breakpoint: 1024,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 3,
       infinite: true,
       dots: true
     }
   },
   {
     breakpoint: 600,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2
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
   /*** =====================================
   * Slick Slider
   * =====================================***/
   $('.responsive4').slick({
  dots: true,
  infinite: true,
  speed: 300,
   autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow:4,
  slidesToScroll: 3,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
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
  /*** =====================================
  * Video image
  * =====================================***/
   $('.video-img').on(function(){
    var video = '<video width="100%" autoplay><source src="'+ $(this).attr('data-video') +'" type="video/mp4"></video>';
    $(this).replaceWith(video);
   });

});
