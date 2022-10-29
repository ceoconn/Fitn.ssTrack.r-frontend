import React, { useState } from 'react';

import { createNewRoutine } from '../api';

const MyRoutines = ({ token, fetchRoutines, navigate }) => {
    const [createName, setName] = useState('');
    const [createGoal, setGoal] = useState('');

    async function addRoutine () {
        try{
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
            <h2>Use this form to create your own routine!</h2>

            <form id='new-routine-form'>
                <input
                type='text'
                placeholder='Name of routine'
                onChange={ (e) => setName(e.target.value) }
                />
                <input
                type='text'
                placeholder='Describe the technique'
                onChange={ (e) => setGoal(e.target.value) }
                />

                <button onClick={ () => addRoutine() }>Create Routine</button>
            </form>
        </div>
        
    )
}

export default MyRoutines;