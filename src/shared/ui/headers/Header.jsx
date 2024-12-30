import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

function Header() {
  const $ = jQuery.noConflict();
  const offcanvasRef = useRef(null); // for the close offcanvas
  const navbarCollapseRef = useRef(null); // for close the dropdown

  useEffect(() => {
    const scrollEffect = () => {
      $(window).scroll(function () {
        const scrollTop = $(this).scrollTop();
        const logo = $(".logo-header img");
        const menuIcon = $(".hamburger-icon img");

        if ($(window).width() < 992) {
          if (scrollTop > 45) {
            $(".fixed-top").addClass("bg-dark shadow");
          } else {
            $(".fixed-top").removeClass("bg-dark shadow");
          }
        } else {
          if (scrollTop > 45) {
            $(".fixed-top").addClass("bg-dark shadow").css("top", 0);
          } else {
            $(".fixed-top").removeClass("bg-dark shadow").css("top", 0);
          }
        }

        // Change logo image based on scroll position
        if (scrollTop > 45) {
          logo.attr("src", "./assets/images/Suhoralogoblue.svg");
        } else {
          logo.attr("src", "./assets/images/SuhoraLogowhite.svg");
        }

        if (scrollTop > 45) {
          menuIcon.attr("src", "./assets/images/Muneiconblack.svg");
        } else {
          menuIcon.attr("src", "./assets/images/Muneicon.svg");
        }

        // Toggle visibility of the back-to-top button
        if (scrollTop > 300) {
          $(".back-to-top").fadeIn("slow");
        } else {
          $(".back-to-top").fadeOut("slow");
        }
      });

      $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
      });
    };
    scrollEffect();
  }, [$]);

  const closeOffcanvas = () => {
    if (offcanvasRef.current) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasRef.current);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }

    if (navbarCollapseRef.current) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapseRef.current);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <Link to="/" className="navbar-brand ms-lg-0">
            <div className="logo-header">
              <img src="./assets/images/SuhoraLogowhite.svg" alt="" />
            </div>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="hamburger-icon">
              <img src="./assets/images/Muneicon.svg" />
            </span>
          </button>
          <div ref={navbarCollapseRef} className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <NavLink 
                to="/defence-intelligence" 
                className="nav-item nav-link" 
                onClick={closeOffcanvas} 
                activeClassName="active"
              >
                Defence & Intelligence
              </NavLink>
              <NavLink 
                to="/disaster-insurance" 
                className="nav-item nav-link" 
                onClick={closeOffcanvas} 
                activeClassName="active"
              >
                Disaster & Insurance
              </NavLink>
              <NavLink 
                to="/imaging-capabilities" 
                className="nav-item nav-link" 
                onClick={closeOffcanvas} 
                activeClassName="active"
              >
                Imaging Capabilities
              </NavLink>
              <NavLink 
                to="/about-us" 
                className="nav-item nav-link nav-mobile-item" 
                onClick={closeOffcanvas} 
                activeClassName="active"
              >
                About Us
              </NavLink>
              <NavLink 
                to="/career" 
                className="nav-item nav-link nav-mobile-item" 
                onClick={closeOffcanvas} 
                activeClassName="active"
              >
                 Careers
              </NavLink>
              <NavLink 
                to="/blogs" 
                className="nav-item nav-link nav-mobile-item" 
                onClick={closeOffcanvas} 
                activeClassName="active"
              >
                 Blogs
              </NavLink>
              <NavLink 
                to="/event-news" 
                className="nav-item nav-link nav-mobile-item" 
                onClick={closeOffcanvas} 
                activeClassName="active"
              >
               Events & News
              </NavLink>
              <a
                className="nav-item nav-link d-none d-lg-block"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <span>
                  <img src="./assets/images/Muneicon.svg" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        ref={offcanvasRef}
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                onClick={closeOffcanvas} 
                to="/about-us" 
                activeClassName="active"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                onClick={closeOffcanvas} 
                to="/career" 
                activeClassName="active"
              >
                Careers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                onClick={closeOffcanvas} 
                to="/event-news" 
                activeClassName="active"
              >
                Events & News
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                onClick={closeOffcanvas} 
                to="/blogs" 
                activeClassName="active"
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
