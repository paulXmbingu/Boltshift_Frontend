import React from "react";
import HotDealCard from "../../Common/HotDealCard";
import SectionHeader from "../../Common/SectionHeader";
import Clipboard from "../../assets/Icons/Illustrated/Clipboard.svg";
import styles from "./HotDealTodaySection.module.css";

function FeaturedProductsSection() {
    return (
        <div className={styles.popCatSection}>
            <SectionHeader headerTitle="Featured Products" icon={Clipboard}/>
            <div className={styles.catCards}>
                <HotDealCard imageSrc = {`https://i.pinimg.com/736x/eb/c6/9f/ebc69f2a0277643a83694ae8d50030f5.jpg`} productNameText={`Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood`} ammount={`92,372`} noSold={`67`} />
                <HotDealCard imageSrc = {`https://i.pinimg.com/564x/3a/bf/06/3abf0692b4e786fcfbc87efdb229f1f9.jpg`} productNameText={`Contemporary Accent Table Nightstand Drawer Storage Bedside Cabinet - 16"L x 16"W x 18"H Off-White 2 Piece Set Nightstands`} ammount={`54,436`} noSold={`28`} />
                <HotDealCard imageSrc = {`https://i.pinimg.com/564x/8c/90/e2/8c90e2c348da08b9c9cb38d2b5049e8d.jpg`} productNameText={`Candy Color Pointed Toe Low Cut Stiletto High Heels Prom Shoes`}ammount={`56,536`} noSold={`56`} />
                <HotDealCard imageSrc = {`https://i.pinimg.com/736x/a4/ee/14/a4ee14303302dc2e75637b04e42a9b03.jpg`} productNameText={`Modern Chic Round Nesting Coffee Table with Storage White Stone Coffee Table Set of 2`} ammount={`95,434`} noSold={`85`} />
                <HotDealCard imageSrc = {`https://ak1.ostkcdn.com/img/mxc/03232020-gnp-lighting-PopCat_1.jpg?imwidth=400`} productNameText={`Mercer41 Annemargaret 90.5" Round Arm Sofa Polyester/Polyester Blend in Blue, Size 34.5 H x 90.5 W x 35.5 D in | Wayfair`} ammount={`799,233`} noSold={`25`} />
                <HotDealCard imageSrc = {`https://ak1.ostkcdn.com/img/mxc/02222021-gnp-lighting-PopCat_7.jpg?imwidth=400`} productNameText={`Turin Modern Coffee Tables 14.57"D+17.72"D`} ammount={`63,284`} noSold={`52`} />
                <HotDealCard imageSrc = {`https://i.pinimg.com/736x/86/cf/ae/86cfaec5ae9d1b7bcdc2da53f803014e.jpg`} productNameText={`Dodiy Modern L-Shaped White Corner Sectional Sofa 5-Seater Loveseat with Chaise Pillows`} ammount={`97,376`} noSold={`31`} />
            </div>
        </div>
    );
};

export default FeaturedProductsSection;
