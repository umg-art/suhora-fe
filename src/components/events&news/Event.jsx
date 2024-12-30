import axios from "axios";
import { useState,useEffect } from "react";
import { baseUrl } from "../../base";


function Event() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/events`,{
        headers: {
          'Authorization': `Bearer hsdguefg65sws%xsn$zsxs`  // Use Bearer token for authorization
        }
      });
      // Filter published blogs
      const updated = res.data.data.filter(item => item.status === 'published');

      setData(updated);
      console.log("data", updated);
    } catch (error) {
      console.log("error", error);
    }
  };

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");  // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
  
    return `${month}-${day}-${year}`;
  };


  return (
    <section className="event-news-section">
      <div className="container">
        <div className="blog-col-sec">
          <div className="row">
            <div className="title">
              <h3>Event and News</h3>
            </div>
          </div>
          <div className="row">
            {
               data && data.map((item, index)=>{ 
                return  (
            <div className="col-lg-10 card-col">
              <div className="card">
                <img
                  src={`${baseUrl}${item.image}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body p-3 ">
                  <h3 className="card-title">
                  {item.title}
                  </h3>
                  <div className="post-meta">
                    <p>
                      <span>By Suhora</span> | <span>{formatDate(item.publish_at)}</span> |{" "}
                      <span>Events &amp; News</span> | <span>Comments</span>
                    </p>
                  </div>
                  <div 
                        className="card-text"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                  <a href="javascript:void(0);" className="btn btn-light">
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
               )
              })
            }
            {/* <div className="col-lg-10 card-col">
              <div className="card">
                <img
                  src="./assets/images/SUHORA-SatVu-Contract-Signing-e1717489162101.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body p-3">
                  <h3 className="card-title">
                    SUHORA and SatVu form a multi-year strategic alliance to
                    provide Spaceborne High Resolution Thermal Sensing and
                    analytics
                  </h3>
                  <div className="post-meta">
                    <p>
                      <span>By Suhora</span> | <span>June 4, 2024</span>{" "}
                    </p>
                  </div>
                  <p>
                    SUHORA and SatVu Form Multi-Year Strategic Alliance to
                    Provide Spaceborne High Resolution Thermal Sensing and
                    Analytics SUHORA and SatVu have entered into a multi-year
                    strategic alliance to enhance spaceborne high-resolution
                    thermal sensing and analytics. SUHORA specializes in space
                    analytics, while SatVu leads in high-resolution thermal
                    satellite imaging. This collaboration aims to deliver
                    advanced solutions for defence, disaster management, and
                    various governmental organizations by utilizing SatVu’s
                    thermal data and SUHORA's analytic capabilities. This
                    partnership is set to benefit users and industries in the
                    region through innovative thermal sensing technology and
                    comprehensive analytics.
                  </p>
                  <a href="javascript:void(0);" className="btn btn-light">
                    Continue Reading
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
