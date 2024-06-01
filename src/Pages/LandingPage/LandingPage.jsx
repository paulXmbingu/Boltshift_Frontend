import React from "react";
import styles from "./LandingPage.module.css";
import TopNav from "../../Components/Shared/TopNav";
import HeroSection from "./HeroSection";
import HotDealTodaySection from "./HotDealTodaySection";
import PopularCategoriesSection from "./PopularCategoriesSection";
import VendorStoriesSection from "./VendorStoriesSection";
import FeaturedProductsSection from "./FeaturedProductsSection";
import FooterSection from "./FooterSection";

function LandingPage() {
    return(
        <div className={styles.pageLayout}>
            <TopNav />
            <VendorStoriesSection />
            <HeroSection />
            <PopularCategoriesSection />
            <HotDealTodaySection/>
            <FeaturedProductsSection />
            <FooterSection />
        </div>
    );
};

export default LandingPage;
