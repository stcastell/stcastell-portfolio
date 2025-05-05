import React, {useEffect} from 'react';
import styles from './MyProjects.module.css'
import ProjectDescription from "./ProjectDescription";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import Aos from "aos";
import 'aos/dist/aos.css';

const MyProjects = props => {

    useEffect(() => { 
        Aos.init({duration:500});
    });

    const projects = [
        {
            imgSrc: "https://img001.prntscr.com/file/img001/naBL2BiiQbyNExMc6Ri4DA.png",
            imgId: 'jeraDevs',
            imgAlt: 'Jera Devs main view',
            title: 'Jera Devs',
            description: 'En 2023, junto con otros desarrolladores, creé Jera Devs, una landing page y portafolio diseñado para destacar nuestros servicios y atraer nuevos clientes. Este proyecto tuvo como objetivo establecer una presencia web atractiva e informativa para que los clientes potenciales conocieran nuestra oferta. Finalizado en 2023, el sitio web se mantiene actualizado para asegurar su relevancia.',
            roles: ['Desarrollador web', 'Diseñador de UI'],
            technologies: [props.imgLinks.html, props.imgLinks.css, props.imgLinks.javascript],
            madeBy: 'Jera Devs',
            githubLink: 'https://github.com/JeraDevelopers',
            websiteLink: 'https://jeradevelopers.github.io/',
        },
        {
            imgSrc: "https://img001.prntscr.com/file/img001/60J07WJ3T-eaGiYF9zJP_g.png",
            imgId: 'ikebana',
            imgAlt: 'Ikebana main view',
            title: 'Floristería Ikebana',
            description: 'En el año 2023, con mi equipo de Jera Developers, completamos un proyecto para Floristería Ikebana: un catálogo y galería diseñados para que los clientes exploren y adquieran sus productos y servicios de manera cómoda y fácil. Finalizado en 2023.',
            roles: ['Desarrollador web', 'Diseñador de UI'],
            technologies: [props.imgLinks.html, props.imgLinks.css, props.imgLinks.javascript],
            madeBy: 'Jera Devs',
            githubLink: 'https://github.com/JeraDeveloper/Ikebana',
            websiteLink: 'unavailable',
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
        autoplay: false,
        interval: 500,
        easing: 'cubic-bezier(.42,.65,.27,.99)',
    }
    return (
        <div className={styles['projects-container']}>
            <h2 className={styles.title} id='projects'>Mis proyectos</h2>
            <Splide options={splideOptions} className={styles['splide-container']} data-aos="fade-up" data-aos-duration='1000'>

                {projects.map(project =>
                    <SplideSlide key={Math.random()} className={styles['img-container']}>
                        <ProjectDescription data={project} />
                    </SplideSlide>)
                }
            </Splide>
        </div>


    );
}

export default MyProjects;