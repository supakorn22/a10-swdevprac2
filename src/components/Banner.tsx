"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './banner.module.css';

const Banner: React.FC = () => {
  // Array of banner images
  const images = [
    '/img/cover.jpg',
    '/img/cover2.jpg',
    '/img/cover3.jpg',
    '/img/cover4.jpg',
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Router for navigation
  const router = useRouter();

  // Function to handle image change on click
  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle navigation to hospital route
  const handleButtonClick = () => {
    router.push('/hospital');
  };

  return (
    <div className={styles.banner} onClick={handleImageClick}>
      <img
        src={images[currentImageIndex]} // Use the current image
        alt="Vaccine Advertisement"
        className={styles.bannerImage}
      />
      <div className={styles.overlay}>
        <h1>Vaccine Service Center</h1>
        <p>ประชาสัมพันธ์การให้บริการวัคซีนครบทุกประเภท</p>
        
      </div>
      <button className={styles.selectHospitalButton} onClick={handleButtonClick}>
          Select Hospital
        </button>
    </div>
  );
};

export default Banner;
