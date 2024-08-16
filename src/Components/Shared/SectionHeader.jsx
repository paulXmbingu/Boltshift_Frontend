import React from "react";
import styles from "./SectionHeader.module.css";

const SectionHeader = ({ headerTitle, icon }) => {
    return (
        <div className={styles.container}>
            {icon && <img src={icon} className={styles.image} alt="icon"/>}
            <div className={styles.text}> {headerTitle} </div>
        </div>
    );
}

const SectionHeader_Sec = ( {headerTitle} ) => {
    return (
        <div clas>
            Secondary Section Header
        </div>
    );
};

export {
    SectionHeader,
    SectionHeader_Sec,
};
