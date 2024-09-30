import React from "react";
import styles from "./Filters.module.css";
import CheckBox from "../../Atoms/CheckBox/CheckBox";

const FilterHeader = ({ FilterHeaderLabel, FilterHeaderIcon, handleFilterHeader }) => {
    return (
        <div className={styles.filterHeaderWrap} onClick={handleFilterHeader}> 
            <span className={styles.filterHeaderLabel}> {FilterHeaderLabel} </span>
            <div className={styles.filterHeaderIconWrap}>
                {FilterHeaderIcon && 
                    <img 
                        src={FilterHeaderIcon} 
                        alt="Filter Header Icon" 
                        className={styles.filterHeaderIcon} 
                    />
                }
            </div>
        </div>
    );
};

const FilterSubHeader = ({ FilterSubHeaderLabel, subHeaderTailIcon, handleFilterSubHeader, showCheckbox }) => {
    return (
        <div className={styles.filterSubHeaderWrap} onClick={handleFilterSubHeader}> 
            <div className={styles.checkMarkSubheader}> 
                {showCheckbox && <CheckBox/>}
                <span className={styles.filterSubHeaderLabel}> {FilterSubHeaderLabel} </span>
            </div>
            <div className={styles.subHeaderTailIconWrap}>
                {subHeaderTailIcon &&
                    <img
                        src={subHeaderTailIcon} 
                        alt="Sub Header TailIcon"
                        className={styles.subHeaderTailIcon}
                    />
                }
            </div>
        </div>
    );
};

const FilterLabel = ({ FilterLabel, FilterTailIcon, handleFilterLabel, showCheckbox }) => {
    return (
        <div className={styles.filterLabelWrap} onClick={handleFilterLabel}> 
            <div className={styles.checkmarkFilterLabel}>
                {showCheckbox && <CheckBox/>}
                <span className={styles.filterLabel}> {FilterLabel} </span>
            </div>
            <div className={styles.filterLabelTailIconWrap}> 
                {FilterTailIcon && 
                    <img 
                        src={FilterTailIcon}
                        alt="Filter Tail Icon"
                        className={styles.filterTailIcon}
                    />
                }
            </div>
        </div>
    );
};

export { FilterHeader, FilterSubHeader, FilterLabel };
