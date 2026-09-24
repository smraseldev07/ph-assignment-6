
"use client"

import React, { createContext, useState } from 'react';

const WorkoutContext = createContext({})

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {

    const [todayplan , settodayplan] = useState([])
    const [save , setsave] = useState([])

    const shareddata = {
        todayplan , 
        settodayplan,
        save , 
        setsave,
    }
    
    return <WorkoutContext.Provider value={shareddata}>
     {children}
    </WorkoutContext.Provider>
};

export default WorkoutProvider;