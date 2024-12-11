import React from "react";

function EventSection() {
  const events = [
    {
      id: 1,
      title: "SENUM",
      date: "28",
      month: "Dec",
      location: "Palais des Congrès",
      image: "assets/images/event/event01.jpg",
    },
    {
      id: 2,
      title: "Brunch",
      date: "28",
      month: "Dec",
      location: "Eya Centre",
      image: "assets/images/event/event05.jpg",
    },
    {
      id: 3,
      title: "WeLoveEya",
      date: "28",
      month: "Dec",
      location: "Amazone",
      image: "assets/images/event/event07.jpg",
    },
  ];

  return (
    <section className="event-section padding-top padding-bottom bg-four">
      <div className="container">
        <div className="tab">
          <div className="section-header-2">
            <div className="left">
              <h2 className="title">Evènements</h2>
              <p>Be sure not to miss these Event today.</p>
            </div>
          </div>
          <div className="tab-area mb-30-none">
            <div className="tab-item active">
              <div className="row">
                {events.map((event) => (
                  <div className="col-md-4" key={event.id}>
                    <div className="item">
                      <div className="event-grid">
                        <div className="movie-thumb c-thumb">
                          <a href="/eventTicket">
                            <img src={event.image} alt="event" />
                          </a>
                          <div className="event-date">
                            <h6 className="date-title">{event.date}</h6>
                            <span>{event.month}</span>
                          </div>
                        </div>
                        <div className="movie-content bg-one d-flex justify-content-between align-items-center">
                          <h5 className="title m-0">
                            <a href="event-ticket.html" style={{ color: "white" }}>
                              {event.title}
                            </a>
                          </h5>
                          <span className="price text-warning fw-bold">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventSection;
