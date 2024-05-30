import React from "react";
import styles from "./FeaturedProductCard.module.css";

const FeaturedProductCard = ( {productPhoto, productLabel} ) => {
    return(
        <div className={styles.featuredProductCard}>
            <img src={productPhoto} alt="productPhoto" className={styles.productPhoto} />
            <div className={styles.productDetails} >
                <div className={styles.productNamePrice} >
                <div className={`${styles.productName} ${styles.productLabel}`}>
                    {productLabel}
                </div>
                    <div> Product Price</div>
                </div>
                <div> Counter and CTA </div>
            </div>
        </div>
    )
}

export default FeaturedProductCard;
