import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { NavigationSection } from "../NavigationSection";
import { FooterSection } from "../FooterSection";

const EmptyPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white">
      <NavigationSection
        onAboutUsClick={() => navigate("/")}
        onServicesClick={() => navigate("/")}
        onWorkClick={() => navigate("/")}
        onPricingClick={() => navigate("/")}
      />
      
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Oops! Something went wrong
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're sorry, but something unexpected happened. Please try again or go back to the home page.
          </p>
          
          <Button
            onClick={handleGoHome}
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Go Back Home
          </Button>
        </div>
      </main>
      
      <FooterSection
        onAboutUsClick={() => navigate("/")}
        onServicesClick={() => navigate("/")}
        onWorkClick={() => navigate("/")}
        onPricingClick={() => navigate("/")}
      />
    </div>
  );
};

export default EmptyPage;

