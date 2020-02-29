import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faMobileAlt, faBars, faArrowAltCircleDown, faCoffee, faCheck, faRecordVinyl, faSave, faAddressBook, faBriefcase } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faGithub, faLinkedin, faMobileAlt, faBars, faArrowAltCircleDown, faBriefcase, faCheckSquare, faCoffee, faCheck, faRecordVinyl, faSave, faAddressBook);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
