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
    MyRoutines,
    Profile
} from './components';

import { getAllActivities, getPublicRoutines } from './api'

import { CssBaseline } from '@mui/material';

const App = () => {
    const [token, setToken] = useState('');
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);

    const navigate = useNavigate();

    function logout() {
        window.localStorage.removeItem('token');
        setToken('')
    }

    async function fetchRoutines() {
        const results = await getPublicRoutines();
        setRoutines(results);

    }

    async function fetchActivities() {
        const results = await getAllActivities();
        setActivities(results)
    }

    useEffect(() => {
        fetchRoutines();
    }

    )

    useEffect(() => {
        fetchActivities()
    })

    return (
        <div>

            <Navbar
                logout={logout}
                token={token}
            />
            <Routes>
                <Route
                    path='/'
                    element={<Home
                        token={token}
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
                <Route
                    path='/routines'
                    element={<Routines
                        routines={routines}
                    />}
                />
                <Route
                    path='/my-routines'
                    element={<MyRoutines
                    // props
                    />}
                />
                <Route
                    path='/activities'
                    element={<Activities
                        activities={activities}
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