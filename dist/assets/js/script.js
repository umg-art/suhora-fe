(function ($) {
  "use strict";

  // Fixed Navbar
  $(window).scroll(function () {
      if ($(window).width() < 992) {
          if ($(this).scrollTop() > 45) {
              $('.fixed-top').addClass('bg-dark shadow');
          } else {
              $('.fixed-top').removeClass('bg-dark shadow');
          }
      } else {
          if ($(this).scrollTop() > 45) {
              $('.fixed-top').addClass('bg-dark shadow').css('top', 0);
          } else {
              $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
          }
      }
  });
  
  
  // Back to top button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });


  $('.about-carousel').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      speed: 3000,
      autoplay: true,
      autoplaySpeed: 0,
      arrows: true,
      pauseOnFocus: false, 
      pauseOnHover: false,
      nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
      prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

  //Client Logo


  $('.client-logo-carousel').slick({
      arrows:false,
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      swipeToSlide: true,
      pauseOnFocus: false, 
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
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

  $('.partner-logo-carousel').slick({
      arrows:false,
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      swipeToSlide: true,
      pauseOnFocus: false, 
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
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

  $('.testimonial-carousel').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots:true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        },
        
      ]
    });


  const slider = $(".slider");

  // Animation
  slider.on('init', function(e, slick) {
  var $firstAnimatingElements = $('div.slick-slide:first-child').find('[data-animation]');
  doAnimations($firstAnimatingElements);    
  });

  slider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
  var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
  doAnimations($animatingElements); 
  });

  // Slider Main Settings
  function onSliderAfterChange(event, slick, currentSlide) {
      $(event.target).data('current-slide', currentSlide);
  }

  function onSliderWheel(e) {
      var deltaY = e.originalEvent.deltaY,
      $currentSlider = $(e.currentTarget),
      currentSlickIndex = $currentSlider.data('current-slide') || 0;
      
      if (
      // check when you scroll up
      (deltaY < 0 && currentSlickIndex == 0) ||
      // check when you scroll down
      (deltaY > 0 && currentSlickIndex == $currentSlider.data('slider-length') - 1)
      ) {
      return;
      }

      e.preventDefault();

      if (e.originalEvent.deltaY < 0) {
      $currentSlider.slick('slickPrev');
      } else {
      $currentSlider.slick('slickNext');
      }
  }

  slider.each(function(index, element) {
      var $element = $(element);
      // set the length of children in each loop
      // but the better way for performance is to set this data attribute on the div.slider in the markup
      $element.data('slider-length', $element.children().length);
  })
  .slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      vertical: true,
      arrows: false,
      autoplay: false,
  })
  .on('afterChange', onSliderAfterChange)
  .on('wheel', onSliderWheel);

  // Animation
  function doAnimations(elements) {
  var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  elements.each(function() {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
      'animation-delay': $animationDelay,
      '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function() {
      $this.removeClass($animationType);
      });
  });
  };

  $('.sid-carousel').slick({
    centerMode: false,
    margin:'10px',
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots:false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      
    ]
  });

  $('.key-beneficiaries-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    autoplay: false,
    autoplaySpeed: 1000,
    prevArrow: '<div class="slick-prev"></div>',
     nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      
    ]
  })
  
  $('.card-vertical-carousel').slick({
    centerMode: false,
    margin:'10px',
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    autoplay: false,
    autoplaySpeed: 1000,
    vertical:true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          margin:'10px',
          slidesToShow: 2,
          arrows: false,
          autoplay: true,
        }
      },
      
    ]
  });

  $('.one-time').slick({
    dots: true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.gallery-carousel').slick({
    slidesToShow: 3,
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });



  const container = document.querySelector('.image-col .container');
  document.querySelector('.image-col .slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
  });

  

})(jQuery);

