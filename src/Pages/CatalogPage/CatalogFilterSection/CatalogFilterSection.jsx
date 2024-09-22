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
        'Diapering',
        'Feeding',
        'Bathing & Skin Care',
        'Baby Clothing',
        'Baby Health Care',
        'Baby Toys',
        'Strollers & Car Seats',
        'Nursery Furniture',
        'Safety Products',
        'Baby Monitors',
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
          <FilterLabel key={index} FilterLabel={filter} />
        ))
        }
      </div>
    </div>
  );
};

export default CatalogFilterSection;
