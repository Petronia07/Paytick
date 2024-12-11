import React from "react";
import Header from "../components/Header";


const TicketItem = ({ imgSrc, title, amount, isHot, isVIP, onAction }) => (
  <div className={`ticket-item ${isHot ? "two" : ""} ${isVIP ? "three" : ""}`}>
    {isHot && <div className="hot"><span>hot</span></div>}
    <div className="ticket-thumb">
      <img src={imgSrc} alt={title} />
    </div>
    <div className="ticket-content">
      <span className="ticket-title">{title}</span>
      <h2 className="amount">{amount}</h2>
      <a href="#0" className="t-button" onClick={onAction}>
        <i className="fas fa-plus"></i>
      </a>
    </div>
  </div>
);

const BookingSummary = () => (
  <div className="booking-summery bg-one">
    <h4 className="title">Récapitulatif</h4>
    <ul>
      <li>
        <h6 className="subtitle">Nom de l'évènement</h6>
        <span className="info">WeLoveEya</span>
      </li>
      <li>
        <h6 className="subtitle"><span>Nombre de Tickets</span><span>02</span></h6>
        <div className="info"><span>MAR 10 DEC, 11:00 PM</span> <span>Tickets</span></div>
      </li>
      <li>
        <h6 className="subtitle"><span>Type de Tickets</span><span>VIP</span></h6>
      </li>
      <li>
        <h6 className="subtitle mb-0"><span>Prix Ticket</span><span>150k</span></h6>
      </li>
    </ul>
  </div>
);

const PaymentOptions = () => (
  <div className="checkout-widget checkout-card mb-0">
    <h5 className="title">Options de Paiement</h5>
    <ul className="payment-option">
      <li className="active">
        <a href="#0">
          <img src="assets/images/payment/card.png" alt="payment" />
          <span>Momo Pay</span>
        </a>
      </li>
    </ul>
    <h6 className="subtitle">Entrer vos informations</h6>
    <form className="payment-card-form">
      <div className="form-group">
        <label>Nom et Prénoms</label>
        <input type="text" placeholder="" />
      </div>
      <div className="form-group">
        <label>Téléphone</label>
        <input type="text" placeholder="" />
      </div>
      <div className="form-group check-group">
        <input id="card5" type="checkbox" defaultChecked />
        <label htmlFor="card5">
          <span className="title">QuickPay</span>
          <span className="info">Se rappeler pour les autres fois</span>
        </label>
      </div>
      <div className="form-group">
        <input type="submit" className="custom-button" value="Payer" />
      </div>
    </form>
  </div>
);

const EventFacility = () => (
 <>
 <Header/>
 
  <div className="event-facility padding-bottom padding-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="checkout-widget checkout-contact">
            <h5 className="title">Vos Tickets</h5>
            <div className="ticket--area row justify-content-center">
              <div className="col-sm-6 col-md-4">
                <TicketItem imgSrc="assets/images/event/ticket/ticket01.png" title="Ticket Standard" amount="10K" />
              </div>
              <div className="col-sm-6 col-md-4">
                <TicketItem imgSrc="assets/images/event/ticket/ticket02.png" title="Ticket Premium" amount="50K" isHot />
              </div>
              <div className="col-sm-6 col-md-4">
                <TicketItem imgSrc="assets/images/event/ticket/ticket03.png" title="Ticket VIP" amount="150K" isVIP />
              </div>
            </div>
            <div className="row mb-30-none">
              <div className="col-md-4"></div>
              <div className="col-md-4 col-xl-5">
                <form className="cart-button event-cart">
                  <span className="d-inline-block">Nombre de tickets : </span>
                  <div className="cart-plus-minus">
                    <div className="dec qtybutton">-</div>
                    <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue="2" />
                    <div className="inc qtybutton">+</div>
                  </div>
                  <div className="payment-select-container text-white">
                    <label htmlFor="payment-split">Choisissez le nombre de paiements</label>
                    <select id="payment-split" name="payment-split" style={{ color: "black" }}>
                      <option value="1">Paiement en 1 fois</option>
                      <option value="2">Paiement en 2 fois</option>
                      <option value="3">Paiement en 3 fois</option>
                    </select>
                  </div>
                </form>
                <div className="col-md-6 col-xl-7">
                  <div className="form-group">
                    <input type="submit" value="Valider" className="custom-button" />
                  </div>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
          <PaymentOptions />
        </div>
        <div className="col-lg-4">
          <BookingSummary />
          <div className="proceed-area text-center">
            <h6 className="subtitle"><span>Montant Total</span><span>300k</span></h6>
            <a href="#0" className="custom-button back-button">Payer</a>
          </div>
        </div>
      </div>
    </div>
  </div>
 
 </>
);

export default EventFacility;
