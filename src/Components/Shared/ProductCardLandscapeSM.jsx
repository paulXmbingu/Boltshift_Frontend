import React from "react";
import styles from "./ProductCardLandscapeSM.module.css"
import { Link } from "react-router-dom";
import { Btn_Sec_Gray_SM } from "../Atoms/Button";

const ProductCardLandscapeSM = ( {ProductImage, productLabel, price } ) => {
    return(
        <div className={styles.cardWrapper}>
            <Link to={`/product`} className={styles.link} >
                <div className={styles.imageWrapper}> 
                    <img src={ProductImage} alt="ProductImage" className={styles.productImage} />
                </div>
            </Link>
            <div className={styles.productDetails}>
                <Link to={`/product`} className={styles.link} > 
                    <div className={styles.namePrice}>
                        <div className={styles.productName}>
                            <span className={styles.productLabel}> {productLabel} </span>
                        </div>
                        <div className={styles.productPrice}>
                            <span className={styles.currency}> Ksh. </span>
                            <span className={styles.price}> {price} </span>
                        </div>
                    </div>
                </Link>
                <Btn_Sec_Gray_SM ButtonCTA={`Add to Cart`} />
            </div>
        </div>
    );
}

export default ProductCardLandscapeSM;
