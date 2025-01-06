import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../base";
import { toast } from "react-toastify";

export default function Career() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone_no: "",
    experience: "",
    current_company: "",
    location: "",
  });
  const [resume, setResume] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValue((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]); // Store the selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formdata response :", formValue, "resume: ", resume);
    
    const formData = new FormData();
    formData.append("name", formValue.name);
    formData.append("email", formValue.email);
    formData.append("phone_no", formValue.phone_no);
    formData.append("experience", formValue.experience);
    formData.append("current_company", formValue.current_company);
    formData.append("location", formValue.location);
    formData.append("job_position", selectedJob.id);
    formData.append("resume", resume);

    try {
      const response = await fetch(baseUrl+"/api/job-application/apply", {
        method: "POST",
        body: formData,
        headers: {
          'Authorization': `Bearer hsdguefg65sws%xsn$zsxs`
        }
      });
      console.log("respone", response);
      

      if (response.ok) {
        alert("Application submitted successfully!");
         setFormValue({
          name: "",
          email: "",
          phone_no: "",
          experience: "",
          current_company: "",
          location: "",
        });
        setResume(null)
      }
    } catch (error) {
      console.error("Error submitting the form: ", error);
      // alert("Error submitting the form. Please try again.");
      toast.error(`${error.message}`)
    }
  };


  const fetchJobs = async () => {
    try {
      const res = await axios.get(baseUrl + "/api/get-all-jobs", {
        headers: {
          Authorization: `Bearer hsdguefg65sws%xsn$zsxs`,
        },
      });
      setFilteredJobs(res.data.data);
      setJobs(res.data.data);
    } catch (error) {
      toast.error(`${error.response.data.message}`);
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  const uniqueDepartments = Array.from(
    new Set(jobs.map((item) => item.department))
  );

  const handelDepartment = (event, dep) => {
    event.preventDefault();

    setSelectedDepartment(dep);
    if (dep === "all") {
      setFilteredJobs(jobs);
    } else {
      // Filter jobs by department
      const filtered = jobs.filter((job) => job.department === dep);
      setFilteredJobs(filtered);
    }
  };

  const handleApplyNowClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <>
      {/* Banner Section */}
      <section className="career-banner">
      <div className="onion-career"></div>
        <div className="container">
          <div className="career-banner-title">
            <h3>CAREERS @ SUHORA</h3>
            <p>
              Embrace each new opportunity as a stepping stone towards <br />{" "}
              your professional growth and fulfilment
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
                Expand your skills and knowledge with us. We offer ongoing
                learning opportunities to help you grow professionally.
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
                Work together in a supportive environment where your ideas
                matter. Join forces with talented individuals to create
                innovative solutions.
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
                Be part of something meaningful. Make a difference by
                contributing to projects that matter.
              </p>
            </div>
          </div>
          <div className="open-position-form mb-5">
            <div className="mx-auto mb-2">
              <h2 className="text-center display-6 mb-1">OPEN POSITIONS</h2>
              <p className="text-center">
                Thank you for your interest in Suhora Technologies
                <br />
                Discover exciting career opportunities with us and become a part
                of the dynamic team committed to innovation and excellence.
              </p>
            </div>

            <div className="d-flex gap-2 mt-4 job-department">
              {
                filteredJobs.length > 0 ? <button
                className="rounded-dep"
                onClick={(event) => handelDepartment(event, "all")}
              >
                All
              </button> : null
              }
              
              {uniqueDepartments.map((department, index) => (
                <button
                  key={index}
                  onClick={(event) => handelDepartment(event, department)}
                  className="rounded-dep"
                >
                  {department}
                </button>
              ))}
            </div>
             <hr />
            <div className="job-cards-container">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  // console.log("job", job)
                  <div key={job.id} className="job-card">
                    <div className="title d-flex">
                      {job.title}
                      <button
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                        onClick={() => handleApplyNowClick(job)}
                      >
                        {" "}
                        Apply Now
                      </button>
                    </div>
                    <div className="d-flex gap-2 job-item">
                      <p>{job.department}</p> |
                      <p>{job.employment_type}</p> |
                      <p>
                        {job.job_type === "work_from_home" && "Work from home"}
                        {job.job_type === "work_from_office" &&
                          "Work from office"}
                        {job.job_type === "hybrid_job" && "Hybrid job"}
                      </p> |
                      <p>Experience: {job.experience}yr</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>There are no current opening found.</p>
              )}
              {/* // the job modal showing  */}
              {isModalOpen && selectedJob && (
                <div className="modal" id="myModal">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <ul class="nav nav-tabs" role="tablist">
                          <li class="nav-item">
                            <a
                              class="nav-link active"
                              data-bs-toggle="tab"
                              href="#home"
                            >
                              Job Details
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              data-bs-toggle="tab"
                              href="#menu1"
                            >
                              Apply Now Here
                            </a>
                          </li>
                        </ul>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={closeModal}
                          data-bs-dismiss="modal"
                        />
                      </div>
                      <div className="modal-body">
                        <div class="tab-content">
                          <div id="home" className="container tab-pane active">
                            <h4 className="modal-title mb-2">
                              {selectedJob.title}
                            </h4>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: selectedJob.description,
                              }}
                            />
                            <p className="dep-name-modal">Department: <strong>{selectedJob.department}</strong></p>
                            <p>
                              Experience Required:<strong> {selectedJob.experience}{" "}
                              years</strong>
                            </p>
                            <p>
                              Job Type:{" "}<strong>
                              {selectedJob.job_type === "work_from_home" &&
                                "Work from home"}
                              {selectedJob.job_type === "work_from_office" &&
                                "Work from office"}
                              {selectedJob.job_type === "hybrid_job" &&
                                "Hybrid job"}</strong>
                            </p>
                          </div>
                          <div id="menu1" className="container tab-pane fade">
                            {/* ===== Job Apply form ====== */}

                            <form onSubmit={handleSubmit}>
                              <div className="container">
                                <div className="row">
                                  {/* Name */}
                                  <div className="col-md-6 mb-3">
                                    <label
                                      htmlFor="name"
                                      className="form-label"
                                    >
                                      Full Name:
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={formValue.name}
                                      onChange={handleInputChange}
                                      id="name"
                                      placeholder="Enter your full name"
                                      required
                                    />
                                  </div>
                                  {/* Email */}
                                  <div className="col-md-6 mb-3">
                                    <label
                                      htmlFor="email"
                                      className="form-label"
                                    >
                                      Email:
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      value={formValue.email}
                                      onChange={handleInputChange}
                                      id="email"
                                      placeholder="Enter your email address"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  {/* Phone Number */}
                                  <div className="col-md-6 mb-3">
                                    <label
                                      htmlFor="phone_no"
                                      className="form-label"
                                    >
                                      Phone Number:
                                    </label>
                                    <input
                                      type="tel"
                                      className="form-control"
                                      id="phone_no"
                                      value={formValue.phone_no}
                                      onChange={handleInputChange}
                                      placeholder="Enter your phone number"
                                      required
                                    />
                                  </div>
                                  {/* Experience */}
                                  <div className="col-md-6 mb-3">
                                    <label
                                      htmlFor="experience"
                                      className="form-label"
                                    >
                                      Years of Experience:
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="experience"
                                      value={formValue.experience}
                                      onChange={handleInputChange}
                                      placeholder="Enter your years of experience"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  {/* Current Company */}
                                  <div className="col-md-6 mb-3">
                                    <label
                                      htmlFor="current_company"
                                      className="form-label"
                                    >
                                      Current Company:
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="current_company"
                                      value={formValue.current_company}
                                      onChange={handleInputChange}
                                      placeholder="Enter your current company name"
                                      required
                                    />
                                  </div>
                                  {/* Job Position */}
                                  <div className="col-md-6 mb-3">
                                    <label
                                      htmlFor="job_position"
                                      className="form-label"
                                    >
                                      Job Position:
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={selectedJob.title}
                                      disabled
                                      id="job_position"
                                      placeholder="Enter your job position"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  {/* Resume Upload */}
                                  <div className="col-md-6 mb-3">
                                    <label
                                      htmlFor="resume"
                                      className="form-label"
                                    >
                                      Upload Resume
                                    </label>
                                    <input
                                      type="file"
                                      className="form-control"
                                      id="resume"
                                      onChange={handleFileChange}
                                      required
                                    />
                                  </div>
                                  {/* Location */}
                                  <div className="col-md-6 mb-3">
                                    <label
                                      htmlFor="location"
                                      className="form-label"
                                    >
                                      Location
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="location"
                                      value={formValue.location}
                                      onChange={handleInputChange}
                                      placeholder="Enter your location"
                                      required
                                    />
                                  </div>
                                </div>
                                {/* Submit Button */}
                                <div className="mb-3 text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ================== */}
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
                    We provide health insurance coverage of up to Rs 5 lakhs for
                    you and your family.
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
                    Access workshops, training, and courses designed to empower
                    and foster continuous learning.
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
                    Benefit from 35 personal leave days per year, along with
                    public holidays and maternity leave.
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
