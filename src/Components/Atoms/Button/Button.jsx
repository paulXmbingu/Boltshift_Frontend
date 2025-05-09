import React from "react";
import styles from "./Button.module.css";

const Btn_Pri_SM = ({ iconLeading, ButtonCTA, iconTrailing, handleClick }) => {
    return (
        <button className={styles.priSM} onClick={handleClick}>
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

const Btn_Pri_XL = ({ iconLeading, ButtonCTA, iconTrailing, handleClick }) => {
    return (
        <button className={styles.priXL} onClick={handleClick} >
            {iconLeading && <img src={iconLeading} alt="Leading Icon" className={styles.leadingIconPriXL} />}
            <div className={styles.textPaddingPriXL}>
                <div className={styles.cTATextPriXL}>
                    {ButtonCTA}
                </div>
            </div>
            {iconTrailing && <img src={ iconTrailing } alt="Trailing Icon" className={styles.trailingIconPriXL} />}
        </button>
    );
};

const Btn_Sec_Gray_SM = ({ iconLeading, ButtonCTA, iconTrailing, handleClick }) => {
    return (
        <button className={styles.secGraySM} onClick={handleClick} >
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

const Btn_Sec_Color_XL = ({LeadingIcon, ButtonCTA, TrailingIcon, handleClick}) => {
    return (
        <button className={styles.Btn_Sec_Color_XL} onClick={handleClick}>
            {LeadingIcon && <img src={LeadingIcon} alt="Leading Icon" className={styles.Btn_Sec_Color_XLLeadingIcon} />}
            <div className={styles.Btn_Sec_Color_XLCTAWrap}>
                <div className={styles.Btn_Sec_Color_XLCTA}> {ButtonCTA} </div>
            </div>
            {TrailingIcon && <img src={TrailingIcon} alt="Trailing Icon" className={styles.Btn_Sec_Color_XLTrailingIcon} />}
        </button>
    )
}

const Btn_Sec_Color_SM = ({ iconLeading, ButtonCTA, iconTrailing, handleClick }) => {
    return (
        <button className={styles.secColorSM} onClick={handleClick}>
            {iconLeading && <img src={iconLeading} alt="Leading Icon" className={styles.leadingIconSecColorSM} />}
            <div className={styles.textPaddingsecColorSM}>
                <div className={styles.cTATextcColorSM}>
                    {ButtonCTA}
                </div>
            </div>
            {iconTrailing && <img src={iconTrailing} alt="Trailing Icon" className={styles.trailingIconSecColorSM} />}
        </button>
    );
};

const Btn_Ter_Grey_SM = ({ iconLeading, ButtonCTA, iconTrailing, handleClick }) => {
    return (
        <button className={styles.terGreySM} onClick={handleClick}>
            {iconLeading && <img src={iconLeading} alt="Leading Icon" className={styles.leadingIconTer_Grey_SM} />}
            <div className={styles.textPaddingleadingIconTer_Grey_SM}>
                <div className={styles.cTATextTer_Grey_SM}>
                    {ButtonCTA}
                </div>
            </div>
            {iconTrailing && <img src={iconTrailing} alt="Trailing Icon" className={styles.trailingIconTer_Grey_SM} />}
        </button>
    );
};

const Btn_Primary_MD = ({ ButtonCTA, handleClick }) => {
    return (
        <button className={styles.Btn_Primary_MD} onClick={handleClick}>
            {ButtonCTA}
        </button>
    );
};

const Btn_Primary_LG = ({ iconLeading, ButtonCTA, iconTrailing, handleClick }) => {
    return (
        <button className={styles.Btn_Primary_LG} onClick={handleClick}>
            {ButtonCTA}
        </button>
    );
};

const Btn_Ter_LG = ({ iconLeading, ButtonCTA, iconTrailing, handleClick }) => {
    return (
        <button className={styles.TerLG} onClick={handleClick}>
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

const Btn_Icon_Only_Sec_LG = ({ Icon, handleClick }) => {
    return (
        <button className={styles.Btn_Icon_Only_Sec_LGWrap} onClick={handleClick}>
            {Icon && <img src={Icon} alt="Icon" className={styles.Btn_Icon_Only_Sec_LGIcon} />}
        </button>
    );
};

const Btn_LinkGray_SM = ({ iconLeading, ButtonCTA, iconTrailing, handleClick }) => {
    return (
        <button className={styles.btn_LinkGray_SMWrap} onClick={handleClick}>
            {iconLeading && <img src={iconLeading} alt="Leading Icon" className={styles.linkGray_SMIconLeading} />}
            <div className={styles.buttonCTALinkGray_SM}> 
                {ButtonCTA} 
            </div>
            {iconTrailing && <img src={iconTrailing} alt="Leading Icon" className={styles.linkGray_SMiconTrailing} />}
        </button>
    );
};

export {
    Btn_Pri_SM,
    Btn_Pri_XL,
    Btn_Primary_MD,
    Btn_Primary_LG, 
    Btn_Sec_Gray_SM, 
    Btn_Sec_Color_SM,
    Btn_Sec_Color_XL,
    Btn_Ter_Grey_SM,
    Btn_Ter_LG,
    Btn_Icon_Only_Sec_LG,
    Btn_LinkGray_SM,
};
