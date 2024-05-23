import React from "react";
import styles from "./SectionHeader.module.css";

function SectionHeader({ headerTitle, icon }) {
    return (
        <div className={styles.container}>
            <img src={icon} className={styles.image} alt="icon"/>
            <div className={styles.text}>
                {headerTitle}
            </div>
        </div>
    );
}

export default SectionHeader;
