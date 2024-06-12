import React from "react";
import { useMediaQuery } from "react-responsive";
import { HeroCardDesktop, HeroCardMobile } from "../../Components/Shared/HeroCard";
import styles from "./HeroSection.module.css";

function HeroSection() {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className={styles.heroSection}>
      {isLargeScreen ? <HeroCardDesktop /> : <HeroCardMobile />}
    </div>
  );
}

export default HeroSection;
