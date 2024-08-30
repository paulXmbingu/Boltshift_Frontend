import React from "react";
import styles from "./FeaturedProductsSection.module.css";
import HotDealCard from "../../../Components/Shared/HotDealCard";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import Clipboard from "./Assets/Clipboard.svg";
import FeaturedProductCard from "../../../Components/Shared/FeaturedProductCard";
import HotDealCardLandscape from "../../../Components/Shared/HotDealCardLandscape";

function FeaturedProductsSection() {
    return (
        <div className={styles.popCatSection}>
            <SectionHeader headerTitle="Featured Products" icon={Clipboard}/>
            <div className={styles.catCards}>
                <FeaturedProductCard productPhoto={`https://i.pinimg.com/564x/d2/76/f6/d276f69a67a26c3f2b4ba446b736a04c.jpg`} productLabel={`Xpluswear Design Plus Size Mother Of The Bride Maxi Dresses Elegant Red Spring Summer Oblique Collar Petal Sleeve Long Sleeve Mermaid Knitted Maxi Dresses Red-5XL/28`} />
                <FeaturedProductCard productPhoto={`https://i.pinimg.com/564x/46/e2/d6/46e2d6f1a621cfcfbd2b4d289809b8b1.jpg`} productLabel={`KRAUS Artec Pro 2-Function Commercial Style Pre-Rinse Kitchen Faucet w / Pull-Down Spring Spout & Pot Filler in Gray | 4.5 W x 9.75 D in | Wayfair`} />
                <div className={styles.smallCards}>
                    <HotDealCard imageSrc = {`https://i.pinimg.com/564x/09/a8/d9/09a8d90b43cb71d804bd25ea1de2e1ae.jpg`} productNameText={`Contemporary Accent Table Nightstand Drawer Storage Bedside Cabinet - 16"L x 16"W x 18"H Off-White 2 Piece Set Nightstands`} ammount={`54,436`} noSold={`28`} />
                    <HotDealCard imageSrc = {`https://i.pinimg.com/474x/15/b3/80/15b3806913fd88a77b85243f70b3db26.jpg`} productNameText={`Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood`} ammount={`92,372`} noSold={`67`} />
                    <HotDealCard imageSrc = {`https://i.pinimg.com/564x/46/70/38/4670389521111bea70e791c9ec735a77.jpg`} productNameText={`Candy Color Pointed Toe Low Cut Stiletto High Heels Prom Shoes`}ammount={`56,536`} noSold={`56`} />
                    <HotDealCard imageSrc = {`https://i.pinimg.com/474x/0a/2c/6c/0a2c6ceff686936f64249d979a0788cd.jpg`} productNameText={`Modern Chic Round Nesting Coffee Table with Storage White Stone Coffee Table Set of 2`} ammount={`95,434`} noSold={`85`} />
                    {/* <HotDealCardLandscape imageSrc = {`https://i.pinimg.com/564x/f5/a3/22/f5a322d002e83c2fc43c94c5b9112a5f.jpg`} productNameText={`Stupendous Modern Leather Bed - 2 x Nightstand, Blue`} ammount={`595,999`} noSold={`12`} /> */}
                </div>
           </div>
        </div>
    );
};

export default FeaturedProductsSection;
