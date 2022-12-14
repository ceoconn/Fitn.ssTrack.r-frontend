import React, { useState } from 'react';
import { registerUser } from '../api';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';


const Join = ({ setToken, navigate }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async () => {
        const results = await registerUser(username, password);
        console.log('RESULTS-join.js:', results)
        if (results.token) {
            setToken(results.token);
            window.localStorage.setItem('token', results.token);
            navigate('/');
        } else {
            setError(true);
            console.log(results.message)
            console.log('user exists')
        }
    }

    return (
        <div>

            <h1 id='join-text'>Get started on your fitness journey today</h1>

            <form id='join'
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit()
                }}>
                <TextField
                    type='text'
                    variant='outlined'
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    type='password'
                    variant='outlined'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant='contained'
                    style={{ backgroundColor: 'rgb(255, 42, 42)' }}
                    type='submit'
                    id='reg-but'
                    >
                    Join!
                </Button>
                <p className={!error ? null : 'hidden'}>Already have an account? <Link to='/login' className='switch-text'>Login instead!</Link></p>

                <p className={!error ? 'hidden' : 'error'}>
                    Whoops! Those credentials already exist, try <Link to='/login' className='switch-text'>signing in</Link> instead, or make up something else!
                </p>

            </form>

        </div>
    )

}


export default Join;

// could be combined with Login
// from workshop: "could be alternatively created as a modal or part of the header/footer"