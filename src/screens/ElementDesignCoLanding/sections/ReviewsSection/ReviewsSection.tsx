import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import bgimage from "../../../../images/bg-image.jpg"
import image from "../../../../images/image.png";


export const ReviewsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      type: "featured",
      category: "Customer stories",
      quote:
        '"Great work better than expected, fast friendly. Excellent App and website design."',
      author: "Larry Strange",
      position: "Founder of AppStudio Pro",
      bgImage: bgimage,
    },
    {
      type: "stats",
      category: "Facts & numbers",
      stat: "100%",
      description: "clients recommend our design services.",
    },
    {
      type: "image",
      category: "Customer stories",
      quote:
        "Exceptional design quality with a clean, modern, and thoughtful approach.",
      imageSrc: image,
    },
    {
      type: "text",
      category: "Customer stories",
      quote:
        '"Majid and team did an outstanding job upgrading our SaaS landing page. His attention to detail, design sense, and clear understanding of user experience made a huge difference. The new layout looks modern, clean, and conversion-focused exactly what we needed. He delivered everything on time and was easy to work with throughout the process. Highly recommend working with him if you\'re looking for top-tier design work!"',
      author: "Nafees Zulfiqar",
      position: "Marketing Head at Xantrum",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20  px-[324px] py-20 relative self-stretch w-full flex-[0_0_auto] z-[4] rounded-3xl max-[1500px]:px-[50px] max-[1400px]:py-[60px] max-[800px]:py-[40px] max-[800px]:gap-[20px] max-[1800px]:px-[200px] max-[1600px]:px-[100px] max-[1400px]:px-[20px]">
      <h2 className="relative w-[590px] mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-transparent text-5xl text-center tracking-[-0.48px] leading-[48px] max-[800px]:text-[36px] max-[800px]:w-[100%] max-[800px]:text-center">
        <span className="font-medium text-[#1b1d1e] tracking-[-0.23px] leading-[57.6px]">
          What our
        </span>
        <span className="font-medium text-[#1b1d1e] tracking-[-0.23px] leading-[0.1px]">
          &nbsp;
        </span>
        <span className="[font-family:'Instrument_Serif',Helvetica] italic text-[#1b1d1e] tracking-[-0.23px] leading-[57.6px] max-[800px]:whitespace-wrap">
          satisfied &nbsp;
        </span>

        <span className="font-medium text-[#1b1d1e] tracking-[-0.23px] leading-[57.6px]">
          customers
          <br />
          are saying about us
        </span>
      </h2>

      <div className="grid grid-cols-3 gap-6 w-full max-[1400px]:grid-cols-2 max-[800px]:grid-cols-1">
        {/* Featured testimonial - spans 2 columns */}
        <Card className="col-span-1 max-[2560px]:col-span-2 h-[480px] rounded-2xl overflow-hidden border-0 relative">
          <div 
            className="w-full h-full absolute top-0 left-0 rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(27,29,30,0.7) 0%, rgba(27,29,30,0.7) 100%), url(${testimonials[0].bgImage})`
            }}
          />
          <CardContent className="flex flex-col justify-between h-full p-8 relative z-10">
            <div className="[font-family:'Inter_Tight',Helvetica] font-normal text-[#ffffff99] text-base tracking-[0] leading-[22.4px]">
              {testimonials[0].category}
            </div>
            <div className="flex flex-col items-start gap-6 w-full">
              <p className="self-stretch [font-family:'Inter_Tight',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[28.8px]">
                {testimonials[0].quote}
              </p>
              <div className="flex flex-col items-start gap-1">
                <div className="[font-family:'Inter_Tight',Helvetica] font-medium text-white text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                  {testimonials[0].author}
                </div>
                <div className="[font-family:'Inter_Tight',Helvetica] font-normal text-[#ffffff99] text-sm text-center tracking-[0] leading-[19.6px] whitespace-nowrap">
                  {testimonials[0].position}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats card */}
        <Card className="col-span-1  h-[480px] bg-[#f6e683] rounded-2xl border-0 max-[800px]:h-[300px] max-[800px]:col-span-2">
          <CardContent className="flex flex-col justify-between h-full p-8">
            <div className="[font-family:'Inter_Tight',Helvetica] font-normal text-[#1b1d1e99] text-base tracking-[0.06px] leading-[22.4px]">
              {testimonials[1].category}
            </div>
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="self-stretch [font-family:'Inter_Tight',Helvetica] font-medium text-[#1b1d1e] text-5xl tracking-[0] leading-[57.6px]">
                {testimonials[1].stat}
              </div>
              <div className="self-stretch [font-family:'Inter_Tight',Helvetica] font-medium text-[#1b1d1e] text-2xl tracking-[0] leading-[28.8px]">
                {testimonials[1].description}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Image testimonial */}
        <Card className=" max-[800px]:col-span-2 col-span-1 bg-black-100 rounded-2xl overflow-hidden border-0">
          <CardContent className="flex flex-col items-start gap-6 p-8">
            <div className="self-stretch text-[#ffffff99] [font-family:'Inter_Tight',Helvetica] font-normal text-base tracking-[0] leading-[22.4px]">
              {testimonials[2].category}
            </div>
            <p className="self-stretch [font-family:'Inter_Tight',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[28.8px]">
              {testimonials[2].quote}
            </p>
            <img
              className="self-stretch w-full h-[220px] object-cover"
              alt="Testimonial image"
              src={testimonials[2].imageSrc}
            />
          </CardContent>
        </Card>

        {/* Text testimonial */}
        <Card className="col-span-1  col-span-2 h-[439px] bg-black-5 rounded-2xl overflow-hidden border-0 max-[1400px]:h-[350px] max-[500px]:h-[500px] max-[380px]:h-[600px] max-[350px]:h-[700px]">
          <CardContent className="flex flex-col justify-between h-full p-8">
            <div className="flex flex-col items-start gap-6 w-full">
              <div className="self-stretch text-[#1b1d1e99] [font-family:'Inter_Tight',Helvetica] font-normal text-base tracking-[0.06px] leading-[22.4px]">
                {testimonials[3].category}
              </div>
              <p className="self-stretch [font-family:'Inter_Tight',Helvetica] font-medium text-[#1b1d1e] text-lg tracking-[0] leading-[27px]">
                {testimonials[3].quote}
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="[font-family:'Inter_Tight',Helvetica] font-medium text-[#1b1d1e] text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                {testimonials[3].author}
              </div>
              <div className="[font-family:'Inter_Tight',Helvetica] font-normal text-[#1b1d1e99] text-sm text-center tracking-[0] leading-[19.6px] whitespace-nowrap">
                {testimonials[3].position}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
