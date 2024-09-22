import React, { useState } from 'react';
import styles from './CatalogFilterSection.module.css';
import { FilterHeader, FilterLabel, FilterSubHeader } from '../../../Components/Shared/Filters/Filters';
import ChevronUp from "./Assets/chevron-up.svg"
import ChevronDown from "./Assets/chevron-down.svg"

const CatalogFilterSection = () => {
  const categories = [
    {
      subHeader: 'Automotive',
      filters: [
        'Car Care',
        'Electronics & Accessories',
        'Exterior Accessories',
        'Lights & Lighting Accessories',
        'Interior Accessories',
        'Motorcycle & Power Sports',
        'Oils & Fluids',
        'Paint & Paint',
        'Tires & Wheels',
        'Tools & Equipment',
      ],
    },
    {
      subHeader: 'Baby',
      filters: [
        'Activity & Entertainment',
        'Apparel & Accessories',
        'Baby & Toddler',
        'Toys Baby',
        'Care Baby Stationery',
        'Diapering Feeding Gifts',
        'Nursery Potty Training',
        'Pregnancy & Maternity Safety',
        'Baby Furniture',
        'Baby Monitors',
      ],
    },
    {
      subHeader: 'Beauty and Personal Care',
      filters: [
        'Makeup',
        'Skin Care',
        'Hair Care',
        'Fragrance',
        'Foot, Hand & Nail Care',
        'Tools & Accessories',
        'Shave & Hair Removal',
        'Personal Care Oral Care',
        'Bath & Body',
        'Beauty Tools',
      ],
    },
    {
      subHeader: 'Health & Household',
      filters: [
        'Baby & Child Care',
        'Health Care',
        'Household Supplies',
        'Medical Supplies & Equipment',
        'Oral Care',
        'Personal Care',
        'Sexual Wellness',
        'Sports Nutrition',
        'First Aid',
        'Vitamins & Supplements',
      ],
    },
    {
      subHeader: 'Home & Kitchen',
      filters: [
        'Kids’ Home Store',
        'Kitchen & Dining',
        'Bedding',
        'Bath',
        'Furniture',
        'Home Décor',
        'Wall Art',
        'Lighting & Ceiling Fans',
        'Storage & Organization',
        'Small Appliances',
      ],
    },
    {
      subHeader: 'Luggage',
      filters: [
        'Carry-ons',
        'Backpacks',
        'Garment Bags',
        'Travel Totes',
        'Luggage Sets',
        'Laptop Bags',
        'Suitcases',
        'Kids Luggage',
        'Duffel Bags',
        'Luggage Accessories',
      ],
    },
    {
      subHeader: 'Men\'s Fashion',
      filters: [
        'Shorts',
        'Shirts',
        'Activewear',
        'Hoodies & Sweatshirts',
        'Jeans',
        'Pants',
        'Pajamas & Robes',
        'Occupational & Workwear',
        'Jackets & Coats',
        'Socks & Underwear',
      ],
    },
    {
      subHeader: 'Women\'s Fashion',
      filters: [
        'Clothing',
        'Shoes',
        'Jewelry',
        'Watches',
        'Handbags',
        'Accessories',
        'Lingerie',
        'Filter Label',
        'Dresses',
        'Scarves & Wraps',
      ],
    },
    {
      subHeader: 'Pet Supplies',
      filters: [
        'Dogs',
        'Cats',
        'Fish & Aquatic Pets',
        'Birds',
        'Horses',
        'Reptiles & Amphibians',
        'Small Animals',
        'Filter Label',
        'Pet Food',
        'Pet Grooming',
      ],
    },
  ];
  
  
  return (
    <div className={styles.CatalogFilterSection}>
      <HeaderStack 
        FilterHeaderLabel="Categories" 
        categories={categories} 
      />
    </div>
  );
};

const HeaderStack = ({ FilterHeaderLabel, categories }) => {
  return (
    <div className={styles.headerStackWrap}>
      <FilterHeader
        FilterHeaderLabel={FilterHeaderLabel}
      />
      {categories.map((category, index) => (
        <SubHeaderStack 
          key={index} 
          FilterSubHeaderLabel={category.subHeader} 
          filters={category.filters}
        />
      ))}
    </div>
  );
};

const SubHeaderStack = ({ FilterSubHeaderLabel, filters }) => {
  const [isExpanded, setIsExpanded] = useState (false);

  const handleFilterSubHeader = ()=> {
    setIsExpanded(!isExpanded)
  };

  return (
    <div className={styles.subHeaderStackWrap}>
      <FilterSubHeader
        FilterSubHeaderLabel={FilterSubHeaderLabel}
        subHeaderTailIcon={isExpanded? ChevronUp : ChevronDown}
        handleFilterSubHeader={handleFilterSubHeader}
      />
      <div className={isExpanded? styles.filtersListsExpanded : styles.filtersListsCollapsed}>
        {filters.map((filter, index) => (
          <FilterLabel
            key={index} 
            FilterLabel={filter}
          />
        ))
        }
      </div>
    </div>
  );
};

export default CatalogFilterSection;
