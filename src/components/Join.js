import React, { useState } from 'react';
import { registerUser } from '../api';
import { Link } from 'react-router-dom';


const Join = ({ setToken, navigate }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async () => {
        const results = await registerUser(username, password);
        console.log('RESULTS-join.js:', results)
        if (results.success) {
            setToken(results.data.token);
            window.localStorage.setItem('token', results.data.token);
            navigate('/my-routines');
        } else {
            setError(true);
            console.log(results.error.message)
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
                <input
                    type='text'
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type='submit'
                    id='reg-but'>
                    Join!
                </button>
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