import React, { useEffect, useState } from "react";
import styles from "./OfferCountDown.module.css"

const OfferCountDown = () => {
    const [days, setDays] = useState(30);
    const [hours, setHours] = useState(24);
    const [minutes, setMinutes] = useState(59);
    const [seconds, setSeconds] = useState(59);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    if (hours > 0) {
                        setHours(hours - 1);
                        setMinutes(59);
                    } else {
                        if (days > 0) {
                            setDays(days - 1);
                            setHours(24);
                        }
                    }
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [days, hours, minutes, seconds]);

    return (
        <div className={styles.countDownWrapper}>
            {/* DAYS */}
            <div className={styles.CounterPad}>
                <div className={styles.counterContainer}>
                    <div className={styles.counterText}> {days} </div>
                </div>
                <div className={styles.timeUnit}>
                    <div className={styles.unit}> Days </div>
                </div>
            </div>
            <div className={styles.separatorWrapper}>
                <div className={styles.separator}>
                    <div className={styles.separatorText}> : </div>
                </div>
            </div>
            {/* HOURS */}
            <div className={styles.CounterPad}>
                <div className={styles.counterContainer}>
                    <div className={styles.counterText}> {hours} </div>
                </div>
                <div className={styles.timeUnit}>
                    <div className={styles.unit}> Hrs </div>
                </div>
            </div>
            <div className={styles.separatorWrapper}>
                <div className={styles.separator}>
                    <div className={styles.separatorText}> : </div>
                </div>
            </div>
            {/* MIN */}
            <div className={styles.CounterPad}>
                <div className={styles.counterContainer}>
                    <div className={styles.counterText}> {minutes} </div>
                </div>
                <div className={styles.timeUnit}>
                    <div className={styles.unit}> Min </div>
                </div>
            </div>
            <div className={styles.separatorWrapper}>
                <div className={styles.separator}>
                    <div className={styles.separatorText}> : </div>
                </div>
            </div>
            {/* SEC */}
            <div className={styles.CounterPad}>
                <div className={styles.counterContainer}>
                    <div className={styles.counterText}> {seconds} </div>
                </div>
                <div className={styles.timeUnit}>
                    <div className={styles.unit}> Sec </div>
                </div>
            </div>
        </div>
    );
};

export default OfferCountDown;
