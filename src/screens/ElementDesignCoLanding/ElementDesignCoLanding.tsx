import React from "react";
import { useNavigate } from "react-router-dom";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { NavigationSection } from "./sections/NavigationSection";
import { PartnersSection } from "./sections/PartnersSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { PricingPlanSection } from "./sections/PricingPlanSection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { ServicesSection } from "./sections/ServicesSection";
import EmptyPage from "./sections/EmptyPage/EmptyPage";

export const ElementDesignCoLanding = (): JSX.Element => {
  const navigate = useNavigate();

  const navigateToAboutUs = () => {
    navigate('/about');
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

    // <div>
    //   <EmptyPage />
    // </div>
    <div className="flex flex-col items-center bg-white pt-24">
      <NavigationSection 
        onAboutUsClick={navigateToAboutUs}
        onServicesClick={navigateToServices}
        onWorkClick={navigateToWork}
        onPricingClick={navigateToPricing}
      />
      <HeaderSection />
      <PartnersSection />
      <ExperienceSection />
      <ServicesSection />
      <PortfolioSection />
      <ReviewsSection />
      <PricingPlanSection />
      <FaqSection />
      <CallToActionSection />
      <FooterSection 
        onAboutUsClick={navigateToAboutUs}
        onServicesClick={navigateToServices}
        onWorkClick={navigateToWork}
        onPricingClick={navigateToPricing}
      />
    </div>
  );
};
