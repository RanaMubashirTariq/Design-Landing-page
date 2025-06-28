import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { ArrowRightIcon  } from "lucide-react";
import { NavigationSection } from "../NavigationSection";
import { FooterSection } from "../FooterSection";

const EmptyPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white relative">
                      <div className="w-full h-[536px] top-0 blur-[100px] bg-[linear-gradient(90deg,rgba(215,243,252,1)_37.57%,rgba(255,255,255,1)_53.92%,rgba(255,255,255,1)_66%,rgba(253,241,211,1)_65%)] absolute left-0" />
      <NavigationSection
        onAboutUsClick={() => navigate("/")}
        onServicesClick={() => navigate("/")}
        onWorkClick={() => navigate("/")}
        onPricingClick={() => navigate("/")}
      />
      
      <main className="flex flex-col items-center justify-center min-h-screen px-[20px] py-20  ">
        <div className="text-center max-w-2xl mx-auto z-10">
          <h1 className="text-[288px] font-bold text-gray-900  max-[1500px]:text-[200px] max-[800px]:text-[100px] ">
            404
          </h1>
          <p className="text-4xl text-gray-600 mb-8">
          <span className=" font-medium text-[#1b1d1e] tracking-[-0.23px] leading-[57.6px] max-[800px]:text-[36px] max-[800px]:leading-[40px]">
          Oops! The page you are<br/> looking for
        </span>
        <span className="font-medium text-[#1b1d1e] tracking-[0] leading-[0.1px]">
          &nbsp;
        </span>
        <span className="[font-family:'Instrument_Serif',Helvetica] italic text-[#1b1d1e] tracking-[0] leading-[57.6px]">
        looking for doesn't exist
        </span>
          </p>
          
          <Button
                    variant="outline"
                    className="h-12 justify-center gap-4 pl-5 pr-2 py-0 bg-black-100 rounded-[999px] inline-flex items-center relative border-0 hover:bg-black-100/90"
                  >
                    <span className="relative w-fit [font-family:'Inter_Tight',Helvetica] font-medium text-white text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                      Let&apos;s Collaborate
                    </span>
                    <div className="inline-flex items-center gap-2 p-1.5 relative flex-[0_0_auto] bg-white rounded-[999px]">
                      <ArrowRightIcon className="w-5 h-5 text-black rotate-[310deg]" />
                    </div>
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

