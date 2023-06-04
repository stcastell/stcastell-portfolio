import React from 'react'
import styles from './Profile.module.css'

const Profile = () => {
    return (

        <div className={styles["profile-container"]}>
            <img src="https://i.imgur.com/dD8Hehl.png" title="@stcastell" alt="@stcastell"/>
            <h1>@stcastell</h1>
            <h3>Web developer</h3>
        </div>

    )
}

export default Profile