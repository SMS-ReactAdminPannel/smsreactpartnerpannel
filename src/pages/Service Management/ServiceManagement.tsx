import React, { useEffect, useState } from "react";
import MustCare from "./MustCare";
import service1 from "./../../assets/service1.jpg";

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: service1,
    title: "360° Vehicle Service",
    description: "Comprehensive maintenance to keep your vehicle in peak condition.",
  },
  {
    image: service1,
    title: "Genuine Parts",
    description: "Only original parts for long-lasting performance.",
  },
  {
    image: service1,
    title: "Expert Technicians",
    description: "Trained professionals ensuring quality service every time.",
  },
];

const ServiceManagement: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="relative w-full h-[50vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-10 text-white">
              <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
              <p className="text-lg mt-3 max-w-xl">{slide.description}</p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows (Bigger) */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50  p-4 md:p-6 rounded-full text-black text-2xl md:text-4xl font-bold shadow-lg"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 p-4 md:p-6 rounded-full text-black text-2xl md:text-4xl font-bold shadow-lg"
        >
          ❯
        </button>

		{/* Slide Indicators */}
<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
  {slides.map((_, index) => (
    <div
      key={index}
      className={`w-3 h-3 md:w-2 md:h- rounded-full transition-all duration-300 ${
        index === currentIndex ? "bg-white" : "bg-white/50"
      }`}
    />
  ))}
</div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              } transition duration-300`}
            />
          ))}
        </div>
      </div>

      <div><MustCare /></div>
    </div>
  );
};

export default ServiceManagement;