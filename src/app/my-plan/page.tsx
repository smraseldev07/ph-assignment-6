"use client"



import { WorkoutContext } from "@/context/WorkoutContext"
import { tworkout } from "@/types";
import Image from "next/image";
import Link from "next/link";


import { useContext, useState } from "react"
import { toast } from "react-toastify";

const MyplanPage = () => {
    const { todayplan, save, settodayplan, setsave } = useContext(WorkoutContext) as {
      todayplan: tworkout[];
      save: tworkout[];
      settodayplan: (plans: tworkout[]) => void;
      setsave: (plans: tworkout[]) => void;
    };

 
const handleRemove = (id: number) => {
  const newPlan = todayplan.filter((plan) => {
    return plan.id !== id;
  });
  const newsave = save.filter((plan) => {
    return plan.id !== id;
  });

  settodayplan(newPlan);
  setsave(newsave)
};

const handleDone = (plan: tworkout) => {
  settodayplan(todayplan.filter((item) => item.id !== plan.id));

  toast.success(`${plan.name} completed!`);
};

const [activeTab, setActiveTab] = useState("today");
    
    
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
      <h3 className="mt-1 text-2xl font-bold text-[#b7ff00]">
         {activeTab === "today" ? todayplan.length : save.length}
      </h3>
    </div>

    {/* Minutes */}
    <div className="border-r border-[#252932] px-4 py-5">
      <p className="text-[9px] text-gray-500">Minutes</p>
      <h3 className="mt-1 text-2xl font-bold">
         {activeTab === "today"
      ? todayplan.reduce((total, plan) => total + plan.duration, 0)
      : save.reduce((total, plan) => total + plan.duration, 0)}
      </h3>
    </div>

    {/* Calories */}
    <div className="px-4 py-5">
      <p className="text-[9px] text-gray-500">Calories</p>
      <h3 className="mt-1 text-2xl font-bold">
         {activeTab === "today"
      ? todayplan.reduce((total, plan) => total + plan.caloriesBurned, 0)
      : save.reduce((total, plan) => total + plan.caloriesBurned, 0)}
      </h3>
    </div>

  </div>
</section>
<div className="tabs tabs-box container mx-auto">
  <input onClick={() => setActiveTab("today")}  type="radio" name="my_tabs_6" className="tab" aria-label="Today's plan" defaultChecked/>
  <div  className="tab-content bg-base-100 border-base-300 p-6">
    {
        todayplan.map((plan : tworkout) =>{
            return <div key={plan.id} className="flex w-full items-center gap-4 rounded-2xl border border-slate-800 bg-[#11141a] p-2.5 text-white">

      {/* Image */}
      <Image
        src={plan.image}
        alt={plan.name}
        className="h-20 w-32 rounded-xl object-cover"
        width={200}
        height={80}
      />

      {/* Plan Info */}
      <div className="flex-1">
        <h2 className="text-sm font-bold uppercase tracking-wide">
          {plan.name}
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          {plan.muscleGroups.join(", ")}
        </p>

        <div className="mt-2 flex items-center gap-4 text-xs text-slate-300">
          <span>◷ {plan.duration} min</span>
          <span>🔥 {plan.caloriesBurned} kcal</span>
          <span>☆ {plan.rating}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
      
        <Link href={`/${plan.id}`} className="rounded-full border border-slate-700 px-5 py-2 text-xs text-white hover:bg-slate-800">
          View Details
        </Link>
    

      <button
  onClick={() => handleDone(plan)}
  className="rounded-full bg-lime-400 px-5 py-2 text-xs font-semibold text-black hover:bg-lime-300"
>
  ✓ Mark as Done
</button>
        <button  onClick={() => handleRemove(plan.id)} className="px-2 text-xl text-slate-500 hover:text-white">
          ×
        </button>
      </div>

    </div>
        })
    }
  </div>

  <input  onClick={() => setActiveTab("save")} type="radio" name="my_tabs_6" className="tab" aria-label="saved"  />
  <div className="tab-content bg-base-100 border-base-300 p-6">  {
        save.map((plan : tworkout) =>{
            return  <div key={plan.id} className="flex w-full items-center gap-4 rounded-2xl border border-slate-800 bg-[#11141a] p-2.5 text-white">

      {/* Image */}
      <Image
        src={plan.image}
        alt={plan.name}
        className="h-20 w-32 rounded-xl object-cover"
         width={200}
        height={80}
      />

      {/* Plan Info */}
      <div className="flex-1">
        <h2 className="text-sm font-bold uppercase tracking-wide">
          {plan.name}
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          {plan.muscleGroups.join(", ")}
        </p>

        <div className="mt-2 flex items-center gap-4 text-xs text-slate-300">
          <span>◷ {plan.duration} min</span>
          <span>🔥 {plan.caloriesBurned} kcal</span>
          <span>☆ {plan.rating}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
      
        <Link href={`/${plan.id}`} className="rounded-full border border-slate-700 px-5 py-2 text-xs text-white hover:bg-slate-800">
          View Details
        </Link>
    

      
        <button onClick={() => handleRemove(plan.id)} className="px-2 text-xl text-slate-500 hover:text-white">
          ×
        </button>
      </div>

    </div>
        })
    }</div>

 
</div>
        </div>
    );
};

export default MyplanPage;