import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Profile.module.css'

const Profile = () => {

    const { scrollY } = useScroll();
    const animateProfile = {
        scale: useTransform(scrollY, [0, 500], [1, 0.8]),
        y: useTransform(scrollY, [0, 500], [0, 300]),
        opacity: useTransform(scrollY, [0, 500], [1,0])
    }

    const colorKeyframes = [
        '#FFF',
        '#ae4bff',
        '#FFF'
    ];

    return (

        <motion.div style={{scale: animateProfile.scale, y:animateProfile.y, opacity: animateProfile.opacity}} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={styles["profile-container"]}>
            <img src="https://i.imgur.com/dD8Hehl.png" title="@stcastell" alt="@stcastell"/>
            <h1>@stcastell</h1>
            <motion.h3 whileHover={{ scale: [1, 1.05, 1], color:colorKeyframes}}>Desarrollador web</motion.h3>
        </motion.div>

    )
}

export default Profile