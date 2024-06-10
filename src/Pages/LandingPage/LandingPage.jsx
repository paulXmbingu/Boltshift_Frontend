import React, { useState, useEffect } from "react";
import styles from "./LandingPage.module.css";
import { TopNavLarge, TopNavSmall } from "../../Components/Shared/TopNav";
import HeroSection from "./HeroSection";
import HotDealTodaySection from "./HotDealTodaySection";
import PopularCategoriesSection from "./PopularCategoriesSection";
import VendorStoriesSection from "./VendorStoriesSection";
import FeaturedProductsSection from "./FeaturedProductsSection";
import FooterSection from "./FooterSection";
import FeaturedStoreSection from "./FeaturedStoreSection";
import PopularProductsSection from "./PopularProductsSection";
import TrendingProductsSection from "./TrendingProductsSection";

function LandingPage() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

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
            <VendorStoriesSection />
            <HeroSection />
            <PopularCategoriesSection />
            <HotDealTodaySection />
            <FeaturedProductsSection />
            <FeaturedStoreSection />
            <PopularProductsSection />
            <TrendingProductsSection />
            <FooterSection />
        </div>
    );
}

export default LandingPage;
