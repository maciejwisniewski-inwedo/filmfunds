import React from "react";
import MacBookPro14One from "pages/MacBookPro14One";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/macbookpro14one" element={<MacBookPro14One />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
