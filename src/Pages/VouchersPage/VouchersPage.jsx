import React, { useState, useEffect } from "react";
import styles from "./VouchersPage.module.css";
import { TopNavLarge, TopNavSmall } from "../../Components/Shared/TopNav";
import Footer from "../../Components/Shared/Footer";

function VouchersPage() {
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
            <div> Vouchers Page </div>
            <Footer />
        </div>
    );
}

export default VouchersPage;
