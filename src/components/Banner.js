import React from "react";

function Banner() {
  return (
    <section className="banner-section">
      <div
        className="banner-bg bg_img bg-fixed"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/cinema-menu-with-cinema-tickets-3d-glasses_23-2148133570.jpg?t=st=1733844315~exp=1733847915~hmac=37c45f314c787dacb60e8bb91612e5f105608a15bb41ccb478394f62e9ed185d&w=740")`,
        }}
      ></div>
      <div className="container">
        <div className="banner-content">
          <h1 className="title cd-headline clip">
            <span className="d-block">Réservez vos</span> tickets
            <span className="cd-words-wrapper p-0 m-0" style={{ color: "orangered" }}>
              <b className="is-visible">Concert</b>
              <b>Chill</b>
              <b>Brunch</b>
            </span>
          </h1>
          <p>
            Réservez vos tickets en toute liberté, payez à votre rythme, vivez l'expérience sans limite
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
