import React from 'react'
import styles from "./CatalogFilterSection.module.css"
import CatalogCartegoriesFilter from './CatalogCartegoriesFilter'

const CatalogFilterSection = () => {
  return (
    <div className={styles.CatalogFilterSection}>
        <div className={styles.imputField}>
            <form action="GET" className={styles.ImputWithLabel}>
                <label htmlFor="SortBy" className={styles.SortBy}>Sort By</label>
                <select id="SortBy" name="SortBy" className={styles.Sortings}>
                    <option value="Option1"className={styles.optionRext}>Latest</option>
                    <option value="option2"className={styles.optionRext}>Older</option>
                    <option value="option3"className={styles.optionRext}>Porpular</option>
                </select>
            </form>
        </div>
        <CatalogCartegoriesFilter />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default CatalogFilterSection