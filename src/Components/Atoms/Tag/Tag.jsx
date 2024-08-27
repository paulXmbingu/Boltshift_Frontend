import React from "react";
import styles from "./Tag.module.css"

export default function TagCheckboxSM( { Label, checkedTag, onChange }) {
    return (
        <div className={styles.tagWrap}>
            <div className={styles.tagContent}>
                <input
                    type="radio" 
                    name="tag" 
                    id="tagID"
                    className={styles.tagRadio}
                    checked={checkedTag}
                    onChange={onChange}
                />
                <div className={styles.label}> {Label} </div>
            </div>
        </div>
    );
};
