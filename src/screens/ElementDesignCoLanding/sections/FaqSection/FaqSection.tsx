import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { PlusIcon } from "lucide-react";



export const FaqSection = (): JSX.Element => {
  const faqItems = [
    {
      question: "Why shouldn't I just hire a full-time designer?",
      answer: "",
    },
    {
      question: "Do you offer a refund?",
      answer: "",
    },
    {
      question: "How long does a project usually take?",
      answer: "",
    },
    {
      question: "Do you offer ongoing support after the project ends?",
      answer:
        "Yes. We offer retainer packages and post-launch support to help you maintain and grow your digital product. From design tweaks to user feedback iterations—we've got your back.",
      defaultOpen: true,
    },
    {
      question: "Can you work with my existing development team?",
      answer: "",
    },
    {
      question: "What tools do you use for design and collaboration?",
      answer: "",
    },
  ];

  return (
    <motion.section 
      className="flex flex-col items-center gap-16 px-[324px] py-20 w-full flex-[0_0_auto] z-[4] rounded-3xl overflow-hidden relative self-stretch max-[1800px]:px-[200px] max-[1600px]:px-[100px] max-[1500px]:px-[20px] max-[1300px]:py-[60px] max-[800px]:py-[40px] max-[800px]:gap-[20px]"
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
          Frequently Asked
        </span>
        <span className="font-medium text-[#1b1d1e] tracking-[0] leading-[0.1px]">
          &nbsp;
        </span>
        <span className="[font-family:'Instrument_Serif',Helvetica] italic text-[#1b1d1e] tracking-[0] leading-[57.6px]">
          Questions
        </span>
      </motion.h2>

      <motion.div 
        className="flex flex-col items-start gap-6 relative w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Accordion type="single" collapsible className="w-full ">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`mb-4 rounded-2xl border border-solid border-[#1b1d1e1a] overflow-hidden ${item.defaultOpen ? "bg-[#1b1d1e0d]" : ""}`}
              defaultValue={item.defaultOpen ? `item-${index}` : undefined}
            >
              <AccordionTrigger className="px-6 py-8 hover:no-underline flex items-center justify-between w-full [&>svg]:hidden group">
                <span className="text-left [font-family:'Inter_Tight',Helvetica] font-medium text-[#1b1d1e] text-2xl tracking-[0] leading-[28.8px] max-[800px]:text-[18px] max-[800px]:leading-[22.4px]">
                  {item.question}
                </span>
                <span>
                <PlusIcon className="w-6 h-6 text-[#1b1d1e] transition-transform duration-300 group-data-[state=open]:rotate-45" />
              </span>

              </AccordionTrigger>
              <AccordionContent className="px-6 pb-8">
                <p className="[font-family:'Inter_Tight',Helvetica] font-normal text-[#1b1d1e99] text-base tracking-[0] leading-[22.4px] max-[800px]:text-[18px] max-[800px]:leading-[22.4px]">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  );
};
