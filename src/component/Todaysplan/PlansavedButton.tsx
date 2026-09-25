"use client"
import { WorkoutContext } from '@/context/WorkoutContext';
import { tworkout } from '@/types';
import Link from 'next/link';
import React, { useContext } from 'react';

const PlansavedButton = () => {
    const { todayplan, save } = useContext(WorkoutContext) as {
        todayplan: tworkout[];
        save: tworkout[];
    };
    return (
        <div>
            <ul className='flex gap-3'>
                    <Link href='/my-plan'>Plan <span className='bg-[#C2F800] py-1 px-1.5 rounded-4xl text-black'>{todayplan.length}</span></Link>
                    <Link href='/my-plan'>Saved <span className='border py-1 px-1.5 rounded-4xl'>{save.length}</span></Link>

                </ul>
        </div>
    );
};

export default PlansavedButton;