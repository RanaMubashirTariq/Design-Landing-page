import { ArrowRightIcon, MenuIcon, XIcon } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import logo from "../../../../images/logo.svg";

interface NavigationSectionProps {
  onAboutUsClick: () => void;
  onServicesClick: () => void;
  onWorkClick: () => void;
  onPricingClick: () => void;
}

export const NavigationSection = ({ 
  onAboutUsClick, 
  onServicesClick, 
  onWorkClick, 
  onPricingClick 
}: NavigationSectionProps): JSX.Element => {

  const [clicked, setClicked] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation items data with paths and click handlers
  const navigationItems = [
    { label: "About us", path: "/about", onClick: onAboutUsClick },
    { label: "Services", path: "/services", onClick: onServicesClick },
    { label: "Work", path: "/work", onClick: onWorkClick },
    { label: "Pricing", path: "/pricing", onClick: onPricingClick },
  ];

  // Determine active index based on current path
  const getActiveIndex = () => {
    const currentPath = location.pathname;
    const index = navigationItems.findIndex(item => item.path === currentPath);
    return index >= 0 ? index : -1; // -1 means no active item (home page)
  };

  const activeIndex = getActiveIndex();
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 1000;

  const handleNavigationClick = (index: number, onClick: () => void) => {
    setMenuOpen(false);
    onClick();
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 flex h-24 items-center justify-between px-[300px] py-[23px] w-full z-50 backdrop-blur-sm border-b border-gray-100 max-[1800px]:px-[200px] max-[1600px]:px-[100px] max-[1500px]:px-[20px] max-[1200px]:px-[20px] max-[760px]:py-[10px]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.img 
        className="relative h-auto max-[760px]:w-[80px] max-[760px]:h-[40px] cursor-pointer" 
        alt="Logo" 
        src={logo}
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      />

      {/* Hamburger for mobile */}
        <div className="flex items-center gap-2 justify-between gap-[327px] max-[1500px]:gap-[380px] max-[1300px]:gap-[270px] max-[1024px]:gap-[150px] max-[1000px]:gap-0">
        {isMobile ? (
        <>
          <motion.button
            className="p-2 rounded-md focus:outline-none z-50"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {menuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </motion.button>
          {menuOpen && (
            <motion.div 
              className="fixed inset-0 top-24 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            >
              <motion.nav 
                className="absolute top-0 left-0 w-[240px] rounded-xl shadow-[0px_1px_2px_#0000000f,0px_1px_3px_#0000001a] bg-white shadow-lg flex flex-col items-center gap-2 py-4 z-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Button
                      variant={activeIndex === index ? "default" : "ghost"}
                      className={`w-11/12 px-4 py-3 rounded-[999px] h-auto mb-2 ${
                        activeIndex === index
                          ? "bg-white-100 border border-solid border-[#1b1d1e1a] shadow-[0px_1px_2px_#0000000f,0px_1px_3px_#0000001a]"
                          : ""
                      }`}
                      onClick={() => handleNavigationClick(index, item.onClick)}
                    >
                      <span
                        className={`[font-family:'Inter_Tight',Helvetica] font-medium text-base leading-[22.4px] ${
                          activeIndex === index ? "text-[#1b1d1e]" : "text-[#1b1d1e99]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Button
                    onClick={() => {
                      setClicked(true);
                      // Open contact page in new tab
                      window.open('/#/contact', '_blank');
                    }}
                    className={`transition-all duration-300 transform ${
                      clicked ? "translate-x-2 bg-white text-black" : "bg-black-100 text-white"
                    } h-12 gap-4 px-2 py-0 rounded-[999px] flex items-center `}
                  >
                    {clicked ? (
                      // After click: Arrow first, then text
                      <>
                        <div
                          className={`transition-all duration-300 inline-flex items-center justify-center p-1.5 rounded-[999px] ${
                            clicked ? "bg-black" : "bg-white"
                          }`}
                        >
                          <ArrowRightIcon
                            className={`h-5 w-5 transition-colors rotate-[310deg] duration-300 ${
                              clicked ? "text-white" : "text-black"
                            }`}
                          />
                        </div>
                        <span className="[font-family:'Inter_Tight',Helvetica] font-medium text-base leading-[22.4px] whitespace-nowrap">
                          Let&apos;s Collaborate
                        </span>
                      </>
                    ) : (
                      // Before click: Text first, then arrow
                      <>
                        <span className="[font-family:'Inter_Tight',Helvetica] font-medium text-base leading-[22.4px] whitespace-nowrap">
                          Let&apos;s Collaborate
                        </span>
                        <div
                          className={`transition-all duration-300 inline-flex items-center justify-center p-1.5 rounded-[999px] bg-white`}
                        >
                          <ArrowRightIcon className="h-5 w-5 text-black rotate-[310deg]" />
                        </div>
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </>
      ) : (
        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="flex items-center gap-2 p-1 bg-black-5 rounded-[999px]">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    variant={activeIndex === index ? "default" : "ghost"}
                    className={`px-4 py-[9px] rounded-[999px] h-auto ${
                      activeIndex === index
                        ? "bg-white-100 border border-solid border-[#1b1d1e1a] shadow-[0px_1px_2px_#0000000f,0px_1px_3px_#0000001a] hover:bg-white-100/90"
                        : ""
                    }`}
                    onClick={() => handleNavigationClick(index, item.onClick)}
                  >
                    <span
                      className={`[font-family:'Inter_Tight',Helvetica] font-medium text-base leading-[22.4px] ${
                        activeIndex === index ? "text-[#1b1d1e]" : "text-[#1b1d1e99]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Button>
                </motion.div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      )}
                  

                  {/* Last btn for contact us */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      onClick={() => {
                        setClicked(true);
                        // Open contact page in new tab
                        window.open('/#/contact', '_blank');
                      }}
                      className={`transition-all duration-300 transform ${
                        clicked ? "translate-x-2 bg-white text-black" : "bg-black-100 text-white"
                      } h-12 gap-4 px-2 py-0 rounded-[999px] flex items-center max-[1000px]:hidden`}
                    >
                      {clicked ? (
                        // After click: Arrow first, then text
                        <>
                          <div
                            className={`transition-all duration-300 inline-flex items-center justify-center p-1.5 rounded-[999px] ${
                              clicked ? "bg-black" : "bg-white"
                            }`}
                          >
                            <ArrowRightIcon
                              className={`h-5 w-5 transition-colors rotate-[310deg] duration-300 ${
                                clicked ? "text-white" : "text-black"
                              }`}
                            />
                          </div>
                          <span className="[font-family:'Inter_Tight',Helvetica] font-medium text-base leading-[22.4px] whitespace-nowrap">
                            Let&apos;s Collaborate
                          </span>
                        </>
                      ) : (
                        // Before click: Text first, then arrow
                        <>
                          <span className="[font-family:'Inter_Tight',Helvetica] font-medium text-base leading-[22.4px] whitespace-nowrap">
                            Let&apos;s Collaborate
                          </span>
                          <div
                            className={`transition-all duration-300 inline-flex items-center justify-center p-1.5 rounded-[999px] bg-white`}
                          >
                            <ArrowRightIcon className="w-5 h-5 text-black rotate-[310deg]" />
                          </div>
                        </>
                      )}
                    </Button>
                  </motion.div>
        </div>

    </motion.header>
  );
};
