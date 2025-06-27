import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ElementDesignCoLanding } from "./screens/ElementDesignCoLanding";
import ContactPage from "./screens/ContactPage/ContactPage";
import AboutPage from "./screens/ElementDesignCoLanding/sections/AboutUsPage/AboutUsPage";
import ServicesPage from "./screens/ElementDesignCoLanding/sections/ServicesPage/ServicesPage";
import WorkPage from "./screens/ElementDesignCoLanding/sections/WorkPage/WorkPage";
import PricingPage from "./screens/ElementDesignCoLanding/sections/PricingPage/PricingPage";
import EmptyPage from "./screens/ElementDesignCoLanding/sections/EmptyPage/EmptyPage";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<ElementDesignCoLanding />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App; 