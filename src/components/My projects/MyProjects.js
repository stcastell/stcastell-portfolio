import React from "react";
import styles from './MyProjects.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

const MyProjects = () => { 

    return (
        <Splide aria-label="My Favorite Images" options={{
            rewind: true,
            gap: '1rem',
        }} className={styles['projects-container']}>
            <SplideSlide className={styles['img-container']}>
                <img src="https://img001.prntscr.com/file/img001/naBL2BiiQbyNExMc6Ri4DA.png" alt="Lightshot screenshot" id="screenshot-image" image-id="2aqdyo1"/>
            </SplideSlide>
            <SplideSlide className={styles['img-container']}>
                <img src="https://img001.prntscr.com/file/img001/60J07WJ3T-eaGiYF9zJP_g.png" alt="Lightshot screenshot" id="screenshot-image" image-id="2aqe3pm"/>
            </SplideSlide>
        </Splide>
    );
}

export default MyProjects;