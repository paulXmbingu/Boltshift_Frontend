import React from "react";
import styles from "./RadioButton.module.css"

const RadioButton = ({ color }) => {
    return (
        <input
            type="radio"
            name="radio"
            id=""
            className={styles.radio}
            style={{ backgroundColor:color }}
        />
    );
};

export default RadioButton;
