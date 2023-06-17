import React, { Fragment } from "react";
import styles from './ProjectDescription.module.css'

const ProjectDescription = props => {

    return (
        <Fragment>
            <img src={props.data.imgSrc}/>

            <div className={styles['description-container']}>
                <h2>{props.data.title}</h2>
                <p>{props.data.description}</p>
            </div>
        </Fragment>

    );
}

export default ProjectDescription;