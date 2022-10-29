import React, { useState } from 'react';
import { loginUser } from '../api';
import { Link } from 'react-router-dom';


const Login = ({ setToken, navigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async () => {
        const results = await loginUser(username, password);

        if (results.token) {
            setToken(results.token);
            window.localStorage.setItem('token', results.token);
            navigate('/')
        } else {
            setError(true);
            console.log('LOGIN FAIL', results);
        }
    }

    return (
        <div>
            <h1 id='login-text'>Welcome back! Ready to get to work?</h1>

            <form
                id='login'
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                    setError(false);
                }}
            >
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
                    type='submit'>
                    Login
                </button>
                <p>Don't have an account? <Link to='/join' className='switch-text'>Join today!</Link></p>

                <p className={!error ? 'hidden' : 'error'}>
                    Incorrect username or password
                </p>

            </form>
        </div>

    )

}

export default Login;

// could be combined with Register
// from workshop: "could be alternatively created as a modal or part of the header/footer"