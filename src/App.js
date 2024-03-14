import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Contact from './page/Contact';
import Location from './page/Location';
import WarehouseOne from './page/WarehouseOne';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact-us" element={<Contact />} />

        <Route path="/warehouse-1" element={<WarehouseOne />} />

      </Routes>
    </Router>
  );
}
