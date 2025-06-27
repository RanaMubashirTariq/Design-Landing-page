import React from "react";
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
    <section className="flex flex-col items-center gap-20 py-20  px-[20px]  relative w-full z-[5] rounded-3xl">
    <h2 className="text-center text-5xl tracking-[-0.48px] leading-[48px]">
      <span className="font-medium text-[#1b1d1e] tracking-[-0.23px] leading-[57.6px]">
        How we
      </span>{" "}
      <span className="[font-family:'Instrument_Serif',Helvetica] italic text-[#1b1d1e] tracking-[-0.23px] leading-[57.6px]">
        transformed
      </span>{" "}
      <span className="font-medium text-[#1b1d1e] tracking-[-0.23px] leading-[57.6px]">
        a small <br />
        business&apos;s online presence
      </span>
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[1272px]">
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
                  className="absolute w-full h-full top-0 left-0 object-cover"
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
    </div>
  </section>
  );
};
