import React from 'react';
import styles from './Social.module.css';

const Social = () => { 
    return (
        <div className={styles['social-container']}>

            <a href='https://github.com/stcastell' target='_blank' rel="noreferrer">
                <img width="48" height="48" src="https://img.icons8.com/material/48/FFFFFF/github.png" alt="github" />
            </a>
            
            <a href='https://twitter.com/imsadoc' target='_blank' rel="noreferrer">
                <img width="48" height="48" src="https://img.icons8.com/material/48/FFFFFF/twitter--v2.png" alt="twitter--v2" />
            </a>

            <a href='https://www.linkedin.com/in/stcastell/' target='_blank' rel="noreferrer">
                <img width="48" height="48" src="https://img.icons8.com/material/48/FFFFFF/linkedin--v1.png" alt="linkedin--v1" />
            </a>

        </div>
    )
}

export default Social;