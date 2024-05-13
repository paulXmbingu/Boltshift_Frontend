import HotDealTodayCard from "../../Shared/HotDealTodayCard";
import SectionHeader from "../../Shared/SectionHeader";

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

function HotDealTodaySection() {
    return (
        <hotDealTodaySection style={popCatSection} >
            <div> 
                <SectionHeader text="Hot Deals Today" />
            </div>
            <catCards style={catCards}>
                <HotDealTodayCard />
                <HotDealTodayCard />
                <HotDealTodayCard />
                <HotDealTodayCard />
                <HotDealTodayCard />
                <HotDealTodayCard />
                <HotDealTodayCard />
            </catCards>
        </hotDealTodaySection>
    );
};

export default HotDealTodaySection;
