import React, { useState } from 'react';

const Routines = ({ routines }) => {
    return (
        // <h1>Routines</h1>

        
        routines.map((routine) => {
            const { name, id, creatorName, goal, activities } = routine

            return (
                <div key={id}>
                    <h3>{name}</h3>
                    <p>goal: {goal}</p>
                    <p>creator name: {creatorName}</p>
                </div>
            )
        }) 
        
       
        
    )
}

export default Routines;

// routines:

// activities
// : 
// []
// creatorId
// : 
// 882
// creatorName
// : 
// "Mar"
// goal
// : 
// "take dogs "
// id
// : 
// 2046
// isPublic
// : 
// true
// name
// : 
// "afternoon walk"


// activities:

// 0
// : 
// count
// : 
// 1
// description
// : 
// "Dont do it"
// duration
// : 
// 1
// id
// : 
// 1
// name
// : 
// "Not wide grip"
// routineActivityId
// : 
// 9494
// routineId
// : 
// 580