import React from "react";
import { Button } from "../../../../components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import frame1 from "../../../../images/frame-1.svg";
import subtract from "../../../../images/subtract.svg";
import ellipse21 from "../../../../images/ellipse-1.png";
import ellipse22 from "../../../../images/ellipse-2.png";
import ellipse23 from "../../../../images/ellipse-3.png";
import ellipse24 from "../../../../images/ellipse-4.png";

export const HeaderSection = (): JSX.Element => {
  // Client avatars data
  const clientAvatars = [
    { src: ellipse21, alt: "Client avatar" },
    { src: ellipse22, alt: "Client avatar" },
    { src: ellipse23, alt: "Client avatar" },
    { src: ellipse24, alt: "Client avatar" },
  ];

  // Star rating images
  const starRating = [
    { src: frame1, alt: "Star rating" },
    { src: frame1, alt: "Star rating" },
    { src: frame1, alt: "Star rating" },
    { src: frame1, alt: "Star rating" },
  ];

  return (
    <header className="flex flex-col items-center gap-[50px] px-0 py-20 relative self-stretch w-full max-[1500px]:w-[100%] z-[9] bg-transparent max-[1500px]:px-[20px] max-[1300px]:gap-[20px] max-[1300px]:py-[60px] max-[890px]:py-[40px]">
      {/* Background gradient blur */}
      {/* <div className="absolute max-w-[1920px] h-[534px] top-20 left-0 blur-[200px] bg-[linear-gradient(90deg,rgba(217,243,252,1)_38%,rgba(255,255,255,1)_54%,rgba(253,241,211,1)_66%)] max-[1500px]:max-w-[100%] max-[1500px]:h-[400px] max-[1300px]:h-[250px] max-[1100px]:h-[200px] " /> */}

      {/* Heading and description */}
      <div className="flex flex-col items-center gap-5 relative w-full max-[1500px]:w-[100%]">
        <h1 className="relative w-[1189px] mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-black-100 text-[130px] text-center tracking-[-1.30px] leading-[130px] max-[1500px]:w-[100%] max-[1500px]:text-[100px] max-[1300px]:text-[80px] max-[1500px]:leading-[100px] max-[890px]:text-[55px] max-[890px]:leading-[55px]">
          <span className="font-medium text-[#1b1d1e] tracking-[-1.69px] leading-[143px] max-[1500px]:text-[100px] max-[1300px]:text-[80px] max-[1300px]:leading-[70px] max-[890px]:text-[55px] max-[890px]:leading-[55px]">
            Building bold brands 
            with{" "}
          </span>
          <span className="[font-family:'Instrument_Serif',Helvetica] italic text-[#1b1d1e] tracking-[-1.69px] leading-[143px] max-[1500px]:text-[100px] max-[1300px]:text-[80px] max-[1300px]:leading-[70px] max-[890px]:text-[55px] max-[890px]:leading-[55px]">
            thoughtful design
          </span>
        </h1>

        <p className="relative w-[750px] [font-family:'Inter_Tight',Helvetica] font-normal text-[#1b1d1e99] text-lg text-center tracking-[0] leading-[25.2px] max-[890px]:w-[700px] max-[890px]:text-[15px] max-[890px]:leading-[20px] max-[720px]:w-[100%]">
          At 23 Design Co., we craft bold, user-focused digital experiences that
          empower startups to build strong brands, scale quickly, and lead with
          confidence in competitive markets.
        </p>
      </div>

      {/* CTA and social proof section */}
      <div className="gap-8 flex-[0_0_auto] inline-flex items-center relative max-[890px]:flex-col max-[890px]:gap-[20px]">
        {/* Get Started button */}
        <Button className="flex w-64 h-[64px] items-center justify-between px-6 py-3 relative bg-[#4928fd] rounded-[999px] hover:bg-[#3a1fe0] max-[890px]:w-[230px] max-[890px]:h-[52px] max-[890px]:px-[10px] max-[890px]:py-[10px] max-[890px]:pl-[10px]">
          <span className="relative w-fit font-paragraph-regular-medium font-[number:var(--paragraph-regular-medium-font-weight)] text-white text-[length:var(--paragraph-regular-medium-font-size)] tracking-[var(--paragraph-regular-medium-letter-spacing)] leading-[var(--paragraph-regular-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-regular-medium-font-style)]">
            Get Started
          </span>

          <div className="inline-flex items-center gap-2 p-2.5 relative flex-[0_0_auto] bg-white rounded-[999px]">
            <ArrowRightIcon className="h-5 w-5 text-black rotate-[310deg]" />
          </div>
        </Button>

        {/* Client testimonials section */}
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto] max-[890px]:flex-col max-[890px]:gap-[10px]">
          {/* Client avatars */}
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            {clientAvatars.map((avatar, index) => (
              <img
                key={`avatar-${index}`}
                className={`relative w-11 h-11 mt-[-2.00px] mb-[-2.00px] object-cover max-[890px]:w-[34px] max-[890px]:h-[34px] rounded-full ${
                  index === 0
                    ? "ml-[-2.00px]"
                    : index === clientAvatars.length - 1
                      ? "mr-[-2.00px] -ml-1.5"
                      : "-ml-1.5"
                }`}
                alt={avatar.alt}
                src={avatar.src}
              />
            ))}
          </div>

          {/* Rating and trust text */}
          <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto] max-[890px]:items-center">
            <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
              {starRating.map((star, index) => (
                <img
                  key={`star-${index}`}
                  className="relative w-5 h-5 max-[890px]:w-[15px] max-[890px]:h-[15px]"
                  alt={star.alt}
                  src={star.src}
                />
              ))}
              <div className="relative w-5 h-5 max-[890px]:w-[15px] max-[890px]:h-[15px]">
                <img
                  className="w-5 h-5"
                  alt="Half star"
                  src={subtract}
                />
              </div>
            </div>

            <div className="relative w-fit [font-family:'Inter_Tight',Helvetica] font-normal text-[#1b1d1e99] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap max-[890px]:text-[15px] max-[890px]:leading-[15px] max-[890px]:text-center">
              Trusted by 50+ clients
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
