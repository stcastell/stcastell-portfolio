import React from "react";
import styles from './Certification.module.css';

const Certification = props => {

    const clickHandler = e => { 
        navigator.clipboard.writeText(e.target.id);
        alert("Copied to clipboard");
    }

    return (
        <div className={styles.certification}>
            <div className={styles.image}>
                <img src={props.imageLink} alt={props.imageAlt}></img>
            </div>
            <div className={styles.info}>
                <h3>{props.title}</h3>
                <ul>
                    <li>
                        <strong className={styles['cert-key']}>Certifyed_by</strong> = <strong className={styles["cert-value"]}>"{props.certifyedBy}"</strong>;
                    </li>
                    <li>
                        <strong className={styles['cert-key']}>Finished_on</strong> = <strong className={styles["cert-value-string"]}>"{props.finishedOn}"</strong>;
                    </li>
                    <li>
                        <strong className={styles['cert-key']}>Certificate_ID</strong> = <strong className={styles["cert-value-string"]}>"{props.certificateID}"</strong>;
                        <i className='material-icons' onClick={clickHandler} id={props.certificateID}>content_copy</i>
                    </li>
                </ul>   
            </div>
            <div className={styles.link}>
                <a href={props.certificateLink} target='_blank' rel="noreferrer"><i class="material-icons">open_in_new</i></a>
            </div>
        </div>
    );
}

export default Certification;