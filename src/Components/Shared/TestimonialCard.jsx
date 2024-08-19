import React from "react";
import styles from "./TestimonialCard.module.css"

const TestimonialCard_LoggedIn = () => {
    
    return (
        <div className={styles.testimonialCard_LoggedInWrap}>
            <div className={styles.buyerDetails}> Buyer Details </div>
            <div className={styles.buyerTestimonial}> Buyer Testimonial </div>
            <div className={styles.uploadedMediaThumbnailsReactions}> User Product Media Thumbnails & Reactions </div>
        </div>
    );
};

export {
    TestimonialCard_LoggedIn,

};
