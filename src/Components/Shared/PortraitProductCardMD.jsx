import React from "react";
import styles from "./PortraitProductCardMD.module.css"
import { Btn_Sec_Gray_SM } from "../Atoms/Button";
import FavoriteButton from "./FavoriteButton"

const PortraitProductCardMD = ({ productImage, productLabel, price }) => {
    return(
        <div className={styles.cardWrapper}>
            <div className={styles.favoriteButtonContainer}>
                <FavoriteButton />
            </div>
            <div className={styles.productImageWrapper}>
                <img src={productImage} alt="" className={styles.productImage} />
            </div>
            <div className={styles.productDetails}>
                <div className={styles.namePrice}>
                   <div className={styles.productName}>
                        <span className={styles.productLabel}> {productLabel} </span> 
                    </div> 
                   <div className={styles.productPrice}>
                        <span className={styles.currency}> Ksh. </span>
                        <span className={styles.price}> {price} </span>
                    </div> 
                </div>
                <Btn_Sec_Gray_SM ButtonCTA={`Add to Cart`} />
            </div>
        </div>
    );
};

export default PortraitProductCardMD;
