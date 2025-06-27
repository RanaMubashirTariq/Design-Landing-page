import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigationSection } from "../ElementDesignCoLanding/sections/NavigationSection";
import FormSection from "../ElementDesignCoLanding/sections/FormSection/FormSection";
import { FaqSection } from "../ElementDesignCoLanding/sections/FaqSection";
import { FooterSection } from "../ElementDesignCoLanding/sections/FooterSection";

const ContactPage = () => {
  const navigate = useNavigate();

  const handleAboutUsClick = () => {
    navigate("/");
  };

  const handleServicesClick = () => {
    navigate("/");
  };

  const handleWorkClick = () => {
    navigate("/");
  };

  const handlePricingClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen relative">
                <div className="w-full h-[536px] top-0 blur-[100px] bg-[linear-gradient(90deg,rgba(215,243,252,1)_37.57%,rgba(255,255,255,1)_53.92%,rgba(255,255,255,1)_66%,rgba(253,241,211,1)_65%)] absolute left-0" />
      <NavigationSection
        onAboutUsClick={handleAboutUsClick}
        onServicesClick={handleServicesClick}
        onWorkClick={handleWorkClick}
        onPricingClick={handlePricingClick}
      />
      
      <div className="pt-24">
        <FormSection />
        <FaqSection />
      </div>
      
      <FooterSection
        onAboutUsClick={handleAboutUsClick}
        onServicesClick={handleServicesClick}
        onWorkClick={handleWorkClick}
        onPricingClick={handlePricingClick}
      />
    </div>
  );
};

export default ContactPage; 