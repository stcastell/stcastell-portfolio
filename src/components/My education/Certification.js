import React, {useState} from "react";
import styles from './Certification.module.css';

const Certification = props => {

    const clickHandler = e => {
        navigator.clipboard.writeText(e.target.id);
        isCopying ? setIsCopying(false) : setIsCopying(true);
    };

    const [isCopying, setIsCopying] = useState(false);

    return (
        <div className={styles.certification}>
            <div className={styles.image}>
                <img src={props.imageLink} alt={props.imageAlt}></img>
            </div>
            <div className={styles.info}>
                <h3>{props.title}</h3>
                <ul>
                    <li>
                        <b className={styles['cert-key']}>Certifyed_by</b> = <b className={styles["cert-value"]}>{props.certifyedBy}</b>;
                    </li>
                    <li>
                        <b className={styles['cert-key']}>Finished_on</b> = <b className={styles["cert-value-string"]}>"{props.finishedOn}"</b>;
                    </li>
                    <li>
                        <b className={styles['cert-key']}>
                            Certificate_ID
                        </b>
                        =
                        <b className={styles["cert-value-string"]}>
                            "{props.certificateID}"
                        </b>;
                        <i className='material-icons' onClick={clickHandler} id={props.certificateID}>
                            content_copy
                        </i>
                        <b className={styles['call-to-copy']}>
                            {isCopying ? 'Copied to clipboard!' : 'Copy ID'}
                        </b>
                    </li>
                </ul>   
            </div>
            <div className={styles.link}>
                <a href={props.certificateLink} target='_blank' rel="noreferrer"><i className="material-icons">open_in_new</i></a>
            </div>
        </div>
    );
}

export default Certification;