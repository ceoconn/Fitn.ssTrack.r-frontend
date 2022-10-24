import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import './style.css';
import {
    Navbar,
    Home,
    Login,
    Join,
    Activities,
    Routines,
    MyRoutines
} from './components';

import { CssBaseline } from '@mui/material';

const App = () => {
    // states and tokens and calling some api functions
    const [token, setToken] = useState('');

    const navigate = useNavigate();

    return (
        <div>

            <Navbar
            //  pass props: logout={logout} token={token} when ready/made 
            />
            <Routes>
                <Route
                    path='/'
                    element={<Home
                    //  pass needed props here
                    // token and user for custom greeting
                    />}
                />
                <Route
                    path='/join'
                    element={<Join
                        setToken={setToken}
                        token={token}
                        navigate={navigate}
                    />}
                />
                <Route
                    path='/login'
                    element={<Login
                        setToken={setToken}
                        token={token}
                        navigate={navigate}
                    />}
                />
            </Routes>
        </div>
    )
}

const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);
root.render(
    <CssBaseline>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CssBaseline>
);