import React, { useEffect, useState } from "react";
import styles from './Certification.module.css';
import Aos from "aos";
import 'aos/dist/aos.css';

const Certification = props => {

    const clickHandler = e => {
        navigator.clipboard.writeText(e.target.id);
        isCopying ? setIsCopying(false) : setIsCopying(true);
    };

    useEffect(() => {
        Aos.init({ duration: 500, })
    }, []);

    const [isCopying, setIsCopying] = useState(false);

    return (
        <div className={styles.certification} data-aos="fade-right" data-aos-delay='100'>

            <div className={styles.image}>
                <img src={props.imageLink} alt={props.imageAlt}></img>
            </div>
            <div className={styles.info}>
                <h3>{props.title}</h3>
                <ul>

                    <li>
                        <b className={styles['cert-key']}>Certtificado_por</b> = <b className={styles["cert-value"]}>{props.certifyedBy}</b>;
                    </li>

                    <li>
                        <b className={styles['cert-key']}>Finalizado</b> = <b className={styles["cert-value-string"]}>"{props.finishedOn}"</b>;
                    </li>

                    <li>
                        <b className={styles['cert-key']}>
                            ID_del_certificado
                        </b>
                        =
                        <b className={styles["cert-value-string"]}>
                            "{props.certificateID}"
                        </b>;

                        {props.certificateLink === 'unavailable' ? (
                            <>
                                <i className={styles['disabled'] + ' material-icons'} onClick={clickHandler} id={props.certificateID}>
                                    content_copy
                                </i>
                                <b className={styles['no-copy']}>
                                    No disponible
                                </b>
                            </>
                        ) : (
                            <>
                                <i className={styles['copy-id'] + ' material-icons'} onClick={clickHandler} id={props.certificateID}>
                                    content_copy
                                </i>
                                <b className={styles['call-to-copy']}>
                                    {isCopying ? 'Copiado al portapapeles!' : 'Copiar ID'}
                                </b>
                            </>

                        )}
                    </li>

                </ul>
            </div>
            <div className={styles.link}>
                {props.certificateLink !== 'unavailable' ? (
                    <a href={props.certificateLink} className={styles.enabled} target='_blank' rel="noreferrer"><i className="material-icons">open_in_new</i></a>
                ) : (
                    <a target='_blank' className={styles.disabled} rel="noreferrer"><i className="material-icons">disabled_by_default</i></a>
                )}

            </div>
        </div>
    );
}

export default Certification;