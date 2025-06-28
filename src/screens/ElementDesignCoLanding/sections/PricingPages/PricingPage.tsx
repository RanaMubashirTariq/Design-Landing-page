import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigationSection } from "../NavigationSection";
import { FooterSection } from "../FooterSection";
import { PricingPlanSection } from "../PricingPlanSection";

const PricingPage = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToAboutUs = () => {
    navigate('/about');
  };

  const navigateToServices = () => {
    navigate('/services');
  };

  const navigateToPricing = () => {
    navigate('/pricing');
  };

  return (
    <div className="flex flex-col items-center bg-white pt-24">
      <NavigationSection 
        onAboutUsClick={navigateToAboutUs}
        onServicesClick={navigateToServices}
        onWorkClick={navigateToHome}
        onPricingClick={navigateToPricing}
      />
           <PricingPlanSection />
      <FooterSection 
        onAboutUsClick={navigateToAboutUs}
        onServicesClick={navigateToServices}
        onWorkClick={navigateToHome}
        onPricingClick={navigateToPricing}
      />
    </div>
  );
};

export default PricingPage; 