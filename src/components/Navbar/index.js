import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <React.Fragment>
            <nav>
                <Link to="/">Home</Link>
                <br />
                <Link to="/portfolio">Portfolio</Link>
            </nav>
        </React.Fragment>
    )
}