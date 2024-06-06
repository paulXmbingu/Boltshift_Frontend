import React from "react";
import styles from "./FeaturedStoreCard.module.css"

const FeaturedStoreCard = ({ storeIcon, storeDescription, storeLabel }) => {
    return(
        <div className={styles.defaultWrapper}>
            <div className={styles.storeInfo}>
                <div className={styles.storeDetails}>
                    <div className={styles.logoContainer}>
                        <img src={storeIcon} alt="Store Icon" className={styles.storeIcon} />
                    </div>
                    <div className={styles.storeName}>
                        <div className={styles.storeLabel}> {storeLabel} </div>
                    </div>
                    <div className={styles.storeDescription}> {storeDescription} </div>
                </div>
                <div> CTA Button </div>
            </div>
        </div>
    );
};

export default FeaturedStoreCard;
