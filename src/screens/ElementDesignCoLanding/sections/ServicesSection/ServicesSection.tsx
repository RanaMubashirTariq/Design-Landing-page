import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import magicstick from "../../../../images/magic-stick.svg"
import vector7 from "../../../../images/vector-7.svg";
import vector8 from "../../../../images/vector-8.svg";
import vector11 from "../../../../images/vector-11.svg";
import layout from "../../../../images/layout.svg"

// Service card data for mapping
const serviceCards = [
  {
    title: "UI/UX & Product\nDesign",
    icon: magicstick,
    iconAlt: "Magic stick",
    bgColor: "bg-otherorange-20",
    textColor: "text-[#ffaf68]",
  },
  {
    title: "Brand\nIdentity",
    icon: vector7,
    iconAlt: "Vector",
    bgColor: "bg-otherpurple-20",
    textColor: "text-[#b981ed]",
    isVector: true,
  },
  {
    title: "Professional\nVideo Editing",
    icon: vector8,
    iconAlt: "Vector",
    bgColor: "bg-otherblue-20",
    textColor: "text-[#70b5ff]",
    isVector: true,
  },
  {
    title: "Graphic & 3D\nDesign",
    icon: layout,
    iconAlt: "Layout",
    bgColor: "bg-otherpink-20",
    textColor: "text-[#f4889a]",
  },
  {
    title: "Design\nConsultation",
    icon: vector11,
    iconAlt: "Vector",
    bgColor: "bg-othergreen-20",
    textColor: "text-[#79d45e]",
    isVector: true,
    width: "w-[227px]",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-16  px-[324px] py-20 w-full flex-[0_0_auto] z-[6] rounded-3xl overflow-hidden relative self-stretch max-[1800px]:px-[200px] max-[1600px]:px-[100px]  max-[1370px]:px-[20px] max-[1370px]:py-[60px] max-[800px]:py-[40px] max-[800px]:gap-[20px]">
      <h2 className="w-[373px] relative w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-black-100 text-5xl text-center leading-[48px] ">
        <span className=" font-medium text-[#1b1d1e] tracking-[-0.23px] leading-[57.6px] max-[800px]:text-[36px]">
          Where innovation 
          meets
        </span>
        <span className="font-medium text-[#1b1d1e] tracking-[0] leading-[0.1px]">
          &nbsp;
        </span>
        <span className="[font-family:'Instrument_Serif',Helvetica] italic text-[#1b1d1e] tracking-[0] leading-[57.6px]">
          aesthetics
        </span>
      </h2>

      <div className="flex-col items-start gap-12 flex relative  w-full">
        <div className="flex items-center gap-6 flex-wrap self-stretch justify-between w-full ">
          {serviceCards.map((service, index) => (
            <Card
              key={index}
              className={`w-[237px] flex-[1_0_auto]  flex flex-col items-start gap-10 p-0 relative  ${service.bgColor} rounded-2xl overflow-hidden border-none `}
            >
              <CardContent className="flex flex-col items-start gap-10 p-8 w-full ">
                {service.isVector ? (
                  <div className="relative w-10 h-10 rounded-[8.33px] overflow-hidden">
                    <img
                      className="absolute w-[35px] h-[35px] top-0.5 left-0.5"
                      alt={service.iconAlt}
                      src={service.icon}
                    />
                  </div>
                ) : (
                  <img
                    className="relative w-10 h-10 max-[1370px]:w-[33px] max-[1370px]:h-[33px]"
                    alt={service.iconAlt}
                    src={service.icon}
                  />
                )}

                <div
                  className={`relative self-stretch [font-family:'Inter_Tight',Helvetica] font-medium ${service.textColor} text-2xl tracking-[0] leading-[28.8px] whitespace-pre-line max-[1370px]:text-[20px] max-[800px]:whitespace-normal`}
                >
                  {service.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="flex items-center justify-between pl-12 pr-10 py-8 relative self-stretch w-full flex-[0_0_auto] bg-black-100 rounded-3xl border-none ">
          <CardContent className="flex  items-center justify-between w-full p-0 gap-6 max-[1370px]:flex-col ">
            <div className="w-[382px] relative w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[28.8px] max-[1300px]:text-center max-[1300px]:w-full">
              See Our Work in Action. 
              Start Your Creative Journey with Us!
            </div>

            <div className="flex items-center gap-3 relative flex-[0_0_auto] max-[800px]:flex-col">
              <Button className="h-12 items-center justify-center gap-4 pl-5 pr-2 py-0 relative flex-[0_0_auto] bg-white-100 rounded-[999px] text-[#1b1d1e] hover:bg-white-100/90">
                <span className="[font-family:'Inter_Tight',Helvetica] font-medium text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                  Let&apos;s Collaborate
                </span>
                <div className="inline-flex items-center justify-center p-1.5 relative flex-[0_0_auto] bg-black-100 rounded-[999px]">
                  <ArrowRightIcon className="w-5 h-5 text-white rotate-[310deg]" />
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-12 items-center justify-center gap-4 pl-5 pr-2 py-0 relative flex-[0_0_auto] bg-black-100 rounded-[999px] border border-solid border-white hover:bg-black-100/90"
              >
                <span className="[font-family:'Inter_Tight',Helvetica] font-medium text-white text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                  View Portfolio
                </span>
                <div className="inline-flex items-center justify-center p-1.5 relative flex-[0_0_auto] bg-white-100 rounded-[999px]">
                <ArrowRightIcon className="w-5 h-5 text-black rotate-[310deg]" />
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
