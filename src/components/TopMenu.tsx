// src/components/TopMenu.tsx
"use client";

import React from 'react';
import TopMenuItem from './TopMenuItem';

const TopMenu: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="flex items-center">
      </div>
      
      <div className="flex space-x-4"> {/* Space between menu items */}
        <TopMenuItem label="Booking" href="/booking" />
        <img src="/img/medical/medical3_640.png" alt="Logo" className="h-12" /> 

      </div>
    </nav>
  );
};

export default TopMenu;
