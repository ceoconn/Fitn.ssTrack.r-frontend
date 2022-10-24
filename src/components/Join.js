import React, { useState } from 'react';
import { registerUser } from '../api';
import { Link } from 'react-router-dom';


const Join = ({ setToken, navigate }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState(false);

    const handleSubmit = async () => {
        const results = await registerUser(username, password);
        if (results.success) {
            setToken(results.data.token);
            window.localStorage.setItem('token', results.data.token);
            // navigate('/profile');
        } else {
            // setError(true);
            console.log(results.error.message)
            console.log('user exists')
        }
    }

    return (
        <div>
        
        <h1 id='join-text'>Join and reach your goals!</h1>

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
            {/* <p className={!error ? 'hidden' : 'error'}>
                Whoops! Those credentials already exist, try <Link to='/login'>signing in</Link> instead, or make up something else!
            </p> */}
        </form>

        </div>
    )

}


export default Join;

// could be combined with Login
// from workshop: "could be alternatively created as a modal or part of the header/footer"