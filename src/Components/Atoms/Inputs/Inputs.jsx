import React from "react";
import styles from "./Inputs.module.css"

const TextareaInputField = ({
    label,
    placeholder,
    required,
    rows,
    cols,
    resize,
    hintText,
}) => {
    return (
        <div className={styles.TextareaInputFieldContainer}>
            <label htmlFor="textarea" className={styles.textareaLabel}>
                {label} {required && <span className={styles.required}>*</span>}
            </label>
            <textarea
                id="textarea"
                name="textarea"
                className={styles.TextareaInputFieldWrap}
                placeholder={placeholder}
                required={required}
                rows={rows}
                cols={cols}
                style={{ resize }}
            />
            <div className={styles.HelpIcon}>
                <span role="img" aria-label="info" className={styles.hintText}>{hintText}</span>
            </div>
        </div>
    );
};

export {
    TextareaInputField,
}
