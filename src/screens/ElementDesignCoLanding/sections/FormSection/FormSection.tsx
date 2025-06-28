import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "../../../../components/ui/button";

const FormSection = () => {
  return (
    <motion.div className="absolute top-100px flex flex-col items-center justify-center gap-20 w-full px-[324px] py-[80px] relative max-[1800px]:px-[200px] max-[1600px]:px-[100px] max-[1400px]:py-[60px] max-[800px]:py-[40px] max-[1400px]:gap-[20px] max-[1400px]:px-[150px] max-[1000px]:px-[20px] "
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
       <motion.h2 className="w-[373px] relative w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-normal text-black-100 text-5xl text-center leading-[48px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="font-medium text-[#1b1d1e] tracking-[-0.23px] leading-[57.6px] max-[800px]:text-[36px]">
          Love to hear from you, <br/>
          Get in 
        </span>
        <span className="font-medium text-[#1b1d1e] tracking-[0] leading-[0.1px]">
          &nbsp;
        </span>
        <span className="[font-family:'Instrument_Serif',Helvetica] italic text-[#1b1d1e] tracking-[0] leading-[57.6px]">
          touch
        </span>
      </motion.h2>

      <motion.div className="w-full flex flex-col items-start bg-white rounded-xl p-8 w-full z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <form className="w-full grid grid-cols-2 gap-4 max-[668px]:grid-cols-1">
          <div className="mb-8 max-[680px]:mb-0">
            <label htmlFor="name" className="block text-gray-700">Your name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full max-w-[592px] py-[17px] px-[16px] max-[680px]:py-[10px] max-[680px]:px-[10px] border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-8 max-[680px]:mb-0">
            <label htmlFor="email" className="block text-gray-700">Your email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full max-w-[592px] py-[17px] px-[16px] max-[680px]:py-[10px] max-[680px]:px-[10px] border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-8 max-[680px]:mb-0">
            <label htmlFor="interest" className="block text-gray-700">What are you interested in?</label>
            <select
              id="interest"
              className="mt-1 block w-full max-w-[592px] py-[17px] px-[16px] max-[680px]:py-[10px] max-[680px]:px-[10px] border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Design & Branding</option>
              {/* Add more options here as needed */}
            </select>
          </div>

          <div className="mb-8 max-[680px]:mb-0">
            <label htmlFor="budget" className="block text-gray-700">Project budget</label>
            <select
              id="budget"
              className="mt-1 block w-full max-w-[592px] py-[17px] px-[16px] max-[680px]:py-[10px] max-[680px]:px-[10px] border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Select your budget</option>
              {/* Add more options here as needed */}
            </select> 
          </div>

          <div className="mb-8 col-span-2 max-[668px]:col-span-1 max-[680px]:mb-4 ">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              placeholder="Let us know your project about"
              className="mt-1 block w-full py-[17px] px-[16px] max-[680px]:py-[10px] max-[680px]:px-[10px] max-[680px]:py-[10px] max-[680px]:px-[10px] border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
              rows={4}
            ></textarea>
          </div>
        </form>
        
        <Button 
          onClick={(e) => {
            e.preventDefault();
            // Handle form submission here
            console.log('Form submitted');
            // You can add form validation and submission logic here
          }}
          className="h-12 items-center justify-center gap-4 pl-5 pr-2 py-0 relative flex-[0_0_auto] bg-black rounded-[999px] text-white hover:bg-black-100/90"
        >
          <span className="[font-family:'Inter_Tight',Helvetica] font-medium text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
            Let&apos;s Collaborate
          </span>
          <div className="inline-flex items-center justify-center p-1.5 relative flex-[0_0_auto] bg-white rounded-[999px]">
            <ArrowRightIcon className="w-5 h-5 text-black rotate-[310deg]" />
          </div>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default FormSection;
