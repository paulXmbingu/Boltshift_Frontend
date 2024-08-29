import React from 'react'
import styles from "./CatalogFilterSection.module.css"
import { FilterHeader } from '../../../Components/Shared/Filters/Filters';
import plusSquare from "./Assets/plus-square.svg"


const CatalogFilterSection = () => {
  return (
    <div className={styles.CatalogFilterSection}>
        <FilterHeader FilterHeaderLabel={`Categories`} FilterHeaderIcon={plusSquare} />
        <FilterHeader FilterHeaderLabel={`Brands`} FilterHeaderIcon={plusSquare} />
        <FilterHeader FilterHeaderLabel={`Price Range`} FilterHeaderIcon={plusSquare} />
        <FilterHeader FilterHeaderLabel={`Rating`} FilterHeaderIcon={plusSquare} />
        <FilterHeader FilterHeaderLabel={`Shipping`} FilterHeaderIcon={plusSquare} />
        <FilterHeader FilterHeaderLabel={`Only in Stock`} FilterHeaderIcon={plusSquare} />
    </div>
  );
};

export default CatalogFilterSection;
