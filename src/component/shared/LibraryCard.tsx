import { tworkout } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LibraryCard = ({workout} : {workout : tworkout} ) => {
    return (
        <Link href={`/${workout.id}`}>
                <div  className="ke group w-full max-w-[320px] overflow-hidden rounded-lg border border-white/10 bg-[#111216]">
      
      <div className="relative h-44 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          width={700}
          height={80}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {/* Difficulty */}
        <span className="absolute right-3 top-3 rounded bg-[#b7ff00] px-2 py-1 text-[10px] font-bold uppercase text-black">
          {workout.difficulty}
        </span>
      </div>

      <div className="p-4">
        <h2 className="font-['Barlow_Condensed'] text-2xl font-black uppercase leading-none text-white">
          {workout.name}
        </h2>

        <p className="mt-2 text-xs text-gray-500">
          {workout.muscleGroups.join(" • ")}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-gray-400">
          <span>{workout.sets} Sets</span>
          <span>{workout.reps} Reps</span>
          <span>{workout.duration} Min</span>
        </div>
      </div>
    </div>
        </Link>
    );
};

export default LibraryCard;