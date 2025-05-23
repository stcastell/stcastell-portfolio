import React, {useState} from "react";
import styles from './Button.module.css';

const Button = props => {
    const [isALink, setIsALink] = useState(props.isALink)

    if (isALink) {
        if (props.url === 'unavailable') {
            return (
                <a className={styles['button-unavailable']}>No disponible</a>
            )
        }
        return (
            <a href={props.url} className={styles['button']} target='_blank' rel='noreferrer'> {props.value}</a>
        );
    } else { 
        return (
            <button onClick={props.onClick} className={styles['button']}>{props.value}</button>
        )
    }
};

export default Button;