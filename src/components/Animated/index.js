import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import useInterval from 'react-useinterval';
import './style.css';
import Gallery from '../Gallery';
import CatLeaderImg from '../../assets/Images/CATLeaderboard.png';
import codequizPng from '../../assets/Images/codequiz.png';
import tenderPng from '../../assets/Images/tender.PNG';
import pwgenPng from '../../assets/Images/pwgen.PNG';
import workschedulePng from '../../assets/Images/workschedule.png';
import weatherbPng from '../../assets/Images/weatherb.PNG';
import Card from '../Card';
import moshPNG from '../../assets/Images/mosh.PNG';
import proj2Png from '../../assets/Images/proj2.PNG';
import Contact from '../Contact';

const pages = [
    ({ style }) => <animated.div style={{ ...style, background: 'rgba(200,40,40,0.2)' }}>
        <Card
            synopsis="Built with AngularJS Frontend and ColdFusion Backend"
            imgSrc={proj2Png}
            alt="Cat Auction Services Live Bidding Leaderboard" />
        <Card
            imgSrc={tenderPng} alt="UW Project 1 - 'Tender Drink Selector"
            synopsis="Built with VanillaJS, Bootstrap, jQuery and third-party Drink API" />
        <Card
            imgSrc={moshPNG} alt="UW Project 3 - MOSH Social App"
            synopsis="Built with ReactJS, MySQL, Sequelize, Express, Socket.IO, React-Spring and TailwindCSS" />
    </animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'rgba(40,210,20,0.2)' }}>
        <Card
            synopsis="Built with AngularJS Frontend and ColdFusion Backend"
            imgSrc={CatLeaderImg}
            alt="Cat Auction Services Live Bidding Leaderboard" />
        <Card
            imgSrc={codequizPng} alt="JavaScript Quiz"
            synopsis="Built with VanillaJS, HTML, CSS" />
        <Card
            imgSrc={workschedulePng} alt="9-5 Work Scheduler"
            synopsis="Built with Dynamic jQuery DOM Manipulation" />
    </animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'rgba(40,10,210,0.2)' }}>
        <Contact />
    </animated.div>,
]

export default function AnimatedComponent() {
    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % 3), [])
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
        unique: true
    })
    return (
        <div className="simple-trans-main" onClick={onClick}>
            {transitions.map(({ item, props, key }) => {
                const Page = pages[item]
                return <Page key={key} style={props} />
            })}
        </div>
    )
}