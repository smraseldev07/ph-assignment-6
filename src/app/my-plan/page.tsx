"use client"

import { WorkoutContext } from "@/context/WorkoutContext"

import { useContext } from "react"

const MyplanPage = () => {
    const { todayplan } = useContext(WorkoutContext) 

    console.log(todayplan);
    
    return (
     
         
        <div>
            <h2>my plan </h2>
        </div>
    );
};

export default MyplanPage;