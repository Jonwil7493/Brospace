import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <ul className='navbar-nav ms-auto'>

                    <li className='nav-item'>
                        <Link className='nav-link' to='/Dashboard'>Community Board</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/Challenges'>Daily Challenges</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/InterestGroups'>Interest Groups</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/Events'>Events</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/PersonalMessages'>Personal Messages</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/BrofilePage'>My Brofile</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
