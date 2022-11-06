import React, { useState } from "react";
import { TextField, Button } from '@mui/material';
import {
    updateRoutineActivity,

} from '../api'

const EditRoutineActivity = ({token, routineActivityId, count, duration, fetchRoutines}) => {
    const [newCount, setNewCount] = useState(count)
    const [newDuration, setNewDuration] = useState(duration)
    
    const [editing, setEditing] = useState(false)

    async function editRoutineActivity() {
        const updatedRoutineActivity = {
            
            count: newCount,
            duration: newDuration,
            
        }
        const response = await updateRoutineActivity(token, routineActivityId, updatedRoutineActivity)
        fetchRoutines()
    }

    return (


        
        <form id='edit-routine-form' onSubmit={ (e) => {
            e.preventDefault();
            editRoutineActivity();
            
            setEditing(true)
        }}>
            
            <TextField
                type='text'
                placeholder='New Count'
                onChange={(e) => setNewCount(e.target.value)}
            />
            
            <TextField
                text='text'
                placeholder='New Duration'
                onChange={(e) => setNewDuration(e.target.value)}
            />

            <Button
                variant='contained'
                style={{ backgroundColor: 'rgb(255, 42, 42)' }}
                type='submit'
            >
                Change Count & Duration
            </Button>
        </form>
        
    )
}







export default EditRoutineActivity;