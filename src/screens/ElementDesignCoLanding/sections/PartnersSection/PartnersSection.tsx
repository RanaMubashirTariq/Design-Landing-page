import React from "react";
import { motion } from "framer-motion";
import { Separator } from "../../../../components/ui/separator";
import icon from '../../../../images/icon.svg';
import vector2 from '../../../../images/vector-2.svg';
import brand3 from '../../../../images/brand-3.png';
import brand5 from '../../../../images/brand-5.svg';

export const PartnersSection = (): JSX.Element => {
  // Partner brands data
  const partners = [
    {
      name: "Avelon Care",
      logo: icon,
      hasImage: true,
      fontFamily: "'Poppins',Helvetica",
      color: "#2e0707",
      fontWeight: "medium",
    },
    {
      name: "Devloop",
      logo: vector2,
      hasImage: true,
      fontFamily: "'Rubik',Helvetica",
      color: "#000150",
      fontWeight: "medium",
    },
    {
      name: "Brand-3",
      logo: brand3,
      isBackgroundImage: true,
    },
    {
      name: "LUNAR",
      hasImage: false,
      fontFamily: "'Poppins',Helvetica",
      color: "black",
      fontWeight: "medium",
    },
    {
      name: "Brand-5",
      hasImage: true,
      complexLogo: true,
      vectorLogo: brand5,
    },
  ];

  return (
    <motion.section 
      className="flex flex-col items-center py-20 relative w-full flex-[0_0_auto] z-[8] max-[1000px]:py-10 max-[1000px]:px-[20px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div 
        className="flex items-center justify-center gap-4 py-[17px] w-full mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Separator className="w-[171px] -rotate-180 h-0.5 rounded-[999px] bg-[linear-gradient(90deg,rgba(27,29,30,0.1)_0%,rgba(27,29,30,0)_80%)] max-[800px]:hidden max-[801px]:block" />
        </motion.div>
        
        <motion.p 
          className="w-fit mt-[-1.00px] font-['Inter_Tight',Helvetica] font-normal text-[#1b1d1e99] text-base text-center tracking-[0] leading-[22.4px] whitespace-nowrap max-[800px]:text-[15px] max-[800px]:whitespace-normal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Loved by 50+ big and small brands around the worlds
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Separator className="w-[211px] h-0.5 rounded-[999px] bg-[linear-gradient(90deg,rgba(27,29,30,0.1)_0%,rgba(27,29,30,0)_80%)] max-[800px]:hidden max-[801px]:block" />
        </motion.div>
      </motion.div>

      <motion.div 
        className="w-full overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          className="flex gap-[144px] px-[324px] py-7 animate-marquee whitespace-nowrap max-[1100px]:gap-[100px] max-[800px]:gap-[50px] max-[800px]:py-2"
          style={{ animation: 'marquee 20s linear infinite' }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={`partner-${index}`}
              className="bg-white flex items-center justify-center min-w-[200px] min-h-[52px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Logo rendering logic (same as your existing code) */}
              {partner.isBackgroundImage ? (
                <img src={partner.logo} className="w-[126px] h-[52px]" alt="" />
              ) : partner.complexLogo ? (
                <div className="flex items-center gap-2">
                  <div className="w-[40px] h-[40px]">
                    <img
                      className="w-[40px] h-[40px]"
                      alt="Logo vector"
                      src={partner.vectorLogo}
                    />
                  </div>
                  <div
                    className={`font-[${partner.fontFamily}] font-${partner.fontWeight} text-[${partner.color}] text-3xl leading-[65px] whitespace-nowrap`}
                  >
                    <p><span>block</span>mob</p>
                  </div>
                </div>
              ) : partner.hasImage ? (
                <>
                  <img
                    className={`${
                      partner.name === "Devloop" ? "w-[33px] h-[37px] mr-2" : "w-10 h-10 mr-2"
                    }`}
                    alt={partner.name}
                    src={partner.logo}
                  />
                  <div
                    className={`font-[${partner.fontFamily}] font-${partner.fontWeight} text-[${partner.color}] text-3xl ${
                      partner.name === "Avelon Care"
                        ? "tracking-[-3.00px]"
                        : partner.name === "Devloop"
                        ? "tracking-[-2.10px]"
                        : "tracking-[0]"
                    } leading-[65px] whitespace-nowrap`}
                  >
                    {partner.name}
                  </div>
                </>
              ) : (
                <div
                  className={`font-[${partner.fontFamily}] font-${partner.fontWeight} text-[${partner.color}] text-3xl ${
                    partner.name === "Avelon Care"
                      ? "tracking-[-3.00px]"
                      : partner.name === "Devloop"
                      ? "tracking-[-2.10px]"
                      : "tracking-[0]"
                  } leading-[65px] whitespace-nowrap`}
                >
                  {partner.name}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};
