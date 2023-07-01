import React from 'react';
import MySkills from './My skills/MySkills';
import AboutMe from './About me/AboutMe';
import styles from './AboutAndSkills.module.css'

const AboutAndSkills = props => {

    return (
        <div className={styles['about-and-skills-container']}>
            <AboutMe />
            <MySkills imgLinks={props.imgLinks} />
        </div>
    );
}

export default AboutAndSkills;