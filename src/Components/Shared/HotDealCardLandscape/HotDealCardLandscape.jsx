import React from "react";
import styles from './HotDealCardLandscape.module.css';
import FavoriteButton from "../FavoriteButton";
import FireIcon from "./Assets/Fire.svg";
import { Btn_Sec_Gray_SM } from "../../Atoms/Button";

function HotDealCardLandscape({ imageSrc, productNameText, ammount, noSold }) {
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
                <Btn_Sec_Gray_SM ButtonCTA={`Add to Cart`} />
            </div>
        </div>
    );
};

export default HotDealCardLandscape;
