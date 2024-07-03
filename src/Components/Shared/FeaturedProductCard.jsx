import React from "react";
import styles from "./FeaturedProductCard.module.css";
import OfferCountDown from "./OfferCountDown";
import { Btn_Pri_SM } from "../Atoms/Button";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";

const FeaturedProductCard = ( {productPhoto, productLabel} ) => {
    return(
        <div className={styles.featuredProductCard}>
            <div className={styles.favoriteButtonContainer}>
                <FavoriteButton />
            </div>
            <Link to={`/product`} className={styles.productPhoto} > <img src={productPhoto} alt="productPhoto" className={styles.productPhoto} /> </Link>
            <div className={styles.productDetails} >
                <Link to={`/product`} className={styles.link} >
                    <div className={styles.productNamePrice} >
                        <div className={`${styles.productName} ${styles.productLabel}`}>
                            {productLabel}
                        </div >
                        <div className={styles.productPrice}>
                            <div className={styles.currency}> Kshs.</div>
                            <div className={styles.priceLabel}> 63,073 </div>
                        </div>
                    </div>
                </Link>
                <div className={styles.counterCTA}>
                    <Link to={`/product`} className={styles.link}>
                        <div className={styles.offerCountDown}>
                            <OfferCountDown />
                        </div>
                    </Link>
                    <Btn_Pri_SM ButtonCTA={`Add to Cart`} />
                </div>
            </div>
        </div>
    )
}

export default FeaturedProductCard;
