import React from "react";
import styles from './ReviewSummary.module.css'
import { SecSectionHeader } from "../../Components/Shared/SecondarySectionHeader";

const ReviewSummary = () => {
    return (
        <div className={styles.reviewSummaryWrap}>
            <SecSectionHeader headerTitle={`Reviews`} />
            <div className={styles.reviewInfographics}>
                Review Infographics
            </div>
        </div>
    );
};

export {
    ReviewSummary
};
