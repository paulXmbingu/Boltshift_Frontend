import HotDealTodaySection from "./HotDealTodaySection";
import PopularCategoriesSection from "./PopularCategoriesSection";


const pageStyle={
    display: "flex",
    minWidth: "var(--Grid-layouts-iPhone-375px, 375px)",
    maxWidth: "1920px",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
}


function LandingPage() {
    return(
        <div style={pageStyle}>
            <PopularCategoriesSection />
            <HotDealTodaySection />
        </div>
    );
};

export default LandingPage;
