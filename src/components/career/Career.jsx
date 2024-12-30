import { useEffect } from "react";

export default function Career() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      {/* Banner Section */}
      <section className="career-banner">
        <div className="container">
          <div className="career-banner-title">
            <h3>CAREERS @ SUHORA</h3>
            <p>
            Embrace each new opportunity as a stepping stone towards <br /> your professional growth and fulfilment
            </p>
          </div>
        </div>
      </section>
      {/*Join US Section*/}
      <section className="join-us-sec pb-5 pt-5">
        <div className="container mt-3 mb-3">
          <div className="mx-auto mb-5">
            <h2 className="text-center display-6 mb-1">JOIN US</h2>
            <p className="text-center">
              Let's create something amazing together.
            </p>
          </div>
          <div className="row join-info-sec-img justify-content-center mb-5">
            <div className="col-2 col-sm-3 text-center">
              <img
                className="mb-5 mt-5"
                src="./assets/images/learn.svg"
                alt="learn"
                name="learn"
              />
            </div>
            <div className="col-2 col-sm-3 text-center">
              <img
                className="mb-5 mt-5"
                src="./assets/images/Collaborate.svg"
                alt="learn"
                name="Collaborate"
              />
            </div>
            <div className="col-2 col-sm-3 text-center">
              <img
                className="mb-5 mt-5"
                src="./assets/images/Impact.svg"
                alt="learn"
                name="Impact"
              />
            </div>
          </div>
          <div className="row join-info-sec justify-content-center mb-5">
            <div className="col-12 col-sm-3 text-center">
              <img
                className="mb-3"
                src="./assets/images/learn.svg"
                alt="learn"
                name="learn"
              />
              <h4>Learn</h4>
              <p>
                Expand your skills and knowledge with us. We offer ongoing learning
                opportunities to help you grow professionally.
              </p>
            </div>
            <div className="col-12 col-sm-3 text-center">
              <img
                className="mb-3"
                src="./assets/images/Collaborate.svg"
                alt="learn"
                name="Collaborate"
              />
              <h4>Collaborate</h4>
              <p>
                Work together in a supportive environment where your ideas matter.
                Join forces with talented individuals to create innovative
                solutions.
              </p>
            </div>
            <div className="col-12 col-sm-3 text-center">
              <img
                className="mb-3"
                src="./assets/images/Impact.svg"
                alt="learn"
                name="Impact"
              />
              <h4>Make an impact</h4>
              <p>
                Be part of something meaningful. Make a difference by contributing
                to projects that matter.
              </p>
            </div>
          </div>
          <form>
            <div className="open-position-form mb-5">
              <div className="mx-auto mb-5">
                <h2 className="text-center display-6 mb-1">OPEN POSITIONS</h2>
                <p className="text-center">
                  Thank you for your interest in Suhora Technologies
                  <br />
                  Discover exciting career opportunities with us and become a part
                  of the dynamic team committed to innovation and excellence.
                </p>
              </div>
              <select
                className="form-select form-select-lg mb-5 custom-select-menu"
                aria-label=".form-select-lg example"
              >
                <option selected="">Select Position</option>
                <option value={1}>Full Stack Developer | Engineering</option>
                <option value={2}>Graphical Designer | Marketing</option>
                <option value={3}>Full Stack Developer | Engineering</option>
              </select>
              <select
                className="form-select form-select-lg mb-5 custom-select-menu"
                aria-label=".form-select-lg example"
              >
                <option selected="">Select Position</option>
                <option value={1}>Full Stack Developer | Engineering</option>
                <option value={2}>Graphical Designer | Marketing</option>
                <option value={3}>Full Stack Developer | Engineering</option>
              </select>
              <select
                className="form-select form-select-lg custom-select-menu"
                aria-label=".form-select-lg example"
              >
                <option selected="">Select Position</option>
                <option value={1}>Full Stack Developer | Engineering</option>
                <option value={2}>Graphical Designer | Marketing</option>
                <option value={3}>Full Stack Developer | Engineering</option>
              </select>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-primary custom-btn">
                Contact Us
              </button>
            </div>
          </form>
          <div className="mx-auto mb-5 mt-5 benifit-sec">
            <h2 className="text-center display-6 mb-1">
             NON-MONETARY BENEFITS THAT OUR STAFF GETS.
            </h2>
            <div className="row mt-5 card-row">
              <div className="col-12 col-sm-4 d-flex align-items-start card">
                <div className="card-img mr-1">
                  <img
                    src="./assets/images/HealthBenefits.svg"
                    alt="HealthBenefits"
                    name="HealthBenefits"
                  />
                </div>
                <div className="card-detial">
                  <h5>Health Benefits</h5>
                  <p>
                    We provide health insurance coverage of up to Rs 5 lakhs for you
                    and your family.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 d-flex align-items-start card">
                <div className="card-img mr-1">
                  <img
                    src="./assets/images/EmployeeAssistance.svg"
                    alt="Employee Assistance"
                    name="Employee Assistance"
                  />
                </div>
                <div className="card-detial">
                  <h5>Employee Assistance</h5>
                  <p>
                    Supporting your mental well-being and helping you maintain a
                    healthy work-life balance.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 d-flex align-items-start card">
                <div className="card-img mr-1">
                  <img
                    src="./assets/images/FlexibleWorkSchedule.svg"
                    alt="Flexible Work Schedule"
                    name="Flexible Work Schedule"
                  />
                </div>
                <div className="card-detial">
                  <h5>Flexible Work Schedule</h5>
                  <p>
                    Enjoy alternative work arrangements, available for eligible
                    roles.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-3 justify-content-center card-row">
              <div className="col-12 col-sm-4 d-flex align-items-start card">
                <div className="card-img mr-1">
                  <img
                    src="./assets/images/LearningCulture.svg"
                    alt="Learning Culture"
                    name="Learning Culture"
                  />
                </div>
                <div className="card-detial">
                  <h5>Learning Culture</h5>
                  <p>
                    Access workshops, training, and courses designed to empower and
                    foster continuous learning.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 d-flex align-items-start card">
                <div className="card-img mr-1">
                  <img
                    src="./assets/images/LeavePolicy.svg"
                    alt="Leave Policy"
                    name="Leave Policy"
                  />
                </div>
                <div className="card-detial">
                  <h5>Leave Policy</h5>
                  <p>
                    Benefit from 35 personal leave days per year, along with public
                    holidays and maternity leave.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
