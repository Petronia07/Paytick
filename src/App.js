import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventTicket from "./pages/EventTicket";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
     

      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/eventTicket" element={<EventTicket />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
