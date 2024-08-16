import React from "react";
import styles from './ProductDetailsSection.module.css'
import { SecSectionHeader } from "../../Components/Shared/SecondarySectionHeader";

const ProductDetailsSection = () => {
    return(
        <div className={styles.productDescriptionSection}>
            <SecSectionHeader headerTitle={`Product Details`} />
            <div className={styles.productDescriptionWrap}>
                <div className={styles.productDescriptionText}>   
                    <ul>
                        <li> 
                            <span className={styles.productDescriptionTextBold}> Package Dimensions: </span>
                            7.5 x 6.5 x 5.0 inches; 15.5 ounces
                        </li>
                        <li> 
                            <span className={styles.productDescriptionTextBold}> Item Model Number: </span>
                            Xpluswear-12345
                        </li>
                        <li> 
                            <span className={styles.productDescriptionTextBold}> Department: </span>
                            Ladies Fashion
                        </li>
                        <li> 
                            <span className={styles.productDescriptionTextBold}> Date First Available: </span>
                            March 10, 2023
                        </li>
                        <li> 
                            <span className={styles.productDescriptionTextBold}> Manufacturer: </span>
                            JRT
                        </li>
                        <li> 
                            <span className={styles.productDescriptionTextBold}> ASIN: </span>
                            B0C1D2EFG3
                        </li>
                        <li> 
                            <span className={styles.productDescriptionTextBold}> Country of Origin: </span>
                            Kenya
                        </li>
                        <li> 
                            <span className={styles.productDescriptionTextBold}> Best Sellers Rank: </span>
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
