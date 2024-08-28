import React from 'react'
import styles from "./Filters.module.css"

const Filters = () => {
  return (
    <div>

    </div>
  )
}

const HeaderLabel = ({HeaderLabelText, PlusIcon}) =>{
    return (
        <div className={styles.HeaderLabel}>
            <div className={styles.HeaderLabelText}>{HeaderLabelText}</div>
            <div className={styles.HeaderLabelIcon}>
                {PlusIcon}
            </div>
        </div>
    )
}
const HeaderLabelMinusIcon = ({HeaderLabelText, MinusIcon}) =>{
    return (
        <div className={styles.HeaderLabel}>
            <div className={styles.HeaderLabelText}>{HeaderLabelText}</div>
            <div className={styles.HeaderLabelIcon}>
                {MinusIcon}
            </div>
        </div>
    )
}

const SubHeaderLabel = ({subHeaderIcon,}) =>{
    return(
        <div className={styles.SubHeaderLabel}>
            <div className={styles.subHeaderIcon}>
                {subHeaderIcon}
            </div>
            <div className={styles.CheckboxAndTittle}>
                <input type="checkbox" className={styles.imputCheckbox}/>
                <div className={styles.subLabelText}></div>
            </div>
            <div></div>
        </div>
    )
}

export {Filters, HeaderLabel, HeaderLabelMinusIcon, SubHeaderLabel, };