"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/school1.jpg",
  "/images/school2.jpg",
  "/images/school3.jpg",
  "/images/school4.jpg",
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 10 : 0,
          }}
        >
          <Image
            src={image}
            alt={`Ewha Srang School View ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover brightness-110"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4 text-white">Ewha Srang School</h1>
              <p className="text-xl text-white">Nurturing Future Leaders of Cambodia</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 