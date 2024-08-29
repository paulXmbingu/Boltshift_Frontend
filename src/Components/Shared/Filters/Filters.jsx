import React from "react";
import styles from "./Filters.module.css"

const FilterHeader = ( {FilterHeaderLabel, FilterHeaderIcon} ) => {
    return (
        <div className={styles.filterHeaderWrap} > 
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

const FilterSubHeader = ({ FilterSubHeader, subHeaderTailIcon }) => {
    return (
        <div className={styles.filterSubHeaderWrap}> 
            <div className={styles.checkMarkSubheader} > 
                <input type="checkbox" />
                <span className={styles.filterSubHeaderLabel}> {FilterSubHeader} </span>
            </div>
            <div className={styles.subHeaderTailIconWrap}>
                {subHeaderTailIcon &&
                    <img
                    src={subHeaderTailIcon} 
                    alt="Sub Header TailIcon"
                    className={styles.subHeaderTailIcon}
                />}
            </div>
        </div>
    );
};

const FilterLabel = () => {
    return (
        <div> 
            FilterLabel 
        </div>
    );
};

export 
    {   FilterHeader,
        FilterSubHeader, 
        FilterLabel 
    }
