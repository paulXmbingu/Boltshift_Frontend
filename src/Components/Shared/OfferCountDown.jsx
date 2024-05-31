import React from "react";
import styles from "./OfferCountDown.module.css"

const OfferCountDown = () => {
    return(
        <div className={styles.countDownWrapper}>
            <div className={styles.CounterPad}>
                <div className={styles.counterContainer}>
                    <div className={styles.counterText}> 365 </div>
                </div>
                <div className={styles.timeUnit}>
                    <div className={styles.unit}> Days </div>
                </div>
            </div>
            <div className={styles.CounterPad}>
                <div className={styles.counterContainer}>
                    <div className={styles.counterText}> 24 </div>
                </div>
                <div className={styles.timeUnit}>
                    <div className={styles.unit}> Hours </div>
                </div>
            </div>
            <div className={styles.CounterPad}>
                <div className={styles.counterContainer}>
                    <div className={styles.counterText}> 59 </div>
                </div>
                <div className={styles.timeUnit}>
                    <div className={styles.unit}> Min </div>
                </div>
            </div>
            <div className={styles.CounterPad}>
                <div className={styles.counterContainer}>
                    <div className={styles.counterText}> 59 </div>
                </div>
                <div className={styles.timeUnit}>
                    <div className={styles.unit}> Sec </div>
                </div>
            </div>
        </div>
    );
};

export default OfferCountDown;
