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
                    href="./assets/images/Pangong-Tso.webp"
                    data-fancybox="gallery"
                    data-caption="Pangong Tso 1 Meter"
                  >
                    <img
                      src="./assets/images/Pangong-Tso.webp"
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
                    href="./assets/images/delhi_yamuna.webp"
                    data-fancybox="gallery"
                    data-caption="Delhi Yamuna 2.5 Meter"
                  >
                    <img
                      src="./assets/images/delhi_yamuna.webp"
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
                    href="./assets/images/haryana.webp"
                    data-fancybox="gallery"
                    data-caption="Haryana 2.5 Meter"
                  >
                    <img
                      src="./assets/images/haryana.webp"
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
                    href="./assets/images/Chungthang.webp"
                    data-fancybox="gallery"
                    data-caption="Chungthang 3.5 meter"
                  >
                    <img
                      src="./assets/images/Chungthang.webp"
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
                    href="./assets/images/rishikesh.webp"
                    data-fancybox="gallery"
                    data-caption="Rishikesh 3.5 meter"
                  >
                    <img
                      src="./assets/images/rishikesh.webp"
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
                    href="./assets/images/Assam.webp"
                    data-fancybox="gallery"
                    data-caption="Assam 50 Centimeters"
                  >
                    <img
                      src="./assets/images/Assam.webp"
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
                    href="./assets/images/mandla_port.webp"
                    data-fancybox="gallery"
                    data-caption="Mandla port Assam 50 Centimeters"
                  >
                    <img
                      src="./assets/images/mandla_port.webp"
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
                    href="./assets/images/Nagasaki_Japan.webp"
                    data-fancybox="gallery"
                    data-caption="Nagasaki-Japan L- Band | 3 meter"
                  >
                    <img
                      src="./assets/images/Nagasaki_Japan.webp"
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
                    href="./assets/images/Palwal,Haryana.webp"
                    data-fancybox="gallery"
                    data-caption="Palwal, Haryana L-Band | 10X5 meter"
                  >
                    <img src="./assets/images/Palwal,Haryana.webp" alt="Palwal" />
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
                    href="./assets/images/Vellore,Tamil_Nadu.webp"
                    data-fancybox="gallery"
                    data-caption="Vellore, TamilNadu L-Band | 10X5 meter"
                  >
                    <img src="./assets/images/Vellore,Tamil_Nadu.webp" alt="Vellore" />
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
                    href="./assets/images/Mumbai.webp"
                    data-fancybox="gallery"
                    data-caption="Mumbai X- Band | 3 meter"
                  >
                    <img
                      src="./assets/images/Mumbai.webp"
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
                    href="./assets/images/Gujrat.webp"
                    data-fancybox="gallery"
                    data-caption="Gujrat X-Band | 15 meter"
                  >
                    <img src="./assets/images/Gujrat.webp" alt="Gujrat" />
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
                    href="./assets/images/Australlia.webp"
                    data-fancybox="gallery"
                    data-caption="Australlia X-Band | 50 centimeter"
                  >
                    <img
                      src="./assets/images/Australlia.webp"
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
                    href="./assets/images/kolkata.webp"
                    data-fancybox="gallery"
                    data-caption="Kolkata X-Band | 50 centimeter"
                  >
                    <img src="./assets/images/kolkata.webp" alt="Kolkata" />
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
                    href="./assets/images/Jamnagar_oil_refinery.webp"
                    data-fancybox="gallery"
                    data-caption="Jamnagar Oil Refinery 3.5 meter"
                  >
                    <img
                      src="./assets/images/Jamnagar_oil_refinery.webp"
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
                    href="./assets/images/Djibouti_Port.webp"
                    data-fancybox="gallery"
                    data-caption="Djibouti_Port"
                  >
                    <img src="./assets/images/Djibouti_Port.webp" alt="Djibouti_Port" />
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
                    href="./assets/images/Ruwais_oilrefinery.webp"
                    data-fancybox="gallery"
                    data-caption="Djibouti_Port"
                  >
                    <img src="./assets/images/Ruwais_oilrefinery.webp" alt="Ruwais_oilrefinery" />
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
                    href="./assets/images/Vizag_Port.webp"
                    data-fancybox="gallery"
                    data-caption="Djibouti_Port"
                  >
                    <img src="./assets/images/Vizag_Port.webp" alt="Vizag_Port" />
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
                    href="./assets/images/DSM_50_CM_AURANGABAD.webp"
                    data-fancybox="gallery"
                    data-caption="Aurangabad DSM 50 centimeter"
                  >
                    <img
                      src="./assets/images/DSM_50_CM_AURANGABAD.webp"
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
                    href="./assets/images/DTM_50_CM_AURANGABAD.webp"
                    data-fancybox="gallery"
                    data-caption="Aurangabad DTM 50 centimeter"
                  >
                    <img
                      src="./assets/images/DTM_50_CM_AURANGABAD.webp"
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
                    href="./assets/images/DSM_Nasik_50CM.webp"
                    data-fancybox="gallery"
                    data-caption="Nasik DSM 50 centimeter"
                  >
                    <img src="./assets/images/DSM_Nasik_50CM.webp" alt="Nasik" />
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
                    href="./assets/images/DTM_Nasik_50CM.webp"
                    data-fancybox="gallery"
                    data-caption="Aurangabad DTM 50 centimeter"
                  >
                    <img
                      src="./assets/images/DTM_Nasik_50CM.webp"
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
