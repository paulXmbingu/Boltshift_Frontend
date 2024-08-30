import React, { useState } from "react";
import styles from "./TrendingProductsSection.module.css";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import ChartIncreasing from "./Assets/Chart increasing.svg";
import PortraitProductCardMD from "../../../Components/Shared/PortraitProductCardMD";

function TrendingProductsSection() {

    return (
        <div className={styles.Section}>
            <SectionHeader headerTitle={`Trending Products`} icon={ChartIncreasing} />
            <div className={styles.trendingCards}>
                <PortraitProductCardMD productImage={`https://i.pinimg.com/564x/fe/3c/4e/fe3c4e25fbe8a85e3cfe08da84ca7a12.jpg`} productLabel={`1 Set Golden Color Luxurious Heart Design Beaded Chunky Statement Necklace Earring Set Jewelry Set For Women`} price={`92,374`} />
                <PortraitProductCardMD productImage={`https://i.pinimg.com/564x/da/45/60/da4560deb49ebbe67cbd2ecfa0bb0d6f.jpg`} productLabel={`Cacique Intimates & Sleepwear | Nwot Cacique Boost Plunge Bra Sizw 40dd | Color: Red | Size: 40e (Dd)`} price={`54,436`} />
                <PortraitProductCardMD productImage={`https://i.pinimg.com/736x/d4/f9/e9/d4f9e9da7233e251ed23a9941e455f06.jpg`} productLabel={`Men Green Suite - Men Green 3 Piece Suit- Green Wedding Suit - Tuxedo Three Piece - Elegant Green Suit - Slim Fit Suit - Suit For Gift, Men`} price={`64,073`} />
                <PortraitProductCardMD productImage={`https://i.pinimg.com/736x/f8/ef/4c/f8ef4ccd2faae0badde0ca75b53e758a.jpg`} productLabel={`Men's Fashion High Top Work Boots Combat Ankle Boots Casual Boots For Men Outdoor Hiking Shoes Daily Footwear`} price={`80,020`} />
            </div>
        </div>
    );
};

export default TrendingProductsSection;
