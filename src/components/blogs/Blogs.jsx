import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../base";

export default function Blogs() {
  const [data, setData] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/blogs`, {
        headers: {
          Authorization: `Bearer hsdguefg65sws%xsn$zsxs`,
        },
      });

      // Filter published blogs
      const updated = res.data.data.filter((item) => item.status === "published");
      setData(updated);
    } catch (error) {
      console.log("Error fetching blogs", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  console.log("selectedBlog", selectedBlog);
  
  const openModal = (blog) => {
    setSelectedBlog(blog);
    const modal = new window.bootstrap.Modal(document.getElementById("blogModal"));
    modal.show();
  };

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-col-sec">
          <div className="row">
            <div className="title">
              <h3>From the Blog</h3>
            </div>
          </div>
          <div className="row">
            {data.map((item, index) => (
              <div className="col-md-6 card-col" key={index}>
                <div className="card">
                  <img
                    src={`${baseUrl}${item.image}`}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="category">
                    <p>{item.tags}</p>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <div className="post-meta">
                      <p>
                        <span>By Suhora</span> | <span>{formatDate(item.publish_at)}</span>
                      </p>
                    </div>
                    <button className="btn btn-primary" onClick={() => openModal(item)}>
                      Continue Reading
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div className="modal fade" id="blogModal" tabIndex="-1" aria-labelledby="blogModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="blogModalLabel">
                {selectedBlog?.title}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img
                src={`${baseUrl}${selectedBlog?.image}`}
                className="img-fluid mb-3"
                alt={selectedBlog?.title}
              />
              <br />
              <h6 className="modal-title" id="blogModalLabel">
                {selectedBlog?.title}
              </h6>
              <div className="post-meta mt-3">
                <p>
                  <span>By Suhora</span> | <span>{formatDate(selectedBlog?.publish_at)}</span>
                </p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: selectedBlog?.description }} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
