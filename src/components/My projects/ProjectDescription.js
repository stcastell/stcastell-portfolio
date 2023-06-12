import React from "react";
import styles from './ProjectDescription.module.css'

const ProjectDescription = props => { 
    const projects = [
        {
            title: 'Jera Devs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus qui perferendis repellendus, consequuntur harum libero enim placeat molestias atque illum vero tempore blanditiis, sit tenetur alias esse ab amet.',
            roles: ['Role 1', 'Role 2'],
            technologies: ['Technology 1', 'Technology 2'],
            madeBy: 'Jera Devs',
            githubLink: 'url',
            websiteLink: 'url',
        },
        {
            title: 'Floristería Ikebana',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus qui perferendis repellendus, consequuntur harum libero enim placeat molestias atque illum vero tempore blanditiis, sit tenetur alias esse ab amet.',
            roles: ['Role 1', 'Role 2'],
            technologies: ['Technology 1', 'Technology 2'],
            madeBy: 'Jera Devs',
            githubLink: 'url',
            websiteLink: 'url',
        },
    ];

    return (
        <div className={styles['description-container']}>
            <h2>{props.title}</h2>
        </div>
    );
}

export default ProjectDescription;