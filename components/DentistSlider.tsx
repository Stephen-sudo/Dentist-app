"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type DentistSlide = {
  id: number;
  name: string;
  role?: string;
  imageUrl: string;
  quote: string;
};

export default function DentistSlider() {
  const [slides, setSlides] = useState<DentistSlide[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSlides() {
      try {
        const res = await fetch("/api/dentists");
        const data = await res.json();
        console.log("Fetched dentist slides:", data);
        setSlides(data);
      } catch (error) {
        console.error("Failed to fetch dentists:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSlides();
  }, []);

  if (isLoading) return <div className="text-center py-8">Loading team...</div>;
  if (slides.length === 0) return <div className="text-center py-8">No team members available</div>;

  const currentSlide = slides[currentIndex];

  return (
    <div className="flex items-center gap-8">
      {/* Left: Image */}
      <Image 
        src={currentSlide.imageUrl}
        width={300}
        height={300}
        alt={currentSlide.name}
        className="w-64 h-64 object-cover rounded-xl"
       />

      {/* Right: Quote */}
      <div>
        <p className="text-xl italic">“{currentSlide.quote}”</p>
        <p className="mt-4 font-semibold">{currentSlide.name}</p>
        {currentSlide.role && (
          <p className="text-sm text-gray-500">{currentSlide.role}</p>
        )}
      </div>
    </div>
  );
}
