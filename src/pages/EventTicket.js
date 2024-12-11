import React from "react";
import Header from "../components/Header";

const EventTicket = () => {
  return (
    <>
     <Header />
     <div className="event-facility padding-bottom padding-top">
      <div className="container">
        <div className="section-header-3 mt-5">
          <h2 className="title">Choisissez votre ticket</h2>
        </div>
        <div className="row justify-content-center mb-30-none">
          <div className="row">
            {/* Ticket Standard */}
            <div className="col-md-6 col-lg-4 col-sm-10">
              <div className="ticket--item">
                <div className="ticket-thumb">
                  <img
                    src="assets/images/event/ticket/ticket01.png"
                    alt="ticket standard"
                  />
                </div>
                <div className="ticket-content">
                  <span className="ticket-title">Ticket Standard</span>
                  <h2 className="amount text-primary">
                    <sup></sup>10K
                  </h2>
                  <ul>
                    <li>Un Accès général à l'événement</li>
                    <li className="del">
                      <del>Zone premium</del>
                    </li>
                    <li className="del">
                      <del>Rencontre avec les artistes</del>
                    </li>
                  </ul>
                  <a href="event-checkout.html" className="custom-button">
                    Acheter
                  </a>
                </div>
              </div>
            </div>

            {/* Ticket Premium */}
            <div className="col-md-6 col-lg-4 col-sm-10">
              <div className="ticket--item two">
                <div className="hot">
                  <span>Hot</span>
                </div>
                <div className="ticket-thumb">
                  <img
                    src="assets/images/event/ticket/ticket02.png"
                    alt="ticket premium"
                  />
                </div>
                <div className="ticket-content">
                  <span className="ticket-title">Ticket Premium</span>
                  <h2 className="amount text-warning">
                    <sup></sup>50K
                  </h2>
                  <ul>
                    <li>Accès général + zone premium</li>
                    <li>Accès exclusif au bar VIP</li>
                    <li className="del">
                      <del>Rencontre avec les artistes</del>
                    </li>
                  </ul>
                  <a href="event-checkout.html" className="custom-button">
                    Acheter
                  </a>
                </div>
              </div>
            </div>

            {/* Ticket VIP */}
            <div className="col-md-6 col-lg-4 col-sm-10">
              <div className="ticket--item three">
                <div className="vip-badge">
                  <span>VIP</span>
                </div>
                <div className="ticket-thumb">
                  <img
                    src="assets/images/event/ticket/ticket03.png"
                    alt="ticket VIP"
                  />
                </div>
                <div className="ticket-content">
                  <span className="ticket-title">Ticket VIP</span>
                  <h2 className="amount text-danger">
                    <sup></sup>150K
                  </h2>
                  <ul>
                    <li>Accès à toutes les zones</li>
                    <li>Accès exclusif au lounge VIP</li>
                    <li>Rencontre avec les artistes</li>
                  </ul>
                  <a href="event-checkout.html" className="custom-button">
                    Acheter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
 
  );
};

export default EventTicket;
