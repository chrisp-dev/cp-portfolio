import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact(props) {
    return (
        <>
            <ul>
                <li>
                    <label><FontAwesomeIcon icon="mobile-alt"></FontAwesomeIcon> Cell:</label> (206) 555 9908
                </li>
                <li>
                    <label><FontAwesomeIcon icon="briefcase"></FontAwesomeIcon> Email:</label> chris.paradeise@gmail.com
                </li>
                <li>
                    <label><FontAwesomeIcon icon={['fab', 'github']}></FontAwesomeIcon> Github:</label> <a href="https://github.com/chrisp-dev">chrisp-dev</a>
                </li>
                <li>
                    <label><FontAwesomeIcon icon={['fab', 'linkedin']}></FontAwesomeIcon> Linkedin:</label> <a href="https://linkedin.com/in/cparadeise">cparadeise</a>
                </li>
            </ul>
        </>
    )
}