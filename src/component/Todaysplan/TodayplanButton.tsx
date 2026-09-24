'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import { tworkout } from '@/types';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';



const TodayplanButton = ({detail} : {detail : tworkout}) => {
  const { todayplan, settodayplan } = useContext(WorkoutContext) as {
    todayplan: tworkout[];
    settodayplan: React.Dispatch<React.SetStateAction<tworkout[]>>;
  };

    const handletodayplan = () => {
         if (todayplan.some(item => item.id === detail.id)) {
toast.error('Invalid Already Added', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
    return;
  }
   
    console.log('kutu' , detail);
    settodayplan([...todayplan, detail])
    toast.success('Added', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
    
}
    return (
        
            <button onClick={() => handletodayplan()} className="inline-flex h-8 items-center gap-2 rounded-md bg-[#b7ff00] px-4 text-[10px] font-bold text-black transition hover:bg-[#c8ff35]">
                <span>▣</span>
                Add to today Plan
              </button>
      
    );
};

export default TodayplanButton;