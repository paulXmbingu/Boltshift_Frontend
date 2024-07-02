import React, { useState, useEffect } from "react";
import styles from "./VouchersPage.module.css";
import { TopNavLarge, TopNavSmall } from "../../Components/Shared/TopNav";
import FooterSection from "../../Components/Shared/Footer";

function VouchersPage() {
    const [isLargeScreen, setIsLargeScreen] = useState(typeof window !== "undefined" ? window.innerWidth > 768 : false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={styles.pageLayout}>
            {isLargeScreen ? <TopNavLarge /> : <TopNavSmall />}
            <div> Payments Page </div>
            <FooterSection />
        </div>
    );
}

export default VouchersPage;
