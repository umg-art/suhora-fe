import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../base';
import axios from 'axios';

function DetailEvent() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetch = async () => {
        try {
            const res = await axios.get(`${baseUrl}/api/event/${id}`, {
                headers: {
                    'Authorization': `Bearer hsdguefg65sws%xsn$zsxs`
                }
            });

            console.log("res", res); // Log the response to check its structure

            // Directly use the `data` object, no need to filter
            if (res.data && res.data.data) {
                setEvent(res.data.data); // Set the event directly
            } else {
                console.error("Unexpected response structure", res);
            }

            setLoading(false);
        } catch (error) {
            console.log("error", error);
            setError("An error occurred while fetching event details");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetch();
    }, [id]); // Fetch when id changes

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    // Function to format the date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, "0");
        const year = date.getFullYear();
        return `${month}-${day}-${year}`;
    };

    return (
        <section className="event-news-section">
            <div className="container">
                <div className="blog-col-sec">
                    <div className="row">
                        {event && (
                            <div className="col-lg-10 card-col" key={event.id}>
                                <div className="card">
                                    <div className="card-body p-3">
                                        <h3 className="card-title">
                                            {event.title}
                                        </h3>
                                        <br />
                                        <img
                                        src={`${baseUrl}${event.image}`}
                                        className="card-img-top"
                                        alt={event.title}
                                    />
                                        <div className="post-meta">
                                            <p>
                                                <span>By Suhora</span> | <span>{formatDate(event.publish_at)}</span> |{" "}
                                                <span>Events &amp; News</span> | <span>Comments</span>
                                            </p>
                                        </div>
                                        <div
                                            className="card-text"
                                            dangerouslySetInnerHTML={{ __html: event.description }}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailEvent;
