import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import image62 from "../../../../images/image-62.png";
import image63 from "../../../../images/image-63.png";
import image65 from "../../../../images/image-65.png";
import image72 from "../../../../images/image-72.png";


export const PortfolioSection = (): JSX.Element => {
  // Portfolio project data
  const portfolioProjects = [
    {
      id: 1,
      title: "Magnus Capital",
      image: image62,
      imageType: "background",
      tags: ["UX Research", "Interface Design"],
    },
    {
      id: 2,
      title: "Crypto Strategy Builder",
      image: image63,
      imageType: "img",
      tags: ["Product Design", "Interaction Design"],
    },
    {
      id: 3,
      title: "Piqsol",
      image: image65,
      imageType: "img",
      tags: ["Brand identity design", "UX Research"],
    },
    {
      id: 4,
      title: "Gaya Blockchain",
      image: image72,
      imageType: "background",
      tags: ["Visual Storytelling", "Web & Mobile Design"],
    },
  ];

  return (
    <motion.section 
      className="flex flex-col items-center gap-16 px-[324px] py-20 w-full flex-[0_0_auto] z-[5] rounded-3xl overflow-hidden relative self-stretch max-[1800px]:px-[200px] max-[1600px]:px-[100px] max-[1500px]:px-[20px] max-[1300px]:py-[60px] max-[800px]:py-[40px] max-[800px]:gap-[20px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.h2 
        className="w-[373px] relative w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-black-100 text-5xl text-center leading-[48px] "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className=" font-medium text-[#1b1d1e] tracking-[-0.23px] leading-[57.6px] max-[800px]:text-[36px]">
          Our Latest
        </span>
        <span className="font-medium text-[#1b1d1e] tracking-[0] leading-[0.1px]">
          &nbsp;
        </span>
        <span className="[font-family:'Instrument_Serif',Helvetica] italic text-[#1b1d1e] tracking-[0] leading-[57.6px]">
          Projects
        </span>
      </motion.h2>

      <motion.div 
        className="flex flex-col items-center gap-12 relative w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[1272px]"
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: false, amount: 0.1 }}
                   transition={{ duration: 0.8,  ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {portfolioProjects.map((project) => (
            <Card
              key={project.id}
              className="border-none shadow-none rounded-2xl"
            >
              <CardContent className="p-0 flex flex-col gap-6">
                {project.imageType === "background" ? (
                  <div
                    className="w-full h-[410px] rounded-2xl bg-cover bg-center max-[1300px]:h-[350px]"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                ) : (
                  <div className="relative w-full h-[410px] rounded-2xl bg-cover bg-center max-[1300px]:h-[350px] ">
                    <img
                      className="absolute w-full h-full top-0 left-0 object-cover rounded-2xl"
                      alt={project.title}
                      src={project.image}
                    />
                  </div>
                )}

                <div className="flex flex-col items-start gap-4">
                  <h3 className="mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#1b1d1e] text-2xl tracking-[0] leading-[28.8px]">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap items-start gap-3">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={`${project.id}-tag-${index}`}
                        variant="outline"
                        className="px-4 py-1.5 bg-white rounded-[999px] border border-solid border-[#1b1d1e1a] hover:bg-white"
                      >
                        <span className="[font-family:'Inter_Tight',Helvetica] font-normal text-[#1b1d1e] text-sm tracking-[0] leading-[19.6px]">
                          {tag}
                        </span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
