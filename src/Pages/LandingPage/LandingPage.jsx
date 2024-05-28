import React from "react";
import TopNav from "../../Common/TopNav";
import HeroSection from "./HeroSection";
import HotDealTodaySection from "./HotDealTodaySection";
import PopularCategoriesSection from "./PopularCategoriesSection";
import VendorStoriesSection from "./VendorStoriesSection";
import styles from "./LandingPage.module.css";
import FeaturedProductsSection from "./FeaturedProductsSection";

function LandingPage() {
    return(
        <div className={styles.pageLayout}>
            {/* <TopNav /> */}
            <VendorStoriesSection />
            <HeroSection />
            <PopularCategoriesSection />
            <HotDealTodaySection/>
            <FeaturedProductsSection />
        </div>
    );
};

export default LandingPage;
