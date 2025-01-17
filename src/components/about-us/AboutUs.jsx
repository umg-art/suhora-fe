import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../base";

export default function AboutUs() {
  const $ = jQuery.noConflict();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/gallery`,{
        headers: {
          'Authorization': `Bearer hsdguefg65sws%xsn$zsxs`  // Use Bearer token for authorization
        }
      });

      // Filter published blogs
      setData(res.data.data);
      console.log("data", res.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const initializeCarousel = () => {
      // Initialize the one-time carousel
      $(".one-time")
        .not(".slick-initialized")
        .slick({
          dots: true,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 6000,
          slidesToShow: 1,
          pauseOnFocus: false,
          pauseOnHover: true,
          slidesToScroll: 1,
        });

      // Initialize the gallery carousel
      $(".gallery-carousel")
        .not(".slick-initialized")
        .slick({
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 3,
          arrows: true,
          prevArrow: '<div class="slick-prev"></div>',
          nextArrow: '<div class="slick-next"></div>',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
    };

    // Reinitialize the carousel each time 'data' changes
    initializeCarousel();

    // Cleanup function to destroy slick on component unmount or data change
    return () => {
      $(".one-time").slick('unslick');
      $(".gallery-carousel").slick('unslick');
    };
  }, [data]); 

  return (
    <>
      {/* Carousel Start */}
      <section className="sub-top-image-banner aboutus-page">
        <div className="onion-layer">
          <div className="container h-100">
            <div className="d-flex h-100 align-items-center">
              <div
                className=" text-white"
                style={{ position: "absolute", bottom: "42%" }}
              >
                <div className="col-lg-12">
                  <p className="line-height-normal">
                    <span style={{ fontSize: "46px" }}>
                      Transforming industries{" "}
                    </span>
                    <br /> with <b>AI-driven spatial insights</b>
                    <br /> for informed decision making
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Carousel End */}
      <section className="mission-vission">
        <div className="onion-mission">
        <br /><br />
         <div className="d-flex flex-column container p-5 gap-3">
           <div>
              <h1>Our Mission</h1>
              <p>
                Our Mission is to harness the power of satellite imagery
                and  advanced data analytics to deliver timely, accurate, 
                and actionable insights for businesses, governments,
                and organizations worldwide.
              </p>
           </div>
           <hr />
           <div>
              <h1>Our Vision</h1>
              <p>
                we envision a world  where satellite insights illuminate
                every corner of the planet, empowering humanity to
                make  smarter, more sustainable decisions. By providing
                unprecedented access to critical data from space.
              </p>
           </div>
         </div>
         </div>
      </section>
      <section className="about-suhora-section">
        <div className="overlay" />
        <div className="container">
          <div className="row founder-testimonial">
            <h3 className="text-center mb-4 title">
              Here's what our founders have to say
            </h3>
            <div className="col-lg-10 m-auto">
              <div className="one-time">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="./assets/images/Krishanu_card1-image.webp"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                      <div className="card-content">
                        <h5 className="card-title">Krishanu Acharya</h5>
                        <p className="card-text">CEO and Co-Founder</p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          Suhora exists to make a meaningful impact, driven by
                          innovation, commitment, and trust to transform space
                          analytics. <br />
                          We believe that, together, we can tackle humanity’s
                          most critical challenges and creating a safer, more
                          resilient world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="./assets/images/Rupesh_founders.webp"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                      <div className="card-content">
                        <h5 className="card-title">Rupesh Kumar</h5>
                        <p className="card-text">CTO and Co-Founder</p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          Space is vast and endless, and so should be the
                          opportunities to explore it. With advancements in
                          satellite capabilities and data processing, We at
                          Suhora bring technology as a bridge not a barrier. Our
                          goal is to bring space closer to everyone with more
                          comprehensive insights to address complex challenges
                          being faced today.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="./assets/images/Amit_founders.webp"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                      <div className="card-content">
                        <h5 className="card-title">Amit Kumar</h5>
                        <p className="card-text">COO and Co-Founder</p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          The world today is both challenging and exciting.
                          Throughout history, humanity has thrived through
                          innovation and perseverance. This continues today,
                          even amidst economic fluctuations and conflicts.
                          Despite these ups and downs, we are moving towards
                          progress.
                          <br />
                          At Suhora, we believe innovation is the cornerstone of
                          this progress. Technology-driven efficiency allows us
                          to keep pushing boundaries, crossing new frontiers,
                          and solving new problems. Together, we are shaping a
                          future where challenges become opportunities, and
                          progress is an unstoppable force.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="./assets/images/TanmoyAdhikary.png"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                      <div className="card-content">
                        <h5 className="card-title">Tanmoy Adhikary</h5>
                        <p className="card-text">Director-Strategy</p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          We at Suhora work towards creating a firm foundation
                          for consistent and sustainable growth, rather than
                          just short term revenue acceleration. The strategy is
                          always guided by a philosophy of creating a legacy
                          organization which will partner with Government and
                          Private to build a better future for the community at
                          large, while taking care of all our stakeholders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row team-card">
            <div className="our-team">
              <h3 className="text-center title">Our Team</h3>
              <p className="text-center">
                We’re a dynamic group of individuals who are passionate about
                what we do.
              </p>
              <div className="leadership-title">
                <h3 className="text-center">Leadership Team</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="card">
                <img
                  src="./assets/images/Krishanu-Acharya.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="about-founder">
                    <h5 className="card-title">Krishanu Acharya</h5>
                    <p className="card-text">CEO and Co-Founder</p>
                  </div>
                  <div className="social-icon">
                    <a target="_blank" href="https://www.linkedin.com/in/krishanuacharya/">
                      <img src="./assets/images/LinkedIn.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="card">
                <img
                  src="./assets/images/Rupesh_founders.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="about-founder">
                    <h5 className="card-title">Rupesh Kumar</h5>
                    <p className="card-text">CTO and Co-Founder</p>
                  </div>
                  <div className="social-icon">
                    <a target="_blank" href="https://www.linkedin.com/in/rupeshgupte/">
                      <img src="./assets/images/LinkedIn.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="card">
                <img
                  src="./assets/images/Amit_founders.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="about-founder">
                    <h5 className="card-title">Amit Kumar</h5>
                    <p className="card-text">COO and Co-Founder</p>
                  </div>
                  <div className="social-icon">
                    <a target="_blank" href="https://www.linkedin.com/in/amitkumarsaini/">
                      <img src="./assets/images/LinkedIn.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="card">
                <img
                  src="./assets/images/TanmoyAdhikary.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="about-founder">
                    <h5 className="card-title">Tanmoy Adhikary</h5>
                    <p className="card-text">Director-Strategy</p>
                  </div>
                  <div className="social-icon">
                    <a target="_blank" href="https://www.linkedin.com/in/tanmoy-adhikary-8132002/">
                      <img src="./assets/images/LinkedIn.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="card">
                <img
                  src="./assets/images/SurojitBose.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="about-founder">
                    <h5 className="card-title">Surojit Bose</h5>
                    <p className="card-text">Advisor</p>
                  </div>
                  <div className="social-icon">
                    <a target="_blank" href="https://www.linkedin.com/in/surojitbose/">
                      <img src="./assets/images/LinkedIn.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="card">
                <img
                  src="./assets/images/NavneetKaushik.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div className="about-founder">
                    <h5 className="card-title">Navneet Kaushik</h5>
                    <p className="card-text">Advisor</p>
                  </div>
                  <div className="social-icon">
                    <a target="_blank" href="https://www.linkedin.com/in/cdr-navneet-kaushik-veteran-98964b82/">
                      <img src="./assets/images/LinkedIn.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row gallery-section gallery-section-ourteam">
            <img
              className="img-fluid p-2 mx-auto"
              src="./assets/images/Team-image-3-about-us.webp"
            />
          </div>

          <div className="row gallery-section">
            <h3 className="text-center mb-4 title">Gallery</h3>
            <div className="gallery-carousel">
            {data &&
                data.map((item) => {
                  return (
                    <div key={item.id} className="testimonial-item text-center">
                      <img
                        className="img-fluid p-2 mx-auto"
                        src={baseUrl + item.img_url}
                        alt={item.tag}
                      />
                    </div>
                  );
                })}
               {/* <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-2.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-4.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-5.JPG"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-6.JPG"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-7.JPG"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-8.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-9.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-10.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-11.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-13.jpeg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-14.jpeg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-15.JPG"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-16.JPG"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-17.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-18.JPG"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-19.jpeg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-20.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-21.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-22.jpg"
                />
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-23.jpeg"
                />
              </div> */}
              {/* <div className="testimonial-item text-center">
                <img
                  className="img-fluid p-2 mx-auto"
                  src="./assets/images/Team-image-24.jpg"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
