import React from 'react'
import styles from "./CatalogFilterSection.module.css"
import CatalogCartegoriesFilter from './CatalogCartegoriesFilter'
import FilterDropDown from '../../Components/Atoms/FilterDropDown'

const CatalogFilterSection = () => {
  return (
    <div className={styles.CatalogFilterSection}>
        <FilterDropDown />
        <CatalogCartegoriesFilter />
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
    </div>
  )
}

export default CatalogFilterSection