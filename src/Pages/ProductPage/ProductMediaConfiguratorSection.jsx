import React from "react";
import styles from "./ProductMediaConfiguratorSection.module.css"
import ProductMediaConfigurator from "../../Components/Shared/ProductMediaConfigurator";

const ProductMediaConfiguratorSection = () => {
    return (
        <div className={styles.mediaConnfigSectionWrapper}>
            <ProductMediaConfigurator />
        </div>
    )
}

export default ProductMediaConfiguratorSection;
