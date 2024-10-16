"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js
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

  // Function to handle image change on click
  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.banner} >
      <img
        src={images[currentImageIndex]} // Use the current image
        alt="Vaccine Advertisement"
        className={styles.bannerImage}
        onClick={handleImageClick}
      />
      <div className={styles.overlay}>
        <h1>Vaccine Service Center</h1>
        <p>ประชาสัมพันธ์การให้บริการวัคซีนครบทุกประเภท</p>
      </div>
      <Link href="/hospital" className={styles.selectHospitalButton} >
        Select Hospital
      </Link>
    </div>
  );
};

export default Banner;
