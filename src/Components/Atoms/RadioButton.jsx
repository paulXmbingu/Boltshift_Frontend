import React from "react";
import styles from "./RadioButton.module.css"

const RadioButton = () => {
    return (
        <input
            type="radio"
            name="radio"
            id=""
            className={styles.radio}
        />
    );
};

export default RadioButton;
