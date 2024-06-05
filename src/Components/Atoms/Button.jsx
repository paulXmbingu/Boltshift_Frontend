import React from "react";
import styles from "./Button.module.css";

const Btn_Sec_Gray_SM = ({ iconLeading, ButtonCTA, iconTrailing }) => {
    return (
        <button className={styles.secGraySM}>
            {iconLeading && <img src={iconLeading} alt="Leading Icon" className={styles.leadingIcon} />}
            <div className={styles.textPadding}>
                <div className={styles.cTAText}>
                    {ButtonCTA}
                </div>
            </div>
            {iconTrailing && <img src={iconTrailing} alt="Trailing Icon" className={styles.trailingIcon} />}
        </button>
    );
};

const Btn_Primary_MD = ({ ButtonCTA }) => {
    return (
        <button className={styles.Btn_Primary_MD}>
            {ButtonCTA}
        </button>
    );
};

const Btn_Primary_LG = ({ ButtonCTA }) => {
    return (
        <button className={styles.Btn_Primary_LG}>
            {ButtonCTA}
        </button>
    );
};

export { Btn_Sec_Gray_SM, Btn_Primary_MD, Btn_Primary_LG };
