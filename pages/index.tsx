"use client";

import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

import heroImage from '../public/hero.jpg';

interface HomeProps {
  images: {
    public_id: string;
    secure_url: string;
  }[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { v2: cloudinary } = require('cloudinary');

  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const results = await cloudinary.search
    .expression('folder:katia_shop/*')
    .sort_by('public_id', 'desc')
    .max_results(400)
    .execute();

  return {
    props: {
      images: results.resources,
    },
  };
};

export default function Home({ images }: HomeProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Déopacification après 1 seconde
    return () => clearTimeout(timer);
  }, []);

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  return (
    <div className="relative">
      {/* Écran noir avec déopacification */}
      {loading && (
        <div className="fixed inset-0 bg-black z-50 opacity-100 animate-fade-out"></div>
      )}


      {/* Image principale */}
      <div className="relative h-screen">
        <Image src={heroImage} alt="Hero Image" layout="fill" objectFit="cover" />
      </div>

      {/* Mosaïque d'images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-0">
        {images.map((image, index) => (
          <div key={image.public_id} className="cursor-pointer" onClick={() => setSelectedIndex(index)}>
            <Image
              src={image.secure_url}
              alt={image.public_id}
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Affichage en mode plein écran */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <button
            className="absolute left-4 text-white text-4xl z-10"
            onClick={handlePrev}
            disabled={selectedIndex === 0}
          >
            &#10094;
          </button>

          <div className="relative max-w-4xl">
            <Image
              src={images[selectedIndex].secure_url}
              alt="Image fullscreen"
              width={800}
              height={600}
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>

          <button
            className="absolute right-4 text-white text-4xl z-10"
            onClick={handleNext}
            disabled={selectedIndex === images.length - 1}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
