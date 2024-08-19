import React, { useState, useEffect } from "react";
import styles from "./ProductPage.module.css";
import { TopNavLarge, TopNavSmall } from "../../Components/Shared/TopNav";
import ProductMediaConfiguratorSection from "./ProductMediaConfiguratorSection";
import Footer from "../../Components/Shared/Footer";
import BreadCrumb from "../../Components/Shared/BreadCrumb";
import FeaturedStoreSection from "../LandingPage/FeaturedStoreSection";
import { DescriptionSection } from "./DescriptionSection";
import { ProductDetailsSection } from "./ProductDetailsSection";
import RelatedProductsSection from "./RelatedProductsSection";
import { Pagination } from "../../Components/Molecules/Pagination";
import { TestimonialCard_LoggedIn } from "../../Components/Shared/TestimonialCard";

function ProductPage() {
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
            <BreadCrumb Catalog={`Catalog`} Cartegory={`Ladies Fashion`} Subcategory={`Dresses`} ProductName={`Xpluswear Design Plus Size Mother Of The Bride Elegant Champagne Long Sleeve Split Pocket`} />
            <ProductMediaConfiguratorSection />
            <DescriptionSection />
            <ProductDetailsSection />
            <div className={styles.ratingsReviewsRecomendationsSection}>
                <div className={styles.buyerReview}>
                    <TestimonialCard_LoggedIn
                        TestimonialTitle={`This is a great handcrafted timepiece`}
                        TestomonialText={`I own numerous watches, 15 or so, yet this is my first G-Shock. All of my watches are good to a depth of 100 meters, though some have leather bands, but I just wanted something rated better, to at least 200 meters, and with a resin or silicone band so I could wear it swimming with little fear of damage. I mean if you read enough reviews for 100 meter rated watches you will come across a number of them where the reviewer will claim theirs was damaged just in taking a shower. I own a Casio Pro Trek rated to 100 meters with a resin band, but I guess I too have just always wanted a G-Shock because of it's reputation for being tough. And speaking of tough, this one certainly looks the part. What got me started was seeing a G-Shock available at my local Costco however it was the GD-400-1 which had the reverse face and I couldn't read it well enough. But I'm glad because it caused me to start looking at the other color options available and I just couldn't resist the green and gold coloring on this one, it's just awesome looking, the way I always envisioned a G-Shock should look. It looks every bit like it was made for the Army! I like big watches and don't own any smaller than 45mm so this one fits the mold however it's probably the lightest one I now own, even than the Pro Trek I think. The other feature that looks incredible is the textured band, again, adding to the Army look. And even though I'm not a skateboarder, I'm sure the bull bars will prove useful some day but, even if they don't, the gold bars make a statement about it's toughness and look outstanding alongside the green and black case. I really like solar powered watches and did look at the few available in the G-Shock line, but just kept coming back to the looks of this watch until there was no doubt as to which G-Shock I had to have. I'll be replacing my own batteries when the time comes but just hope I get the years of service that G-Shock afficianados rave about. If you're on the fence about this watch, it does look even better in person, and absolutely looks better on my wrist than any picture I've seen.`}
                    />
                    <Pagination />
                </div>
                <RelatedProductsSection />
                <FeaturedStoreSection HeaderTitle={`More from this Store`} />
            </div>
            <Footer />
        </div>
    );
}

export default ProductPage;
