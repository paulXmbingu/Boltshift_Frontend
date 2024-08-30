import React from "react";
import styles from "./HeroSection.module.css";
import { useMediaQuery } from "react-responsive";
import { HeroCardDesktop, HeroCardMobile } from "../../../Components/Shared/HeroCard";

function HeroSection() {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className={styles.heroSection}>
      {isLargeScreen ? <HeroCardDesktop /> : <HeroCardMobile />}
    </div>
  );
}

export default HeroSection;
