import React from "react";
import styles from "./ReviewCard.module.css"

const ReviewCard = ( { Testimony, BuyerPhoto } ) => {
    return (
        <div className={styles.cardWrap}>
            <div className={styles.buyerInfo}>
                <div className={styles.buyerAvatar}>
                    <img src={BuyerPhoto} alt="" className={styles.buyerPhoto}/>
                </div>
                <div> Buyer Details </div>
            </div>
            <div className={styles.testimonyTextWrap}>
                <span className={styles.testimonyText}> {Testimony} </span>
            </div>
        </div>
    );
};

export default ReviewCard;
