import React from "react";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Banner from "../components/Banner";
import EventSection from "../components/EventSection";

const Home = () => {
  return (
  <>
  
  <Preloader />
      <div className="overlay"></div>
      <a href="#0" className="scrollToTop">
        <i className="fas fa-angle-up"></i>
      </a>
      <Header />
      <Banner />
      <EventSection />
  
  </>
  );
};

export default Home;
