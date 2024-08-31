import React from "react";
import styles from "./SpecialOfferSection.module.css";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import OfferLabel from "./Assets/Label.svg";
import ProductMediaConfigurator from "../../../Components/Shared/ProductMediaConfigurator";

function SpecialOfferSection() {
    return (
        <div className={styles.catSection}>
            <SectionHeader headerTitle="Special Offer" icon={OfferLabel} />
            <ProductMediaConfigurator />
        </div>
    );
};

export default SpecialOfferSection;
