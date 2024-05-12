import HotDealTodaySection from "./HotDealTodaySection";
import PopularCategoriesSection from "./PopularCategoriesSection";

const pageLayout={
    display: "flex",
    minWidth: "var(--Grid-layouts-iPhone-375px, 375px)",
    maxWidth: "1280px",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
}

function LandingPage() {
    return(
        <pageLayout style={pageLayout}>
            <PopularCategoriesSection />
            <HotDealTodaySection />
        </pageLayout>
    );
};

export default LandingPage;
