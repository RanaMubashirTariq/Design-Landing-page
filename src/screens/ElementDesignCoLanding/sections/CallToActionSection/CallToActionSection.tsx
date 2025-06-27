import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 py-20 relative w-full z-[1] rounded-3xl max-[1500px]:px-[20px] max-[1400px]:py-[60px] max-[800px]:py-[40px] max-[800px]:gap-[20px]">
      <Card className="w-full max-w-[1272px] border border-solid border-[#1b1d1e1a] rounded-3xl overflow-hidden">
        <CardContent className="flex flex-col items-center justify-center gap-20 p-[120px] relative max-[800px]:p-[20px] max-[800px]:gap-[20px] max-[800px]:w-[100%] max-[1300px]:p-[60px]">
          {/* Gradient background effect */}
          <div className="w-full h-[236px] top-[196px] blur-[50px] bg-[linear-gradient(90deg,rgba(205,239,251,1)_0%,rgba(255,255,255,1)_33%,rgba(255,255,255,1)_66%,rgba(253,238,203,1)_100%)] absolute left-0" />

          <div className="flex flex-col items-center justify-center gap-6 relative w-full">
            <div className="flex flex-col items-start gap-3 relative w-full">
              <h2 className="relative w-full mt-[-1.00px] font-['Inter_Tight',Helvetica] font-medium text-[#1b1d1e] text-5xl text-center tracking-[0] leading-[57.6px] max-[900px]:text-[36px] max-[900px]:leading-[40px]">
                Innovative solutions for bold brands
              </h2>

              <p className="relative w-full font-['Inter_Tight',Helvetica] font-normal text-[#1b1d1e99] text-lg text-center tracking-[0] leading-[25.2px] max-[900px]:text-[15px]">
                Looking to elevate your brand? We craft immersive experiences
                that captivate, engage, and <br />
                make your business unforgettable in every interaction.
              </p>
            </div>

            <Button className="h-12 gap-4 pl-5 pr-2 py-0 bg-black-100 rounded-[999px] flex items-center">
              <span className="font-['Inter_Tight',Helvetica] font-medium text-white text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                Let&apos;s craft together
              </span>
              <div className="flex items-center gap-2 p-1.5 bg-white-100 rounded-[999px]">
              <ArrowRightIcon className="w-5 h-5 text-black rotate-[310deg]" />
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
