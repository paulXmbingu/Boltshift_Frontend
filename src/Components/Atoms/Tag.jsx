import React from "react";
import styles from "./Tag.module.css"

export default function TagCheckboxSM( { Label, checked, onChange }) {
    return (
        <div className={styles.TagCheckboxSM}>
            <input
                type="radio" 
                name="tag" 
                id="tagID"
                checked={checked}
                onChange={onChange}
            />
            <div className={styles.labelSM}> {Label} </div>
        </div>
    );
};
