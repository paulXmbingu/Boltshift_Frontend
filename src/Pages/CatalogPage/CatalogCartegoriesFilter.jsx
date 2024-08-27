import React from 'react'
import styles from "./CatalogCartegoriesFilter.module.css"
import icon from '../../assets/Icons/UI/Dot.svg'
import { HeaderLabel } from '../../Components/Atoms/CatalogHeader'



const CatalogCartegoriesFilter = () => {
  return (
    <div className={styles.CartegoriesSection}>
        <div className={styles.Filters}>
            <span className={styles.HeaderLabelFilters}>
            <HeaderLabel HeaderLabelText={`Categes`} HeaderLabelIcon={icon}/>
            </span>
        </div>
    </div>
  )
}

export default CatalogCartegoriesFilter