import React from 'react';
import CategoryCard from '../../../Components/Shared/CategoryCard';
import SectionHeader from '../../../Components/Shared/SectionHeader';
import styles from './PopularCategoriesSection.module.css';
import ShoppingBags from "./Assets/Shopping bags.svg";
import Clothing from './Assets/T-shirt.svg';
import WomenClothing from './Assets/Dress.svg';
import Watches from './Assets/Watch.svg';
import HomeAppliance from './Assets/Fork and knife with plate.svg';
import SportOutdoor from './Assets/Soccer ball.svg';
import BooksStationery from './Assets/Books.svg';
import HomeLiving from './Assets/Shallow pan of food.svg';
import Health from './Assets/Stethoscope.svg';
import Mobile from './Assets/Mobile phone.svg';
import Laptop from './Assets/Laptop.svg';
import Desktop from './Assets/Desktop computer.svg';
import Headphones from './Assets/Headphone.svg';
import Jewelery from './Assets/Ring.svg';
import AllCategories from './Assets/Shopping bags.svg';

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
    { icon: Jewelery, name: 'Jewelry' },  // Fixed typo from 'Jewelery' to 'Jewelry'
    { icon: AllCategories, name: 'All Categories' },
];

const PopularCategoriesSection = () => (
    <div className={styles.popCatSection}>
        <SectionHeader headerTitle="Popular Categories" icon={ShoppingBags} />
        <div className={styles.categoryCards}>
            {categories.map((category) => (
                <CategoryCard
                    key={category.name}  // Using category name as key
                    icon={category.icon}
                    name={category.name}
                    isAllCategories={category.name === 'All Categories'}
                />
            ))}
        </div>
    </div>
);

export default PopularCategoriesSection;
