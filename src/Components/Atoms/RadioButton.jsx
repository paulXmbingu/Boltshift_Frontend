import React from "react";
import styles from "./RadioButton.module.css"

const RadioButton = ({ color, checked }) => {
    return (
        <input
            type="radio"
            name="radio"
            id=""
            className={styles.radio}
            style={{ backgroundColor:color }}
            checked={checked}
        />
    );
};

export default RadioButton;
