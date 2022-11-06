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
    EditRoutine,
    AddActivityToRoutine,
} from './components';

import { getAllActivities, getPublicRoutines, getUserDetails  } from './api'

import { CssBaseline } from '@mui/material';

const App = () => {
    const [token, setToken] = useState('');
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    const [user, setUser] = useState({});
    const [userRoutines, setUserRoutines] = useState([]);

    const navigate = useNavigate();

    function logout() {
        window.localStorage.removeItem('token');
        setToken('')
    }

    async function fetchRoutines() {
        const results = await getPublicRoutines();
        setRoutines(results);

    }

    // async function fetchMyRoutines() {
    //     const results = await getUserRoutines();
    //     setUserRoutines(results)
    // }

    async function fetchActivities() {
        const results = await getAllActivities();
        setActivities(results)
    }

    async function getMe() {
        const storedToken = window.localStorage.getItem('token');

        if (!token) {
            if (storedToken) {
                setToken(storedToken);
            }
            return;
        }

        const results = await getUserDetails(token)

        if (results.username) {
            setUser(results);

        } else {
            console.log(results.message);
        }
    }

    useEffect(() => {
        fetchRoutines();
        // fetchMyRoutines();
    }, [])

    useEffect(() => {
        fetchActivities()
    }, [])

    useEffect(() => {
        getMe();
    }, [token])

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
                        token={token}
                        user={user}
                        fetchRoutines={fetchRoutines}
                        routines={routines}
                        userRoutines={userRoutines}
                        
                    />}
                />
                <Route
                    path='/activities'
                    element={<Activities
                        token={token}
                        activities={activities}
                        fetchActivities={fetchActivities}
                    />}
                />
                <Route
                    path='/edit-routine/:routine_id'
                    element={<EditRoutine
                        token={token}
                        navigate={navigate}
                        fetchRoutines={fetchRoutines}
                        routines={routines}
                        allActivities={activities}
                    />}
                    
                />
                <Route
                    path='/edit-routine/:routine_id/add-activity'
                    element={<AddActivityToRoutine
                        token={token}
                        navigate={navigate}
                        fetchRoutines={fetchRoutines}
                        routines={routines}
                        allActivities={activities}
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