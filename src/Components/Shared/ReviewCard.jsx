import React from "react";
import styles from "./ReviewCard.module.css";
import { Link } from "react-router-dom";
import { Badge_PillColor_SM_LeadIcon_Success } from "../Atoms/Badge";
import CheckIcon from "../../assets/Icons/UI/check.svg";
import { StarRating4 } from "../Molecules/StarRating";

const ReviewCard = ({ ReviewerName, ReviewerPhoto,ReviewDate, Review, ProductImage, ProductNameLabel, PriceLabel }) => {
    return (
        <div className={styles.cardWrap}>
            <div className={styles.reviewDetails}>      
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
                            <StarRating4 />
                        </div>
                    </div>
                </div>
                <div className={styles.testimonialText}>
                    {Review}
                </div>
            </div>
            <Link to={`/product`} className={styles.link} >
                <div className={styles.reviewedProduct}>
                    <img src={ProductImage} alt="Product Image" className={styles.productImage}/>
                    <div className={styles.productNamePrice}>
                        <div className={styles.productNameWrap}> 
                            <div className={styles.productNameLabel}> {ProductNameLabel} </div>
                        </div>
                        <div className={styles.productPriceWrap}>
                            <div className={styles.currency}> Ksh. </div>
                            <div className={styles.priceLabel}> {PriceLabel} </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ReviewCard;
