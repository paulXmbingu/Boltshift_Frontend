import CategoryCard from "../../Shared/CategoryCard";
import SectionHeader from "../../Shared/SectionHeader";


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
        { icon: "/src/assets/Icons/T-shirt.svg", name: "Clothing" },
        { icon: "/src/assets/Icons/Dress.svg", name: "Women Clothing" },
        { icon: "/src/assets/Icons/Watch.svg", name: "Watches" },
        { icon: "/src/assets/Icons/Fork and knife with plate.svg", name: "Home Appliance" },
        { icon: "/src/assets/Icons/Soccer ball.svg", name: "Sport & Outdoor" },
        { icon: "/src/assets/Icons/Books.svg", name: "Books & Stationery" },
        { icon: "/src/assets/Icons/Shallow pan of food.svg", name: "Home & Living" },
        { icon: "/src/assets/Icons/Stethoscope.svg", name: "Health" },
        { icon: "/src/assets/Icons/Mobile phone.svg", name: "Mobile Phones" },
        { icon: "/src/assets/Icons/Laptop.svg", name: "Laptops" },
        { icon: "/src/assets/Icons/Desktop computer.svg", name: "Desktop Computers" },
        { icon: "/src/assets/Icons/Headphone.svg", name: "Headphones" },
        { icon: "/src/assets/Icons/Ring.svg", name: "Jewelery" },
        { icon: "/src/assets/Icons/Shopping bags.svg", name: "All Categories" },
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
