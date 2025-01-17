import { useEffect } from "react";
import { Link } from "react-router-dom";

function ImagingCapabilities() {
  const $ = jQuery.noConflict();

  useEffect(() => {
    const container = document.querySelector(".image-col .container");
    document
      .querySelector(".image-col .slider")
      .addEventListener("input", (e) => {
        container.style.setProperty("--position", `${e.target.value}%`);
      });
    window.scrollTo(0, 0);
  }, [$]);

  return (
    <>
      {/* Carousel Start */}
      <section className="sub-top-image-banner imaging-capabilities-banner">
        <div className="container h-100">
          <div className="d-flex h-100 align-items-center">
            <div className="w-100 text-white">
              <div className="col-lg-6">
                <img width={"183px"} src="./assets/images/spade_logo-new.png" alt />
                <h1>Imaging Capabilities</h1>
                <h6 style={{ fontSize: "1.2rem" }}>
                  Unlock the power of data effortlessly
                </h6>
                <p className="mb-0" style={{ fontSize: "1.2rem" }}>
                  In today&apos;s data-driven world, your most valuable asset is
                  data,
                  <br />
                  and we make accessing it effortless and seamless.
                  <br />
                  Suhora redefines how you task an image or delve into
                  <br />a wide range of archive data.
                </p>
                {/* <button className="btn btn-blue">Get started with SPADE</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel End */}
      {/*SID Section -*/}
      <section className="sid-section our-product">
        <div className="container">
          <div className="row sid-col g-0 equal">
            <div className="col-lg-6 sid-text-col">
              <img width={"183px"} src="./assets/images/spade_logo-new.png" alt className="mb-2" />
              <h4>
                <span>Explore</span> | <span>Task</span> | <span>Analyse</span>{" "}
              </h4>
              <p>
                Experience the next level data insight and analytics with our
                SaaS platform, delivering unparalleled convenience and
                efficiency. SPADE, a subscription based platform revamps
                satelite tasking, data access, and analysis, harnessing the
                capabilities of 15+ satelite constellation equipped with 250+
                sensors. With guaranteed collection, fastest tasking, and secure
                downlink capabilities, your data is handled with utmost precision and confidentiality.{" "}
              </p>
            </div>
            <div className="col-lg-6">
              <div className="image-col">
                <main>
                  <div className="container">
                    <div className="image-container product-slider">
                      <img
                        className="diaster-image-before slider-image"
                        src="./assets/images/Spade_Slider1.webp"
                        alt="color photo"
                      />
                      <img
                        className="image-after slider-image"
                        src="./assets/images/Spade_Slider2.webp"
                        alt="black and white"
                      />
                    </div>
                    {/* step="10" */}
                    <input
                      type="range"
                      min={0}
                      max={100}
                      defaultValue={50}
                      aria-label="Percentage of before photo shown"
                      className="slider"
                    />
                    <div className="slider-line" aria-hidden="true" />
                    <div className="slider-button" aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <rect width={256} height={256} fill="none" />
                        <line
                          x1={128}
                          y1={40}
                          x2={128}
                          y2={216}
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={16}
                        />
                        <line
                          x1={96}
                          y1={128}
                          x2={16}
                          y2={128}
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={16}
                        />
                        <polyline
                          points="48 160 16 128 48 96"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={16}
                        />
                        <line
                          x1={160}
                          y1={128}
                          x2={240}
                          y2={128}
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={16}
                        />
                        <polyline
                          points="208 96 240 128 208 160"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={16}
                        />
                      </svg>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
          <div className="row card-image-col">
            <div className="col-lg-4 mt-3">
              <div className="card">
                <img
                  src="./assets/images/explore-image.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Explore</h5>
                  <h6>Bringing the past into perspective</h6>
                  <p className="card-text">
                    Dig into an extensive archive of optical, SAR, and thermal
                    data from leading providers like, ICEYE, SatVu, Satellogic
                    and more. Access a comprehensive range of insights at your
                    fingertips.
                  </p>
                   <a href="https://spade.suhora.com/" target="_blank" className="btn btn-transparent">
                    Explore
                  </a> 
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-3">
              <div className="card">
                <img
                  src="./assets/images/Task.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Task</h5>
                  <h6>Fresh satellite imagery tailored for you</h6>
                  <p className="card-text">
                    Our 24/7 all-weather surveillance, utilizing both optical
                    and SAR constellations, ensures comprehensive coverage and
                    actionable insights with the commitment of being the most
                    cost-effective solution in the market.
                  </p>
                  <a href="https://spade.suhora.com/" target="_blank" className="btn btn-transparent">
                    Explore
                  </a> 
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-3">
              <div className="card">
                <img
                  src="./assets/images/Analyse-image.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Analyse</h5>
                  <h6>Make Informed decisions with precision</h6>
                  <p className="card-text">
                    SPADE offers more than just images it delivers
                    analysis-ready data without you worrying about the hassle of
                    geometric and radiometric corrections. An image you can
                    blindly trust for all your geospatial solutions.
                  </p>
                  <a href="https://spade.suhora.com/" target="_blank" className="btn btn-transparent">
                    Explore
                  </a> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End our product*/}
      <div className="left-content-with-right-video">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 bg-with-text">
              <div className="title-col">
                <h1>
                  How
                  <br />
                  to get
                  <br />
                  the data
                  <br />
                  you need
                </h1>
              </div>
            </div>
            <div className="col-md-8 video-column">
              <video
                playsInline="playsinline"
                autoPlay="autoplay"
                muted="muted"
                loop="loop"
                className="object-fit-cover"
              >
                <source
                  src="./assets/images/How_to_get_data.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="solution-hub-section imaging-hub-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto title-col">
              <h3>
                Your comprehensive hub for Satelite Imagery and Analytics
                Solutions{" "}
              </h3>
              <p>Just spade the data you need</p>
            </div>
          </div>
          <div className="row solution-hub-card">
            <div className="col-lg-3 col-md-6 mt-3">
              <div className="card">
                <Link to="/image-library">
                  <img
                    src="./assets/images/Optical_thumbnail.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Optical</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-3">
              <div className="card">
                <Link to="/image-library">
                  <img
                    src="./assets/images/SAR_thumbnail.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">SAR</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-3">
              <div className="card">
                <Link to="/image-library">
                  <img
                    src="./assets/images/Thermal_thumbnail.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Thermal</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-3">
              <div className="card">
                <Link to="/image-library">
                  <img
                    src="./assets/images/DSM-DTM_thumbnail.webp"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Elevation Data</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-section">
        <div className="container">
          <div className="main-content-col">
            <div className="row">
              <div className="col-lg-8 text-center m-auto title-col">
                <h3>Contact us </h3>
                <p>"We've Got Your Back-Here for Every Step of the Way."</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="p-2 bd-highlight">
                  <div className="address">
                    <img
                      src="./assets/images/Location.svg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p>
                        313, Tower-B, Noida One, Sector-62, Noida, Uttar Pradesh,
                        India, 201309
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mobile-section">
                <div className="p-2 bd-highlight">
                  <div className="contact-number">
                    <img
                      src="./assets/images/Mobile.svg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p>
                        PHONE NUMBER <br /> +91 9999664437
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 email-section">
                <div className="p-2 bd-highlight">
                  <div className="email-id">
                    <img
                      src="./assets/images/Email.svg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p>
                        EMAIL
                        <br /> <a href="mailto:Spade@suhora.com"></a>Spade@suhora.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row form-main-wrapper">
              <div className="form-title">
                <h3>
                  Get in <span>Touch</span>
                </h3>
              </div>
              <form className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    aria-label="Your name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    aria-label="Your Email"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Contact Number"
                    aria-label="Contact Number"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    aria-label="Subject"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12 text-center">
                  <button type="button" className="btn form-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <section>
        <div className="cta-sec">
          <h3>Get started with SPADE</h3>
        </div>
      </section> */}
    </>
  );
}

export default ImagingCapabilities;
