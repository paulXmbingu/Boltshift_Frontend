import React from "react";
import styles from "./Button.module.css";

const Btn_Pri_SM = ({ iconLeading, ButtonCTA, iconTrailing }) => {
    return (
        <button className={styles.priSM}>
            {iconLeading && <img src={iconLeading} alt="Leading Icon" className={styles.leadingIconPriSM} />}
            <div className={styles.textPaddingPriSM}>
                <div className={styles.cTATextPriSM}>
                    {ButtonCTA}
                </div>
            </div>
            {iconTrailing && <img src={iconTrailing} alt="Trailing Icon" className={styles.trailingIconPriSM} />}
        </button>
    );
};

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

const Btn_Ter_LG = ({ iconLeading, ButtonCTA, iconTrailing }) => {
    return (
        <button className={styles.TerLG}>
            {iconLeading && <img src={iconLeading} alt="Leading Icon" className={styles.leadingIconTerLG} />}
            <div className={styles.textPaddingTerLG}>
                <div className={styles.cTATextTerLG}>
                    {ButtonCTA}
                </div>
            </div>
            {iconTrailing && <img src={iconTrailing} alt="Trailing Icon" className={styles.trailingIconTerLG} />}
        </button>
    );
};

const Btn_Pri_XL = ({ iconLeading, ButtonCTA, iconTrailing }) => {
    return (
        <button className={styles.priXL}>
            {iconLeading && <img src={iconLeading} alt="Leading Icon" className={styles.leadingIconPriXL} />}
            <div className={styles.textPaddingPriXL}>
                <div className={styles.cTATextPriXL}>
                    {ButtonCTA}
                </div>
            </div>
            {iconTrailing && <img src={iconTrailing} alt="Trailing Icon" className={styles.trailingIconPriXL} />}
        </button>
    );
};

export { Btn_Pri_SM, Btn_Sec_Gray_SM, Btn_Primary_MD, Btn_Primary_LG, Btn_Ter_LG, Btn_Pri_XL };
