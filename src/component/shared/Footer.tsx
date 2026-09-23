import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'

const Footer = () => {
    return (
        <div className='border-t border-gray-700'>
            <footer className="px-6 py-8 container mx-auto">
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-2">
   <Image src={logo} width={28} height={28} alt='logo'>

              </Image>
      <span className="text-sm font-bold tracking-wide text-white">
        FITLOG
      </span>
    </div>

  
    <p className="text-xs text-gray-500">
      © 2026 FitLog — Workout Library. Train hard, log honest.
    </p>

  </div>
</footer>
        </div>
    );
};

export default Footer;