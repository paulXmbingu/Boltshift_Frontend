import React from 'react'
import styles from "./CatalogFilterSection.module.css"
import CatalogCartegoriesFilter from './CatalogCartegoriesFilter'

const CatalogFilterSection = () => {
  return (
    <div className={styles.CatalogFilterSection}>
        
        <CatalogCartegoriesFilter />
    </div>
  )
}

export default CatalogFilterSection