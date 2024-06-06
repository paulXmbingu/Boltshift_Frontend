import React from "react";
import styles from "./FeaturedStoreSection.module.css";
import SectionHeader from "../../Components/Shared/SectionHeader";
import ConvenienceStore from "../../assets/Icons/Illustrated/Convenience store.svg";
import UntitledUI from "../../assets/Logos/Untitled UI.svg";
import LandScapeProductCard from "../../Components/Shared/LandScapeProductCard";
import FeaturedStoreCard from "../../Components/Shared/FeaturedStoreCard";

function FeaturedStoreSection() {
    return (
        <div className={styles.catSection}>
            <SectionHeader headerTitle="Featured Store" icon={ConvenienceStore}/>
            <div className={styles.featuredStoreCards}>
                <FeaturedStoreCard storeIcon={UntitledUI} />
                <div className={styles.smallLandscapeCards}>
                    <LandScapeProductCard productImage={`https://i.pinimg.com/736x/b2/4f/c9/b24fc9c02f7ae7ef59b7297463ab69be.jpg`} productText={`Vintage Leather Backpack For Women`} price={`86,999`} />
                    <LandScapeProductCard productImage={`https://i.pinimg.com/564x/db/1c/f1/db1cf11a5aef3f32f33a261b42299c61.jpg`} productText={`Yves Saint Laurent Makeup | Rouge Volupt Shine Lipstick Balm | Color: Gold/Red | Size: Os`} price={`3,943`} />
                    <LandScapeProductCard productImage={`https://i.pinimg.com/564x/ce/80/7c/ce807cd7e722e9941d57f2129d2860c5.jpg`} productText={`2pcs Creative Couple Series Home Decoration Vase, Combination Of Large And Medium Size Indoor Tabletop Ornament, Suitable For Indoor Decoration, Can Be Used In Four Seasons`} price={`68,645`} />
                    <LandScapeProductCard productImage={`https://i.pinimg.com/736x/4b/a6/de/4ba6def8351a34ae9cda8ecc2c441fe2.jpg`} productText={`Gradient MagSafe Case / iPhone 11 Pro Max`} price={`1,899`} />
                    <LandScapeProductCard productImage={`https://i.pinimg.com/564x/3c/11/03/3c1103323c8943e06cc5a13e492ffe76.jpg`} productText={`Xpluswear Design Plus Size Prom Champagne Oblique Collar Cape Sleeve Mermaid Contrast Sequin Maxi Dresses Champagne-4XL/26`} price={`46,876`} />
                    <LandScapeProductCard productImage={`https://i.pinimg.com/736x/04/e5/af/04e5af0702c0c1248bd36a9307c68254.jpg`} productText={`Wig 100% Human Hair - Glueless Blunt Cut Straight Bob Lace C Part - 8 Inches-ship in 24 hours`} price={`12,459`} />
                </div>
            </div>
           </div>
    );
};

export default FeaturedStoreSection;
