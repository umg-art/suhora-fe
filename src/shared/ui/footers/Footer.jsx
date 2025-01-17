import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundImage: "url(../assets/images/Footer.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Footer Start */}
      <div className="footer-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 menu-item">
              <div className="logo">
                <img src="./assets/images/SuhoraLogowhite.svg" alt="" />
              </div>
              <div className="location d-flex">
                <div className="location-icon">
                  <i className="fa fa-map-marker-alt me-3" />
                </div>
                <div className="address">
                  <p>
                    313, Tower-B, Noida One, Sector-62, Noida, U.P.-201309,
                    India
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-5 menu-item">
              <h5 className="mb-4">Industries</h5>
              <Link to="/defence-intelligence">Defence & Intelligence</Link>
              <Link to="/disaster-insurance">Disaster & Insurance</Link>
            </div>
            <div className="col-lg-2 col-md-7 menu-item">
              <h5 className="mb-4">Capabilities</h5>
              <Link to="/imaging-capabilities">Imaging Capabilities</Link>
            </div>
            <div className="col-lg-2 col-md-5 menu-item">
              <h5 className="text-light mb-4">Company</h5>
              <Link to="/about-us">About Us</Link>
              <Link to="/career">Career</Link>
              <Link to="/event-news">Events & News</Link>
              {/* <Link to="/">Blogs</Link>
              <Link to="/">Our Team</Link>
              <Link to="/">Contact Us</Link> */}
            </div>
          </div>
          <div className="row">
            <div className="d-flex pt-2 gap-3 pb-4 social-icon">
              <a className="btn btn-square me-1" href="https://x.com/suhoratech">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square me-1" href="https://www.facebook.com/suhoratech">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square me-1" href="https://www.youtube.com/@suhora">
                <i className="fab fa-youtube" />
              </a>
              <a className="btn btn-square me-0" href="https://www.linkedin.com/company/suhora">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="row copyright">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;2024 Suhora | <Link to="/">Space Analytics Simplified</Link>, All
              Right Reserved.
            </div>
             <div className="col-md-6 text-center text-md-end">
             Designed and Developed by <Link target="_blank" to="https://fluentechs.com/">Fluentech Solutions</Link> 
            </div> 
          </div>
        </div>
      </div>
    </footer>
    // <a href="javascript:void(0);" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></Link>
  );
}

export default Footer;
