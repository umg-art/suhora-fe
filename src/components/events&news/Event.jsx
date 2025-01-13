import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../../base";

function Event() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [data, setData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/events`, {
        headers: {
          Authorization: `Bearer hsdguefg65sws%xsn$zsxs`,
        },
      });

      // Filter published events
      const updated = res.data.data.filter((item) => item.status === "published");
      setData(updated);
    } catch (error) {
      console.log("Error fetching events", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  const openModal = (eventItem) => {
    setSelectedEvent(eventItem);
    const modal = new window.bootstrap.Modal(document.getElementById("eventModal"));
    modal.show();
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
            {data.map((item, index) => (
              <div className="col-lg-10 card-col" key={index}>
                <div className="card">
                  <img
                    src={`${baseUrl}${item.image}`}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body p-3">
                    <h3 className="card-title">{item.title}</h3>
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
      <div className="modal fade" id="eventModal" tabIndex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="eventModalLabel">
                {selectedEvent?.title}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img
                src={`${baseUrl}${selectedEvent?.image}`}
                className="img-fluid mb-3"
                alt={selectedEvent?.title}
              />
              <h6 className="modal-title">{selectedEvent?.title}</h6>
              <div className="post-meta mt-3">
                <p>
                  <span>By Suhora</span> | <span>{formatDate(selectedEvent?.publish_at)}</span>
                </p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: selectedEvent?.description }} />
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

export default Event;
