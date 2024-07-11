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

export { Badge_PillColor_SM_LeadIcon_Success, Badge_PillOutline_LG_LeadingIcon_BrandColor,
    //PILL COLOR SMALL
    Badge_PillColor_SM_Gray,
    Badge_PillColor_SM_Brand,
};
