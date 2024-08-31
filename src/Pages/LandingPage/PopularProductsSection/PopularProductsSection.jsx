import React, { useState } from "react";
import styles from "./PopularProductsSection.module.css";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import RedHeart from "./Assets/Red heart.svg";
import ProductCardLandscapeSM from "../../../Components/Shared/ProductCardLandscapeSM";
import { HorTabUnderLineSM, HorTabUnderLineSMSelected } from "../../../Components/Atoms/Tab";

function PopularProductsSection() {
    const [selectedTab, setSelectedTab] = useState('Featured Products');

    return (
        <div className={styles.Section}>
            <SectionHeader headerTitle="Popular Products" icon={RedHeart} />
            <div className={styles.horTab}>
                {selectedTab === 'Featured Products' ? (
                    <HorTabUnderLineSMSelected tabLabel={`Featured Products`} />
                ) : (
                    <HorTabUnderLineSM tabLabel={`Featured Products`} onClick={() => setSelectedTab('Featured Products')} />
                )}
                {selectedTab === 'Top Rated Products' ? (
                    <HorTabUnderLineSMSelected tabLabel={`Top Rated Products`} />
                ) : (
                    <HorTabUnderLineSM tabLabel={`Top Rated Products`} onClick={() => setSelectedTab('Top Rated Products')} />
                )}
                {selectedTab === 'Onsale Product' ? (
                    <HorTabUnderLineSMSelected tabLabel={`Onsale Product`} />
                ) : (
                    <HorTabUnderLineSM tabLabel={`Onsale Product`} onClick={() => setSelectedTab('Onsale Product')} />
                )}
            </div>
            <div className={styles.smallLandscapeCards}>
                <div className={styles.cardStacking}>
                    <ProductCardLandscapeSM ProductImage={`https://i.pinimg.com/736x/0c/93/5e/0c935e2dbbee2e70295843f0aa5d61e4.jpg`} productLabel={`Bullstrap Reserve - The Voyager Travel Bag`} price={`34,987`} />
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

export default PopularProductsSection;
