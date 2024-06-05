import React from "react";
import styles from "./FeaturedStore.module.css";
import HotDealCard from "../../Components/Shared/HotDealCard";
import SectionHeader from "../../Components/Shared/SectionHeader";
import ConvenienceStore from "../../assets/Icons/Illustrated/Convenience store.svg";
import FeaturedProductCard from "../../Components/Shared/FeaturedProductCard";
import HotDealCardLandscape from "../../Components/Shared/HotDealCardLandscape";

function FeaturedStore() {
    return (
        <div className={styles.catSection}>
            <SectionHeader headerTitle="Featured Store" icon={ConvenienceStore}/>
            <div className={styles.featuredStoreCards}>
                <div> Featured Store Card </div>
                <div className={styles.smallLandscapeCards}> Small Landscape Cards </div>
            </div>
           </div>
    );
};

export default FeaturedStore;
