import React from "react";
import styles from "./ReviewCard.module.css"

const ReviewCard = ( { Testimony,  } ) => {
    return (
        <div className={styles.cardWrap}>
            <div> Buyer Info </div>
            <div className={styles.testimonyTextWrap}>
                <span className={styles.testimonyText}> {Testimony} </span>
            </div>
        </div>
    );
};

export default ReviewCard;
