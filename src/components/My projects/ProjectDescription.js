import React, { Fragment, useState } from "react";
import styles from './ProjectDescription.module.css'

const ProjectDescription = props => {

    const [showDescription, setShowDescription] = useState(true);
    
    const MouseEnterHandler = () => { 
        setShowDescription(true);
    }
    const mouseOutHandler = () => { 
        setShowDescription(false);
    }

    return (
        <Fragment>

            <img src={props.data.imgSrc} alt={props.data.imgAlt} className={styles['carousel-img']} onMouseEnter={MouseEnterHandler} onMouseOut={mouseOutHandler}/>
            
            <div className={`${!showDescription ? styles['description-container'] : styles['description-container_enabled']}`}>

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
                                <li key={Math.random()}>{technology}</li>
                            )}
                        </ul>
                    </div>

                    <div className={styles["project-made-by"]}>
                        <h3>Made by</h3>
                        <p>{props.data.madeBy}</p>
                    </div>

                </div>

            </div>
        </Fragment>

    );
}

export default ProjectDescription;