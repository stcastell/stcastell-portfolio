import React, {useState} from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {

    const [menuIsActive, setMenuIsActive] = useState(false);
    
    const toggleMenuHandler = () => {
        setMenuIsActive(!menuIsActive);
    }

    return (
        <nav className={`${menuIsActive ? styles["active"] : " " }`}>

            <ul>
                <li><a href='#about-me'>Sobre mi</a></li>
                <li><a href='#skills'>Mis habilidades</a></li>
                <li><a href='#projects'>Mis proyectos</a></li>
                <li><a href='#education'>Certificaciones</a></li>
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