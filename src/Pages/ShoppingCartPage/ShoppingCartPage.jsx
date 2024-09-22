import React, { useState, useEffect } from "react";
import styles from "./ShoppingCartPage.module.css";
import { TopNavLarge, TopNavSmall } from "../../Components/Shared/TopNav";
import FooterSection from "../../Components/Shared/Footer";

function ShoppingCartPage() {
    const [isLargeScreen, setIsLargeScreen] = useState(typeof window !== "undefined" ? window.innerWidth > 768 : false);

    useEffect(() => {
        window.scrollTo(0,0);
        
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={styles.pageLayout}>
            {isLargeScreen ? <TopNavLarge /> : <TopNavSmall />}
            <div> Shopping Cart  </div>
            <FooterSection />
        </div>
    );
}

export default ShoppingCartPage;
