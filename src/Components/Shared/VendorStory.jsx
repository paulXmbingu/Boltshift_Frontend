import React from "react";
import styles from './VendorStory.module.css';

// FUNCTIONALITY
function VendorStory({logo, label}) {
    return(
        <div className={styles.story}>
            {logo && <img src={logo} alt="Vendor Logo" className={styles.vendorLogo} /> }
            <div className={styles.vendorName}>
                <div className={styles.vendorLabel}> {label} </div>
            </div>
        </div>
    );
};

export default VendorStory;
