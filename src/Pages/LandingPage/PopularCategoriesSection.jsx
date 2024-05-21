import React from 'react';
import CategoryCard from '../../Common/CategoryCard';
import SectionHeader from '../../Common/SectionHeader';
import Clothing from '../../assets/Icons/Illustrated/T-shirt.svg';
import WomenClothing from '../../assets/Icons/Illustrated/Dress.svg';
import Watches from '../../assets/Icons/Illustrated/Watch.svg';
import HomeAppliance from '../../assets/Icons/Illustrated/Fork and knife with plate.svg';
import SportOutdoor from '../../assets/Icons/Illustrated/Soccer ball.svg';
import BooksStationery from '../../assets/Icons/Illustrated/Books.svg';
import HomeLiving from '../../assets/Icons/Illustrated/Shallow pan of food.svg';
import Health from '../../assets/Icons/Illustrated/Stethoscope.svg';
import Mobile from '../../assets/Icons/Illustrated/Mobile phone.svg';
import Laptop from '../../assets/Icons/Illustrated/Laptop.svg';
import Desktop from '../../assets/Icons/Illustrated/Desktop computer.svg';
import Headphones from '../../assets/Icons/Illustrated/Headphone.svg';
import Jewelery from '../../assets/Icons/Illustrated/Ring.svg';
import ShoppingBags from "../../assets/Icons/Illustrated/Shopping bags.svg";
import AllCategories from '../../assets/Icons/Illustrated/Shopping bags.svg';


//STYLING
const popCatSection = {
    display: 'flex',
    minWidth: 'var(--Grid-layouts-iPhone-375px, 375px)',
    maxWidth: 'var(--grid-layouts-desktop-1280-px, 1280px)',
    padding: 'var(--spacing-system-guides-corner-radius-12, 48px) var(--spacing-system-guides-corner-radius-4, 16px)',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 'var(--spacing-system-guides-corner-radius-10, 40px)',
    alignSelf: 'stretch',
};

const categoryCards = {
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    gap: '16px var(--spacing-system-guides-corner-radius-4, 16px)',
    alignSelf: 'stretch',
    flexWrap: 'wrap',
};


//FUNCTIONALITY
function PopularCategoriesSection() {
    
    //DATA
    const categories = [
        { icon: Clothing, name: 'Clothing' },
        { icon: WomenClothing, name: 'Women Clothing' },
        { icon: Watches, name: 'Watches' },
        { icon: HomeAppliance, name: 'Home Appliance' },
        { icon: SportOutdoor, name: 'Sport & Outdoor' },
        { icon: BooksStationery, name: 'Books & Stationery' },
        { icon: HomeLiving, name: 'Home & Living' },
        { icon: Health, name: 'Health' },
        { icon: Mobile, name: 'Mobile Phones' },
        { icon: Laptop, name: 'Laptops' },
        { icon: Desktop, name: 'Desktop Computers' },
        { icon: Headphones, name: 'Headphones' },
        { icon: Jewelery, name: 'Jewelery' },
        { icon: AllCategories, name: 'All Categories' },
    ];

    //COMPONENT
    return (
        <popCatSection style={popCatSection}>
            <SectionHeader headerTitle="Popular Categories" icon={ShoppingBags}/>
            <categoryCards style={categoryCards}>
                {categories.map((category, index) => (
                    <CategoryCard key={index} icon={category.icon} name={category.name} isAllCategories={category.name === 'All Categories'} />
                ))}
            </categoryCards>
        </popCatSection>
    );
}

export default PopularCategoriesSection;
