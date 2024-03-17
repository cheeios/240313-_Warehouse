import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Contact from './page/Contact';
import Location from './page/Location';
import Features from './page/Features';
import WarehouseOne from './page/WarehouseOne';
import WarehouseTwo from './page/WarehouseTwo';
import WarehouseThree from './page/WarehouseThree';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/features" element={<Features />} />

        <Route path="/warehouse-1" element={<WarehouseOne />} />
        <Route path="/warehouse-2" element={<WarehouseTwo />} />
        <Route path="/warehouse-3" element={<WarehouseThree />} />

      </Routes>
    </Router>
  );
}
