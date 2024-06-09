import React from "react";
import styles from "./PopularProductsSection.module.css";
import SectionHeader from "../../Components/Shared/SectionHeader";
import RedHeart from "../../assets/Icons/Illustrated/Red heart.svg";
import ProductCardLandscapeSM from "../../Components/Shared/ProductCardLandscapeSM";

function PopularProductsSection() {
    return (
        <div className={styles.Section}>
            <SectionHeader headerTitle="Popular Products" icon={RedHeart}/>
                <div className={styles.smallLandscapeCards}>
                    <div className={styles.cardStacking}>
                        <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/0c/93/5e/0c935e2dbbee2e70295843f0aa5d61e4.jpg`} productLabel={`Bullstrap Reserve - The Voyager Travel Bag`} price={`987`} />
                        <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/0c/93/5e/0c935e2dbbee2e70295843f0aa5d61e4.jpg`} productLabel={`Bullstrap Reserve - The Voyager Travel Bag`} price={`987`} />
                    </div>
                    <div className={styles.cardStacking}>
                        <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/0c/93/5e/0c935e2dbbee2e70295843f0aa5d61e4.jpg`} productLabel={`Bullstrap Reserve - The Voyager Travel Bag`} price={`987`} />
                        <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/0c/93/5e/0c935e2dbbee2e70295843f0aa5d61e4.jpg`} productLabel={`Bullstrap Reserve - The Voyager Travel Bag`} price={`987`} />
                    </div>
                    <div className={styles.cardStacking}>
                        <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/0c/93/5e/0c935e2dbbee2e70295843f0aa5d61e4.jpg`} productLabel={`Bullstrap Reserve - The Voyager Travel Bag`} price={`987`} />
                        <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/0c/93/5e/0c935e2dbbee2e70295843f0aa5d61e4.jpg`} productLabel={`Bullstrap Reserve - The Voyager Travel Bag`} price={`987`} />
                    </div>
                    <div className={styles.cardStacking}>
                        <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/0c/93/5e/0c935e2dbbee2e70295843f0aa5d61e4.jpg`} productLabel={`Bullstrap Reserve - The Voyager Travel Bag`} price={`987`} />
                        <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/0c/93/5e/0c935e2dbbee2e70295843f0aa5d61e4.jpg`} productLabel={`Bullstrap Reserve - The Voyager Travel Bag`} price={`987`} />
                    </div>
                </div>
           </div>
    );
};

export default PopularProductsSection;
