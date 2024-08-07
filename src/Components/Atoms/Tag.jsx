import React from "react";
import styles from "./Tag.module.css"

 const TagCheckboxSM = ({ Icon, Label, Action }) => {
    return (
        <div className={styles.TagCheckboxSM}>
            <input
                type="checkbox" 
                name="" 
                id=""
            />
            {Icon}
            <div className={styles.labelSM}> {Label} </div>
            {Action}
        </div>
    );
};

export {
    TagCheckboxSM
}
