import React, { useState } from "react";
import styles from "./TestimonialCard.module.css";
import { Btn_LinkGray_SM } from "../Atoms/Button";
import chevrondown from "../../assets/Icons/UI/chevron-down.svg";
import chevronup from "../../assets/Icons/UI/chevron-up.svg";
import { ProductMediaThumbnailSM } from "./ProductMediaThumbnail";

const TestimonialCard_LoggedIn = ({ TestimonialTitle, TestomonialText, Media, MediaAltText, Media2, MediaAltText2 }) => {
    return (
        <div className={styles.testimonialCard_LoggedInWrap}>
            <div className={styles.buyerDetails}>Buyer Details</div>
            <div className={styles.buyerTestimonial}>
                <TestimonialText 
                    TestimonialTitle={TestimonialTitle}
                    TestomonialText={TestomonialText}
                />
            </div>
            <div className={styles.customerMediaThumbnails}>
                <ProductMediaThumbnailSM
                    Media={Media}
                    MediaAltText={MediaAltText}
                />
                <ProductMediaThumbnailSM
                    Media={Media2}
                    MediaAltText={MediaAltText2}
                />
            </div>
            <div className={styles.peerReactions}>Peer Reactions</div>
        </div>
    );
};

const TestimonialText = ({ TestimonialTitle, TestomonialText }) => {
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

export {
    TestimonialCard_LoggedIn,
    TestimonialText,
};
