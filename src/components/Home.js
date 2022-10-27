import React from 'react';
import { Link } from 'react-router-dom';
import logo from './fitn.ss_logo.jpg';

const Home = ({ token }) => {

    return (
        <div id='welcome'>
            <h1>Achieve your goals with Fitn.ss Track.r!</h1>

            <img id='img' src={logo} alt='logo' />

            {
                token ? 
                    <p style={{ fontWeight:'bold', fontSize:'25px', color:'' }}> Let's get to work! Start building out the routines to start your journey </p>
                 : 
                    <p>Not a member? <Link to='/join' id='home-sign-up'>Sign Up</Link> and get to work!</p>
                
            }
        
        </div>
    )
}

export default Home;