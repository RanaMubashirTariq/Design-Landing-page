import { ArrowRightIcon, CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const PricingPlanSection = (): JSX.Element => {
  // Define pricing plan data for better maintainability
  const pricingPlans = [
    {
      category: "UX/UI Design",
      description:
        "Get a user friendly, modern and seamless web, mobile or SaaS app designed.",
      price: "$900+",
      bgColor: "bg-otheryellow-100",
      textColor: "text-[#1b1d1e]",
      descriptionColor: "text-[#1b1d1e99]",
      features: [
        "Less than 60 screens",
        "UI Library, componteized, autolayout",
        "Easy handoff for devs",
        "Collaboration with developers in case of issues",
        "Extra $50/Interactive prototype",
      ],
    },
    {
      category: "No Code Development",
      description:
        "Get your website developed in Framer, Webflow, Wordpress or custom HTML/CSS/JS.",
      price: "$750-2500",
      bgColor: "bg-otherviolet-100",
      textColor: "text-white",
      descriptionColor: "text-[#ffffff99]",
      features: [
        "Website design",
        "3-10 pages",
        "Componetized",
        "Responsive design",
        "Basic on page and scroll animations",
        "Extra $100 for simpler pages",
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 px-0 py-20 w-full flex-[0_0_auto] z-[3] rounded-3xl relative self-stretch max-[1500px]:px-[20px] max-[1400px]:py-[60px] max-[800px]:py-[40px] max-[800px]:gap-[20px]">
      <h2 className="relative w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-transparent text-5xl text-center tracking-[-0.48px] leading-[48px] max-[800px]:text-[36px]">
        <span className="font-medium text-[#1b1d1e] tracking-[-0.23px] leading-[57.6px]">
          Pick the plan that <br />
          fits your
        </span>
        <span className="font-medium text-[#1b1d1e] tracking-[-0.23px] leading-[0.1px]">
          &nbsp;
        </span>
        <span className="[font-family:'Instrument_Serif',Helvetica] italic text-[#1b1d1e] tracking-[-0.23px] leading-[57.6px]">
          start-up
        </span>
      </h2>

      <div className="flex  w-[1272px] items-center gap-6 relative max-[1330px]:flex-col max-[1330px]:gap-[20px] max-[1330px]:w-[100%]">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`flex flex-col h-[350px] items-start gap-6 p-10 relative flex-1 grow ${plan.bgColor} rounded-2xl border-0 max-[1330px]:w-[100%] `}
          >
            <CardContent className="items-start gap-6 flex relative self-stretch w-full flex-[0_0_auto] p-0 max-[760px]:flex-col">
              <div className="flex flex-col w-[248px] items-start justify-between relative self-stretch max-[1330px]:w-[50%] max-[800px]:w-[100%]">
                <div className="flex-col items-start gap-3 flex relative self-stretch w-full flex-[0_0_auto]">
                  <Badge className="inline-flex items-center justify-center gap-2 px-4 py-[7px] relative flex-[0_0_auto] bg-black-100 rounded-[99px] hover:bg-black-100">
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-white text-base tracking-[0] leading-[22.4px] whitespace-nowrap max-[800px]:text-[15px]">
                      {plan.category}
                    </span>
                  </Badge>

                  <p
                    className={`relative self-stretch [font-family:'Inter_Tight',Helvetica] font-normal ${plan.descriptionColor} text-sm tracking-[0] leading-[19.6px] max-[800px]:text-[15px] max-[800px]:w-[100%]`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-end gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    <p
                      className={`relative w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium ${plan.textColor} text-5xl tracking-[0] leading-[57.6px] whitespace-nowrap max-[800px]:text-[30px] max-[1500px]:text-[48px] max-[1100px]:text-[38px]`}
                    >
                      {plan.price}
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    className="h-12 justify-center gap-4 pl-5 pr-2 py-0 bg-white-100 rounded-[999px] inline-flex items-center relative border-0 hover:bg-white-100/90"
                  >
                    <span className="relative w-fit [font-family:'Inter_Tight',Helvetica] font-medium text-[#1b1d1e] text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                      Let&apos;s Collaborate
                    </span>
                    <div className="inline-flex items-center gap-2 p-1.5 relative flex-[0_0_auto] bg-black-100 rounded-[999px]">
                      <ArrowRightIcon className="w-5 h-5 text-white" />
                    </div>
                  </Button>
                </div>
              </div>

              <Separator
                orientation="vertical"
                className="h-auto bg-white/20"
              />

              <div className="flex flex-col items-start gap-4 relative flex-1 self-stretch grow">
                <h3
                  className={`relative self-stretch mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium ${plan.textColor} text-base tracking-[0] leading-[22.4px]`}
                >
                  What&apos;s included
                </h3>

                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <CheckIcon
                      className={`relative w-5 h-5 ${plan.textColor}`}
                    />
                    <p
                      className={`relative flex-1 mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal ${plan.textColor} text-base tracking-[0] leading-[22.4px] max-[800px]:text-[15px]`}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
