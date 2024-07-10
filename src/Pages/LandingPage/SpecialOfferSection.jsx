import React from "react";
import styles from "./FeaturedStoreSection.module.css";
import SectionHeader from "../../Components/Shared/SectionHeader";
import OfferLabel from "../../assets/Icons/Illustrated/Label.svg";
import ProductMediaConfigurator from "../../Components/Shared/ProductMediaConfigurator";

function SpecialOfferSection() {
    return (
        <div className={styles.catSection}>
            <SectionHeader headerTitle="Special Offer" icon={OfferLabel} />
            <ProductMediaConfigurator />
        </div>
    );
};

export default SpecialOfferSection;
