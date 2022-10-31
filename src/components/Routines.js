import React, { useState } from 'react';
import { Paper } from '@mui/material';

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
                            <Paper key={id}
                                elevation={5}
                            >
                                <h3>{name}</h3>
                                <p><strong>goal:</strong> {goal}</p>
                                <p><strong>creator name:</strong> {creatorName}</p>
                                <p style={{textDecoration:'underline'}}><strong>activities:</strong></p>
                                <div id='routine-activities'>
                                {
                                    activities.map((activity) => {
                                        const { name, description, count, duration } = activity

                                        return (
                                            <div id='each-activity'>
                                                
                                                <p><strong>name:</strong> {name}</p>
                                                <p><strong>description:</strong> {description}</p>
                                                <p><strong>count:</strong> {count}</p>
                                                <p><strong>duration:</strong> {duration}</p>
                                                
                                            </div>

                                        )
                                    })
                                }
                                </div>
                                
                            </Paper>
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