import React from "react";
import styles from "./RelatedProductsSection.module.css";
import SectionHeader from "../../Components/Shared/SectionHeader";
import ProductCardLandscapeSM from "../../Components/Shared/ProductCardLandscapeSM";
import { SecSectionHeader } from "../../Components/Shared/SecondarySectionHeader";

function RelatedProductsSection () {
    return (
        <div className={styles.Section}>
            <SecSectionHeader headerTitle={`Related Products`} />
            <div className={styles.smallLandscapeCards}>
                <div className={styles.cardStacking}>
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/474x/dd/7e/54/dd7e542fd2833ecb911046631c537fd3.jpg`} productLabel={`Fisdy - Chic Patchwork Backless Dress with Contrast Spaghetti Straps and Wrapped Skirt`} price={`24,999`} />
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/04/ae/f0/04aef0f7fa822bde22b2255d5da915c6.jpg`} productLabel={`Women's Sandals High Heel Round Toe Square Toe PU Solid Colored Black White`} price={`12,654`} />
                </div>
                <div className={styles.cardStacking}>
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/9d/76/85/9d76857b04682b6f5dd261e3c9368a4f.jpg`} productLabel={`Modern Orange & Coffee PU Leather Dining Chair (Set of 2) Open Back with Arms`} price={`76,423`} />
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/cc/20/53/cc2053f6e58a1315425ef392a49574d3.jpg`} productLabel={`Billionm Women Bras Push Up Brassiere Seamless Underwear Solid Wireless Lingerie One-pieces Gather Convertible Straps Bralette B046-3-dark purple-36-80AB`} price={`69,098`} />
                </div>
                <div className={styles.cardStacking}>
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/564x/e9/99/f3/e999f316abc5b399cd30a3c9100ab31f.jpg`} productLabel={`Round Women Gradient Fashion Rimless Metal Sun Glass`} price={`35,921`} />
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/564x/3a/a1/0b/3aa10b3eaf5f1f660cd9a203130c65fb.jpg`} productLabel={`Gibson Soho Lounge Square 16-Piece Reactive Glaze Stoneware Dinnerware Set`} price={`42,751`} />
                </div>
                <div className={styles.cardStacking}>
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/da/cc/f5/daccf5fbf21bf638a132ae353c4998f9.jpg`} productLabel={`1pc Men Watch Luxury Waterproof Luminous Week Display Stainless Steel Quartz Watch For Men Dating`} price={`21,999`} />
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/564x/85/1a/f8/851af8f07ffa4b245043e6ecbb2c0eb2.jpg`} productLabel={`Mercer41 Dashona White Rectangular Sintered Stone Dining Table w/ Double Pedestals Metal in Yellow | 29.5 H x 55 W x 31.5 D in | Wayfair`} price={`89,492`} />
                </div>
            </div>
        </div>
    );
};

export default RelatedProductsSection;
