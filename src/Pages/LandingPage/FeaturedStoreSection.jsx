import React from "react";
import styles from "./FeaturedStoreSection.module.css";
import SectionHeader from "../../Components/Shared/SectionHeader";
import ConvenienceStore from "../../assets/Icons/Illustrated/Convenience store.svg";
import LandScapeProductCard from "../../Components/Shared/LandScapeProductCard";

function FeaturedStoreSection() {
    return (
        <div className={styles.catSection}>
            <SectionHeader headerTitle="Featured Store" icon={ConvenienceStore}/>
            <div className={styles.featuredStoreCards}>
                Featured Store Card Component
                <div className={styles.smallLandscapeCards}>
                    <LandScapeProductCard productImage={`https://i.pinimg.com/736x/b2/4f/c9/b24fc9c02f7ae7ef59b7297463ab69be.jpg`} productText={`Vintage Leather Backpack For Women`} />
                </div>
            </div>
           </div>
    );
};

export default FeaturedStoreSection;
