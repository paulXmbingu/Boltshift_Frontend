import React from "react";
import styles from "./FeaturedStoreCard.module.css"

const FeaturedStoreCard = ({ storeIcon,  }) => {
    return(
        <div className={styles.defaultWrapper}>
            <div className={styles.storeInfo}>
                <div className={styles.storeDetails}>
                    <img src={storeIcon} alt="Store Icon" className={styles.storeIcon} />
                    <div> Store Name </div>
                    <div> Store Description </div>
                </div>
                <div> CTA Button </div>
            </div>
        </div>
    );
};

export default FeaturedStoreCard;
