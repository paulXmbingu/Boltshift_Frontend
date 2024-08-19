import React from "react";
import styles from "./TestimonialCard.module.css"
import { Btn_LinkGray_SM } from "../Atoms/Button";
import chevrondown from "../../assets/Icons/UI/chevron-down.svg"

const TestimonialCard_LoggedIn = ({TestimonialTitle, TestomonialText}) => {
    return (
        <div className={styles.testimonialCard_LoggedInWrap}>
            <div className={styles.buyerDetails}> Buyer Details </div>
            <div className={styles.buyerTestimonial}>
                <TestimonialTextColapsed TestimonialTitle={TestimonialTitle} TestomonialText={TestomonialText} />
                <div> Buyer Review </div>
            </div>
            <div className={styles.uploadedMediaThumbnailsReactions}> User Product Media Thumbnails & Reactions </div>
        </div>
    );
};

const TestimonialTextColapsed = ({TestimonialTitle, TestomonialText}) => {
    return (
        <div className={styles.reviewTitleWrap}>
            <span className={styles.reviewTitle}> {TestimonialTitle} </span>
            <span className={styles.testimonialText}> {TestomonialText} </span>
            <Btn_LinkGray_SM ButtonCTA={`Show More`} iconTrailing={chevrondown}/>
        </div>
    );
};

export {
    TestimonialCard_LoggedIn,
    TestimonialTextColapsed,

};
