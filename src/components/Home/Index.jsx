import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const $ = jQuery.noConflict();
  const [activeSection, setActiveSection] = useState(null);
  const [animatedSections, setAnimatedSections] = useState({}); // Track if animation is triggered for each section
  const sectionRefs = {
    spaceanalytics: useRef(null),
    aboutSuhora: useRef(null),
    whySuhora: useRef(null),
    ourProduct: useRef(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };
  
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
  
          if (!animatedSections[sectionId]) { // Check if section was already animated
            setActiveSection(sectionId);
            setAnimatedSections((prev) => ({ ...prev, [sectionId]: true })); // Mark section as animated
          }
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
  
    return () => observer.disconnect();
  }, [sectionRefs, animatedSections]);

  // Animation
  function doAnimations(elements) {
    var animationEndEvents =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data("delay");
      var $animationType = "animated " + $this.data("animation");
      $this.css({
        "animation-delay": $animationDelay,
        "-webkit-animation-delay": $animationDelay,
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }

  function onSliderWheel(e) {
    var deltaY = e.originalEvent.deltaY,
      $currentSlider = $(e.currentTarget),
      currentSlickIndex = $currentSlider.data("current-slide") || 0;

    if (
      // check when you scroll up
      (deltaY < 0 && currentSlickIndex == 0) ||
      // check when you scroll down
      (deltaY > 0 &&
        currentSlickIndex == $currentSlider.data("slider-length") - 1)
    ) {
      return;
    }

    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $currentSlider.slick("slickPrev");
    } else {
      $currentSlider.slick("slickNext");
    }
  }

  function onSliderAfterChange(event, slick, currentSlide) {
    $(event.target).data("current-slide", currentSlide);
  }

  useEffect(() => {
    const initializeCarousel = () => {
      const slider = $(".slider");

      // Animation
      slider.on("init", function (e, slick) {
        var $firstAnimatingElements = $("div.slick-slide:first-child").find(
          "[data-animation]"
        );
        doAnimations($firstAnimatingElements);
      });

      slider.on("beforeChange", function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          'div.slick-slide[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      });

      slider
        .each(function (index, element) {
          var $element = $(element);
          // set the length of children in each loop
          // but the better way for performance is to set this data attribute on the div.slider in the markup
          $element.data("slider-length", $element.children().length);
        })
        .not(".slick-initialized")
        .slick({
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          vertical: true,
          arrows: false,
          autoplay: true,
        })
        .on("afterChange", onSliderAfterChange)
        .on("wheel", onSliderWheel);

      $(".about-carousel")
        .not(".slick-initialized")
        .slick({
          autoplay: true,
          autoplaySpeed: 3000,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 3,
          arrows: true,
          nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
          prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 1,
              },
            },
          ],
        });

      //Client Logo

      $(".client-logo-carousel")
        .not(".slick-initialized")
        .slick({
          arrows: false,
          speed: 5000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: "linear",
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
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });

      $(".partner-logo-carousel")
        .not(".slick-initialized")
        .slick({
          arrows: false,
          speed: 5000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: "linear",
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
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });

      $(".testimonial-carousel")
        .not(".slick-initialized")
        .slick({
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: "0px",
                slidesToShow: 1,
              },
            },
          ],
        });
    };

    initializeCarousel();
    window.scrollTo(0, 0);
  }, [$]);

  return (
    <>
      {/* Carousel Start */}
      <section className="sub-top-video-banner">
        <div className="overlay" />
        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src="./assets/images/Website_Planet & Satellite Video_v2_LowRes.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container h-100" ref={sectionRefs.spaceanalytics} id="spaceAnalytics">
          <div className="d-flex h-100">
            <div className="w-100 text-white">
              <div className="col-lg-8">
              <h1 className={`home-text ${animatedSections.spaceAnalytics ? 'typewriter' : ''}`}>Space Analytics Simplified</h1>
              <p className="mb-0 home-sub-text">
                  {" "}
                  At SUHORA, we're driven by the passion to make the data accessible and actionable
                  for those who need it the most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel End */}
      {/* About Start */}
      <section id="about-us" className="about-us">
        <section className="bg-animation">
          <span />
          <span />
        </section>
        <div className="container" ref={sectionRefs.aboutSuhora} id="aboutSuhora">
          <div className="about-content-col">
            <div className="text-center mx-auto mb-5">
              <div className="d-inline-block">
               <h2 className={`mb-3 ${animatedSections.aboutSuhora ? 'typewriter' : ''}`}>About Suhora</h2>
              </div>
              <p>Founded on the principle that space analytics should empower, not overwhelm, we've dedicated ourselves in demystifying satellite data for practical solutions and everyday applications.{" "}
              </p>
              <p>
              Our team, a blend of seasoned experts and innovative thinkers, is dedicated to break down complex information into clear, actionable insights that drive decision-making across various sectors. Suhora Technologies stands at the intersection of innovation and utility, reshaping how industries leverage the untapped potential of satellite imagery and the information it stores within.
              </p>
            </div>
            <div className="about-us-slider-slick">
              {/* Testimonial Start */}
              <div className="container-xxl">
                <div className="container">
                  <div className="about-carousel">
                    <div className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src="./assets/images/aboutsuhora_01.png"
                      />
                    </div>
                    <div className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src="./assets/images/aboutsuhora_02.png"
                      />
                    </div>
                    <div className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src="./assets/images/aboutsuhora_03.png"
                      />
                    </div>
                    <div className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src="./assets/images/aboutsuhora_04.png"
                      />
                    </div>
                    <div className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src="./assets/images/aboutsuhora_05.png"
                      />
                    </div>
                    <div className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src="./assets/images/aboutsuhora_06.png"
                      />
                    </div>
                    <div className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src="./assets/images/aboutsuhora_07.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial End */}
            </div>
          </div>
        </div>
        {/* <div className="container-fluid pb-4" ref={sectionRefs.whySuhora} id="whySuhora">
          <div className="why-us text-center mx-auto">
            <div className="d-inline-block">
               <h2 className={`${activeSection === 'whySuhora' ? 'typewriter' : ''}`}>why suhora?</h2>
            </div>
            <p className="">
              Elevating Satellite data with cutting edge, scalable solutions.{" "}
            </p>
          </div>
        </div> */}
      </section>
      {/* About Start End*/}
      {/* why Suhora Start */}
      <section className="why-suhora-section">
      <div className="container-fluid pb-4" ref={sectionRefs.whySuhora} id="whySuhora">
          <div className="why-us text-center mx-auto">
            <div className="d-inline-block">
            <h2 className={`why-us-title ${animatedSections.whySuhora ? 'typewriter' : ''}`}>Why Suhora?</h2>
            </div>
            <p className="">
              Elevating Satellite data with cutting edge, scalable solutions.{" "}
            </p>
          </div>
        </div> 
        <div className="container-fluid p-0">
          <div className="slider">
            <div
              className="slick-slide text-right bg-why-suhora-img"
              style={{
                backgroundImage: 'url("./assets/images/Multi sensor.webp")',
                backgroundSize : 'cover',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text mySlides">
                      <h3>Multi Sensor Approach</h3>
                      <p>
                        Our unique cross sensor approach combines the potential
                        of thermal, optical and SAR data together enabling
                        frequent revisit and all weather surveillance at best
                        available resolution for unmatched monitoring
                        capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* slick-slide */}
            <div
              className="slick-slide text-right bg-why-suhora-img"
              style={{
                backgroundImage: 'url("./assets/images/Near Real time.webp")',
                backgroundSize : 'cover',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text mySlides">
                      <h3>Near Real Time</h3>
                      <p>
                        Our constellation of 250+ sensors along with rapid
                        processing ensures guaranteed data collection in near
                        real time, empowering clients to stay ahead and access
                        critical information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* slick-slide */}
            <div
              className="slick-slide text-right bg-why-suhora-img"
              style={{
                backgroundImage: 'url("./assets/images/Higher accuracy.webp")',
                backgroundSize : 'cover',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text mySlides">
                      <h3>Higher Accuracy</h3>
                      <p>
                        We leverage a diverse range of satellite sensors to
                        deliver precise and tailored insights, ensuring accurate
                        solutions are designed to meet your specific needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* slick-slide */}
            <div
              className="slick-slide text-right bg-why-suhora-img"
              style={{
                backgroundImage:
                  'url("./assets/images/Insightful Analysis.webp")',
                  backgroundSize : 'cover',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text mySlides">
                      <h3>Insightful Analysis </h3>
                      <p>
                        We intend to deliver customized, cost effective
                        solutions and data driven analytics specifically crafted
                        to meet your requirements ensuring operational
                        efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* slick-slide */}
          </div>
        </div>
      </section>
      {/* About End */}
      {/*Our Product-*/}
      <section
        className="our-product "
        style={{
          backgroundImage: "url(./assets/images/Product-BG.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container" ref={sectionRefs.ourProduct} id="ourProduct">
          <div className="row">
            <div className="product-col">
              <div className="title-sec col-lg-10 m-auto text-center mx-auto mb-8">
                <div className="d-inline-block">
                   <h2 className={`mb-3 ${animatedSections.ourProduct ? 'typewriter' : ''}`}>Our Products</h2>
                </div>
                <h4>
                  Tailored Solutions for Enterprise Users in Defence and
                  Disaster Management
                </h4>
                <p>
                  With a common thread of multi-sensor near real time approach
                  our products are specifically designed to meet the needs of
                  enterprise users operating in defence and disaster management
                  sectors.
                </p>
              </div>
              <div className="product-card">
                <div className="row">
                  <div className="col-sm-4">
                    <div
                      className="card"
                      style={{
                        backgroundImage: 'url("./assets/images/spade.webp")',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="card-body">
                        {/* <h5 className="card-title">SPADE</h5> */}
                         <img src="./assets/images/spade_logo-new.png" height={"47px"} alt='spade image' />
                        <p className="card-text product-card-text">
                          A unified SaaS platform offering seamless access to
                          250 + sensors encompassing optical thermal and SAR
                          data enabling users to explore, task and analyze
                          satellite data for a spectrum of applications.
                        </p>
                        <Link to="/imaging-capabilities" target="_blank" className="btn btn-primary">
                          Explore
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="card"
                      style={{
                        backgroundImage: 'url("./assets/images/mirka.webp")',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="card-body">
                        <h5 className="card-title mikra-txt">MIRKA</h5>
                        <p className="card-text">
                          Empowering defence with synergy of human intellect and
                          AI for unparalleled situational awareness and
                          strategic readiness in a rapidly evolving global
                          security landscape setting a new benchmark in defence
                          intelligence.
                        </p>
                        <Link to="/defence-intelligence" className="btn btn-primary">
                          Explore
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="card"
                      style={{
                        backgroundImage: 'url("./assets/images/sid.png")',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">SID</h5>
                        <p className="card-text">
                          Developed with the aim of shaping a safer and prepared
                          world by harnessing satellite data and advanced
                          analytics offering invaluable insights in disaster
                          management and insurance.
                        </p>
                        <Link to="/disaster-insurance" className="btn btn-primary">
                          Explore
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="client-logo-slider-section our-partner-slider">
          <div className="client-logo">
            <div className="container text-center mx-auto">
              <h3 className="mb-5">OUR ESTEEMED PARTNERS</h3>
            </div>
            {/* Testimonial Start */}
            <div className="container-xxl">
              <div className="client-logo-carousel">
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/ICEYE.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/Planet.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/RESTEC.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/SATELLOGIC.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/satvu.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/veng.png"
                  />
                </div>
              </div>
            </div>
            {/* Testimonial End */}
          </div>
        </div>
      </section>
      {/*End our product*/}
      {/*Our Partner*/}
      <section className="our-partner our-customer">
        <div className="client-logo-slider-section">
          <div className="client-logo">
            <div className="container text-center mx-auto">
              <h3 className="mb-5 fw-light">OUR VALUABLE CUSTOMERS</h3>
            </div>
            {/* Testimonial Start */}
            <div className="container-xxl">
              <div className="partner-logo-carousel">
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/haryanagovt-customer1.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/ministryofdefence-customer2.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/nhpc-customer3.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/nrsc-customer4.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/usdma-customer5.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto drdo-customer"
                    src="./assets/images/drdo-cutomer-11.jpeg"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/Customer-5.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/Customer-6.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/Customer-7.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/Customer-8.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/Customer-9.png"
                  />
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid p-2 mx-auto"
                    src="./assets/images/Customer-10.png"
                  />
                </div>
                
              </div>
            </div>
            {/* Testimonial End */}
          </div>
        </div>
      </section>
      {/*End -Our Partner*/}
      {/*Our Testmonial*/}
      <section
        className="testimonial-section"
        style={{
          backgroundImage: "url(./assets/images/Testimonial-BG-blck.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container-xxl">
          <div className="container-fluid">
            <div className="testimonial-carousel">
              <div className="testimonial-item text-center">
                <div className="testimonial-content">
                  <div className="testimonial-text text-center p-4">
                      <span className="quotes-up">
                        <img
                          src="./assets/images/double-quote-up.svg"
                          alt="double-quote-up"
                        />
                      </span>
                    <p>
                      Working with Suhora has been an exceptional experience.
                      Their deep understanding of our data needs, along with the
                      high-resolution SAR and optical data they provide, has
                      proven invaluable across multiple projects. Suhora's
                      support has consistently enhanced our work.
                    </p>
                      <span className="quotes-down">
                        <img
                          src="./assets/images/double-quote-down.svg"
                          alt="double-quote-down"
                        />
                      </span>
                  </div>
                  {/* <img
                    className="img-fluid rounded-circle p-2 mx-auto"
                    src="./assets/images/avtar.png"
                    style={{ width: 100, height: 100 }}
                  /> */}
                </div>
                <div className="user-details">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <h5 className="mb-1">SKAUST</h5>
                  {/* <span class="fst-italic">Profession</span> */}
                </div>
              </div>
              <div className="testimonial-item text-center">
                <div className="testimonial-content">
                  <div className="testimonial-text text-center p-4">
                      <span className="quotes-up">
                        <img
                          src="./assets/images/double-quote-up.svg"
                          alt="double-quote-up"
                        />
                      </span>
                    <p>
                      Thanks to Suhora's satellite data across multiple dates,
                      we were able to effectively monitor crop growth and make
                      timely adjustments to our strategy. Their service greatly
                      simplified our decision-making process.
                    </p>
                      <span className="quotes-down">
                        <img
                          src="./assets/images/double-quote-down.svg"
                          alt="double-quote-down"
                        />
                      </span>
                  </div>
                  {/* <img
                    className="img-fluid rounded-circle p-2 mx-auto"
                    src="./assets/images/avtar.png"
                    style={{ width: 100, height: 100 }}
                  /> */}
                </div>
                <div className="user-details">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <h5 className="mb-1">NECTAR</h5>
                  {/* <span class="fst-italic">Profession</span> */}
                </div>
              </div>
              <div className="testimonial-item text-center">
                <div className="testimonial-content">
                  <div className="testimonial-text text-center p-4">
                      <span className="quotes-up">
                        <img
                          src="./assets/images/double-quote-up.svg"
                          alt="double-quote-up"
                        />
                      </span>
                    <p>
                    I would like to extend our sincere gratitude and appreciation to Suhora.
Their collaborative approach has made working with their team not only smooth
but also remarkably productive. Suhora’s satellite data services have truly transformed
our operations, providing precise and reliable insights for critical activities such as
crop monitoring and detecting stubble burning. With their technology, we’ve been able
to make informed, timely decisions that drive both efficiency and sustainability—two pillars
essential to our success.
                    </p>
                      <span className="quotes-down">
                        <img
                          src="./assets/images/double-quote-down.svg"
                          alt="double-quote-down"
                        />
                      </span>
                  </div>
                  {/* <img
                    className="img-fluid rounded-circle p-2 mx-auto"
                    src="./assets/images/avtar.png"
                    style={{ width: 100, height: 100 }}
                  /> */}
                </div>
                <div className="user-details">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <h5 className="mb-1">HARSAC</h5>
                  {/* <span class="fst-italic">Profession</span> */}
                </div>
              </div>
              <div className="testimonial-item text-center">
                <div className="testimonial-content">
                  <div className="testimonial-text text-center p-4">
                      <span className="quotes-up">
                        <img
                          src="./assets/images/double-quote-up.svg"
                          alt="double-quote-up"
                        />
                      </span>
                    <p>
                      Suhora delivered high-resolution, precise digital surface
                      and terrain models, along with detailed feature
                      extraction. Their data significantly enhanced our project
                      outcomes and provided valuable insights.
                    </p>
                      <span className="quotes-down">
                        <img
                          src="./assets/images/double-quote-down.svg"
                          alt="double-quote-down"
                        />
                      </span>
                  </div>
                  {/* <img
                    className="img-fluid rounded-circle p-2 mx-auto"
                    src="./assets/images/avtar.png"
                    style={{ width: 100, height: 100 }}
                  /> */}
                </div>
                <div className="user-details">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <h5 className="mb-1">NHPC</h5>
                  {/* <span class="fst-italic">Profession</span> */}
                </div>
              </div>

              <div className="testimonial-item text-center">
                <div className="testimonial-content">
                  <div className="testimonial-text text-center p-4">
                      <span className="quotes-up">
                        <img
                          src="./assets/images/double-quote-up.svg"
                          alt="double-quote-up"
                        />
                      </span>
                    <p>
                      Suhora has been a valuable partner, contributing actively to our journey from ‘Bhoomandal se Brahmand tak ka Safar.’ Their dedication and support have been instrumental in advancing our shared mission.{" "}
                    </p>
                      <span className="quotes-down">
                        <img
                          src="./assets/images/double-quote-down.svg"
                          alt="double-quote-down"
                        />
                      </span>
                  </div>
                  {/* <img
                    className="img-fluid rounded-circle p-2 mx-auto"
                    src="./assets/images/avtar.png"
                    style={{ width: 100, height: 100 }}
                  /> */}
                </div>
                <div className="user-details">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <h5 className="mb-1">ISpA</h5>
                  {/* <span class="fst-italic">Profession</span> */}
                </div>
              </div>

              <div className="testimonial-item text-center">
                <div className="testimonial-content">
                  <div className="testimonial-text text-center p-4">
                      <span className="quotes-up">
                        <img
                          src="./assets/images/double-quote-up.svg"
                          alt="double-quote-up"
                        />
                      </span>
                    <p>
                      As a provider of thermal satellite imagery—a specialized
                      capability not widely recognized—Suhora has been a
                      reliable partner. Their expertise in thermal analytics has
                      proven immensely valuable. With the launch of SPADE,
                      Suhora is poised to reach new heights, making it even
                      easier to monitor temperature variations with precision.{" "}
                    </p>
                      <span className="quotes-down">
                        <img
                          src="./assets/images/double-quote-down.svg"
                          alt="double-quote-down"
                        />
                      </span>
                  </div>
                  {/* <img
                    className="img-fluid rounded-circle p-2 mx-auto"
                    src="./assets/images/avtar.png"
                    style={{ width: 100, height: 100 }}
                  /> */}
                </div>
                <div className="user-details">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <h5 className="mb-1">Satvu</h5>
                  {/* <span class="fst-italic">Profession</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
