import React, { useState } from "react";
import styles from './ReviewSummary.module.css';
import { SecSectionHeader } from "../../Components/Shared/SecondarySectionHeader";
import { Btn_Pri_XL } from "../../Components/Atoms/Button";
import { StarRating4 } from "../../Components/Molecules/StarRating";
import pencilline from "../../assets/Icons/UI/pencil-line.svg";
import { Star_Yellow_100pc } from "../../Components/Atoms/MisIcons";
import { ReviewModalDesktop } from '../../Components/Shared/ReviewModal/ReviewModal'; // Import the modal component

const ReviewSummary = ({ nTHStarReview5, nTHStarReview4, nTHStarReview3, nTHStarReview2, nTHStarReview1 }) => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    const handleClick = () => {
        setIsModalOpen(true); // Open the modal when button is clicked
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

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
                        ButtonCTA="Share a Review"
                        iconLeading={pencilline}
                        handleClick={handleClick}
                    />
                </div>
                <div className={styles.starsInfographics}>
                    <StarsInfographic nTHNumber="5" nTHStarReviews={nTHStarReview5} totalReviews={TotalReviews} />
                    <StarsInfographic nTHNumber="4" nTHStarReviews={nTHStarReview4} totalReviews={TotalReviews} />
                    <StarsInfographic nTHNumber="3" nTHStarReviews={nTHStarReview3} totalReviews={TotalReviews} />
                    <StarsInfographic nTHNumber="2" nTHStarReviews={nTHStarReview2} totalReviews={TotalReviews} />
                    <StarsInfographic nTHNumber="1" nTHStarReviews={nTHStarReview1} totalReviews={TotalReviews} />
                </div>
            </div>

            {isModalOpen && <ReviewModalDesktop onClose={closeModal} />} {/* Conditionally render the modal */}
        </div>
    );
};

const StarsInfographic = ({ nTHNumber, nTHStarReviews, totalReviews }) => {
    const widthPercentage = (nTHStarReviews / totalReviews) * 100;

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
                    <div 
                        className={styles.progressBarnTHStarReview}
                        style={{ width: `${widthPercentage}%` }}
                    ></div>
                </div>
                <div className={styles.nTHStarReviewsWrap}> 
                    <span className={styles.nTHStarReviews}> {nTHStarReviews} </span>
                </div>
            </div>
        </div>
    );
};

export { ReviewSummary };
