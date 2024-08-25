import React from "react";
import styles from './ReviewModal.module.css';

const ReviewModalDesktop = ({ onClose }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.reviewModalDesktopWrap} onClick={(e) => e.stopPropagation()}>
                Review Modal Desktop
            </div>
        </div>
    );
};

export { ReviewModalDesktop };
