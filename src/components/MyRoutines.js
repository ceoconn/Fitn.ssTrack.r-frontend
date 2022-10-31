import React, { useState } from 'react';
import { Paper, TextField, Button } from '@mui/material';

import Swal from 'sweetalert2';

import { createNewRoutine, deleteRoutine } from '../api';

const MyRoutines = ({ token, fetchRoutines, routines, user }) => {
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

            const results = await createNewRoutine(token, newRoutine)

            if (!results.id) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'That routine already exists!!',
                    confirmButtonColor: 'rgb(255, 42, 42)'
                })
            }
            else {
                fetchRoutines();
            }

        }
        catch (err) {
            console.error('addRoutine-myroutines.js FAILED:', err);
        }

    }

    async function handleDelete(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this",
            icon: 'warning',
            iconColor: 'rgb(255, 115, 0)',
            showCancelButton: true,
            confirmButtonColor: 'rgb(255, 42, 42)',
            cancelButtonColor: 'rgb(24, 23, 23)',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const results = await deleteRoutine(token, id)
                fetchRoutines();
                console.log('successful deletion', results)
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                    iconColor: 'rgb(255, 42, 42)',
                    confirmButtonColor: 'rgb(255, 42, 42)'
                }
                )
            }
        })

    }

    return (
        <div id='new-routine'>
            <h3>Use this form to create a new routine!</h3>

            <form id='new-routine-form'>
                <TextField
                    type='text'
                    variant='outlined'
                    placeholder='Name of routine'
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    type='text'
                    variant='outlined'
                    placeholder="What's the goal?"
                    onChange={(e) => setGoal(e.target.value)}
                />

                <Button
                    variant='contained'
                    style={{ backgroundColor: 'rgb(255, 42, 42)' }}
                    onClick={(e) => {
                        e.preventDefault();
                        addRoutine();
                    }}>Create Routine</Button>

            </form>

            <div id='user-routines'>
                <h1>Your Current Routines</h1>
                <div id='user-list' className='lists'>
                    {
                        reverseRoutines.map((routine) => {
                            const { name, id, creatorId, goal, activities } = routine
                            // getuserroutines or whatever api function
                            if (creatorId === user.id) {
                                return (
                                    <Paper key={id}
                                        elevation={5}
                                    >
                                        <h3>{name}</h3>
                                        <p>goal: {goal}</p>
                                        <Button
                                            variant='outlined'
                                            style={{ marginRight: '5px' }}
                                        >edit</Button>
                                        <Button
                                            style={{ marginLeft: '5px', backgroundColor: 'rgb(19, 19, 19)', color: 'white' }}
                                            variant='contained'
                                            onClick={() => handleDelete(id)}>delete</Button>
                                    </Paper>
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