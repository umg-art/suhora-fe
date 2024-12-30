import { useEffect } from "react";

export default function ImageLibrary() {
  const $ = jQuery.noConflict();

  useEffect(() => {
    const initializeCarousel = () => {
      $('.one-time').not(".slick-initialized").slick({
        dots: true,
        arrows:false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
  
      $('.gallery-carousel').not(".slick-initialized").slick({
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
    };

    initializeCarousel();
    window.scrollTo(0, 0);
  }, [$]);
  return (
    <>
      <section className="image-library">
        <div className="container">
          <div className="title mb-5">
            <h3>
              Your comprehensive hub for Satellite
              <br />
              Imagery and Analytics Solutions
            </h3>
          </div>
          <main className="main">
            <div className="title mb-3">
              <h4>Optical - Catalog</h4>
            </div>
            <div className="grid-container">
              {/* <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Mumbai-1meter.png"
                    data-fancybox="gallery"
                    data-caption="Mumbai 1 Meter"
                  >
                    <img
                      src="./assets/images/Mumbai-1meter.png"
                      alt="Mumbai 1 Meter"
                    />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Mumbai</p>
                  <span>1 meter</span>
                </div>
              </div> */}
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Pangong-meter.png"
                    data-fancybox="gallery"
                    data-caption="Pangong Tso 1 Meter"
                  >
                    <img
                      src="./assets/images/Pangong-meter.png"
                      alt="Pangong Tso"
                    />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Pangong Tso</p>
                  <span>1 meter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Delhi-Yamuna.png"
                    data-fancybox="gallery"
                    data-caption="Delhi Yamuna 2.5 Meter"
                  >
                    <img
                      src="./assets/images/Delhi-Yamuna.png"
                      alt="Delhi Yamuna 2.5 Meter"
                    />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Delhi Yamuna</p>
                  <span>2.5 meter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Haryana_2.5-meter.png"
                    data-fancybox="gallery"
                    data-caption="Haryana 2.5 Meter"
                  >
                    <img
                      src="./assets/images/Haryana_2.5-meter.png"
                      alt="Haryana 2.5 Meter"
                    />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Haryana</p>
                  <span>2.5 meter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Chungthang_3.5.png"
                    data-fancybox="gallery"
                    data-caption="Chungthang 3.5 meter"
                  >
                    <img
                      src="./assets/images/Chungthang_3.5.png"
                      alt="Chungthang"
                    />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Chungthang</p>
                  <span>3.5 meter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Rishikesh-meter.png"
                    data-fancybox="gallery"
                    data-caption="Rishikesh 3.5 meter"
                  >
                    <img
                      src="./assets/images/Rishikesh-meter.png"
                      alt="Rishikesh"
                    />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Rishikesh</p>
                  <span>3.5 meter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Assam_50.png"
                    data-fancybox="gallery"
                    data-caption="Assam 50 Centimeters"
                  >
                    <img
                      src="./assets/images/Assam_50.png"
                      alt="Assam 50 Centimeters"
                    />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Assam</p>
                  <span>50 Centimeters</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Mandla.png"
                    data-fancybox="gallery"
                    data-caption="Mandla port Assam 50 Centimeters"
                  >
                    <img
                      src="./assets/images/Mandla.png"
                      alt="Mandla port Assam 50 Centimeters"
                    />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Mandla port</p>
                  <span>50 Centimeters</span>
                </div>
              </div>
            </div>
          </main>
          <main className="main mt-5">
            <div className="title mb-3">
              <h4>SAR - Catalog</h4>
            </div>
            <div className="grid-container">
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Nagasaki-Japan.png"
                    data-fancybox="gallery"
                    data-caption="Nagasaki-Japan L- Band | 3 meter"
                  >
                    <img
                      src="./assets/images/Nagasaki-Japan.png"
                      alt="Nagasaki-Japan"
                    />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Nagasaki Japan</p>
                  <span>L- Band | 3 meter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Palwal-Haryana.jpg"
                    data-fancybox="gallery"
                    data-caption="Palwal, Haryana L-Band | 10X5 meter"
                  >
                    <img src="./assets/images/Palwal-Haryana.jpg" alt="Palwal" />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Palwal, Haryana</p>
                  <span>L-Band | 10X5 meter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Vellore.jpg"
                    data-fancybox="gallery"
                    data-caption="Vellore, TamilNadu L-Band | 10X5 meter"
                  >
                    <img src="./assets/images/Vellore.jpg" alt="Vellore" />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Vellore, TamilNadu</p>
                  <span>L-Band | 10X5 meter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Mumbai_X-Band-meter.png"
                    data-fancybox="gallery"
                    data-caption="Mumbai X- Band | 3 meter"
                  >
                    <img
                      src="./assets/images/Mumbai_X-Band-meter.png"
                      alt="Mumbai X- Band | 3 meter"
                    />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Mumbai</p>
                  <span>X- Band | 3 meter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Gujrat_X-Band.png"
                    data-fancybox="gallery"
                    data-caption="Gujrat X-Band | 15 meter"
                  >
                    <img src="./assets/images/Gujrat_X-Band.png" alt="Gujrat" />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Gujrat</p>
                  <span>X-Band | 15 meter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Australlia_X-Band.png"
                    data-fancybox="gallery"
                    data-caption="Australlia X-Band | 50 centimeter"
                  >
                    <img
                      src="./assets/images/Australlia_X-Band.png"
                      alt="Australlia"
                    />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Australlia</p>
                  <span>X-Band | 50 centimeter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Kolkata_X-Band.png"
                    data-fancybox="gallery"
                    data-caption="Kolkata X-Band | 50 centimeter"
                  >
                    <img src="./assets/images/Kolkata_X-Band.png" alt="Kolkata" />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Kolkata</p>
                  <span>X-Band | 50 centimeter</span>
                </div>
              </div>
            </div>
          </main>
          <main className="main mt-5">
            <div className="title mb-3">
              <h4>Thermal - Catalog</h4>
            </div>
            <div className="grid-container">
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Jamnagar_oil_refinery.png"
                    data-fancybox="gallery"
                    data-caption="Jamnagar Oil Refinery 3.5 meter"
                  >
                    <img
                      src="./assets/images/Jamnagar_oil_refinery.png"
                      alt="Jamnagar_oil_refinery"
                    />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Jamnagar Oil Refinery</p>
                  <span>3.5 meter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Djibouti_Port.png"
                    data-fancybox="gallery"
                    data-caption="Djibouti_Port"
                  >
                    <img src="./assets/images/Djibouti_Port.png" alt="Djibouti_Port" />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Djibouti Port</p>
                  <span>3.5 meter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Ruwais_oilrefinery.png"
                    data-fancybox="gallery"
                    data-caption="Djibouti_Port"
                  >
                    <img src="./assets/images/Ruwais_oilrefinery.png" alt="Ruwais_oilrefinery" />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Ruwais Oilrefinery</p>
                  <span>3.5 meter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Vizag_Port.png"
                    data-fancybox="gallery"
                    data-caption="Djibouti_Port"
                  >
                    <img src="./assets/images/Vizag_Port.png" alt="Vizag_Port" />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Vizag Port</p>
                  <span>3.5 meter</span>
                </div>
              </div>
            </div>
          </main>
          <main className="main mt-5">
            <div className="title mb-3">
              <h4>DSM/DTM - Catalog</h4>
            </div>
            <div className="grid-container">
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Aurangabad_DSM.png"
                    data-fancybox="gallery"
                    data-caption="Aurangabad DSM 50 centimeter"
                  >
                    <img
                      src="./assets/images/Aurangabad_DSM.png"
                      alt="Aurangabad"
                    />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Aurangabad</p>
                  <span>DSM 50 centimeter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Aurangabad_DTM.png"
                    data-fancybox="gallery"
                    data-caption="Aurangabad DTM 50 centimeter"
                  >
                    <img
                      src="./assets/images/Aurangabad_DTM.png"
                      alt="Aurangabad"
                    />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Aurangabad</p>
                  <span>DTM 50 centimeter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Nasik_DSM.png"
                    data-fancybox="gallery"
                    data-caption="Nasik DSM 50 centimeter"
                  >
                    <img src="./assets/images/Nasik_DSM.png" alt="Nasik" />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Nasik</p>
                  <span>DSM 50 centimeter</span>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <a
                    href="./assets/images/Nasik_DTM-50-centimeter.png"
                    data-fancybox="gallery"
                    data-caption="Aurangabad DTM 50 centimeter"
                  >
                    <img
                      src="./assets/images/Nasik_DTM-50-centimeter.png"
                      alt="Nasik"
                    />
                  </a>
                </div>
                <div className="card-detial">
                  <p>Nasik</p>
                  <span>DTM 50 centimeter</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      {/* <section>
        <div className="cta-sec">
          <h3>Get started with SPADE</h3>
        </div>
      </section> */}
    </>

  );
}
