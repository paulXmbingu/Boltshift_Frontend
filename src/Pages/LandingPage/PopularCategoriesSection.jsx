import React from 'react';
import CategoryCard from '../../Common/CategoryCard';
import SectionHeader from '../../Common/SectionHeader';
import styles from './PopularCategoriesSection.module.css';
import ShoppingBags from "../../assets/Icons/Illustrated/Shopping bags.svg";
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
import AllCategories from '../../assets/Icons/Illustrated/Shopping bags.svg';

function PopularCategoriesSection() {
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

    return (
        <div className={styles.popCatSection}>
            <SectionHeader headerTitle="Popular Categories" icon={ShoppingBags} />
            <div className={styles.categoryCards}>
                {categories.map((category, index) => (
                    <CategoryCard key={index} icon={category.icon} name={category.name} isAllCategories={category.name === 'All Categories'} />
                ))}
            </div>
        </div>
    );
}

export default PopularCategoriesSection;
