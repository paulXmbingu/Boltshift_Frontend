import React from "react";
import styles from "./LandingPage.module.css";
import { TopNavLarge } from "../../Components/Shared/TopNav";
import HeroSection from "./HeroSection";
import HotDealTodaySection from "./HotDealTodaySection";
import PopularCategoriesSection from "./PopularCategoriesSection";
import VendorStoriesSection from "./VendorStoriesSection";
import FeaturedProductsSection from "./FeaturedProductsSection";
import FooterSection from "./FooterSection";
import FeaturedStoreSection from "./FeaturedStoreSection";
import PopularProductsSection from "./PopularProductsSection";

function LandingPage() {
    return(
        <div className={styles.pageLayout}>
            <TopNavLarge />
            <VendorStoriesSection />
            <HeroSection />
            <PopularCategoriesSection />
            <HotDealTodaySection/>
            <FeaturedProductsSection />
            <FeaturedStoreSection />
            <PopularProductsSection />
            <FooterSection />
        </div>
    );
};

export default LandingPage;
