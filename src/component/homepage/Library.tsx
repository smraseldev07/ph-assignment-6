import { tworkout } from '@/types';
import React from 'react';
import LibraryCard from '../shared/LibraryCard';

const getlibrary = async () =>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')

   const data = await res.json()
   
   return data;
}

const Library = async() => {
    const workouts = await getlibrary()

   
    
    return (
        <div className='container mx-auto my-6'>
           <div>
            <h1 className='font-bold text-3xl'>THE LIBRARY</h1>
            <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
           </div>

           <div className="my-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {
                workouts.map((workout:tworkout , ind : number) => {
                   return <LibraryCard workout = {workout} key={ind}></LibraryCard>
                })
            }
           </div>
        </div>
    );
};

export default Library;