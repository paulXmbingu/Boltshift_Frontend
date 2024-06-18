import React from "react";
import styles from "./FeaturedStoreSection.module.css";
import SectionHeader from "../../Components/Shared/SectionHeader";
import ConvenienceStore from "../../assets/Icons/Illustrated/Convenience store.svg";
import ProductCardLandscapeSM from "../../Components/Shared/ProductCardLandscapeSM"
import StoreLogo from "../../assets/Logos/Senjes Cuisines.svg"
import { Btn_Pri_SM, Btn_Sec_Gray_SM } from "../../Components/Atoms/Button";

function FeaturedStoreSection() {
    return (
        <div className={styles.catSection}>
            <SectionHeader headerTitle="Featured Store" icon={ConvenienceStore} />
            <div className={styles.featureStoreWrapper}>
                <div className={styles.storeBackgoundWrapper}>
                    <img src={`https://res.cloudinary.com/excit3/image/upload/v1718663336/Boltshift%20Branding/Store_Background_y8a6x7.jpg`} alt="Store Background" className={styles.storeBackgound} /> 
                </div>
                <div className={styles.storeDetails}> 
                    <img src={StoreLogo} alt="Store Logo" className={styles.storeLogo} /> 
                    <div>Store Name</div>
                    <div className={styles.storeCTAs}>
                        <Btn_Sec_Gray_SM ButtonCTA={`Visit Store`} iconTrailing={``} />
                    </div>
                    <div className={styles.storeDescription}>
                        Senjes Cuisines is a celebrated eatery offering a fusion of global flavors with local ingredients. Our diverse menu features gourmet dishes, artisanal beverages, and exquisite desserts, all in a cozy, welcoming atmosphere.
                    </div>
                </div>
                <div> Horizontal Tabs </div>
                <div className={styles.smallLandscapeCards}>
                    <ProductCardLandscapeSM price={`104,899`} productLabel={`Recliner Lounge Chairs - Relax in Style and Comfort - Crafted from Genuine Leather`} ProductImage={`https://i.pinimg.com/564x/cc/63/67/cc6367600b3b55d912e60a24076d4c9d.jpg`}  />
                    <ProductCardLandscapeSM price={`32,078`} productLabel={`Men's PU Shoulder Bag with Zipper Closure`} ProductImage={`https://i.pinimg.com/736x/39/14/15/391415b615904b2d0b09d1f1edbe9a98.jpg`}  />
                    <ProductCardLandscapeSM price={`29,499`} productLabel={`Versace Accessories | New Ve2269 1002/87 Versace Gold Mod 2269 1002/87 Unisex Sunglasses Ve2269 100287 | Color: Gold/Gray | Size: Os`} ProductImage={`https://i.pinimg.com/564x/be/36/98/be3698f899e58aa9c0e724b8f832ade2.jpg`}  />
                    <ProductCardLandscapeSM price={`19,990`} productLabel={`Yoetey Mens Belt, Leather Belt Reversible Belt for Men, Double Style Singular Elegance 1 3/8" (35mm), Men's, Size:40" (Fits Pants Size 38"), Multicolor`} ProductImage={`https://i.pinimg.com/736x/38/a3/35/38a33564ea28c293db49727b39264223.jpg`}  />
                    <ProductCardLandscapeSM price={`25,987`} productLabel={`Pacific Coast Lighting Vincent Nickel Crystal Console Table Lamps Set of 2`} ProductImage={`https://i.pinimg.com/736x/eb/ac/8e/ebac8efef4c90dd691fb286c365b0211.jpg`}  />
                    <ProductCardLandscapeSM price={`4,895`} productLabel={`Ettika Set of 3 Stretch Cuffs in Gold at Nordstrom`} ProductImage={`https://i.pinimg.com/474x/78/9e/13/789e13125b4d46ba683d4d1e73063645.jpg`}  />
                    <ProductCardLandscapeSM price={`3,100`} productLabel={`Single Shoulder Strap Open-Back Sports Bra Brown XL`} ProductImage={`https://i.pinimg.com/736x/c7/0c/d5/c70cd58357fb4568a8d912ff520f787d.jpg`}  />
                    <ProductCardLandscapeSM price={`7,172`} productLabel={`13*4 Lace Front Wigs Human Hair Wig Front Lace Wig Human Hair Wigs Pre Plucked Remy Hair Wig 180 Density Human Hair Wig For Women / 180Density-13*4`} ProductImage={`https://i.pinimg.com/564x/93/70/6b/93706b357c37899781c86fad487107ad.jpg`}  />
                </div>
                <div> Pagination </div>
            </div>
        </div>
    );
};

export default FeaturedStoreSection;
