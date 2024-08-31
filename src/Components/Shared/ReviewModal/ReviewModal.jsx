import React from "react";
import styles from './ReviewModal.module.css';
import { Btn_Pri_XL } from "../../Atoms/Button";
import { StarRating5 } from "../../Molecules/StarRating";
import { TextareaInputField } from "../../Atoms/Inputs";

const ReviewModalDesktop = ({ onClose }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.reviewModalDesktopWrap} onClick={(e) => e.stopPropagation()}>
                <ModalHeader />
                <ReviewDetails />
                <ModalFooter />
            </div>
        </div>
    );
};

const ModalHeader = () => {
    return (
        <div className={styles.modalHeader}>
            Modal Header
        </div>
    );
};

const ReviewDetails = () => {
    return (
        <div className={styles.reviewDetails}>
            <div> Review Title </div>
            <TextareaInputField />
            <div className={styles.starRating}>
                <span className={styles.starRatingLabel}> Rating* </span>
                <StarRating5 />
            </div>
            <input type="file" />
        </div>
    );
};

const ModalFooter = () => {
    return (
        <div className={styles.modalFooter}>
            <Btn_Pri_XL ButtonCTA={`Submit Review`}/>
        </div>
    );
};

export { ReviewModalDesktop };
