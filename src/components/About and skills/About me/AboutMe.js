import React from "react";
import './AboutMe.css'

const AboutMe = () => { 

    return (
        <div className="about-me-container" id='about-me'>
            <h2>About me</h2>
            <div className="image-n-info">
                <div className="image">
                    <img src="https://i.imgur.com/F25Jh9C.jpg" alt='me.jpg' />
                    <p>{`//This guy is me`}</p>
                </div>

                <div className="info">
                    <p>Hello! My name is <b className="yellow">Santiago Castellanos</b> <i>-also known as <b className="pink">stcastell</b> for my Github profile-</i> and I am a mechatronics engineering student. I am passionate about web development and have had the opportunity to work on several exciting projects in this area. I am a co-founder of Jera Devs, a company dedicated to developing creative and effective digital solutions.</p>

                    <p>As a UI designer, I have skills to create attractive and functional user interfaces. Additionally, I have experience in web development using <b className="orange">HTML</b>, <b className="blue">CSS</b>, <b className="yellow">Javascript</b>, <b className="pink">React.js</b>, <b className="blue">PHP</b>, <b className="pink">Bootstrap</b>, and other related technologies. I also have solid knowledge in creating, maintaining, and managing databases.</p>

                    <p>I have experience at teamworking using tools such as <b>Github</b> to collaborate and coordinate with other developers. Finally, I am a native Spanish speaker and have a <b className="pink">C1</b> level of English proficiency, which allows me to communicate effectively in both languages.</p>

                    <p>This portfolio is a showcase of my work and skills. Thank you for visiting!</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe