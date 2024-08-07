import React from "react";
import styles from "./Tag.module.css"

export default function TagCheckboxSM( { Icon, Label, Action }) {
    return (
        <div className={styles.TagCheckboxSM}>
            <input
                type="radio" 
                name="" 
                id=""
            />
            {Icon}
            <div className={styles.labelSM}> {Label} </div>
            {Action}
        </div>
    );
};
