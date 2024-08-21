import React, { useState, useEffect } from "react";
import styles from "./ProductPage.module.css";
import { TopNavLarge, TopNavSmall } from "../../Components/Shared/TopNav";
import ProductMediaConfiguratorSection from "./ProductMediaConfiguratorSection";
import Footer from "../../Components/Shared/Footer";
import BreadCrumb from "../../Components/Shared/BreadCrumb";
import FeaturedStoreSection from "../LandingPage/FeaturedStoreSection";
import { DescriptionSection } from "./DescriptionSection";
import RelatedProductsSection from "./RelatedProductsSection";
import { Pagination } from "../../Components/Molecules/Pagination";
import { TestimonialCard_LoggedIn } from "../../Components/Shared/TestimonialCard";
import { ReviewSummary } from "./ReviewSummary";
import { SpecificationSection } from "./SpecificationSection";

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
            <SpecificationSection />
            <div className={styles.ratingsReviewsSection}>
                <ReviewSummary />
                <div className={styles.buyerReview}>
                    <TestimonialCard_LoggedIn
                        BuyerName={`Marion Ngayi`}
                        UserPhoto={`https://res.cloudinary.com/excit3/image/upload/v1718726067/Boltshift%20Branding/Marion_Ngayi_Profile_Picture_jahbhr.png`}
                        DatePurchased={`Nov 26th, 2023`}
                        TestimonialTitle={`Elegant and Flattering Dress - Perfect for Special Occasions!`}
                        TestomonialText=
                            {`  I recently purchased the Xpluswear Design Plus Size Mother Of The Bride Dress, and I couldn't be happier with my choice. The dress is absolutely stunning with its elegant champagne color and beautifully flowing silhouette. The attention to detail is evident in the delicate embellishments, which add just the right amount of sparkle without being over the top.
                                What truly impressed me was the flattering fit—designed specifically for plus sizes, this dress made me feel confident and comfortable throughout the event. The high-quality fabric not only felt luxurious but also moved gracefully as I walked, making it perfect for a formal occasion.
                                I also appreciate the care instructions provided, as they ensure the dress will stay in pristine condition for future events. Overall, this dress is a wonderful blend of timeless sophistication and modern elegance. I highly recommend it to anyone looking for a standout piece for a special occasion!
                            `}
                        Media={`https://i.pinimg.com/736x/56/79/c1/5679c19a2853cdc11528970fd2a29980.jpg`}
                        Media2={`https://i.pinimg.com/736x/56/79/c1/5679c19a2853cdc11528970fd2a29980.jpg`}
                        Media3={`https://i.pinimg.com/736x/82/d9/da/82d9da1a681125eaba47b265812f9903.jpg`}
                        Media4={`https://i.pinimg.com/564x/41/8b/9b/418b9bf5a3a89e7422aeda1fa0aee863.jpg`}
                        Media5={`https://i.pinimg.com/736x/a7/96/81/a796810ea10629e1d5b3e3a61da1b5c5.jpg`}
                        Media6={`https://i.pinimg.com/736x/f9/be/2d/f9be2d6708f2a243bfbec1ce539ce23d.jpg`}
                    />
                    <TestimonialCard_LoggedIn
                        BuyerName={`Mercy Mbingu`}
                        UserPhoto={`https://res.cloudinary.com/excit3/image/upload/v1724253078/Boltshift%20Branding/Mercy_vxi0nw.jpg`}
                        DatePurchased={`Dec 3rd, 2023`}
                        TestimonialTitle={`Perfection in Every Stitch - A Dress That Shines!`}
                        TestomonialText=
                            {`  I am beyond thrilled with my purchase of the Xpluswear Design Plus Size Mother Of The Bride Dress. From the moment I put it on, I felt like royalty. The rich burgundy color I chose is deep and luxurious, perfectly complementing the dress’s exquisite design. The fit is spot-on, embracing my curves in all the right places while allowing me to move with ease. The delicate lace detailing and the subtle shimmer of the fabric catch the light beautifully, adding a touch of glamour without being too flashy. The fabric itself is soft and comfortable, with just the right amount of stretch, ensuring I felt both stylish and relaxed throughout the evening. This dress is truly a masterpiece, and I received countless compliments on how elegant and sophisticated I looked. If you’re looking for a dress that will make you feel confident, beautiful, and perfectly dressed for any special event, look no further!`}
                        Media={`https://i.pinimg.com/474x/fc/4e/3e/fc4e3e7a3a954463b54c20cf06ed74a2.jpg`}
                        Media2={`https://i.pinimg.com/736x/64/09/ec/6409ec01f13df1382a0653611ea7493b.jpg`}
                        Media3={`https://i.pinimg.com/474x/d6/80/5a/d6805a67f70c930be0adad1e77a33131.jpg`}
                        Media4={`https://i.pinimg.com/564x/94/5b/fa/945bfa443cc428c18ece185f11878596.jpg`}
                        Media5={`https://i.pinimg.com/564x/53/c2/e0/53c2e07209f94217e9b6f55eb8ec0b84.jpg`}
                        // Media6={`https://i.pinimg.com/736x/d8/5a/70/d85a708d098ad45aeccc2f3e7942571c.jpg`}
                    />
                    <TestimonialCard_LoggedIn
                        BuyerName={`Wendy Hawi`}
                        UserPhoto={`https://res.cloudinary.com/excit3/image/upload/v1720059536/Boltshift%20Branding/IMG-20240618-WA0001_wzvvd9.png`}
                        DatePurchased={`Nov 30th, 2023`}
                        TestimonialTitle={`Gorgeous Dress That Is Worth Every Penny!`}
                        TestomonialText=
                            {`  I can't express how delighted I am with the Xpluswear Design Plus Size Mother Of The Bride Dress! The moment I opened the package, I could tell this was a high-quality garment. The dress is beautifully crafted with impeccable attention to detail, from the luxurious fabric to the delicate beading that adds just the right amount of sparkle. I ordered the dress in a lovely navy blue, and it exceeded all my expectations. The fit is superb, providing ample room for comfort while still giving a sleek, elegant silhouette. I wore it to my daughter’s wedding, and it was perfect for the occasion—classy, flattering, and incredibly comfortable to wear for hours on end. The compliments I received were endless, and I felt confident and beautiful the entire day. This dress is an absolute gem, and I highly recommend it to anyone seeking a timeless, elegant outfit for any special event!`}
                        Media={`https://i.pinimg.com/564x/61/38/4d/61384d354ce36f86ccf8882c3ab78372.jpg`}
                        Media2={`https://i.pinimg.com/564x/a3/e4/01/a3e4010463050bf84f1dca694e713848.jpg`}
                        Media3={`https://i.pinimg.com/474x/ce/d2/06/ced206785c595f93f39f5574be0a1354.jpg`}
                        Media4={`https://i.pinimg.com/474x/09/1c/ee/091ceec90eabc7ba09a877d8c604aba0.jpg`}
                        Media5={`https://i.pinimg.com/474x/da/f4/e2/daf4e2b7cf904c1c769c1a3e3ddb52ea.jpg`}
                        Media6={`https://i.pinimg.com/564x/66/90/c8/6690c86f6cdcdb768024f54db8cd9517.jpg`}
                    />
                    <TestimonialCard_LoggedIn
                        BuyerName={`Vonette Orinda`}
                        UserPhoto={`https://res.cloudinary.com/excit3/image/upload/v1718726170/Boltshift%20Branding/Screenshot_2024-06-18_at_01.05.13_elm0ym.png`}
                        DatePurchased={`Dec 10th, 2023`}
                        TestimonialTitle={`A Stunning Dress That Exceeds Expectations!`}
                        TestomonialText=
                            {`  I recently wore the Xpluswear Design Plus Size Mother Of The Bride Dress to my niece’s wedding, and it was simply perfect. The moment I slipped it on, I felt like it was made just for me. The fit is flawless, hugging my figure in the most flattering way without feeling restrictive. The quality of the fabric is top-notch, with a soft, luxurious feel that drapes beautifully. I chose the dress in a gorgeous emerald green, and the color was even more vibrant in person than I had hoped. The intricate lace overlay and subtle sequins added a sophisticated touch, making me feel both elegant and radiant. The attention to detail is incredible, and I couldn’t be happier with how comfortable and confident I felt throughout the day. I would recommend this dress to anyone looking for a high-quality, stunning piece that is sure to impress at any formal event!`}
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
