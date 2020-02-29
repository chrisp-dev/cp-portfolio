import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <>
            <div className="relative top-0 left-0 text-gray-200 p-4 m-4">

                {/* <FontAwesomeIcon icon="bars" className={props.transparent ? "text-white" : "text-gray-800"}></FontAwesomeIcon> */}
                <h3> C.Paradeise</h3>
                <nav className="navbar p-4">
                    <Link className="m-4" style={{ zIndex: 99999 }} to="/">Home</Link>
                    <Link className="m-4" to="/portfolio">Portfolio</Link>
                    <Link className="m-4" to="/resume">Resume</Link>
                </nav>
                <p>Web Developer</p>
            </div>
        </>
    )
}