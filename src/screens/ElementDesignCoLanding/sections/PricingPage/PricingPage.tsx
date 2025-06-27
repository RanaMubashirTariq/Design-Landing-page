import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigationSection } from "../NavigationSection";
import { PricingPlanSection } from "../PricingPlanSection";
import { FooterSection } from "../FooterSection";

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

  const navigateToWork = () => {
    navigate('/work');
  };

  return (
    <div className="flex flex-col items-center bg-white pt-24">
      <NavigationSection 
        onAboutUsClick={navigateToAboutUs}
        onServicesClick={navigateToServices}
        onWorkClick={navigateToWork}
        onPricingClick={navigateToHome}
      />
      <PricingPlanSection />
      <FooterSection 
        onAboutUsClick={navigateToAboutUs}
        onServicesClick={navigateToServices}
        onWorkClick={navigateToWork}
        onPricingClick={navigateToHome}
      />
    </div>
  );
};

export default PricingPage; 