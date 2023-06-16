import React from "react";
import styles from './MyProjects.module.css'
import ProjectDescription from "./ProjectDescription";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

const MyProjects = () => {  

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
        <Splide aria-label="My Favorite Images" options={{
            type: 'slide',
            rewind: true,
            perPage: 1,
            perMove: 1,
            gap: '1rem',
            pagination: true,
            arrows: true,
            speed: 800,
            pauseOnHover: true,
            autoplay: true,
            interval: 500,
            easing: 'cubic-bezier(.42,.65,.27,.99)',
        }} className={styles['projects-container']}>

            <SplideSlide className={styles['img-container']}>
                <img src="https://img001.prntscr.com/file/img001/naBL2BiiQbyNExMc6Ri4DA.png" alt="Lightshot screenshot" id="screenshot-image" image-id="2aqdyo1" />
                <ProjectDescription title={projects[0].title} description={projects[0].description} />
            </SplideSlide>

            <SplideSlide className={styles['img-container']}>
                <img src="https://img001.prntscr.com/file/img001/60J07WJ3T-eaGiYF9zJP_g.png" alt="Lightshot screenshot" id="screenshot-image" image-id="2aqe3pm"/>
            </SplideSlide>

        </Splide>
    );
}

export default MyProjects;