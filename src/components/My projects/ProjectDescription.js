import React from "react";
import styles from './ProjectDescription.module.css'
import Button from "../../UI/Button";

const ProjectDescription = props => {

    return (
        <div className={styles['project-container']}>

            <img src={props.data.imgSrc} alt={props.data.imgAlt} className={styles['carousel-img']} />

            <div className={styles['description-container']}>

                <h2>{props.data.title}</h2>
                <p>{props.data.description}</p>

                <div className={styles['project-details']}>

                    <div className={styles["project-role"]}>
                        <h3>Roles</h3>
                        <ul>
                            {props.data.roles.map(role =>
                                <li key={Math.random()}>{role}</li>
                            )}
                        </ul>

                    </div>

                    <div className={styles["project-technologies"]}>
                        <h3>Technologies</h3>
                        <ul>
                            {props.data.technologies.map(technology =>
                                <li key={Math.random()}>
                                    <img src={technology.link} alt={technology.alt}></img>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className={styles["project-made-by"]}>
                        <h3>Made by</h3>
                        <b>{props.data.madeBy}</b>
                    </div>

                </div>

                <div className={styles['buttons-container']}>

                    <Button value='Github' isALink={true} url={props.data.githubLink}></Button>

                    <Button value='Website' isALink={true} url={props.data.websiteLink}></Button>

                </div>

            </div>


        </div>

    );
}

export default ProjectDescription;