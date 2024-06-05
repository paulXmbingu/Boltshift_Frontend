import React from 'react';
import styles from './LandScapeProductCard.module.css';

const LandScapeProductCard = ({productImage, productText }) => {
    return (
        <div className={styles.landScapeProductCard}>
            <div className={styles.productImage}>
                <img src={productImage} alt="Product Image" />
            </div>
            <div className={styles.detailsCTA}>
                <div className={styles.productNamePrice}>
                    <div className={styles.productName}>
                        <div className={styles.productText}> {productText} </div>
                    </div>
                    <div> Product Price </div>
                </div>
                <div> Button </div>
            </div>
        </div>
    );
}

export default LandScapeProductCard;
