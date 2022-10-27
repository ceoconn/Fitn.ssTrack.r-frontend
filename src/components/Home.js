import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-color.png';

const Home = ({ token }) => {

    return (
        <div id='welcome'>
            <h1 className={token ? 'hidden' : null}>Achieve your goals with Fitn.ss Track.r!</h1>



            {
                token ? (
                    <>
                        <p id='home-login-p'> Let's get to work! </p>
                        <div id='inline-options'>
                        <Link to='/my-routines' id="view-routine">View your routines</Link>
                        <Link to='/routines' id="view-all-routines">Checkout workout options</Link>
                        </div>
                        
                    
                        <img id='img' src={logo} alt='logo' />
                    </>

                )
                    : (
                    <>
                        <img id='img' src={logo} alt='logo' />
                        <p id='home-p'>Not a member? <Link to='/join' id='home-sign-up'>Sign Up</Link> and get to work!</p>
                    </>

                )
            }

        </div>
    )
}

export default Home;