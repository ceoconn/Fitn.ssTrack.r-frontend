import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <div id='welcome'>
            <h1>Achieve your goals with Fitn.ss Track.r!</h1>
            {/* {
                token ? ( */}
          {/* sign up will be link */}
            <p>Not a member? <Link to='/join' id='home-sign-up'>Sign Up</Link> and get to work!</p>
            {/* } */}

        </div>
    )
}

export default Home;