import React from "react";
import './MySkills.css'

const MySkills = () => {

    const imgLinks = {
        css: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        git:"https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        figma:"https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
        html: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        javascript:"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        photoshop:"https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
        react:"https://img.icons8.com/color/144/react-native.png",
        php:"https://www.php.net//images/logos/new-php-logo.svg",
        mysql:"https://img.icons8.com/color/144/mysql-logo.png",
        python:"https://img.icons8.com/color/144/python--v1.png",
    }

    return (
        <div className="my-skills-container">
            <h2>My skills</h2>
            <div className="skills-icons">

                <img src={imgLinks.css} alt="css3" />
                
                <img src={imgLinks.figma} alt="figma" />
                
                <img src={imgLinks.git} alt="git" />
                
                <img src={imgLinks.html} alt="html5" />
                
                <img src={imgLinks.javascript} alt="javascript" />
                
                <img src={imgLinks.photoshop}alt="photoshop" />

                <img src={imgLinks.react} alt="React.js" />

                <img src={imgLinks.php} alt="PHP" />

                <img src={imgLinks.mysql} alt="MySQL" />

                <img src={imgLinks.python}alt="Python" />
                
            </div>
        </div>
    );
}

export default MySkills