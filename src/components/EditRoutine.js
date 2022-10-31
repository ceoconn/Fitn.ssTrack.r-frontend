import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useParams } from 'react-router-dom';


const EditRoutine = ({ routines, token, fetchRoutines, navigate }) => {
    const { routine_id } = useParams();
    console.log('routine idddd', routine_id)

    const currRoutine = routines.filter(routine => routine.id === routine_id)
    console.log('probs errorrr', routine)

    const [newName, setNewName] = useState('');
    const [newGoal, setNewGoal] = useState('');

    return (
        <form id='edit-routine-form'>
            <TextField
                type='text'
                placeholder='updated routine name'
                // onChange={(e) => setNewName(e.target.value)}
            />
            <TextField
                text='text'
                placeholder='updated routine goal'
                // onChange={(e) => setNewGoal(e.target.value)}
            />
        </form>
    )
}

export default EditRoutine;