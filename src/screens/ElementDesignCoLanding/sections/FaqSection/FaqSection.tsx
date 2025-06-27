import React from "react";
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
    <section className="flex flex-col items-center gap-20 py-20  w-full z-[2] rounded-3xl max-[1500px]:px-[20px] max-[1400px]:py-[60px] max-[800px]:py-[40px] max-[800px]:gap-[20px]">
      <h2 className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-black-100 text-5xl text-center tracking-[-0.48px] leading-[48px] max-[800px]:text-[36px] max-[800px]:leading-[40px]">
        <span className="font-medium text-[#1b1d1e] tracking-[-0.23px] leading-[57.6px]">
          Got questions? <br />
          We&apos;ve got
        </span>
        <span className="font-medium text-[#1b1d1e] tracking-[-0.23px] leading-[0.1px]">
          &nbsp;
        </span>
        <span className="[font-family:'Instrument_Serif',Helvetica] italic text-[#1b1d1e] tracking-[-0.23px] leading-[57.6px]">
          answers
        </span>
      </h2>

      <div className="max-w-[1272px] w-full">
        <Accordion type="single" collapsible className="w-full ">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`mb-4 rounded-2xl border border-solid border-[#1b1d1e1a] overflow-hidden ${item.defaultOpen ? "bg-[#1b1d1e0d]" : ""}`}
              defaultValue={item.defaultOpen ? `item-${index}` : undefined}
            >
              <AccordionTrigger className="px-6 py-8 hover:no-underline flex items-center justify-between w-full [&>svg]:hidden group">
                <span className="text-left [font-family:'Inter_Tight',Helvetica] font-medium text-[#1b1d1e] text-2xl tracking-[0] leading-[28.8px]">
                  {item.question}
                </span>
                <span>
                <PlusIcon className="w-6 h-6 text-[#1b1d1e] transition-transform duration-300 group-data-[state=open]:rotate-45" />
              </span>

              </AccordionTrigger>
              <AccordionContent className="px-6 pb-8">
                <p className="[font-family:'Inter_Tight',Helvetica] font-normal text-[#1b1d1e99] text-base tracking-[0] leading-[22.4px]">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
