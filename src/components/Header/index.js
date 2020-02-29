import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(props) {
    return (
        <>
            <div className="absolute top-0 left-0 text-gray-200 p-4 m-4">

                {/* <FontAwesomeIcon icon="bars" className={props.transparent ? "text-white" : "text-gray-800"}></FontAwesomeIcon> */}
                <h3> C.Paradeise</h3>
                <p>Web Developer</p>
            </div>
        </>
    )
}