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
                    <LandScapeProductCard />
                    <LandScapeProductCard />
                    <LandScapeProductCard />
                    <LandScapeProductCard />
                    <LandScapeProductCard />
                    <LandScapeProductCard />
                </div>
            </div>
           </div>
    );
};

export default FeaturedStoreSection;
