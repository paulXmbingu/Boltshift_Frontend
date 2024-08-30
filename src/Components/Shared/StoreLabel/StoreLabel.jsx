import React from "react";
import styles from "./StoreLabel.module.css"
import VerifiedTick from "./Assets/Verified tick.svg"

const StoreLabel = ({ StoreName }) => {
    return (
        <div className={styles.storeLabel}>
            <div className={styles.storeName}> {StoreName} </div>
            <img src={VerifiedTick} alt="Verification Tick" className={styles.verifiedTick} />
        </div>
    );
};

export default StoreLabel;
