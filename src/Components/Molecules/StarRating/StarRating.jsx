import React from "react";
import styles from "./StarRating.module.css"
import StarIcon from "./Assets/Star.svg"
import StarIconBackground from "./Assets/Star Background.svg"
import { Star_Yellow_100pc } from "../../Atoms/MisIcons/MisIcons";

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

const StarRating1 = ( {size} ) => {
    return (
        <div className={styles.starRating}>
            <Star_Yellow_100pc size={size} />
            <StarBackground />
            <StarBackground />
            <StarBackground />
            <StarBackground />
        </div>
    );
};

const StarRating2 = ( {size} ) => {
    return (
        <div className={styles.starRating}>
            <Star_Yellow_100pc size={size} />
            <Star_Yellow_100pc size={size} />
            <StarBackground />
            <StarBackground />
            <StarBackground />
        </div>
    );
};

const StarRating3 = ( {size} ) => {
    return (
        <div className={styles.starRating}>
            <Star_Yellow_100pc size={size} />
            <Star_Yellow_100pc size={size} />
            <Star_Yellow_100pc size={size} />
            <StarBackground />
            <StarBackground />
        </div>
    );
};

const StarRating4 = ( {size} ) => {
    return (
        <div className={styles.starRating}>
            <Star_Yellow_100pc size={size} />
            <Star_Yellow_100pc size={size} />
            <Star_Yellow_100pc size={size} />
            <Star_Yellow_100pc size={size} />
            <StarBackground />
        </div>
    );
};

const StarRating5 = ( {size} ) => {
    return (
        <div className={styles.starRating}>
            <Star_Yellow_100pc size={size} />
            <Star_Yellow_100pc size={size} />
            <Star_Yellow_100pc size={size} />
            <Star_Yellow_100pc size={size} />
            <Star_Yellow_100pc size={size} />
        </div>
    );
};

export { Star, StarBackground, StarRating1, StarRating2, StarRating3, StarRating4, StarRating5 };
