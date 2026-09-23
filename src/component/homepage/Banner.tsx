import Image from 'next/image';
import React from 'react';
import banner from '@/assets/banner.png'

const Banner = () => {
    return (
        <div>
             <section className="w-full px-2 py-3 ">
      <div className=" bg-[#222630] relative   items-center overflow-hidden rounded-xl   px-12 py-12 container mx-auto">

        <div className="relative z-10 max-w-140">
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.12em] text-[#b7ff00]">
            Workout Library
          </p>

          <h1 className="max-w-150 text-5xl font-black uppercase leading-[0.92] tracking-[-0.03em] text-white sm:text-6xl">
            Train with intent. Log
            <br />
            every set.
          </h1>

          <p className="mt-5 max-w-120 text-[15px] leading-6 text-gray-400">
            FitLog is a dark, no-nonsense gym companion; pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="mt-6 rounded-md bg-[#b7ff00] px-5 py-3 text-[11px] font-bold uppercase text-black transition hover:bg-[#c8ff3d]">
            Browse Workouts
          </button>
        </div>

      
        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 md:block">
          
        <Image src={banner} alt='banner'>

        </Image>
        </div>

      </div>
    </section>
        </div>
    );
};

export default Banner;