import React from 'react'
import './Navigation.css'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><a href='#about-me'>About me</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#education'>Education</a></li>
            </ul>
            <div className="nav-button">
                <i class="material-icons">menu</i>
            </div>
        </nav>
    )
}

export default Navigation