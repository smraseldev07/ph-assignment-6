
import React from 'react';
import Image from 'next/image';

interface propparam {
    params : {
        id : string
    }
}


const getlibrarydetail = async () =>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')

   const data = await res.json()
   
   return data;
}

const WorkoutDetail = async({params} : propparam) => {

    const {id} = await params

    const alldetail = await getlibrarydetail()

    const detail = alldetail.find((detail: { id: number; }) => detail.id === Number(id))

    console.log(detail);
    




    



    
    return (
        <div>
           <main className="min-h-screen bg-[#0d0f12] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-275 border-t border-[#1c2027] pt-7">

        <div className="grid gap-8 lg:grid-cols-[350px_1fr]">

          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <Image
              src={detail.image}
              alt={detail.name}
              width={350}
              height={470}
              className="h-117.5 w-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="min-w-0">

            {/* Title */}
            <h1 className="font-['Barlow_Condensed'] text-3xl font-black uppercase leading-none tracking-tight text-white">
              {detail.name}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-162.5 text-[12px] leading-[1.6] text-gray-400">
              {detail.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-3 flex flex-wrap gap-2">
              {detail.muscleGroups.map((muscle: boolean | React.Key | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | null | undefined> | null | undefined) => (
                <span
                  key={String(muscle)}
                  className="rounded-full bg-[#b7ff00] px-3 py-1 text-[9px] font-bold text-black"
                >
                  {String(muscle)}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-4 overflow-hidden rounded-lg border border-[#242932] bg-[#15181e]">

              <div className="flex min-h-11 items-center justify-between border-b border-[#22262e] px-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-gray-500">
                  Equipment
                </span>
                <span className="text-[10px] text-gray-300">
                  {detail.equipment}
                </span>
              </div>

              <div className="flex min-h-11 items-center justify-between border-b border-[#22262e] px-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-gray-500">
                  Difficulty
                </span>
                <span className="text-[10px] text-gray-300">
                  {detail.difficulty}
                </span>
              </div>

              <div className="flex min-h-11 items-center justify-between border-b border-[#22262e] px-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-gray-500">
                  Sets
                </span>
                <span className="text-[10px] text-gray-300">
                  {detail.sets}
                </span>
              </div>

              <div className="flex min-h-11 items-center justify-between border-b border-[#22262e] px-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-gray-500">
                  Reps
                </span>
                <span className="text-[10px] text-gray-300">
                  {detail.reps}
                </span>
              </div>

              <div className="flex min-h-11 items-center justify-between border-b border-[#22262e] px-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-gray-500">
                  Duration
                </span>
                <span className="text-[10px] text-gray-300">
                  {detail.duration} min
                </span>
              </div>

              <div className="flex min-h-11 items-center justify-between border-b border-[#22262e] px-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-gray-500">
                  Calories
                </span>
                <span className="text-[10px] text-gray-300">
                  {detail.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex min-h-11 items-center justify-between px-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-gray-500">
                  Rating
                </span>
                <span className="text-[10px] text-gray-300">
                  {detail.rating}
                </span>
              </div>

            </div>

            {/* Instructions */}
            <div className="mt-5">
              <h2 className="text-[11px] font-black uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-3 space-y-2">
                {detail.instructions.map((instruction: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: number) => (
                  <li
                    key={index}
                    className="flex gap-3 text-[10px] leading-5 text-gray-400"
                  >
                    <span className="shrink-0 text-gray-500">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">

              <button className="inline-flex h-8 items-center gap-2 rounded-md bg-[#b7ff00] px-4 text-[10px] font-bold text-black transition hover:bg-[#c8ff35]">
                <span>▣</span>
                Add to today&apos;s plan
              </button>

              <button className="inline-flex h-8 items-center gap-2 rounded-md border border-[#343943] px-4 text-[10px] font-medium text-gray-300 transition hover:border-gray-500 hover:text-white">
                <span>♡</span>
                Save for later
              </button>

            </div>

          </div>
        </div>
      </div>
    </main>
        </div>
    );
};

export default WorkoutDetail;