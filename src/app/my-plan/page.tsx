"use client"

import { WorkoutContext } from "@/context/WorkoutContext"

import { useContext } from "react"

const MyplanPage = () => {
    const { todayplan , save } = useContext(WorkoutContext) 

    console.log(save);
    

    
    
    return (
     
         
        <div>
            <section className="bg-[#0d0f12] px-7 py-5 text-white container mx-auto">
  <div>
    <h2 className="text-lg font-bold uppercase">My Plan</h2>
    <p className="mt-1 text-[10px] text-gray-400">
      Cap of five lifts for today. Finish them, then load more.
    </p>
  </div>

  <div className="mt-4 grid grid-cols-3 rounded-xl border border-[#252932] bg-[#111419]">
    
    {/* Exercises */}
    <div className="border-r border-[#252932] px-4 py-5">
      <p className="text-[9px] text-gray-500">Exercises</p>
      <h3 className="mt-1 text-2xl font-bold text-[#b7ff00]">0</h3>
    </div>

    {/* Minutes */}
    <div className="border-r border-[#252932] px-4 py-5">
      <p className="text-[9px] text-gray-500">Minutes</p>
      <h3 className="mt-1 text-2xl font-bold">0</h3>
    </div>

    {/* Calories */}
    <div className="px-4 py-5">
      <p className="text-[9px] text-gray-500">Calories</p>
      <h3 className="mt-1 text-2xl font-bold">0</h3>
    </div>

  </div>
</section>
        </div>
    );
};

export default MyplanPage;