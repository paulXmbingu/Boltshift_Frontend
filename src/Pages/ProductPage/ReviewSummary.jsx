import React from "react";
import styles from './ReviewSummary.module.css'
import { SecSectionHeader } from "../../Components/Shared/SecondarySectionHeader";
import { Btn_Primary_LG } from "../../Components/Atoms/Button";

const ReviewSummary = () => {
    return (
        <div className={styles.reviewSummaryWrap}>
            <SecSectionHeader headerTitle={`Reviews`} />
            <div className={styles.reviewInfographics}>
                <div className={styles.ratingInfographic}>
                    <div> Rating Summary </div>
                    <div> CTA Button </div>
                </div>
                <div className={styles.starsInfographic}> Stars Infographic </div>
            </div>
        </div>
    );
};

export {
    ReviewSummary
};
