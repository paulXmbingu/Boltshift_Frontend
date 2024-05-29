import React from "react";
import FireIcon from "../../assets/Icons/Illustrated/Fire.svg";
import FavoriteButton from "./FavoriteButton";
import styles from './HotDealCard.module.css';

function HotDealCard({ imageSrc, productNameText, ammount, noSold }) {
    const progress = 50;

    return (
        <div className={styles.CardStyle}>
            <div className={styles.favoriteButtonContainer}>
                <FavoriteButton />
            </div>
            <img src={imageSrc} alt="Product Image" className={styles.imageStyles} />
            <div className={styles.productDetailsStyles}>
                <div className={styles.productNamePrice}>
                    <div className={styles.productName}>
                        <div className={styles.productNameText}> {productNameText} </div>
                    </div>
                    <div className={styles.productPrice}>
                        <div className={styles.currency}> Kshs. </div>
                        <div className={styles.ammount}> {ammount} </div>
                    </div>
                </div>
                <div className={styles.popularityStatus}>
                    <div className={styles.progressDistance} style={{ width: `${progress}%`, background: 'var(--Colors-Brand-brand-primary, #DA154D)' }}></div>
                    <div className={styles.unitsSold}>
                        <img src={FireIcon} alt="Fire Icon" className={styles.Fire} />
                        <div className={styles.noSold}> {noSold} </div>
                        <div className={styles.noLeft}> Left </div>
                    </div>
                </div>
                <button className={styles.buttonStyles}> Add to Cart </button>
            </div>
        </div>
    );
};

export default HotDealCard;
