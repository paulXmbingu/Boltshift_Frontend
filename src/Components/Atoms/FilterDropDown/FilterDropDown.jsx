import React from 'react'
import styles from "./FilterDropDown.module.css"

const FilterDropDown = () => {
  return (
        <div className={styles.FilterDropDown}>
            <form action="GET" className={styles.ImputWithLabel}>
                <label htmlFor="SortBy" className={styles.inputLabel}>Sort By</label>
                <select id="SortBy" name="SortBy" className={styles.InputOptions}>
                    <option value="Option1" className={styles.optionRext}>Latest</option>
                    <option value="Option2" className={styles.optionRext}>Older</option>
                    <option value="Option3" className={styles.optionRext}>Popular</option>
                </select>
            </form>
        </div>
  )
}

export default FilterDropDown