import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import PlansavedButton from '../Todaysplan/PlansavedButton';


const NavBar = () => {
    return (
       <div className="border-b border-gray-700">
  <nav className="container mx-auto flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">

    {/* Logo */}
    <Link href="/" className="flex items-center gap-2">
      <Image
        src={logo}
        width={28}
        height={28}
        alt="logo"
      />
      <p className="text-xl font-bold sm:text-2xl">
        FITLOG
      </p>
    </Link>

    {/* Navigation */}
    <ul className="flex items-center gap-1 sm:gap-3">

      <li>
        <Link
          href="/"
          className="block rounded-full px-3 py-2 text-sm font-bold text-white hover:bg-[#17240f] hover:text-lime-400 sm:px-6 sm:py-3 sm:text-base"
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className="block rounded-full px-3 py-2 text-sm font-bold text-white hover:bg-[#17240f] hover:text-lime-400 sm:px-6 sm:py-3 sm:text-base"
        >
          My Plan
        </Link>
      </li>

    </ul>

    {/* Saved Button */}
    <div>
      <PlansavedButton />
    </div>

  </nav>
</div>
    );
};

export default NavBar;