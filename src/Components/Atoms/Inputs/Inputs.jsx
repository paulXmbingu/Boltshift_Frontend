import React from "react";
import styles from "./Inputs.module.css"

const TextareaInputField = () => {
    return (
        <div className={styles.TextareaInputFieldContainer}>
            <label htmlFor="textarea" className={styles.textareaLabel}>
                Your Label Here <span className={styles.required}>*</span>
            </label>
            <textarea
                id="textarea"
                name="textarea"
                className={styles.TextareaInputFieldWrap}
                placeholder="Hint text here..."
                required
                rows="8"
                cols="40"
                style={{ resize: 'both' }} // Allows resizing
            />
            <div className={styles.HelpIcon}>
                <span role="img" aria-label="info" className={styles.hintText}> This is a hint text to help user. </span>
            </div>
        </div>
    );
};

export {
    TextareaInputField,
}
