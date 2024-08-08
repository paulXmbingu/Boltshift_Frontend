import React from "react";
import styles from "./RadioInput.module.css"

export const RadioInput = ({ color, checked, onChange }) => {
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

export const RadioInputBrand = ({ checked, onChange }) => {
    return (
        <input
            type="radio"
            name="RadioInputBrand"
            id="RadioInputBrandID"
            className={styles.RadioInputBrand}
            checked={checked}
            onChange={onChange}
        />
    );
};
