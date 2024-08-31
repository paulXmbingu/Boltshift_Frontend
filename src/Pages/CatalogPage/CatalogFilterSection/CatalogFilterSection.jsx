import React from 'react'
import styles from "./CatalogFilterSection.module.css"
import { FilterHeader, FilterLabel, FilterSubHeader } from '../../../Components/Shared/Filters/Filters';
import plusSquare from "./Assets/plus-square.svg"
import chevrondown from "./Assets/chevron-down.svg"


const CatalogFilterSection = () => {
  return (
    <div className={styles.CatalogFilterSection}>
      <HeaderStack 
        FilterHeaderLabel={`Categories`}
        FilterSubHeaderLabel={`Automotive`}
        FilterLabel1={`Car Care & Detailing`}
      />
    </div>
  );
};

const HeaderStack = ({ 
  FilterHeaderLabel, 
  FilterSubHeaderLabel, 
  FilterLabel1, FilterLabel2, FilterLabel3, FilterLabel4, FilterLabel5, 
  FilterLabel6, FilterLabel7, FilterLabel8, FilterLabel9, FilterLabel10 
}) => {
  return (
    <div className={styles.headerStackWrap}>
      <FilterHeader FilterHeaderLabel={FilterHeaderLabel} />
      <SubHeaderStack 
        FilterSubHeaderLabel={FilterSubHeaderLabel} 
        FilterLabel1={FilterLabel1}
        FilterLabel2={FilterLabel2}
        FilterLabel3={FilterLabel3}
        FilterLabel4={FilterLabel4}
        FilterLabel5={FilterLabel5}
        FilterLabel6={FilterLabel6}
        FilterLabel7={FilterLabel7}
        FilterLabel8={FilterLabel8}
        FilterLabel9={FilterLabel9}
        FilterLabel10={FilterLabel10}
      />
      <SubHeaderStack 
        FilterSubHeaderLabel={FilterSubHeaderLabel} 
        FilterLabel1={FilterLabel1}
        FilterLabel2={FilterLabel2}
        FilterLabel3={FilterLabel3}
        FilterLabel4={FilterLabel4}
        FilterLabel5={FilterLabel5}
        FilterLabel6={FilterLabel6}
        FilterLabel7={FilterLabel7}
        FilterLabel8={FilterLabel8}
        FilterLabel9={FilterLabel9}
        FilterLabel10={FilterLabel10}
      />
      <SubHeaderStack 
        FilterSubHeaderLabel={FilterSubHeaderLabel} 
        FilterLabel1={FilterLabel1}
        FilterLabel2={FilterLabel2}
        FilterLabel3={FilterLabel3}
        FilterLabel4={FilterLabel4}
        FilterLabel5={FilterLabel5}
        FilterLabel6={FilterLabel6}
        FilterLabel7={FilterLabel7}
        FilterLabel8={FilterLabel8}
        FilterLabel9={FilterLabel9}
        FilterLabel10={FilterLabel10}
      />
      <SubHeaderStack 
        FilterSubHeaderLabel={FilterSubHeaderLabel} 
        FilterLabel1={FilterLabel1}
        FilterLabel2={FilterLabel2}
        FilterLabel3={FilterLabel3}
        FilterLabel4={FilterLabel4}
        FilterLabel5={FilterLabel5}
        FilterLabel6={FilterLabel6}
        FilterLabel7={FilterLabel7}
        FilterLabel8={FilterLabel8}
        FilterLabel9={FilterLabel9}
        FilterLabel10={FilterLabel10}
      />
      <SubHeaderStack 
        FilterSubHeaderLabel={FilterSubHeaderLabel} 
        FilterLabel1={FilterLabel1}
        FilterLabel2={FilterLabel2}
        FilterLabel3={FilterLabel3}
        FilterLabel4={FilterLabel4}
        FilterLabel5={FilterLabel5}
        FilterLabel6={FilterLabel6}
        FilterLabel7={FilterLabel7}
        FilterLabel8={FilterLabel8}
        FilterLabel9={FilterLabel9}
        FilterLabel10={FilterLabel10}
      />
      <SubHeaderStack 
        FilterSubHeaderLabel={FilterSubHeaderLabel} 
        FilterLabel1={FilterLabel1}
        FilterLabel2={FilterLabel2}
        FilterLabel3={FilterLabel3}
        FilterLabel4={FilterLabel4}
        FilterLabel5={FilterLabel5}
        FilterLabel6={FilterLabel6}
        FilterLabel7={FilterLabel7}
        FilterLabel8={FilterLabel8}
        FilterLabel9={FilterLabel9}
        FilterLabel10={FilterLabel10}
      />
      <SubHeaderStack 
        FilterSubHeaderLabel={FilterSubHeaderLabel} 
        FilterLabel1={FilterLabel1}
        FilterLabel2={FilterLabel2}
        FilterLabel3={FilterLabel3}
        FilterLabel4={FilterLabel4}
        FilterLabel5={FilterLabel5}
        FilterLabel6={FilterLabel6}
        FilterLabel7={FilterLabel7}
        FilterLabel8={FilterLabel8}
        FilterLabel9={FilterLabel9}
        FilterLabel10={FilterLabel10}
      />
      <SubHeaderStack 
        FilterSubHeaderLabel={FilterSubHeaderLabel} 
        FilterLabel1={FilterLabel1}
        FilterLabel2={FilterLabel2}
        FilterLabel3={FilterLabel3}
        FilterLabel4={FilterLabel4}
        FilterLabel5={FilterLabel5}
        FilterLabel6={FilterLabel6}
        FilterLabel7={FilterLabel7}
        FilterLabel8={FilterLabel8}
        FilterLabel9={FilterLabel9}
        FilterLabel10={FilterLabel10}
      />
      <SubHeaderStack 
        FilterSubHeaderLabel={FilterSubHeaderLabel} 
        FilterLabel1={FilterLabel1}
        FilterLabel2={FilterLabel2}
        FilterLabel3={FilterLabel3}
        FilterLabel4={FilterLabel4}
        FilterLabel5={FilterLabel5}
        FilterLabel6={FilterLabel6}
        FilterLabel7={FilterLabel7}
        FilterLabel8={FilterLabel8}
        FilterLabel9={FilterLabel9}
        FilterLabel10={FilterLabel10}
      />
      <SubHeaderStack 
        FilterSubHeaderLabel={FilterSubHeaderLabel} 
        FilterLabel1={FilterLabel1}
        FilterLabel2={FilterLabel2}
        FilterLabel3={FilterLabel3}
        FilterLabel4={FilterLabel4}
        FilterLabel5={FilterLabel5}
        FilterLabel6={FilterLabel6}
        FilterLabel7={FilterLabel7}
        FilterLabel8={FilterLabel8}
        FilterLabel9={FilterLabel9}
        FilterLabel10={FilterLabel10}
      />
      <SubHeaderStack 
        FilterSubHeaderLabel={FilterSubHeaderLabel} 
        FilterLabel1={FilterLabel1}
        FilterLabel2={FilterLabel2}
        FilterLabel3={FilterLabel3}
        FilterLabel4={FilterLabel4}
        FilterLabel5={FilterLabel5}
        FilterLabel6={FilterLabel6}
        FilterLabel7={FilterLabel7}
        FilterLabel8={FilterLabel8}
        FilterLabel9={FilterLabel9}
        FilterLabel10={FilterLabel10}
      />
    </div>
  );
};



const SubHeaderStack = ({ FilterSubHeaderLabel, FilterLabel1, FilterLabel2, FilterLabel3, FilterLabel4, FilterLabel5, FilterLabel6, FilterLabel7, FilterLabel8, FilterLabel9, FilterLabel10 }) => {
  return (
    <div className={styles.subHeaderStackWrap}>
      <FilterSubHeader FilterSubHeaderLabel={FilterSubHeaderLabel} />
      <div className={styles.filtersLists}>
        <FilterLabel FilterLabel={FilterLabel1} />
        <FilterLabel FilterLabel={FilterLabel2}  />
        <FilterLabel FilterLabel={FilterLabel3}  />
        <FilterLabel FilterLabel={FilterLabel4}  />
        <FilterLabel FilterLabel={FilterLabel5}  />
        <FilterLabel FilterLabel={FilterLabel6}  />
        <FilterLabel FilterLabel={FilterLabel7}  />
        <FilterLabel FilterLabel={FilterLabel8}  />
        <FilterLabel FilterLabel={FilterLabel9}  />
        <FilterLabel FilterLabel={FilterLabel10} />
      </div>
    </div>
  );
};

export default CatalogFilterSection;
