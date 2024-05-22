import HotDealCard from "../../Common/HotDealCard";
import SectionHeader from "../../Common/SectionHeader";
import Fire from "../../assets/Icons/Illustrated/Fire.svg";



//STYLING
const popCatSection={
    display: "flex",
    minWidth: "var(--Grid-layouts-iPhone-375px, 375px)",
    maxWidth: "var(--grid-layouts-desktop-1280-px, 1280px)",
    padding: "var(--spacing-system-guides-corner-radius-12, 48px) var(--spacing-system-guides-corner-radius-4, 16px)",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "var(--spacing-system-guides-corner-radius-10, 40px)",
    alignSelf: "stretch",
}

const catCards={
    display: "flex",
    alignItems: "flex-start",
    alignContent: "flex-start",
    gap: "16px var(--spacing-system-guides-corner-radius-4, 16px)",
    alignSelf: "stretch",
    flexWrap: "wrap"
}


//FUNCTIONALITY
function HotDealTodaySection() {
    return (
        <hotDealTodaySection style={popCatSection} >
            <SectionHeader headerTitle="Hot Deals Today" icon={Fire}/>
            <catCards style={catCards}>
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/eb/c6/9f/ebc69f2a0277643a83694ae8d50030f5.jpg"} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/564x/3a/bf/06/3abf0692b4e786fcfbc87efdb229f1f9.jpg"} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/564x/69/1f/50/691f5051faf6896dd0f6576d10574c23.jpg"} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/36/e9/6a/36e96a759226592840340d7df9eebfda.jpg"} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/ab/7c/4e/ab7c4e76bddedd77600204cf58810604.jpg"} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/a4/ee/14/a4ee14303302dc2e75637b04e42a9b03.jpg"} />
                <HotDealCard imageSrc = {"https://i.pinimg.com/736x/f8/59/ca/f859ca9cc0afc22dbb45550477848b7d.jpg"} />
            </catCards>
        </hotDealTodaySection>
    );
};

export default HotDealTodaySection;
