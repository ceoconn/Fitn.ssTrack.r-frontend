import React from 'react';
import { Link } from 'react-router-dom';

// will need to bring in token and other props as needed (such as showing logout when logged in)
const Navbar = () => {

    return (
        <header>
            <nav id='nav'>
                <Link to='/'>Home</Link>
                <Link to='/routines'>Routines</Link>
                <Link to='/my-routines'>My Routines</Link>
                <Link to='/activities'>Activities</Link>
                <Link to='/login'>Log in</Link>
                <Link to='/join'>Join</Link>
            </nav>
        </header>
    )
}


export default Navbar;