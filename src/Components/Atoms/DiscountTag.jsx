import React from "react";
import styles from './DiscountTag.module.css';

// FUNCTIONALITY
function DiscountTag(){
    return(
        <div className={styles.tag}>
            <div className={styles.tagContent}>
                <div className={styles.tagText}>
                    Opening Sales Discount 50%
                </div>
            </div>
        </div>
    );
};

export default DiscountTag;
