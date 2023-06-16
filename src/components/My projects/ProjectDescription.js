import React from "react";
import styles from './ProjectDescription.module.css'

const ProjectDescription = props => { 

    return (
        <div className={styles['description-container']}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>

        </div>
    );
}

export default ProjectDescription;