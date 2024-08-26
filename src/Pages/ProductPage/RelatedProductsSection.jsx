import React from "react";
import styles from "./RelatedProductsSection.module.css";
import ProductCardLandscapeSM from "../../Components/Shared/ProductCardLandscapeSM";
import { SecSectionHeader } from "../../Components/Shared/SecondarySectionHeader";

function RelatedProductsSection () {
    return (
        <div className={styles.Section}>
            <SecSectionHeader headerTitle={`Related Products`} />
            <div className={styles.smallLandscapeCards}>
                <div className={styles.cardStacking}>
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/474x/dd/7e/54/dd7e542fd2833ecb911046631c537fd3.jpg`} productLabel={`Fisdy - Chic Patchwork Backless Dress with Contrast Spaghetti Straps and Wrapped Skirt`} price={`24,999`} />
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/474x/19/bb/e9/19bbe94b17a09eb9625e9ce214af63e1.jpg`} productLabel={`Beige Falling For You Corset`} price={`59,499`} />
                </div>
                <div className={styles.cardStacking}>
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/474x/95/93/d5/9593d5e1bfb85ca8a8aa82dac315439d.jpg`} productLabel={`Tan Missy Cable Sweater Midi Skirt`} price={`34,899`} />
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/f7/12/8c/f7128c5cf0844a3733e0b44296925275.jpg`} productLabel={`Grey Refined Belted Leg Pants`} price={`79,399`} />
                </div>
                <div className={styles.cardStacking}>
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/1f/47/c6/1f47c6f27a0203e97f25efdac31eb379.jpg`} productLabel={`Women Vintage Ruffle Business Colorblock Work Church Pencil Dress`} price={`89,799`} />
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/474x/0b/e7/99/0be799869bd5d16323dfedd1b1671622.jpg`} productLabel={`Cut Out Half Sleeve Ruched Slim Fit High Slit White Gowns Maxi Dresses Chartreuse-2XL`} price={`59,999`} />
                </div>
                <div className={styles.cardStacking}>
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/7e/37/22/7e372206649c84d387bba293458d7938.jpg`} productLabel={`Klara Knit Cardigan - Black/Cream`} price={`31,699`} />
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/40/8d/08/408d082aa0724c99690994734b69a9b4.jpg`} productLabel={`Asymmetrical Neck Slit Maxi Dress / XXL(14)`} price={`23,899`} />
                </div>
            </div>
        </div>
    );
};

export default RelatedProductsSection;
