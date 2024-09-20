import React from 'react';
import styles from './CatalogFilterSection.module.css';
import { FilterHeader, FilterLabel, FilterSubHeader } from '../../../Components/Shared/Filters/Filters';

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
      <FilterHeader FilterHeaderLabel={FilterHeaderLabel} />
      {categories.map((category, index) => (
        <SubHeaderStack key={index} FilterSubHeaderLabel={category.subHeader} filters={category.filters} />
      ))}
    </div>
  );
};

const SubHeaderStack = ({ FilterSubHeaderLabel, filters }) => {
  return (
    <div className={styles.subHeaderStackWrap}>
      <FilterSubHeader FilterSubHeaderLabel={FilterSubHeaderLabel} />
      <div className={styles.filtersLists}>
        {filters.map((filter, index) => (
          <FilterLabel key={index} FilterLabel={filter} />
        ))}
      </div>
    </div>
  );
};

export default CatalogFilterSection;
