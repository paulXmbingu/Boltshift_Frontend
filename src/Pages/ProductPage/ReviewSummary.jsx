import React from "react";
import styles from './ReviewSummary.module.css'
import { SecSectionHeader } from "../../Components/Shared/SecondarySectionHeader";
import { Btn_Pri_XL, } from "../../Components/Atoms/Button";
import { StarRating4 } from "../../Components/Molecules/StarRating";
import pencilline from "../../assets/Icons/UI/pencil-line.svg"
import { Star_Yellow_100pc } from "../../Components/Atoms/MisIcons";

const ReviewSummary = ( { nTHStarReview5, nTHStarReview4, nTHStarReview3, nTHStarReview2, nTHStarReview1 }) => {

    const TotalReviews = nTHStarReview5 + nTHStarReview4 + nTHStarReview3 + nTHStarReview2 + nTHStarReview1;

    return (
        <div className={styles.reviewSummaryWrap}>
            <SecSectionHeader headerTitle={`Reviews`} />
            <div className={styles.reviewInfographics}>
                <div className={styles.ratingInfographic}>
                    <div className={styles.ratingSummary}> 
                        <div className={styles.ratingSummaryFigure}> 4.1 </div>
                        <div className={styles.starNumberReview}> 
                            <StarRating4 />
                            <div className={styles.avareageReviewCount}> {TotalReviews} Reviews </div>
                        </div>
                    </div>
                    <Btn_Pri_XL
                        ButtonCTA={`Share a Review`}
                        iconLeading={pencilline}
                    />
                </div>
                <div className={styles.starsInfographics}>
                    <StarsInfographic nTHNumber={`5`} nTHStarReviews={nTHStarReview5} />
                    <StarsInfographic nTHNumber={`4`} nTHStarReviews={nTHStarReview4} />
                    <StarsInfographic nTHNumber={`3`} nTHStarReviews={nTHStarReview3} />
                    <StarsInfographic nTHNumber={`2`} nTHStarReviews={nTHStarReview2} />
                    <StarsInfographic nTHNumber={`1`} nTHStarReviews={nTHStarReview1} />
                </div>
            </div>
        </div>
    );
};

const StarsInfographic = ({ nTHNumber, nTHStarReviews }) => {
    return (
        <div className={styles.starsInfographic}>
            <div className={styles.nTHStar}>
                <div className={styles.nTHWrapper}> 
                    <span className={styles.nTHNumber}> { nTHNumber } </span>
                </div>
                <Star_Yellow_100pc size={20} />
            </div>
            <div className={styles.progressMeterReviewCount}> 
                <div className={styles.progressBarFull}>
                    <div className={styles.progressBarnTHStarReview}></div>
                </div>
                <div className={styles.nTHStarReviewsWrap}> 
                    <span className={styles.nTHStarReviews}> {nTHStarReviews} </span>
                </div>
            </div>
        </div>
    );
};

export {
    ReviewSummary,
};
