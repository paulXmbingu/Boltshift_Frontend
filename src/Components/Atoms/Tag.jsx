import React from "react";
import styles from "./Tag.module.css"

export default function TagCheckboxSM( { Label, checkedTag, onChange }) {
    return (
        <div className={styles.tagWrapSM}>
            <div className={styles.tagContent}>
                <input
                    type="radio" 
                    name="tag" 
                    id="tagID"
                    className={styles.tagRadioSM}
                    checked={checkedTag}
                    onChange={onChange}
                />
                <div className={styles.labelSM}> {Label} </div>
            </div>
        </div>
    );
};
