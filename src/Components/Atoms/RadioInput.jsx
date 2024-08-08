import React from "react";
import styles from "./RadioInput.module.css"

const RadioInput = ({ color, checked, onChange }) => {
    return (
        <input
            type="radio"
            name="radioInput"
            id="raioInputID"
            className={styles.radio}
            style={{ backgroundColor:color }}
            checked={checked}
            onChange={onChange}
        />
    );
};

export default RadioInput;