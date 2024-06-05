import React from "react";
import styles from "./FeaturedStoreSection.module.css";
import SectionHeader from "../../Components/Shared/SectionHeader";
import ConvenienceStore from "../../assets/Icons/Illustrated/Convenience store.svg";
import LandScapeProductCard from "../../Components/Shared/LandScapeProductCard";

function FeaturedStoreSection() {
    return (
        <div className={styles.catSection}>
            <SectionHeader headerTitle="Featured Store" icon={ConvenienceStore}/>
            <div className={styles.featuredStoreCards}>
                Featured Store Card Component
                <div className={styles.smallLandscapeCards}>
                    <LandScapeProductCard productImage={`https://i.pinimg.com/736x/b2/4f/c9/b24fc9c02f7ae7ef59b7297463ab69be.jpg`} productText={`Vintage Leather Backpack For Women`} price={`86,999`} />
                    <LandScapeProductCard productImage={`https://i.pinimg.com/564x/db/1c/f1/db1cf11a5aef3f32f33a261b42299c61.jpg`} productText={`Yves Saint Laurent Makeup | Rouge Volupt Shine Lipstick Balm | Color: Gold/Red | Size: Os`} price={`3,943`} />
                    <LandScapeProductCard productImage={`https://i.pinimg.com/564x/ce/80/7c/ce807cd7e722e9941d57f2129d2860c5.jpg`} productText={`2pcs Creative Couple Series Home Decoration Vase, Combination Of Large And Medium Size Indoor Tabletop Ornament, Suitable For Indoor Decoration, Can Be Used In Four Seasons`} price={`68,645`} />
                    <LandScapeProductCard productImage={`https://i.pinimg.com/736x/b2/4f/c9/b24fc9c02f7ae7ef59b7297463ab69be.jpg`} productText={`Vintage Leather Backpack For Women`} price={`86,999`} />
                    <LandScapeProductCard productImage={`https://i.pinimg.com/736x/b2/4f/c9/b24fc9c02f7ae7ef59b7297463ab69be.jpg`} productText={`Vintage Leather Backpack For Women`} price={`86,999`} />
                    <LandScapeProductCard productImage={`https://i.pinimg.com/736x/b2/4f/c9/b24fc9c02f7ae7ef59b7297463ab69be.jpg`} productText={`Vintage Leather Backpack For Women`} price={`86,999`} />
                </div>
            </div>
           </div>
    );
};

export default FeaturedStoreSection;
