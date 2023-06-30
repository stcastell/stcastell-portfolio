import React, {useState} from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {

    const [menuIsActive, setMenuIsActive] = useState(false);
    
    const toggleMenuHandler = () => {
        setMenuIsActive(!menuIsActive);
        alert(window.innerWidth)
    }

    return (
        <nav className={`${menuIsActive ? styles["active"] : " " }`}>

            <ul>
                <li><a href='#about-me'>About me</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#education'>Education</a></li>
            </ul>

            <div className={styles["nav-button"]}>
                <button onClick={toggleMenuHandler}>
                    <i class="material-icons">{`${menuIsActive ? 'close' : 'menu'}`}</i>
                </button>
            </div>

        </nav>
    )
}

export default Navigation