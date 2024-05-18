import TopNav from "../../Shared/TopNav";
import HeroSection from "./HeroSection";
import HotDealTodaySection from "./HotDealTodaySection";
import PopularCategoriesSection from "./PopularCategoriesSection";
import VendorStoriesSection from "./VendorStoriesSection";

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
            <TopNav />
            {/* <VendorStoriesSection /> */}
            {/* <HeroSection /> */}
            <PopularCategoriesSection />
            <HotDealTodaySection/>
        </pageLayout>
    );
};

export default LandingPage;
