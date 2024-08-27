import React from "react";
import styles from "./Tab.module.css"

const HorTabUnderLineSM = ({ tabLabel }) => {
    return (
        <div className={styles.tabWrap}>
            <span className={styles.tabLabel}> {tabLabel} </span>
        </div>
    );
};

const HorTabUnderLineSMSelected = ({ tabLabel }) => {
    return (
        <div className={styles.tabWrapSelected}>
            <span className={styles.tabLabelSelected}> {tabLabel} </span>
        </div>
    );
};

export 
    {   HorTabUnderLineSM, 
        HorTabUnderLineSMSelected 
};
