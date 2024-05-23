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
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/eb/c6/9f/ebc69f2a0277643a83694ae8d50030f5.jpg"} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/564x/3a/bf/06/3abf0692b4e786fcfbc87efdb229f1f9.jpg"} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/36/e9/6a/36e96a759226592840340d7df9eebfda.jpg"} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/c9/bf/89/c9bf89e3f5006199cd0ef01073569912.jpg"} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/0b/39/07/0b39079cca8b9f031a85f294770b09b3.jpg"} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/a4/ee/14/a4ee14303302dc2e75637b04e42a9b03.jpg"} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/f8/59/ca/f859ca9cc0afc22dbb45550477848b7d.jpg"} />
            </div>
        </div>
    );
};

export default HotDealTodaySection;
