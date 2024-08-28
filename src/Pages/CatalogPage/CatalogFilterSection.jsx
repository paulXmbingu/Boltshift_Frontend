import React from 'react'
import styles from "./CatalogFilterSection.module.css"
import CatalogCartegoriesFilter from './CatalogCartegoriesFilter'
import { Filters } from '../../Components/Shared/Filters/Filters'

const CatalogFilterSection = () => {
  return (
    <div className={styles.CatalogFilterSection}>
        
        <CatalogCartegoriesFilter />
        <Filters />
       
    </div>
  )
}

export default CatalogFilterSection