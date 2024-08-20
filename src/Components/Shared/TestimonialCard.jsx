import React, { useState } from "react";
import styles from "./TestimonialCard.module.css";
import { Btn_LinkGray_SM } from "../Atoms/Button";
import chevrondown from "../../assets/Icons/UI/chevron-down.svg";
import chevronup from "../../assets/Icons/UI/chevron-up.svg";
import { ProductMediaThumbnailSM } from "./ProductMediaThumbnail";

const TestimonialCard_LoggedIn = ({ TestimonialTitle, TestomonialText, Media, MediaAltText, Media2, MediaAltText2, Media3, MediaAltText3, Media4, MediaAltText4, Media5, MediaAltText5, Media6, MediaAltText6 }) => {
    return (
        <div className={styles.testimonialCard_LoggedInWrap}>
            <div className={styles.buyerDetails}>Buyer Details</div>
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
