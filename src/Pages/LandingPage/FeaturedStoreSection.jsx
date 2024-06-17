import React from "react";
import styles from "./FeaturedStoreSection.module.css";
import SectionHeader from "../../Components/Shared/SectionHeader";
import ConvenienceStore from "../../assets/Icons/Illustrated/Convenience store.svg";
import ProductCardLandscapeSM from "../../Components/Shared/ProductCardLandscapeSM"

function FeaturedStoreSection() {
    return (
        <div className={styles.catSection}>
            <SectionHeader headerTitle="Featured Store" icon={ConvenienceStore} />
            <div className={styles.featureStoreWrapper}>
                {/* <div className={styles.storeBackgoundWrapper}>
                    <img src={`https://i.pinimg.com/564x/c4/58/03/c458036c4c9d585e003b3bff76d010fc.jpg`} alt="Store Background" className={styles.storeBackgound} /> 
                </div> */}
                <div> Store Cover Art </div>
                <div> Store Details </div>
                <div> Horizontal Tabs </div>
                <div className={styles.smallLandscapeCards}>
                    <ProductCardLandscapeSM price={`104,899`} productLabel={`Recliner Lounge Chairs - Relax in Style and Comfort - Crafted from Genuine Leather`} ProductImage={`https://i.pinimg.com/564x/cc/63/67/cc6367600b3b55d912e60a24076d4c9d.jpg`}  />
                    <ProductCardLandscapeSM price={`104,899`} productLabel={`Recliner Lounge Chairs - Relax in Style and Comfort - Crafted from Genuine Leather`} ProductImage={`https://i.pinimg.com/564x/cc/63/67/cc6367600b3b55d912e60a24076d4c9d.jpg`}  />
                    <ProductCardLandscapeSM price={`104,899`} productLabel={`Recliner Lounge Chairs - Relax in Style and Comfort - Crafted from Genuine Leather`} ProductImage={`https://i.pinimg.com/564x/cc/63/67/cc6367600b3b55d912e60a24076d4c9d.jpg`}  />
                    <ProductCardLandscapeSM price={`104,899`} productLabel={`Recliner Lounge Chairs - Relax in Style and Comfort - Crafted from Genuine Leather`} ProductImage={`https://i.pinimg.com/564x/cc/63/67/cc6367600b3b55d912e60a24076d4c9d.jpg`}  />
                    <ProductCardLandscapeSM price={`104,899`} productLabel={`Recliner Lounge Chairs - Relax in Style and Comfort - Crafted from Genuine Leather`} ProductImage={`https://i.pinimg.com/564x/cc/63/67/cc6367600b3b55d912e60a24076d4c9d.jpg`}  />
                    <ProductCardLandscapeSM price={`104,899`} productLabel={`Recliner Lounge Chairs - Relax in Style and Comfort - Crafted from Genuine Leather`} ProductImage={`https://i.pinimg.com/564x/cc/63/67/cc6367600b3b55d912e60a24076d4c9d.jpg`}  />
                    <ProductCardLandscapeSM price={`104,899`} productLabel={`Recliner Lounge Chairs - Relax in Style and Comfort - Crafted from Genuine Leather`} ProductImage={`https://i.pinimg.com/564x/cc/63/67/cc6367600b3b55d912e60a24076d4c9d.jpg`}  />
                    <ProductCardLandscapeSM price={`104,899`} productLabel={`Recliner Lounge Chairs - Relax in Style and Comfort - Crafted from Genuine Leather`} ProductImage={`https://i.pinimg.com/564x/cc/63/67/cc6367600b3b55d912e60a24076d4c9d.jpg`}  />
                </div>
                <div> Pagination </div>
            </div>
        </div>
    );
};

export default FeaturedStoreSection;
