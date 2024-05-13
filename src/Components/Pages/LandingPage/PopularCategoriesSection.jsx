import CategoryCard from "../../Shared/CategoryCard";
import SectionHeader from "../../Shared/SectionHeader";
import Clothing from "/src/assets/Icons/T-shirt.svg";
import WomenClothing from "/src/assets/Icons/Dress.svg";
import Watches from "/src/assets/Icons/Watch.svg";
import HomeAppliance from "/src/assets/Icons/Fork and knife with plate.svg";
import SportOutdoor from "/src/assets/Icons/Soccer ball.svg";
import BooksStationery from "/src/assets/Icons/Books.svg";
import HomeLiving from "/src/assets/Icons/Shallow pan of food.svg";
import Health from "/src/assets/Icons/Stethoscope.svg";
import Mobile from "/src/assets/Icons/Mobile phone.svg";
import Laptop from "/src/assets/Icons/Laptop.svg";
import Desktop from "/src/assets/Icons/Desktop computer.svg";
import Headphones from "/src/assets/Icons/Headphone.svg";
import Jewelery from "/src/assets/Icons/Ring.svg";
import AllCategories from "/src/assets/Icons/Shopping bags.svg";


//STYLING
const popCatSection={
    display: 'flex',
    minWidth: 'var(--Grid-layouts-iPhone-375px, 375px)',
    maxWidth: 'var(--grid-layouts-desktop-1280-px, 1280px)',
    padding: 'var(--spacing-system-guides-corner-radius-12, 48px) var(--spacing-system-guides-corner-radius-4, 16px)',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 'var(--spacing-system-guides-corner-radius-10, 40px)',
    alignSelf: 'stretch',
}

const categoryCards={
    display: "flex",
    alignItems: "flex-start",
    alignContent: "flex-start",
    gap: "16px var(--spacing-system-guides-corner-radius-4, 16px)",
    alignSelf: "stretch",
    flexWrap: "wrap"
}



//FUNCTIONALITY
function PopularCategoriesSection() {

    //DATA
    const categories = [
        { icon: Clothing, name: "Clothing" },
        { icon: WomenClothing, name: "Women Clothing" },
        { icon: Watches, name: "Watches" },
        { icon: HomeAppliance, name: "Home Appliance" },
        { icon: SportOutdoor, name: "Sport & Outdoor" },
        { icon: BooksStationery, name: "Books & Stationery" },
        { icon: HomeLiving, name: "Home & Living" },
        { icon: Health, name: "Health" },
        { icon: Mobile, name: "Mobile Phones" },
        { icon: Laptop, name: "Laptops" },
        { icon: Desktop, name: "Desktop Computers" },
        { icon: Headphones, name: "Headphones" },
        { icon: Jewelery, name: "Jewelery" },
        { icon: AllCategories, name: "All Categories" },
    ];

    //COMPONENT
    return (
        <popCatSection style={popCatSection}>
            <SectionHeader text="Popular Categories" />
            <categoryCards style={categoryCards}>
                {categories.map((category, index) => (
                    <CategoryCard key={index} icon={category.icon} name={category.name} />
                ))}
            </categoryCards>
        </popCatSection>
    );
};

export default PopularCategoriesSection;
