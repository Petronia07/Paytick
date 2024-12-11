import React from "react";

function Header() {
  return (
    <header className="header-section">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <a href="index.html">
              <h3>PayTick</h3>
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="index.html" className="active">
                Accueil
              </a>
            </li>
            <li>
              <a href="#0">Evènements</a>
              <ul className="submenu">
                <li>
                  <a href="/">Evènements</a>
                </li>
                <li>
                  <a href="/eventTicket">Event Ticket</a>
                </li>
                <li>
                  <a href="/checkout">Event Checkout</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="header-bar d-lg-none">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
