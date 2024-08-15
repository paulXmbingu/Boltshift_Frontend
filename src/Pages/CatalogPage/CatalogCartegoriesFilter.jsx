import React from 'react'
import styles from "./CatalogCartegoriesFilter.module.css"


const CatalogCartegoriesFilter = () => {
  return (
    <div className={styles.CartegoriesSection}>
        <div className={styles.Filters}>
            <span className={styles.HeaderLabelFilters}>Categories</span>
        </div>
    </div>
  )
}

export default CatalogCartegoriesFilter