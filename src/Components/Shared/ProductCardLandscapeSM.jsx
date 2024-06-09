import React from "react";
import styles from "./ProductCardLandscapeSM.module.css"
import { Btn_Sec_Gray_SM } from "../Atoms/Button";

const ProductCardLandscapeSM = ( {ProductImage, } ) => {
    return(
        <div className={styles.cardWrapper}>
            <div className={styles.imageWrapper}> 
                <img src={ProductImage} alt="ProductImage" className={styles.productImage} />
            </div>
            <div className={styles.productDetails}>
                <div className={styles.namePrice}>
                    <div> Product Name </div>
                    <div> Product Price </div>
                </div>
                <Btn_Sec_Gray_SM ButtonCTA={`Add to Cart`} />
            </div>
        </div>
    );
}

export default ProductCardLandscapeSM;
