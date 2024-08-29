import React from 'react'
import styles from "./CatalogFilterSection.module.css"
import { FilterHeader, FilterSubHeader } from '../../../Components/Shared/Filters/Filters';
import plusSquare from "./Assets/plus-square.svg"
import chevrondown from "./Assets/chevron-down.svg"


const CatalogFilterSection = () => {
  return (
    <div className={styles.CatalogFilterSection}>
        <FilterHeader FilterHeaderLabel={`Categories`} FilterHeaderIcon={plusSquare} />
          <FilterSubHeader FilterSubHeader={`Automotive`} subHeaderTailIcon={chevrondown}/>
        <FilterHeader FilterHeaderLabel={`Brands`} FilterHeaderIcon={plusSquare} />
        <FilterHeader FilterHeaderLabel={`Price Range`} FilterHeaderIcon={plusSquare} />
        <FilterHeader FilterHeaderLabel={`Rating`} FilterHeaderIcon={plusSquare} />
        <FilterHeader FilterHeaderLabel={`Shipping`} FilterHeaderIcon={plusSquare} />
        <FilterHeader FilterHeaderLabel={`Only in Stock`} FilterHeaderIcon={plusSquare} />
    </div>
  );
};

export default CatalogFilterSection;
