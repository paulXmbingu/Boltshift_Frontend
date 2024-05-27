import React from "react";
import TopNav from "../../Common/TopNav";
import HeroSection from "./HeroSection";
import HotDealTodaySection from "./HotDealTodaySection";
import PopularCategoriesSection from "./PopularCategoriesSection";
import VendorStoriesSection from "./VendorStoriesSection";
import styles from "./LandingPage.module.css";

function LandingPage() {
    return(
        <div className={styles.pageLayout}>
            <TopNav />
            <VendorStoriesSection />
            {/* <HeroSection /> */}
            <PopularCategoriesSection />
            <HotDealTodaySection/>
        </div>
    );
};

export default LandingPage;
