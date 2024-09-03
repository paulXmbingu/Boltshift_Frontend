import React from "react";
import styles from "./Inputs.module.css"
import DefaultHelpIcon from "./Assets/help-circle.svg"

//TEXTAREA INPUT FIELD
const TextareaInputField = ({ 
    Label = "Description", 
    Asterisk = "*", 
    HelpIcon = DefaultHelpIcon, 
    HintText = "Hint text.",
    //Text Area
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
    width = "100%" ,
    height = "100%",
    Resizeable = true
}) => {
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
                    className={styles.textInputArea}
                    placeholder={PlaceHolderText}
                    maxLength={maxLength}
                    minLength={minLength}
                    value={value}
                    cols={col}
                    rows={row}
                    onChange={HandleTextAreaChange}
                    id={TextAreaID}
                    aria-label={AriaLabel}
                    style={{ 
                        width:width, 
                        height:height,
                        resize: Resizeable? "none" : "both"
                    }}
                />
                {HintText && <div className={styles.hintText}> {HintText} </div>}
            </div>
        </div>
    );
};

//INPUT FIELD
const InputField = ({
    htmlForInputFieldLabel,
    InputFieldLabel = "Input Label",
    Asterisk = "*",
    HintText = "Hint Text",
    InputFieldTailingIcon = DefaultHelpIcon,
    InputFieldLeadingIcon = DefaultHelpIcon,
    InputFieldPlaceholder = "Place Holder Text",
    maxLength,
    minLength,
    HandleInputFieldChange,
    HandleInputFieldClick,
    InputFieldID,
    AriaLabel,
    width,
    height
}) => {
    return (
        <div className={styles.inputFieldWrap}> 
            <div className={styles.labelInputFieldWrap}>
                <div className={styles.labelFieldWapper}>
                    {InputFieldLabel && <label htmlFor={htmlForInputFieldLabel} className={styles.inputFieldLabel}> {InputFieldLabel} </label>}
                    {Asterisk && <div className={styles.inputFieldAsterisk}> {Asterisk} </div>}
                </div>
                <div className={styles.inputFieldWrap}>
                    <input  
                        type="text" 
                        className={styles.inputField}
                        placeholder={InputFieldPlaceholder}
                        maxLength={maxLength}
                        minLength={minLength}
                        onChange={HandleInputFieldChange}
                        onClick={HandleInputFieldClick}
                        id={InputFieldID}
                        aria-label={AriaLabel}
                        style={{ width:width, height:height }}
                    />
                    {InputFieldLeadingIcon && <div className={styles.inputFieldLeadingIcon}> <img src={InputFieldLeadingIcon} alt="Input Field Leading Icon" /> </div>}
                    {InputFieldTailingIcon && <div className={styles.inputFieldTailingIcon}> <img src={InputFieldTailingIcon} alt="Input Field Tailing Icon" /> </div>}
                </div>
            </div>
            {HintText && <label htmlFor="" className={styles.inputFieldHintText}> {HintText} </label>}
        </div>
    );
};

export {
    TextareaInputField,
    InputField,
}
