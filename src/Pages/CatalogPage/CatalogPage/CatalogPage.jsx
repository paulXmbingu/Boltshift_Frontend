import React, { useState, useEffect } from "react";
import styles from "./CatalogPage.module.css";
import { TopNavLarge, TopNavSmall } from "../../../Components/Shared/TopNav";
import Footer from "../../../Components/Shared/Footer";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import bag from './Assets/Shopping bags (1).svg';
import Chevron from './Assets/chevron-right.svg';
import SearchResultOutput from "../../../Components/Molecules/SearchResultOutput";
import BreadCrumb from "../../../Components/Shared/BreadCrumb";
import ProductListingSection from "../ProductListingSection";
import CatalogFilterSection from "../CatalogFilterSection";

function CatalogPage() {
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
            <BreadCrumb Catalog={`Catalog`} />
            <div className={styles.PageHeaderSection}>
                <SectionHeader icon={bag}  headerTitle={`Catalog`} />
                <SearchResultOutput NoOfHits={`366 results for the search of`} SearchPhrase={`"luxury contemporary watch"`} />
            </div> 
            <div className={styles.FilterAndProduct}>
                <CatalogFilterSection />
                <ProductListingSection />
            </div>
            <Footer />
        </div>
    );
}

export default CatalogPage;
