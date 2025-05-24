import React, { useRef } from "react";
import oilcare from "../../assets/oilcare.mp4";
import breakcln from "../../assets/breakcln.mp4"
 import airfilter from "../../assets/airfilter.mp4";
 import battery from "../../assets/battery.mp4";
import waterwash from "../../assets/waterwash.mp4";

interface CareItem {
  video: string;
  title: string;
  description: string;
}

const careItems: CareItem[] = [
  {
    video: oilcare,
    title: "Engine Oil Replacement",
    description: "Keep your engine running smooth and clean.",
  },
  {
    video: breakcln,
    title: "Brake Pad Cleaning",
    description: "Safety ensured with clear and responsive brakes.",
  },
  {
    video: airfilter,
    title: "Air Filter Check",
    description: "Breathe clean—your engine and you.",
  },
  {
    video: battery,
    title: "Battery Check",
    description: "Avoid sudden breakdowns with routine battery checks.",
  },
  
  {
    video: waterwash,
    title: "Water Wash",
    description: "Get that showroom shine, every time.",
  },
];

const MustCare: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-12 px-4 md:px-12 relative">
      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-200"
      >
        ❮
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-200"
      >
        ❯
      </button>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-6 no-scrollbar px-2"
      >
        {careItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] h-64 flex-shrink-0 rounded-xl overflow-hidden relative shadow-md hover:shadow-lg transition"
          >
            <video
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover overflow-hidden"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MustCare;