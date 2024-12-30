import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { baseUrl } from "../../base";


export default function Blogs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/blogs`, {
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
    <section className="blog-section">
      <div className="container">
        <div className="blog-col-sec">
          <div className="row">
            <div className="title">
              <h3>From the blog</h3>
            </div>
          </div>
          <div className="row">

            {
              data && data.map((item, index)=>{ 
                return  (
            <div className="col-md-6 card-col" key={index}>
              <div className="card">
                <img
                  src={`${baseUrl}${item.image}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="category">
                  <p> {item.tags}</p>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                   {item.title}
                  </h3>
                  <div className="post-meta">
                    <p>
                      <span>By Suhora</span> |  <span>{formatDate(item.publish_at)}</span>{" "}
                    </p>
                  </div>
                  <a href="javascript:void(0);" className="btn btn-light">
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
                )
              })
            }
            {/* <div className="col-md-6 card-col">
              <div className="card">
                <img
                  src="./assets/images/SUHORA-SatVu-Contract-Signing-e1717489162101.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="category">
                  <p> Events and News</p>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    SUHORA and SatVu form a multi-year strategic alliance to provide Spaceborne High Resolution Thermal Sensing and analytics
                  </h3>
                  <div className="post-meta">
                    <p>
                      <span>By Suhora</span> | <span>June 4, 2024</span>{" "}
                    </p>
                  </div>
                  <a href="javascript:void(0);" className="btn btn-light">
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 card-col">
              <div className="card">
                <img
                  src="./assets/images/blog-3-1.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="category">
                  <p> Events and News</p>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    How world’s first high resolution thermal Satellite can evolve mining industry?
                  </h3>
                  <div className="post-meta">
                    <p>
                      <span>By Suhora</span> | <span>April 3, 2024</span>{" "}
                    </p>
                  </div>
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
