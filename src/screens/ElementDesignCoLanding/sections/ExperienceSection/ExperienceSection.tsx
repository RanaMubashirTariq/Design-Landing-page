import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import magicStick from "../../../../images/magic-stick--1.svg";
import group from "../../../../images/group.svg";
import frame5 from "../../../../images/frame-5.svg";
import plus2 from "../../../../images/plus-2.svg";

export const ExperienceSection = (): JSX.Element => {
  // Data for the badges/pills
  const badges = [
    {
      text: "Creativity",
      icon: magicStick,
      bgClass: "bg-otherpurple-20",
      textClass: "text-[#b981ed]",
    },
    {
      text: "Innovation",
      icon: group,
      bgClass: "bg-otherblue-20",
      textClass: "text-[#70b5ff]",
      isImage: true,
    },
    {
      text: "Strategy",
      icon: frame5,
      bgClass: "bg-otherorange-20",
      textClass: "text-[#ffaf68]",
    },
  ];

  // Data for the statistics
  const stats = [
    {
      number: "50",
      description: "Total Projects\nCompleted",
    },
    {
      number: "2",
      description: "Years of\nExperience",
    },
    {
      number: "10",
      description: "Design\nHeroes",
    },
  ];

  return (
    <motion.section 
      className="flex flex-col items-center gap-[60px] px-[324px] py-20 relative w-full z-[7] rounded-3xl max-[1800px]:px-[150px] max-[1600px]:px-[100px] max-[1500px]:px-[20px] ] max-[1300px]:py-[60px] max-[800px]:py-[40px] max-[800px]:gap-[20px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    > 
      <motion.div 
        className="flex-col items-start gap-5 flex relative w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.h2 
          className="relative w-full mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#1b1d1e] text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-[1.2] max-[1100px]:text-[36px] max-[810px]:text-[30px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Craft exceptional, experience-led, and technology-driven design
          strategies that deliver impactful results
        </motion.h2>

        <motion.div 
          className="flex  items-center justify-center gap-[16px_12px] relative w-full max-[760px]:flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {badges.map((badge, index) => (
            <React.Fragment key={badge.text}>
              {index === 2 && (
                <motion.div 
                  className="relative w-fit [font-family:'Inter_Tight',Helvetica] font-medium text-[#1b1d1e] text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-[1.2] whitespace-nowrap"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  &amp;
                </motion.div>
              )}
              <motion.div
                className={`inline-flex items-center justify-center gap-3 px-6 py-[7px] relative flex-[0_0_auto] ${badge.bgClass} rounded-[999px]`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {badge.isImage ? (
                  <div className="relative w-10 h-10">
                    <img
                      className="absolute w-7 h-9 top-0.5 left-1.5 max-[1100px]:w-[36px] max-[1100px]:h-[36px]"
                      alt={badge.text}
                      src={badge.icon}
                    />
                  </div>
                ) : (
                  <img
                    className="relative w-10 h-10 max-[1100px]:w-[36px] max-[1100px]:h-[36px]"
                    alt={badge.text}
                    src={badge.icon}
                  />
                )}
                <div
                  className={`relative w-fit mt-[-1.00px] [font-family:'Instrument_Serif',Helvetica] font-normal italic ${badge.textClass} text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-[1.2] whitespace-nowrap max-[1100px]:text-[36px]`}
                >
                  {badge.text}
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex flex-wrap items-center justify-center gap-6 relative w-full max-[810px]:flex-col max-[680px]:gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {stats.map((stat, index) => (
          <React.Fragment key={stat.number}>
            {index > 0 && (
              <motion.div
                
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Separator
                  orientation="vertical"
                  className="h-[120px] md:block max-[810px]:w-[100%] max-[810px]:h-[2px] rotate-[180deg]"
                />
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Card className="flex-1 border-none shadow-none">
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <div className="inline-flex flex-col items-start">
                    <div className="inline-flex items-start gap-3">
                      <img
                        className="relative flex-[0_0_auto]"
                        alt="Plus"
                        src={plus2}
                      />
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#1b1d1e] text-[80px] md:text-[100px] lg:text-[130px] text-center tracking-[0] leading-[1.2] whitespace-nowrap max-[1100px]:text-[103px] max-[760px]:text-[80px]">
                        {stat.number}
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-8 py-0 relative self-stretch w-full">
                      <div className="relative w-[106px] mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-[#1b1d1e99] text-base tracking-[0] leading-[22.4px] max-[810px]:w-[100%]">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </React.Fragment>
        ))}
      </motion.div>
    </motion.section>
  );
};
