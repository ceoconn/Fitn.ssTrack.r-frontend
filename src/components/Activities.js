import React, { useState } from 'react';

import { createNewActivity } from '../api';

const Activities = ({ token, activities, fetchActivities }) => {
    const [createName, setName] = useState('');
    const [createDesc, setDesc] = useState('');

    async function addActivity () {
        try{
            const newActivity = {
                token: token,
                name: createName,
                description: createDesc
            }
            
            await createNewActivity(token, newActivity);
            fetchActivities();

            alert('success!')
        }
        catch (err) {
            console.error('addActivity-activities.js FAILED:', err);
        }
       
    }

    return (
        <div>
            <h1>Activities</h1>
            <form>
                <h2>Create a new activity</h2>
                <input
                type='text'
                placeholder='Name'
                onChange={ (e) => setName(e.target.value) }
                />
                <input
                type='text'
                placeholder='Describe activity'
                onChange={ (e) => setDesc(e.target.value) }
                />
                <button onClick={ (e) => {
                    e.preventDefault();
                    addActivity() 
                }}>Create Activity</button>
            </form>

            {
                activities.map((activity) => {
                    const { name, id, description } = activity

                    return (
                        <div key={id}>
                            <h3>{name}</h3>
                            <p>description: {description}</p>
                        </div>
                    )
                })
            }

        </div>



    )
}

export default Activities;