import React from "react";
import styles from './ProductDetailsSection.module.css'
import { SecSectionHeader } from "../../Components/Shared/SecondarySectionHeader";

const ProductDetailsSection = () => {
    return(
        <div className={styles.productDetailsSection}>
            <SecSectionHeader headerTitle={`Product Details`} />
            <div className={styles.productDetailsWrap}>
                <div className={styles.productDetailsText}>   
                    <ul>
                        <li> 
                            <span className={styles.productDetailsTextBold}> Package Dimensions: </span>
                            7.5 x 6.5 x 5.0 inches; 15.5 ounces
                        </li>
                        <li> 
                            <span className={styles.productDetailsTextBold}> Item Model Number: </span>
                            Xpluswear-12345
                        </li>
                        <li> 
                            <span className={styles.productDetailsTextBold}> Department: </span>
                            Ladies Fashion
                        </li>
                        <li> 
                            <span className={styles.productDetailsTextBold}> Date First Available: </span>
                            March 10, 2023
                        </li>
                        <li> 
                            <span className={styles.productDetailsTextBold}> Manufacturer: </span>
                            JRT
                        </li>
                        <li> 
                            <span className={styles.productDetailsTextBold}> ASIN: </span>
                            B0C1D2EFG3
                        </li>
                        <li> 
                            <span className={styles.productDetailsTextBold}> Country of Origin: </span>
                            Kenya
                        </li>
                        <li> 
                            <span className={styles.productDetailsTextBold}> Best Sellers Rank: </span>
                            #9 in Women's Fashion
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export {
    ProductDetailsSection
};
