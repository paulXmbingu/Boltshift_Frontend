import React from "react";
import styles from "./Badge.module.css";


const Badge_PillColor_SM_LeadIcon_Success = ({ LeadingIcon, Label }) => {
    return (
        <div className={styles.Badge_PillColor_SM_LeadIcon_SuccessWrap}>
            <img src={ LeadingIcon } alt="Leading Icon" className={styles.Badge_PillColor_SM_LeadIcon_SuccessIcon} />
            <div className={styles.Badge_PillColor_SM_LeadIcon_SuccessLabel}> { Label } </div>
        </div>
    );
};

const Badge_PillOutline_LG_LeadingIcon_BrandColor = ({LeadingIcon, BadgeLabel,}) => {
    return (
        <div className={styles.badge_PillOutline_LG_LeadingIcon_BrandColorWrap}>
            <img src={LeadingIcon} alt='Leading Icon' className={styles.badge_PillOutline_LG_LeadingIcon_BrandColorBadgeIcon} />
            <div className={styles.badge_PillOutline_LG_LeadingIcon_BrandColorBadgeLabel}> {BadgeLabel} </div>
        </div>
    );
};

//PILL COLOR SMALL

const Badge_PillColor_SM_Gray = ({BadgeLabel,}) => {
    return (
        <div className={styles.Badge_PillColor_SM_GrayWrap}>
            <div className={styles.Badge_PillColor_SM_GrayLabel}> {BadgeLabel} </div>
        </div>
    );
};

const Badge_PillColor_SM_Brand = ({BadgeLabel,}) => {
    return (
        <div className={styles.Badge_PillColor_SM_BrandWrap}>
            <div className={styles.Badge_PillColor_SM_BrandLabel}> {BadgeLabel} </div>
        </div>
    );
};

const Badge_PillColor_SM_Error = ({BadgeLabel,}) => {
    return (
        <div className={styles.Badge_PillColor_SM_ErrorWrap}>
            <div className={styles.Badge_PillColor_SM_ErrorLabel}> {BadgeLabel} </div>
        </div>
    );
};

const Badge_PillColor_SM_Warning = ({BadgeLabel,}) => {
    return (
        <div className={styles.Badge_PillColor_SM_WarningWrap}>
            <div className={styles.Badge_PillColor_SM_WarningLabel}> {BadgeLabel} </div>
        </div>
    );
};

const Badge_PillColor_SM_Success = ({BadgeLabel,}) => {
    return (
        <div className={styles.Badge_PillColor_SM_SuccessWrap}>
            <div className={styles.Badge_PillColor_SM_SuccessLabel}> {BadgeLabel} </div>
        </div>
    );
};

const Badge_PillColor_SM_GrayBlue = ({BadgeLabel,}) => {
    return (
        <div className={styles.Badge_PillColor_SM_GrayBlueWrap}>
            <div className={styles.Badge_PillColor_SM_GrayBlueLabel}> {BadgeLabel} </div>
        </div>
    );
};

const Badge_PillColor_SM_BlueLight = ({BadgeLabel,}) => {
    return (
        <div className={styles.Badge_PillColor_SM_BlueLightWrap}>
            <div className={styles.Badge_PillColor_SM_BlueLightLabel}> {BadgeLabel} </div>
        </div>
    );
};

export { Badge_PillColor_SM_LeadIcon_Success, Badge_PillOutline_LG_LeadingIcon_BrandColor,
    //PILL COLOR SMALL
    Badge_PillColor_SM_Gray,
    Badge_PillColor_SM_Brand,
    Badge_PillColor_SM_Error,
    Badge_PillColor_SM_Warning,
    Badge_PillColor_SM_Success,
    Badge_PillColor_SM_GrayBlue,
    Badge_PillColor_SM_BlueLight,
};
