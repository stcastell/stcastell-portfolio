import React from "react";
import styles from './MyProjects.module.css'
import ProjectDescription from "./ProjectDescription";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

const MyProjects = () => {

    const projects = [
        {
            imgSrc: "https://img001.prntscr.com/file/img001/naBL2BiiQbyNExMc6Ri4DA.png",
            imgId: 'jeraDevs',
            imgAlt: 'Jera Devs main view',
            title: 'Jera Devs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus qui perferendis repellendus, consequuntur harum libero enim placeat molestias atque illum vero tempore blanditiis, sit tenetur alias esse ab amet.',
            roles: ['Web developer', 'Web designer'],
            technologies: ['Technology 1', 'Technology 2'],
            madeBy: 'Jera Devs',
            githubLink: 'https://github.com/JeraDevelopers',
            websiteLink: 'https://jeradevelopers.github.io/',
        },
        {
            imgSrc: "https://img001.prntscr.com/file/img001/60J07WJ3T-eaGiYF9zJP_g.png",
            imgId: 'ikebana',
            imgAlt: 'Ikebana main view',
            title: 'Floristería Ikebana',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus qui perferendis repellendus, consequuntur harum libero enim placeat molestias atque illum vero tempore blanditiis, sit tenetur alias esse ab amet.',
            roles: ['Web developer', 'Role 2'],
            technologies: ['Technology 1', 'Technology 2'],
            madeBy: 'Jera Devs',
            githubLink: 'https://github.com/JeraDeveloper/Ikebana',
            websiteLink: 'https://floristeriaikebana.shop/',
        },
    ]
    const splideOptions = {
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
    }

    return (

        <Splide options={splideOptions} className={styles['projects-container']}>

            {projects.map(project =>
                <SplideSlide key={Math.random()} className={styles['img-container']}>
                    <ProjectDescription data={project} />
                </SplideSlide>)
            }

        </Splide>

    );
}

export default MyProjects;