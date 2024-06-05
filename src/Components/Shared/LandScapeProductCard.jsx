import React from 'react';
import styles from './LandScapeProductCard.module.css';
import { Btn_Sec_Gray_SM } from '../Atoms/Button';

const LandScapeProductCard = ({productImage, productText, price }) => {
    return (
        <div className={styles.landScapeProductCard}>
            <div className={styles.imageMask}>
                <img src={productImage} alt="Product Image" className={styles.productImage} />
            </div>
            <div className={styles.detailsCTA}>
                <div className={styles.productNamePrice}>
                    <div className={styles.productName}>
                        <div className={styles.productText}> {productText} </div>
                    </div>
                    <div className={styles.productPrice}>
                        <div className={styles.currency}> Ksh. </div>
                        <div className={styles.price}> {price} </div>
                    </div>
                </div>
                <Btn_Sec_Gray_SM ButtonCTA={`Add to Cart`} iconLeading={``} />
            </div>
        </div>
    );
}

export default LandScapeProductCard;
