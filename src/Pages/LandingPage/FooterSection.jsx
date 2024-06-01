import React from "react";
import styles from "./FooterSection.module.css"
import Footer from "../../Components/Shared/Footer";

const FooterSection = () => {
    return (
        <div className={styles.footerSectionWrapper}>
            <Footer />
        </div>
    );
};

export default FooterSection;
