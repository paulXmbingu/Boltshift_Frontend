import React from "react";
import styles from "./ReviewCard.module.css"

const ReviewCard = () => {
    return (
        <div className={styles.cardWrap}>
            <div className={styles.buyerDetails}>
                <div className={styles.buyerPhoto}> 
                    <img src={`https://i.pinimg.com/564x/14/60/62/1460627efb7e337450e4e32f662adebc.jpg`} alt="" className={styles.buyerAvatar} />
                </div>
                <div className={styles.detailsStack}> 
                    <div className={styles.buyerNameVerification}>
                        <div className={styles.buyerName}> Marion Ngayi </div>
                        <div> Buyer Verification Badge </div>
                    </div>
                    <div> 
                        <div className={styles.dateWrap}> 
                            <span className={styles.date}> Nov 26, 2023 </span>
                        </div>
                        <div> Rating </div>
                    </div>
                </div>
            </div>
            <div className={styles.testimonialText}>
                We've tried countless prototyping tools and ProtoPie is hands down the most flexible and powerful tool that fits perfectly into any team's workflow. No matter which tools or platform are being used, we can import our design assets in seconds and make awesome code-free prototypes in minutes.
            </div>
        </div>
    );
};

export default ReviewCard;
