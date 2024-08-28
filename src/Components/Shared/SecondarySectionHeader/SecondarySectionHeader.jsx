import React from "react";
import styles from "./SecondarySectionHeader.module.css";

// SECONDARY SECTION HEADER
const SecSectionHeader = ({ headerTitle }) => {
    return (
        <div className={styles.secSectionHeaderWrap}>
            <span className={styles.secSectionHeaderTitle}>{headerTitle}</span>
        </div>
    );
}

export { SecSectionHeader };
