import React from "react";
import styles from "./StarRating.module.css"
import StarIcon from "../../../assets/Icons/Illustrated/Star.svg"
import StarIconBackground from "../../../assets/Icons/Illustrated/Star Background.svg"

const Star = () => {
    return (
        <div className={styles.star}>
            <img src={StarIcon} alt="Star" className={styles.star} />
        </div>
    );
};

const StarBackground = () => {
    return (
        <div className={styles.star}>
            <img src={StarIconBackground} alt="Star" className={styles.star} />
        </div>
    );
};

const StarRating1 = () => {
    return (
        <div className={styles.starRating}>
            <Star />
            <StarBackground />
            <StarBackground />
            <StarBackground />
            <StarBackground />
        </div>
    );
};

const StarRating2 = () => {
    return (
        <div className={styles.starRating}>
            <Star />
            <Star />
            <StarBackground />
            <StarBackground />
            <StarBackground />
        </div>
    );
};

const StarRating3 = () => {
    return (
        <div className={styles.starRating}>
            <Star />
            <Star />
            <Star />
            <StarBackground />
            <StarBackground />
        </div>
    );
};

const StarRating4 = () => {
    return (
        <div className={styles.starRating}>
            <Star />
            <Star />
            <Star />
            <Star />
            <StarBackground />
        </div>
    );
};

const StarRating5 = () => {
    return (
        <div className={styles.starRating}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    );
};

export { Star, StarBackground, StarRating1, StarRating2, StarRating3, StarRating4, StarRating5 };
