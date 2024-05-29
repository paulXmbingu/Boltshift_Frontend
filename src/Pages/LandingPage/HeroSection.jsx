import React from "react";
import HeroCard from "../../Components/Shared/HeroCard";
import styles from "./HeroSection.module.css";

function HeroSection() {
    return (
        <div className={styles.heroSection}>
            <HeroCard />
        </div>
    );
};

export default HeroSection;
