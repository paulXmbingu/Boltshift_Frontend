import React from "react";
import styles from "./FavoriteButton.module.css";
import WishilistIcon from "../assets/Icons/UI/heart-rounded.svg";

function FavoriteButton() {
    return (
        <div className={styles.favStyling}>
            <div className={styles.featuredIcon}>
                <img src={WishilistIcon} alt="Wishlist Icon"/>
            </div>
        </div>
    );
}

export default FavoriteButton;
