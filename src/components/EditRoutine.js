import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { updateRoutine } from '../api';


const EditRoutine = ({ routines, token, fetchRoutines, navigate }) => {
    const { routine_id } = useParams();

    // why does it work with loosely equals but not strictly?
    const [currRoutine] = routines.filter(routine => routine.id == routine_id)
    const { name, goal, isPublic, id, } = currRoutine;
    
    const [newName, setNewName] = useState(name);
    const [newGoal, setNewGoal] = useState(goal)
    const [newIsPublic, setNewIsPublic] = useState(isPublic);

    async function editRoutine() {
        try{
            const editedRoutine = {
                token: token,
                name: newName,
                goal: newGoal,
                isPublic: newIsPublic,
                id: id
            }
    
            await updateRoutine(token, editedRoutine);
            navigate('/my-routines')
            fetchRoutines();
        }
        catch (err) {
            console.error('editRoutine-editroutine.js FAILED:', err);
        }
        
    }

    return (
        <form id='edit-routine-form' onSubmit={ (e) => {
            e.preventDefault();
            editRoutine();
        }}>
            <p><strong>Current Routine Name:</strong> {name}</p>
            <TextField
                type='text'
                placeholder='updated routine name'
                onChange={(e) => setNewName(e.target.value)}
            />
            <p><strong>Current Routine Goal:</strong> {goal}</p>
            <TextField
                text='text'
                placeholder='updated routine goal'
                onChange={(e) => setNewGoal(e.target.value)}
            />

            <Button
                variant='contained'
                style={{ backgroundColor: 'rgb(255, 42, 42)' }}
                type='submit'
            >
                Submit Edits
            </Button>
            <Button
                variant='outlined'
                //style={{ marginRight: '5px' }}
            ><Link to={`/edit-routine/${id}/add-activity`} style={{textDecoration:'none', color:'black'}}>Add an Activity</Link></Button>
        </form>
    )
}

export default EditRoutine;