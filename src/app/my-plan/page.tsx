"use client"


import LibraryCard from "@/component/shared/LibraryCard";
import { WorkoutContext } from "@/context/WorkoutContext"
import { tworkout } from "@/types";

import { useContext } from "react"

const MyplanPage = () => {
    const { todayplan, save } = useContext(WorkoutContext) as {
      todayplan: tworkout[];
      save: tworkout[];
    };

    console.log(save);
    

    
    
    return (
     
         
        <div>
            <section className="px-7 py-5 text-white container mx-auto">
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
<div className="tabs tabs-box container mx-auto">
  <input type="radio" name="my_tabs_6" className="tab" aria-label="Today's plan" defaultChecked/>
  <div className="tab-content bg-base-100 border-base-300 p-6">
    {
        todayplan.map((plan : tworkout) =>{
            return <LibraryCard key={plan.id} workout={plan}></LibraryCard>
        })
    }
  </div>

  <input type="radio" name="my_tabs_6" className="tab" aria-label="saved"  />
  <div className="tab-content bg-base-100 border-base-300 p-6">  {
        save.map((plan : tworkout) =>{
            return <LibraryCard key={plan.id} workout={plan}></LibraryCard>
        })
    }</div>

 
</div>
        </div>
    );
};

export default MyplanPage;