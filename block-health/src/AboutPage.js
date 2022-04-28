import React from "react";
import chanceImg from './img/chance.png'
import jordanImg from './img/jordan.png'
import jacobImg from './img/jacob.png'
import spencerImg from './img/spencer.png'
import yashasviImg from './img/yashasvi.png'

export function AboutPage() {
    return (
        <div className="aboutContainer">
            <div className="aboutText">
                <h1>About the Project</h1>
                <h3>
                    BlockHealth is a Capstone Project for the Information School at the University
                    of Washington. Development took place over Winter and Spring 2022 Quarters

                    The project is sponsored by Frank Martinex of Last Myle LLC.
                </h3>
            </div>
            <div className="aboutLayout">
                <div className='aboutCard'>
                    <img className="aboutImg" src={chanceImg} alt="Chance Landis"/>
                    <h4>Chance Landis</h4>
                </div>
                <div className='aboutCard'>
                    <img className="aboutImg" src={jordanImg} alt="Jordan Jones"/>
                    <h4>Jordan Jones</h4>
                </div>
                <div className='aboutCard'>
                    <img className="aboutImg" src={jacobImg} alt="Jacob Strozyk"/>
                    <h4>Jacob Strozyk</h4>
                </div>
                <div className='aboutCard'>
                    <img className="aboutImg" src={spencerImg} alt="Spencer Pudists"/>
                    <h4>Spencer Pudists</h4>
                </div>
                <div className='aboutCard'>
                    <img className="aboutImg" src={yashasviImg} alt="Yashasvi J"/>
                    <h4>Yashasvi J</h4>
                </div>
            </div>
        </div>
    );
}