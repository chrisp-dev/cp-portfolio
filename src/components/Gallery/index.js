import React from 'react';
import CatLeaderImg from '../../assets/Images/CATLeaderboard.png';
import codequizPng from '../../assets/Images/codequiz.png';
import tenderPng from '../../assets/Images/tender.PNG';
import pwgenPng from '../../assets/Images/pwgen.PNG';
import workschedulePng from '../../assets/Images/workschedule.png';
import weatherbPng from '../../assets/Images/weatherb.PNG';
export default function Gallery() {
    const projects = [
        { id: 2, name: 'Vanilla JS Code Quiz', imageSrc: codequizPng },
        { id: 1, name: 'CAT Auctions', imageSrc: CatLeaderImg },
        { id: 3, name: 'UW Project 1 - \'Tender', imageSrc: tenderPng },
        { id: 4, name: 'Password Generator', imageSrc: pwgenPng },
        { id: 5, name: 'Work Scheduler', imageSrc: workschedulePng },
        { id: 6, name: 'Weather Board', imageSrc: weatherbPng }
    ]

    return (
        <>
            <ul style={{ listStyle: 'none' }}>
                {projects.map(project => {
                    return (
                        <li key={project.id}>
                            <h3>{project.name}</h3>
                            <img style={{ width: '200px', height: '200px' }} src={project.imageSrc} alt={project.name} />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}