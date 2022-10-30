import React, { useState } from 'react';
import { useParams } from 'react-router-dom'

import { createNewRoutine, deleteRoutine } from '../api';

const MyRoutines = ({ token, fetchRoutines, routines, navigate, user }) => {
    const [createName, setName] = useState('');
    const [createGoal, setGoal] = useState('');


    const newRoutinesArr = [...routines]
    const reverseRoutines = newRoutinesArr.reverse();

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

    async function handleDelete (id) {
        console.log(id)
        const results = await deleteRoutine(token, id)
        console.log('resultss', results)
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
                <div className='lists'>
                {
                    reverseRoutines.map((routine) => {
                        const { name, id, creatorId, goal, activities } = routine
                        // getuserroutines
                        if (creatorId === user.id) {
                            return (
                                <div key={id}>
                                    <h3>{name}</h3>
                                    <p>goal: {goal}</p>
                                    <button>edit</button>
                                    <button onClick={() => handleDelete(id)}>delete</button>
                                </div>
                            )
                        }
                    })
                }
                </div>
           

            </div>

        </div>
    )
}

export default MyRoutines;