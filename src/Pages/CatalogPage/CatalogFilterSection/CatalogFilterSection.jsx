import React from 'react'
import styles from "./CatalogFilterSection.module.css"
import { FilterHeader, FilterLabel, FilterSubHeader } from '../../../Components/Shared/Filters/Filters';
import plusSquare from "./Assets/plus-square.svg"
import chevrondown from "./Assets/chevron-down.svg"


const CatalogFilterSection = () => {
  return (
    <div className={styles.CatalogFilterSection}>
        <FilterHeader FilterHeaderLabel={`Categories`} FilterHeaderIcon={plusSquare} />
        <SubHeaderStack />
        <SubHeaderStack />
        <FilterSubHeader FilterSubHeader={`Baby`} subHeaderTailIcon={chevrondown}/>
        <FilterSubHeader FilterSubHeader={`Beauty and Personal Care`} subHeaderTailIcon={chevrondown}/>
        <FilterHeader FilterHeaderLabel={`Brands`} FilterHeaderIcon={plusSquare} />
        <FilterHeader FilterHeaderLabel={`Price Range`} FilterHeaderIcon={plusSquare} />
        <FilterHeader FilterHeaderLabel={`Rating`} FilterHeaderIcon={plusSquare} />
        <FilterHeader FilterHeaderLabel={`Shipping`} FilterHeaderIcon={plusSquare} />
        <FilterHeader FilterHeaderLabel={`Only in Stock`} FilterHeaderIcon={plusSquare} />
    </div>
  );
};

const SubHeaderStack = () => {
  return (
    <div className={styles.subHeaderStackWrap}>
      <FilterSubHeader FilterSubHeader={`Automotive`} />
      <div className={styles.filtersLists}>
        <FilterLabel FilterLabel={`Car Parts & Accessories`} />
        <FilterLabel FilterLabel={`Tools & Equipment`} />
        <FilterLabel FilterLabel={`Car Electronics`} />
        <FilterLabel FilterLabel={`Tires & Wheels`} />
        <FilterLabel FilterLabel={`Fluids & Chemicals`} />
        <FilterLabel FilterLabel={`Exterior Accessories`} />
        <FilterLabel FilterLabel={`Interior Accessories`} />
        <FilterLabel FilterLabel={`Car Care & Detailing`} />
        <FilterLabel FilterLabel={`Motorcycles & Powersports`} />
        <FilterLabel FilterLabel={`Commercial & Heavy Duty`} />
      </div>
    </div>
  );
};

export default CatalogFilterSection;
