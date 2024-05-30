import React from "react";
import HotDealCard from "../../Components/Shared/HotDealCard";
import SectionHeader from "../../Components/Shared/SectionHeader";
import Clipboard from "../../assets/Icons/Illustrated/Clipboard.svg";
import styles from "./HotDealTodaySection.module.css";
import FeaturedProductCard from "../../Components/Shared/FeaturedProductCard";

function FeaturedProductsSection() {
    return (
        <div className={styles.popCatSection}>
            <SectionHeader headerTitle="Featured Products" icon={Clipboard}/>
            <div className={styles.catCards}>
                <FeaturedProductCard productPhoto={`https://i.pinimg.com/736x/c9/bf/89/c9bf89e3f5006199cd0ef01073569912.jpg`} />
                <FeaturedProductCard productPhoto={`https://i.pinimg.com/564x/d2/76/f6/d276f69a67a26c3f2b4ba446b736a04c.jpg`} />
                    <HotDealCard imageSrc = {`https://i.pinimg.com/736x/eb/c6/9f/ebc69f2a0277643a83694ae8d50030f5.jpg`} productNameText={`Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood`} ammount={`92,372`} noSold={`67`} />
                    <HotDealCard imageSrc = {`https://i.pinimg.com/564x/3a/bf/06/3abf0692b4e786fcfbc87efdb229f1f9.jpg`} productNameText={`Contemporary Accent Table Nightstand Drawer Storage Bedside Cabinet - 16"L x 16"W x 18"H Off-White 2 Piece Set Nightstands`} ammount={`54,436`} noSold={`28`} />
                    <HotDealCard imageSrc = {`https://i.pinimg.com/564x/8c/90/e2/8c90e2c348da08b9c9cb38d2b5049e8d.jpg`} productNameText={`Candy Color Pointed Toe Low Cut Stiletto High Heels Prom Shoes`}ammount={`56,536`} noSold={`56`} />
                    <HotDealCard imageSrc = {`https://i.pinimg.com/736x/a4/ee/14/a4ee14303302dc2e75637b04e42a9b03.jpg`} productNameText={`Modern Chic Round Nesting Coffee Table with Storage White Stone Coffee Table Set of 2`} ammount={`95,434`} noSold={`85`} />
           </div>
        </div>
    );
};

export default FeaturedProductsSection;
