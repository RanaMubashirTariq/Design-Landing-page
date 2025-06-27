import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigationSection } from "../NavigationSection";
import { ExperienceSection } from "../ExperienceSection";
import { FooterSection } from "../FooterSection";

const AboutUsPage = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToServices = () => {
    navigate('/services');
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
        onAboutUsClick={navigateToHome}
        onServicesClick={navigateToServices}
        onWorkClick={navigateToWork}
        onPricingClick={navigateToPricing}
      />
      <ExperienceSection />
      <FooterSection 
        onAboutUsClick={navigateToHome}
        onServicesClick={navigateToServices}
        onWorkClick={navigateToWork}
        onPricingClick={navigateToPricing}
      />
    </div>
  );
};

export default AboutUsPage; 