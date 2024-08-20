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
                        BuyerName={`Paul Mbingu`}
                        UserPhoto={`https://res.cloudinary.com/excit3/image/upload/v1718726067/Boltshift%20Branding/Marion_Ngayi_Profile_Picture_jahbhr.png`}
                        DatePurchased={`Nov 26th, 2023`}
                        TestimonialTitle={`Elegant and Flattering Dress - Perfect for Special Occasions!`}
                        TestomonialText=
                            {`  I recently purchased the Xpluswear Design Plus Size Mother Of The Bride Dress, and I couldn't be happier with my choice. The dress is absolutely stunning with its elegant champagne color and beautifully flowing silhouette. The attention to detail is evident in the delicate embellishments, which add just the right amount of sparkle without being over the top.
                                What truly impressed me was the flattering fit—designed specifically for plus sizes, this dress made me feel confident and comfortable throughout the event. The high-quality fabric not only felt luxurious but also moved gracefully as I walked, making it perfect for a formal occasion.
                                I also appreciate the care instructions provided, as they ensure the dress will stay in pristine condition for future events. Overall, this dress is a wonderful blend of timeless sophistication and modern elegance. I highly recommend it to anyone looking for a standout piece for a special occasion!
                            `}
                        Media={`https://i.pinimg.com/736x/89/89/27/89892721aaf1d5c185d42e3fda147245.jpg`}
                        Media2={`https://i.pinimg.com/736x/21/f6/09/21f609feaa1541d19dc786c5119d820a.jpg`}
                        Media3={`https://i.pinimg.com/736x/e9/4f/2d/e94f2d494fe56fce2fa3b6a3b57ce4db.jpg`}
                        Media4={`https://i.pinimg.com/736x/ad/08/a5/ad08a556b929990d3cc634cc27a60c36.jpg`}
                        Media5={`https://i.pinimg.com/736x/fd/3c/77/fd3c77ea9cfd97383c67518e2df601ee.jpg`}
                        Media6={`https://i.pinimg.com/736x/d8/5a/70/d85a708d098ad45aeccc2f3e7942571c.jpg`}
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
