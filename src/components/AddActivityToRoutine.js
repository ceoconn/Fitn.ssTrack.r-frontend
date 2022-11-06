import React, { useState } from "react";
import { TextField, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {
    addActivityToRoutine,

} from '../api'


const AddActivityToRoutine = ({ token, allActivities, fetchRoutines }) => {
    const { routine_id } = useParams()
    const [currentActivityId, setCurrentActivityId] = useState('default');
    const [count, setCount] = useState(0);
    const [duration, setDuration] = useState(0);
    
    const navigate = useNavigate();

    async function addActivity() {
        try {
           
            const addedActivity = {
                activityId: currentActivityId,
                count: count,
                duration: duration,
            }

            const result = await addActivityToRoutine(token, routine_id, addedActivity);
            
            navigate('/my-routines')
            fetchRoutines();
        }
        catch (err) {
            console.error('addActivityToRoutine-ActivityToRoutine.js FAILED:', err);
        }
    }

    return (
        <form id='add-activity-form' onSubmit={(e) => {
            e.preventDefault();
            addActivity();
        }}>
            <p><strong>Choose Activity</strong></p>

            <select name="Activities" value={currentActivityId} onChange={(e) => setCurrentActivityId(e.target.value)}>
                <option value="default">N/A</option>
                {
                    allActivities.map(activity => {

                        return (
                            <option value={activity.id}>{activity.name}</option>
                        )
                    })
                }
            </select>
            <p><strong>Count:</strong> </p>
            <TextField
                type='text'
                placeholder='Set Count'
                onChange={(e) => setCount(e.target.value)}
            />
            <p><strong>Duration:</strong> </p>
            <TextField
                text='text'
                placeholder='Set Duration'
                onChange={(e) => setDuration(e.target.value)}
            />
            <br></br>
            <br></br>
            <Button
                variant='contained'
                style={{ backgroundColor: 'rgb(255, 42, 42)' }}
                type='submit'
            >
                Add Activity To Routine
            </Button>
        </form>
    )

}

export default AddActivityToRoutine;