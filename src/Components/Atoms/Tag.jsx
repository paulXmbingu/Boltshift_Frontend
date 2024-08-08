import React from "react";
import styles from "./Tag.module.css"

export default function TagCheckboxSM( { Label }) {
    return (
        <div className={styles.TagCheckboxSM}>
            <input
                type="radio" 
                name="" 
                id=""
            />
            <div className={styles.labelSM}> {Label} </div>
        </div>
    );
};
