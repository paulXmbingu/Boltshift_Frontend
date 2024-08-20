import React, { useState } from "react";
import styles from "./TestimonialCard.module.css";
import { Btn_LinkGray_SM } from "../Atoms/Button";
import chevrondown from "../../assets/Icons/UI/chevron-down.svg";
import chevronup from "../../assets/Icons/UI/chevron-up.svg";
import { ProductMediaThumbnailSM } from "./ProductMediaThumbnail";
import { AvatarProfilePhotoSM } from "../Atoms/AvatarProfilePhoto";
import { Badge_PillColor_SM_Success } from "../Atoms/Badge";

const TestimonialCard_LoggedIn = ({BuyerName, UserPhoto, DatePurchased, TestimonialTitle, TestomonialText, Media, MediaAltText, Media2, MediaAltText2, Media3, MediaAltText3, Media4, MediaAltText4, Media5, MediaAltText5, Media6, MediaAltText6 }) => {
    return (
        <div className={styles.testimonialCard_LoggedInWrap}>
            <_BuyerDetails
                BuyerName={BuyerName}
                UserPhoto={UserPhoto}
                DatePurchased={DatePurchased}
            />
            <div className={styles.buyerTestimonial}>
                <_TestimonialText 
                    TestimonialTitle={TestimonialTitle}
                    TestomonialText={TestomonialText}
                />
            </div>
            <_CustomerMediaThumbnails
                Media={Media} MediaAltText={MediaAltText}
                Media2={Media2} MediaAltText2={MediaAltText2}
                Media3={Media3} MediaAltText3={MediaAltText3}
                Media4={Media4} MediaAltText4={MediaAltText4}
                Media5={Media5} MediaAltText5={MediaAltText5}
                Media6={Media6} MediaAltText6={MediaAltText6}
            />
            <div className={styles.peerReactions}>Peer Reactions</div>
        </div>
    );
};

const _BuyerDetails = ({ UserPhoto, BuyerName, DatePurchased }) => {
    return (
        <div className={styles.buyerDetails}>
            <div className={styles.reviewInfo}> 
                <AvatarProfilePhotoSM UserPhoto={UserPhoto} /> 
                <div className={styles.ratingDetails}> 
                    <div className={styles.buyerNameVerification}>
                        <span className={styles.buyerName}> {BuyerName} </span>
                        <Badge_PillColor_SM_Success BadgeLabel={`Verified Buyer`} />
                    </div>
                    <div className={styles.dateRating}>
                        <span className={styles.datePurchase}> {DatePurchased} </span>
                        <span> Star Rating </span>
                    </div>
                </div>
            </div>
            <div> User Review Badge </div>
        </div>
    );
};

const _CustomerMediaThumbnails = ({ Media, MediaAltText, Media2, MediaAltText2, Media3, MediaAltText3, Media4, MediaAltText4, Media5, MediaAltText5, Media6, MediaAltText6 }) => {
    return (
        <div className={styles.customerMediaThumbnails}>
            <ProductMediaThumbnailSM Media={Media} MediaAltText={MediaAltText} />
            <ProductMediaThumbnailSM Media={Media2} MediaAltText={MediaAltText2} />
            <ProductMediaThumbnailSM Media={Media3} MediaAltText={MediaAltText3} />
            <ProductMediaThumbnailSM Media={Media4} MediaAltText={MediaAltText4} />
            <ProductMediaThumbnailSM Media={Media5} MediaAltText={MediaAltText5} />
            <ProductMediaThumbnailSM Media={Media6} MediaAltText={MediaAltText6} />
        </div>
    );
};

const _TestimonialText = ({ TestimonialTitle, TestomonialText }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReview = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.reviewTitleWrap}>
            <span className={styles.reviewTitle}>{TestimonialTitle}</span>
            <span className={isExpanded ? styles.testimonialTextexpanded : styles.testimonialTextCollapsed}>
                {TestomonialText}
            </span>
            <Btn_LinkGray_SM
                ButtonCTA={isExpanded ? 'Show Less' : 'Show More'}
                iconTrailing={isExpanded ? chevronup : chevrondown}
                handleClick={toggleReview}
            />
        </div>
    );
};

export { TestimonialCard_LoggedIn };
