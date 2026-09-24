'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import { tworkout } from '@/types';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';



const SavelaterButton = ({detail} : {detail : tworkout}) => {
  const { save, setsave } = useContext(WorkoutContext) as {
    save: tworkout[];
    setsave: React.Dispatch<React.SetStateAction<tworkout[]>>;
  };

    const handlesavelater = () => {
         if (save.some(item => item.id === detail.id)) {
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
    setsave([...save, detail])
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
        
           <button onClick={() => handlesavelater()} className="inline-flex h-8 items-center gap-2 rounded-md border border-[#343943] px-4 text-[10px] font-medium text-gray-300 transition hover:border-gray-500 hover:text-white">
                <span>♡</span>
                Save for later
              </button>
    );
};

export default SavelaterButton;