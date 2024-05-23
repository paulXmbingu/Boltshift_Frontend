import React from "react";
import styles from './HeroPagination.module.css';

function HeroPagination() {
    return (
        <div className={styles.pagination}>
            <div className={styles.paginationDot}></div>
            <div className={styles.paginationDotCurrent}></div>
            <div className={styles.paginationDot}></div>
            <div className={styles.paginationDot}></div>
            <div className={styles.paginationDot}></div>
        </div>
    );
}

export default HeroPagination;
