import React, { useState } from 'react';

import { createNewRoutine } from '../api';

const MyRoutines = ({ token, fetchRoutines, routines, navigate, user }) => {
    const [createName, setName] = useState('');
    const [createGoal, setGoal] = useState('');

    
    const reverseRoutines = routines.reverse();

    async function addRoutine() {
        try {
            const newRoutine = {
                token: token,
                name: createName,
                goal: createGoal
            }

            await createNewRoutine(token, newRoutine)
            fetchRoutines();

            alert('success!')
            navigate('/routines')
        }
        catch (err) {
            console.error('addRoutine-myroutines.js FAILED:', err);
        }

    }

    return (
        <div id='new-routine'>
            <h3>Use this form to create a new routine!</h3>

            <form id='new-routine-form'>
                <input
                    type='text'
                    placeholder='Name of routine'
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type='text'
                    placeholder="What's the goal?"
                    onChange={(e) => setGoal(e.target.value)}
                />

                <button onClick={(e) => {
                    e.preventDefault();
                    addRoutine()
                }}>Create Routine</button>
            </form>

            <div id='user-routines'>
                <h1>Your Current Routines</h1>

                {
                    reverseRoutines.map((routine) => {
                        const { name, id, creatorId, goal, activities } = routine
                        
                        if (creatorId === user.id) {
                            return (
                                <div key={id}>
                                    <h3>{name}</h3>
                                    <p>goal: {goal}</p>
                                    <button>edit</button>
                                    <button>delete</button>
                                </div>
                            )
                        }
                    })
                }

            </div>

        </div>
    )
}

export default MyRoutines;