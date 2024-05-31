import React from "react";
import styles from "./FeaturedProductCard.module.css";
import OfferCountDown from "./OfferCountDown";

const FeaturedProductCard = ( {productPhoto, productLabel} ) => {
    return(
        <div className={styles.featuredProductCard}>
            <img src={productPhoto} alt="productPhoto" className={styles.productPhoto} />
            <div className={styles.productDetails} >
                <div className={styles.productNamePrice} >
                <div className={`${styles.productName} ${styles.productLabel}`}>
                    {productLabel}
                </div >
                <div className={styles.productPrice}>
                    <div className={styles.currency}> Kshs.</div>
                    <div className={styles.priceLabel}> 63,073 </div>
                </div>
                </div>
                <div className={styles.counterCTA}>
                    <div className={styles.offerCountDown}>
                        <OfferCountDown />
                    </div>
                    <button className={styles.button}> Add to Cart </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProductCard;
