import HotDealTodaySection from "./HotDealTodaySection";
import PopularCategoriesSection from "./PopularCategoriesSection";

function LandingPage() {
    return(
        <div style={{
            display: "flex",
            minWidth: "var(--Grid-layouts-iPhone-375px, 375px)",
            maxWidth: "1920px",
            flexDirection: "column",
            alignItems: "center",
            alignSelf: "stretch",
        }}>
            <PopularCategoriesSection />
            <HotDealTodaySection />
        </div>
    );
};

export default LandingPage;
