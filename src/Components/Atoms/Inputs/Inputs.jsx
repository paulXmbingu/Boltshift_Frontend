import React, { useState } from "react";
import styles from "./Inputs.module.css";
import DefaultHelpIcon from "./Assets/help-circle.svg";

// TEXTAREA INPUT FIELD
const TextareaInputField = ({ 
    Label = "Description", 
    Asterisk = "*", 
    HelpIcon = DefaultHelpIcon, 
    HintText = "Hint text.",
    TextArea = "TextArea",
    PlaceHolderText = "Place Holder Text",
    maxLength,
    minLength,
    value,
    col,
    row,
    HandleTextAreaChange,
    TextAreaID,
    AriaLabel,
    width = "auto",
    height = "auto",
    Resizeable = true
}) => {
    const [hasText, setHasText] = useState(false);

    const handleChange = (event) => {
        setHasText(event.target.value.length > 0);
        HandleTextAreaChange(event);
    };

    return (
        <div className={styles.textareaInputFieldWrap}>
            <div className={styles.labelwithInput}>
                <div className={styles.labelWraper}>
                    {Label && <div className={styles.label}> {Label} </div>}
                    {Asterisk && <div className={styles.asterisk}> {Asterisk} </div>}
                    {HelpIcon && <div className={styles.helpIcon}> <img src={HelpIcon} alt="Help Icon" /> </div>}
                </div>
                <textarea 
                    name={TextArea}
                    className={`${styles.textInputArea} ${hasText ? styles.focusedState : styles.defaultState}`}
                    placeholder={PlaceHolderText}
                    maxLength={maxLength}
                    minLength={minLength}
                    value={value}
                    cols={col}
                    rows={row}
                    onChange={handleChange}
                    id={TextAreaID}
                    aria-label={AriaLabel}
                    style={{ 
                        width: width, 
                        height: height,
                        resize: Resizeable ? "none" : "both"
                    }}
                />
                {HintText && <div className={styles.hintText}> {HintText} </div>}
            </div>
        </div>
    );
};

export { TextareaInputField };
