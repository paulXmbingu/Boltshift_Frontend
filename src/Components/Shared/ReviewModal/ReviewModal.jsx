import React from "react";
import styles from './ReviewModal.module.css';
import { Btn_Primary_MD } from "../../Atoms/Button";

const ReviewModalDesktop = ({ onClose }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.reviewModalDesktopWrap} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}> Modal Header </div>
                <ReviewDetails />
                <ModalFooter />
            </div>
        </div>
    );
};

const ReviewDetails = () => {
    return (
        <div className={styles.modalHeader}>
            ReviewDetails
        </div>
    );
};

const ModalFooter = () => {
    return (
        <div className={styles.modalFooter}>
            <Btn_Primary_MD ButtonCTA={`Submit Review`}/>
        </div>
    );
};

export { ReviewModalDesktop };
