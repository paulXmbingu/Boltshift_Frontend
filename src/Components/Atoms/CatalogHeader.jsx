import React from 'react'
import styles from "./CatalogHeader.module.css"

const HeaderLabel = ({HeaderLabelText, HeaderLabelIcon}) => {
  return (
    <div className={styles.HeaderLabel}>
      <span className={styles.HeaderLabel}>
        {HeaderLabelText}
        <button className={styles.HeaderLabelButton}>
        <img className={styles.HeaderLabelIcon} src={HeaderLabelIcon} alt="" />
      </button>
        </span>
    </div>
  )
}
const SubHeaderLabel = () => {
  return (
    <div></div>
  )
}
const FilterLabel= () => {
  return (
    <div></div>
  )
}

export {HeaderLabel, SubHeaderLabel, FilterLabel}


