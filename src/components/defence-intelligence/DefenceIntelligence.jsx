import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from "../../base";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


function DefenceIntelligence() {
  const $ = jQuery.noConflict();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    resource : 'Defence and Intelligence page'
  });


  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email))
      errors.email = "Valid email is required";
    if (!formData.phone.trim() || formData.phone.length < 10)
      errors.phone = "Valid contact number is required";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      try {
        // Sending data to API using fetch
        const response = await fetch(`${baseUrl}/api/book-demo`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer hsdguefg65sws%xsn$zsxs`  // Use Bearer token for authorization
          },
          body: JSON.stringify(formData), // Convert formData to JSON
        });

        if (response.ok) {
          // Handle success
          toast('Form submitted successfully!');
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            resource: 'Defence and Intelligence page',
          });
        } else {
          // Handle server errors
          const errorData = await response.json();
          alert('Error submitting form: ' + errorData.message);
        }
      } catch (error) {
        // Handle network errors
        alert('Network error: ' + error.message);
      } finally {
        setIsSubmitted(false);
      }

      // alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <>
     <ToastContainer />
      <section className="sub-top-image-banner defence-intelligence-banner">
        <div className="onion-layer layer-defence">
            <div className="container h-100">
              <div className="d-flex h-100 align-items-center">
                <div className="w-100 text-white">
                  <div className="col-lg-6">
                    <h1 className="display-3">
                      Excellence in Image &amp; Intelligence
                    </h1>
                    <p className="lead mb-0">
                      We provide state-of-the-art imaging capabilities and
                      intelligent algorithms for unparalleled surveillance enabling
                      swift insights across maritime and terrestrial domains.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      {/* Carousel End */}
      {/*SID Section -*/}
      <section className="sid-section mirka-section">
        <div className="container">
          <div className="row sid-col g-0 equal">
            <div className="col-lg-6 sid-text-col">
              <h3 className="mb-3">mirka</h3>
              <h4>
                <span>Rapid</span> | <span>Vigilant</span> |{" "}
                <span>Strategic</span>{" "}
              </h4>
              <p>
                In the rapidly evolving defence sector, MIRKA emerges as a
                groundbreaking fusion of human expertise and Artificial
                Intelligence, reshaping strategic operations. This advanced ISR
                platform offers near real-time insights, allowing defence and
                intelligence agencies to transition from reactive to proactive
                strategies, ensuring critical targets are never missed.{" "}
              </p>
              <p>
                Powered by high-definition sensors and smart algorithms, MIRKA
                cuts through complex data, providing actionable intelligence for
                both maritime and land surveillance. It enhances operational
                effectiveness, offering a holistic view of any scenario, making
                it an essential tool for national security.{" "}
              </p>
            </div>
            <div className="col-lg-6">
              <div className="image-col h-100">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage style={{filter:"grayscale(100%)"}} className="" src="./assets/images/mirka-slider.webp" srcSet="./assets/images/mirka-slider.webp" alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src="./assets/images/mirka-slider.webp" srcSet="./assets/images/mirka-slider.webp" alt="Image two" />}
             />
                {/* <main className="h-100">
                  <div className="container h-100">
                    <div className="image-container mirka-product-slider">
                      <img
                        className="image-before slider-image first-mirka"
                        src="./assets/images/mirka-slider.jpg"
                        alt="black and white"
                      />
                      <img
                        className="image-after slider-image"
                        src="./assets/images/mirka-slider.jpg"
                        alt="color photo"
                      />
                    </div> 
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
                </main> */}
              </div>
            </div>
          </div>

          <div className="row card-image-col">
            <h4>
              With <span>MIRKA </span> gain actionable Intelligence
            </h4>
            <div className="col-lg-4 col-md-6">
              <div className="card bg-dark text-white">
                <img
                  src="./assets/images/01_Tip and Cue.webp"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Tip &amp; Cue</h5>
                  <p className="card-text">
                    Automated detections and task cueing
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card bg-dark text-white">
                <img
                  src="./assets/images/02_multisensor tasking.webp"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Multi-sensor tasking</h5>
                  <p className="card-text">
                    Leverage multi-spectral imaging
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card bg-dark text-white">
                <img
                  src="./assets/images/03_near real time.webp"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Near real-time delivery</h5>
                  <p className="card-text">
                    Experience blazing fast tasking and delivery
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card bg-dark text-white">
                <img
                  src="./assets/images/04_ML Based.webp"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">ML based target detection</h5>
                  <p className="card-text">
                    Automated ML based target detection and identification
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card bg-dark text-white">
                <img
                  src="./assets/images/05_Proactive Change.webp"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Proactive Change mapping</h5>
                  <p className="card-text">
                    Always 'on' change mapping
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card bg-dark text-white">
                <img
                  src="./assets/images/06_cross-sensor.webp"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Cross sensor insights</h5>
                  <p className="card-text">
                    Gain unprecedented cognizance through sensor convergence{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="image-slider-with-animation">
        <div className="container">
          <div className="row title">
            <h2 className="font-weight-bold">Modules</h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="general-container">
              <input
                className="radio"
                type="radio"
                name="card"
                id="cardUno"
                defaultChecked=""
              />
              <label className="content" htmlFor="cardUno">
                <div className="onion-layer-defence"></div>
                <h1 className="title-card">
                  <span className="marg-bott">
                    Maritime Domain Awareness
                    <br />(<span>MIRKA MDA</span>)
                  </span>
                </h1>
                <h3 className="card-title subsubtitle">
                  <span>
                    Maritime Domain Awareness (<span>MIRKA</span> MDA) - Mirka
                    provides advanced maritime domain awareness through
                    continuous large-scale monitoring using wide swath satellite
                    data. Our vessel and ship detection services offer real-time
                    insights, ensuring enhanced safety, security, and
                    operational efficiency at sea along with monitoring maritime
                    activities with precision and reliability.
                  </span>
                </h3>
              </label>
              <input className="radio" type="radio" name="card" id="cardDos" />
              <label className="content" htmlFor="cardDos">
                <div className="overlay" />
                <h1 className="title-card">
                  <span className="marg-bott">
                    Terrain Situational Awareness <br /> (<span>MIRKA TSA</span>)
                  </span>
                </h1>
                <h3 className="card-title subsubtitle">
                  <span>
                    Mirka specializes in terrain situational awareness by
                    monitoring granular-level changes using high-resolution
                    satellite imagery. Our advanced capabilities allow for
                    precise aircraft detection, providing critical insights for
                    enhanced security and operational decision-making. With our
                    technology, you gain a detailed view of ground activities
                    and movement.
                  </span>
                </h3>
              </label>
              <input className="radio" type="radio" name="card" id="cardTres" />
              <label className="content" htmlFor="cardTres">
                <div className="overlay" />
                <h1 className="title-card">
                  <span className="marg-bott">MapVyuh</span>
                </h1>
                <h3 className="card-title subsubtitle">
                  <span>
                    Proactive Border Surveillance - We use high-resolution
                    satellite imagery to deliver real-time monitoring of
                    sensitive areas. By detecting and analyzing activity with
                    precision irrespective of scale, we enhance border security
                    and enable rapid response to potential threats. Stay ahead
                    with reliable, round-the-clock insights for safeguarding
                    critical boundaries.
                  </span>
                </h3>
              </label>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="cta-sec book-demo">
          <h3>Book a Demo</h3>
        </div>
      </section>
      <div className="contact-us-section2">
      <div className="container">
        <div className="main-content-col">
          <div className="row form-main-wrapper">
            <div className="form-title">
              <h3>
                Get in <span>Touch</span>
              </h3>
            </div>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Name"
                  aria-label="Your name"
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Email"
                  aria-label="Your Email"
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Contact Number"
                  aria-label="Contact Number"
                />
                {errors.phone && (
                  <small className="text-danger">{errors.phone}</small>
                )}
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Subject"
                  aria-label="Subject"
                />
                {errors.subject && <small className="text-danger">{errors.subject}</small>}
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  rows={3}
                  placeholder="Message"
                />
                {errors.message && <small className="text-danger">{errors.message}</small>}
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn form-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default DefenceIntelligence;
