import styles from './MyProjects.module.css'
import ProjectDescription from "./ProjectDescription";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import Aos from "aos";
import 'aos/dist/aos.css';

const MyProjects = props => {
    const projects = [
        {
            imgSrc: "https://img001.prntscr.com/file/img001/naBL2BiiQbyNExMc6Ri4DA.png",
            imgId: 'jeraDevs',
            imgAlt: 'Jera Devs main view',
            title: 'Jera Devs',
            description: 'We have recently completed a project for Jera Devs, a landing page and portfolio showcasing their services. Our team, also known as Jera Devs, worked on this project to help promote our services and attract new clients. The purpose of this project was to create a visually appealing and informative website that would help potential clients learn more about us and the services we offer. We completed this project in 2023 and have since continued to update the website to keep it current and relevant.',
            roles: ['Web developer', 'UI Designer'],
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
            description: 'We have recently completed a project for a client called Floristería Ikebana. This project was a collaboration with Jera Developers. The purpose of this project was to create a catalog and gallery for the florist, where customers could browse and purchase products and services easily and comfortably. The project was completed in 2023 and is still being updated to this day.',
            roles: ['Web developer', 'UI Designer'],
            technologies: [props.imgLinks.html, props.imgLinks.css, props.imgLinks.javascript],
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
        <div className={styles['projects-container']}>
            <h2 className={styles.title} id='projects'>My projects</h2>
            <Splide options={splideOptions} className={styles['splide-container']} data-aos="fade-up" data-aos-duration='1000' data-aos-delay='100'>

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