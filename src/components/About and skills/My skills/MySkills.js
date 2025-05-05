import React from "react";
import './MySkills.css'

const MySkills = props => {

    return (
        <div className="my-skills-container" id='skills'>
            <h2>Mis habilidades</h2>
            <div className="skills-icons">

                <img src={props.imgLinks.css.link} alt="css3" />
                
                <img src={props.imgLinks.figma.link} alt="figma" />
                
                <img src={props.imgLinks.git.link} alt="git" />
                
                <img src={props.imgLinks.html.link} alt="html5" />
                
                <img src={props.imgLinks.javascript.link} alt="javascript" />
                
                <img src={props.imgLinks.photoshop.link}alt="photoshop" />

                <img src={props.imgLinks.react.link} alt="React.js" />

                <img src={props.imgLinks.php.link} alt="PHP" />

                <img src={props.imgLinks.mysql.link} alt="MySQL" />

                <img src={props.imgLinks.python.link}alt="Python" />
                
            </div>
        </div>
    );
}

export default MySkills;
