import React from "react";
import styles from "./ReviewCard.module.css";
import { Badge_PillColor_SM_LeadIcon_Success } from "../Atoms/Badge";
import CheckIcon from "../../assets/Icons/UI/check.svg";

const ReviewCard = ({ ReviewerName, ReviewerPhoto,ReviewDate, Review }) => {
    return (
        <div className={styles.cardWrap}>
            <div className={styles.buyerDetails}>
                <div className={styles.buyerPhoto}> 
                    <img src={ReviewerPhoto} alt="" className={styles.buyerAvatar} />
                </div>
                <div className={styles.detailsStack}> 
                    <div className={styles.buyerNameVerification}>
                        <div className={styles.buyerName}> {ReviewerName} </div>
                        <Badge_PillColor_SM_LeadIcon_Success LeadingIcon={CheckIcon} Label={`Verified Buyer`} />
                    </div>
                    <div> 
                        <div className={styles.dateWrap}> 
                            <span className={styles.date}> {ReviewDate} </span>
                        </div>
                        <div> ⭐⭐⭐⭐☆ </div>
                    </div>
                </div>
            </div>
            <div className={styles.testimonialText}>
                {Review}
            </div>
        </div>
    );
};

export default ReviewCard;
