import React, { useState } from 'react';

const Routines = ({ routines }) => {

    const newRoutinesArr = [...routines]

    const reverseRoutines = newRoutinesArr.reverse()

    return (

        <div>
            <h1>Routines</h1>
            <div className='lists'>
            {
                reverseRoutines.map((routine) => {
                    const { name, id, creatorName, goal, activities } = routine

                    return (
                        <div key={id}>
                            <h3>{name}</h3>
                            <p>goal: {goal}</p>
                            <p>creator name: {creatorName}</p>
                            
                            {
                                // activities.map
                            }
                        </div>
                    )
                })
            }
            </div>


        </div>

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