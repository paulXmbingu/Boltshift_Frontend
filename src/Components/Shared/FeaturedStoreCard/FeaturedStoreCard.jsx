import React from "react";
import styles from "./FeaturedStoreCard.module.css"
import { Btn_Ter_LG } from "../../Atoms/Button";
import chevronRight from '../../assets/Icons/UI/chevron-right (1).svg';
import { StoreStatusButton } from "../../Atoms/ShopStatusButton";

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
                    <div>
                        <StoreStatusButton />
                    </div>
                    <div className={styles.storeDescription}> {storeDescription} </div>
                    <Btn_Ter_LG ButtonCTA={`Visit Store`} iconTrailing={chevronRight} />
                </div>
            </div>
        </div>
    );
};

export default FeaturedStoreCard;