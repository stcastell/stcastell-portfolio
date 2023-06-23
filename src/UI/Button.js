import React, {useState} from "react";
import styles from './Button.module.css';

const Button = props => {
    const [isALink, setIsALink] = useState(props.isALink)

    if (isALink) {
        return (
            <a href={props.url} className={styles['button']} > {props.value}</a>
        );
    } else { 
        return (
            <button onClick={props.onClick} className={styles['button']}>{props.value}</button>
        )
    }
};

export default Button;