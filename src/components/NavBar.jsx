import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                 <h1>Tuner</h1>
            </Link>
            
            <ul>
                <Link to="/playlist">
                   <li>Playlist</li>
                </Link>
               <Link to="/new">
                  <li>Add Song</li>
                </Link>
                
            </ul>
        </nav>
    );
};

export default NavBar;