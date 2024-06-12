import React, { useState, useEffect } from "react";
import { HeroCardDesktop, HeroCardMobile } from "../../Components/Shared/HeroCard";
import styles from "./HeroSection.module.css";

const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(() => typeof window !== "undefined" && window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return isLargeScreen;
};

function HeroSection() {
  const isLargeScreen = useIsLargeScreen();

  return (
    <div className={styles.heroSection}>
      {isLargeScreen ? <HeroCardDesktop /> : <HeroCardMobile />}
    </div>
  );
}

export default HeroSection;
