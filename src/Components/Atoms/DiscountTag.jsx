import React from "react";
import styles from './DiscountTag.module.css';

// FUNCTIONALITY
function DiscountTag(){
    return(
        <button className={styles.tag}> Open Sales Discount 50% </button>
    );
};

export default DiscountTag;
