import React from "react";
import styles from './Footer.module.css';

const Footer = props => {

    return (
        <footer>

            <div className={styles['info-container']}>
                <div className={styles.links}>
                    <ul>
                        <li><a href="#about-me">About me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projets</a></li>
                        <li><a href="#education">Education</a></li>
                    </ul>
                </div>

                <div className={styles.image}>
                    <img src="https://i.imgur.com/dD8Hehl.png" title="@stcastell" alt="@stcastell" />
                </div>

                <div className={styles.social}>
                    <a href='https://github.com/stcastell' target='_blank' rel="noreferrer">
                        <img src="https://img.icons8.com/material/48/FFFFFF/github.png" alt="github" />
                    </a>

                    <a href='https://twitter.com/imsadoc' target='_blank' rel="noreferrer">
                        <img src="https://img.icons8.com/material/48/FFFFFF/twitter--v2.png" alt="twitter--v2" />
                    </a>

                    <a href='https://www.linkedin.com/in/stcastell/' target='_blank' rel="noreferrer">
                        <img src="https://img.icons8.com/material/48/FFFFFF/linkedin--v1.png" alt="linkedin--v1" />
                    </a>
                </div>
            </div>

            <div className={styles['copyright-container']}>
                <p>Made by @stcastell. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;