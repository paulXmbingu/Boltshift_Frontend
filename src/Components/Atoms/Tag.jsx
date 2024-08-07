import React from "react";
import styles from "./Tag.module.css"

export default function TagCheckboxSM( { LeftLabel, RightLabel }) {
    return (
        <div className={styles._TagCheckboxSM}>
            {LeftLabel}
            <input
            type="checkbox" 
            name="" 
            id=""
            />
            {RightLabel}
        </div>
    );
};
