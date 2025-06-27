import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigationSection } from "../NavigationSection";
import { ServicesSection } from "../ServicesSection";
import { FooterSection } from "../FooterSection";

const ServicesPage = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToAboutUs = () => {
    navigate('/about');
  };

  const navigateToWork = () => {
    navigate('/work');
  };

  const navigateToPricing = () => {
    navigate('/pricing');
  };

  return (
    <div className="flex flex-col items-center bg-white pt-24">
      <NavigationSection 
        onAboutUsClick={navigateToAboutUs}
        onServicesClick={navigateToHome}
        onWorkClick={navigateToWork}
        onPricingClick={navigateToPricing}
      />
      <ServicesSection />
      <FooterSection 
        onAboutUsClick={navigateToAboutUs}
        onServicesClick={navigateToHome}
        onWorkClick={navigateToWork}
        onPricingClick={navigateToPricing}
      />
    </div>
  );
};

export default ServicesPage; 