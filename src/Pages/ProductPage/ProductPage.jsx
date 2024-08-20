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
            <BreadCrumb 
                Catalog={`Catalog`} 
                Cartegory={`Ladies Fashion`} 
                Subcategory={`Dresses`} 
                ProductName={`Xpluswear Design Plus Size Mother Of The Bride Elegant Champagne Long Sleeve Split Pocket`} 
            />
            <ProductMediaConfiguratorSection />
            <DescriptionSection />
            <ProductDetailsSection />
            <div className={styles.ratingsReviewsRecomendationsSection}>
                <div className={styles.buyerReview}>
                    <TestimonialCard_LoggedIn
                        TestimonialTitle={`Elegant and Flattering Dress - Perfect for Special Occasions!`}
                        TestomonialText={`
                            I recently purchased the Xpluswear Design Plus Size Mother Of The Bride Dress, and I couldn't be happier with my choice. The dress is absolutely stunning with its elegant champagne color and beautifully flowing silhouette. The attention to detail is evident in the delicate embellishments, which add just the right amount of sparkle without being over the top.
                            What truly impressed me was the flattering fit—designed specifically for plus sizes, this dress made me feel confident and comfortable throughout the event. The high-quality fabric not only felt luxurious but also moved gracefully as I walked, making it perfect for a formal occasion.
                            I also appreciate the care instructions provided, as they ensure the dress will stay in pristine condition for future events. Overall, this dress is a wonderful blend of timeless sophistication and modern elegance. I highly recommend it to anyone looking for a standout piece for a special occasion!
                        `}
                        Media={`https://i.pinimg.com/474x/26/30/c9/2630c9ebba4d2a639234b45a40150793.jpg`}
                        Media2={`https://i.pinimg.com/736x/ef/eb/de/efebdef03c74d76fe34144970ae1a573.jpg`}
                        Media3={`https://i.pinimg.com/736x/1f/e3/19/1fe319a103a9bda50747caa9fda8e83d.jpg`}
                        Media4={`https://i.pinimg.com/474x/1e/6d/5f/1e6d5f1d930f7ed20d0501f68bc8f0b9.jpg`}
                        Media5={`https://i.pinimg.com/564x/1c/3b/b1/1c3bb14f744106323785fb63f3e0d3b1.jpg`}
                        Media6={`https://i.pinimg.com/564x/e3/26/30/e3263061c8f6b6aaa4b56fbae254d947.jpg`}
                    />
                    <Pagination />
                </div>
            </div>
            <RelatedProductsSection />
            <FeaturedStoreSection HeaderTitle={`More from this Store`} />
            <Footer />
        </div>
    );
};

export default ProductPage;
