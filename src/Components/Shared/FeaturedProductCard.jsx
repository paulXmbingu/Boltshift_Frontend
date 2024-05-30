import React from "react";
import styles from "./FeaturedProductCard.module.css";

const FeaturedProductCard = ( {productPhoto} ) => {
    return(
        <div className={styles.featuredProductCard}>
            <img src={productPhoto} alt="productPhoto" className={styles.productPhoto} />
            <div>Product Details</div>
        </div>
    )
}

export default FeaturedProductCard;
