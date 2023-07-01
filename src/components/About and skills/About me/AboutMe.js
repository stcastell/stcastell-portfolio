import React from "react";
import './AboutMe.css'

const AboutMe = () => { 

    return (
        <div className="about-me-container">
            <h2>About me</h2>
            <div className="image-n-info">
                <div className="image">
                    <img src="https://i.imgur.com/F25Jh9C.jpg" alt='me.jpg' />
                    <p>{`//This guy is me`}</p>
                </div>

                <div className="info">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate maiores provident fuga aperiam dignissimos dicta, adipisci ipsam, debitis culpa consectetur possimus repellendus et error hic. Similique possimus ipsa eligendi ea!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate maiores provident fuga aperiam dignissimos dicta, adipisci ipsam, debitis culpa consectetur possimus repellendus et error hic. Similique possimus ipsa eligendi ea!</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe