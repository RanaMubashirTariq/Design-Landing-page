import React from "react";
import { Separator } from "../../../../components/ui/separator";
import logo  from "../../../../images/logo.svg"
import vector3 from "../../../../images/vector-3.svg"
import dribbble from "../../../../images/dribbble.svg"
import instagram from "../../../../images/instagram.svg"

interface FooterSectionProps {
  onAboutUsClick: () => void;
  onServicesClick: () => void;
  onWorkClick: () => void;
  onPricingClick: () => void;
}

export const FooterSection = ({ 
  onAboutUsClick, 
  onServicesClick, 
  onWorkClick, 
  onPricingClick 
}: FooterSectionProps): JSX.Element => {
  // Footer navigation links with click handlers
  const sitemapLinks = [
    { title: "Contact us", href: "#", onClick: () => {} },
    { title: "About us", href: "#", onClick: onAboutUsClick },
    { title: "Work", href: "#", onClick: onWorkClick },
    { title: "Services", href: "#", onClick: onServicesClick },
    { title: "Pricing", href: "#", onClick: onPricingClick },
  ];

  // Social media icons
  const socialIcons = [
    { icon: vector3, alt: "Twitter", href: "#" },
    { icon: dribbble, alt: "Dribbble", href: "#" },
    { icon: instagram, alt: "Instagram", href: "#" },
  ];

  return (
    <footer className="flex flex-col items-start gap-2 py-[60px] max-w-[1272px]  relative w-full bg-transparent max-[1500px]:px-[20px] max-[1400px]:py-[60px] max-[800px]:py-[40px] max-[800px]:gap-[20px]">
      <div className="flex flex-col items-start gap-[50px] rounded-2xl overflow-hidden w-full max-[865px]:gap-[20px]">
        <Separator className="w-full" />

        <div className="flex   items-start gap-16 w-full max-[865px]:flex-col max-[865px]:gap-[20px]">
          {/* Company info section */}
          <div className="flex flex-col items-start gap-[30px] flex-1">
            <img className="w-[99.43px] h-[46px] max-[765px]:w-[118px] max-[765px]:h-[35px]" alt="Logo" src={logo} />

            <p className="max-w-[450px] font-['Inter_Tight',Helvetica] font-normal text-[#1b1d1e99] text-base leading-6">
              At 23 Design Co., we craft bold, user-focused digital experiences
              that empower startups to build strong brands, scale quickly, and
              lead with confidence in competitive markets.
            </p>

            <div className="flex items-center gap-4">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.alt}>
                  <img
                    className="w-5 h-5"
                    alt={social.alt}
                    src={social.icon}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation and contact section */}
          <div className="flex   items-start gap-8 md:gap-[120px] ">
            {/* Sitemap section */}
            <div className="flex flex-col items-start gap-[30px]">
              <h3 className="font-paragraph-regular-medium font-medium text-black-100 text-base leading-[140%] tracking-[0.064px]">
                Sitemap
              </h3>

              <nav className="flex flex-col items-start gap-4 w-full">
                {sitemapLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      link.onClick();
                    }}
                    className="font-['Inter_Tight',Helvetica] font-normal text-[#1b1d1e99] text-base leading-[22.4px] hover:text-black-100 transition-colors max-[765px]:text-[15px] cursor-pointer"
                  >
                    {link.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact details section */}
            <div className="flex flex-col w-full md:w-[250px] items-start gap-4">
              <h3 className="font-['Inter_Tight',Helvetica] font-medium text-[#1b1d1e] text-base leading-[22.4px]">
                Contact Details
              </h3>

              <div className="flex flex-col items-start gap-5 w-full">
                <address className="font-['Inter_Tight',Helvetica] font-normal text-[#1b1d1e99] text-base leading-[22.4px] not-italic max-[765px]:text-[15px]">
                  81 Rivington Street London <br />
                  EC2A 3AY
                </address>

                <a
                  href="mailto:23desgnco@gmail.com"
                  className="font-['Inter_Tight',Helvetica] font-normal text-[#1b1d1e99] text-base leading-[22.4px] hover:text-black-100 transition-colors max-[765px]:text-[15px]"
                >
                  23desgnco@gmail.com
                </a>

                <a
                  href="tel:01051923556"
                  className="font-['Inter_Tight',Helvetica] font-normal text-[#1b1d1e99] text-base leading-[22.4px] hover:text-black-100 transition-colors max-[765px]:text-[15px]"
                >
                  0105 192 3556
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="w-full" />

        {/* Copyright section */}
        <div className="flex items-center justify-center w-full">
          <p className="font-paragraph-small-regular text-black-40 text-[14px] tracking-[0.056px] leading-[140%] text-center max-[765px]:text-[15px]">
            ©2025 23 Design Co. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
