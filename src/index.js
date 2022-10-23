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

const App = () => {
    // states and tokens and calling some api functions

    return (
        <div>
            {/* <Navbar logout={logout} token={token} /> */}
            <Routes>
                <Route
                    path='/'
                    element={<Home
                    //  pass needed props here
                    />}
                />
            </Routes>
        </div>
    )
}

const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);