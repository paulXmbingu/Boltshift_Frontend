import React from "react";
import HotDealCard from "../../Common/HotDealCard";
import SectionHeader from "../../Common/SectionHeader";
import Fire from "../../assets/Icons/Illustrated/Fire.svg";
import styles from "./HotDealTodaySection.module.css";

function HotDealTodaySection() {
    return (
        <div className={styles.popCatSection}>
            <SectionHeader headerTitle="Hot Deals Today" icon={Fire}/>
            <div className={styles.catCards}>
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/eb/c6/9f/ebc69f2a0277643a83694ae8d50030f5.jpg"} productNameText={`Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood`} ammount={`92,372`} noSold={`67`} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/564x/3a/bf/06/3abf0692b4e786fcfbc87efdb229f1f9.jpg"} productNameText={`Contemporary Accent Table Nightstand Drawer Storage Bedside Cabinet - 16"L x 16"W x 18"H Off-White 2 Piece Set Nightstands`} ammount={`54,436`} noSold={`28`} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/36/e9/6a/36e96a759226592840340d7df9eebfda.jpg"} productNameText={`Flower Moon Spray Perfume`}ammount={`63,073`} noSold={`56`} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/c9/bf/89/c9bf89e3f5006199cd0ef01073569912.jpg"} productNameText={`TEVISE T845 Casual Style Men Wrist Watch Date Display Full Steel Band Quartz Watch - NO.2`} ammount={`80,020`} noSold={`85`} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/0b/39/07/0b39079cca8b9f031a85f294770b09b3.jpg"} productNameText={`Men's Jacquard Pullover Hoodie - Navy / L`} ammount={`70,977`} noSold={`32`} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/a4/ee/14/a4ee14303302dc2e75637b04e42a9b03.jpg"} productNameText={`Candy Color Pointed Toe Low Cut Stiletto High Heels Prom Shoes`} ammount={`56,536`} noSold={`98`} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/f8/59/ca/f859ca9cc0afc22dbb45550477848b7d.jpg"} productNameText={`Modern Chic Round Nesting Coffee Table with Storage White Stone Coffee Table Set of 2`} ammount={`95,434`} noSold={`18`} />
            </div>
        </div>
    );
};

export default HotDealTodaySection;
