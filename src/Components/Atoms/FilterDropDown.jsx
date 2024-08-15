import React from 'react'
import styles from "./FilterDropDown.module.css"

const FilterDropDown = () => {
  return (
    <div>
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
    </div>
  )
}

export default FilterDropDown