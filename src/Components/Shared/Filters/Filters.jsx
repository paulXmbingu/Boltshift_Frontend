import React from "react";
import styles from "./Filters.module.css"

const FilterHeader = ( {FilterHeaderLabel, FilterHeaderIcon} ) => {
    return (
        <div className={styles.filterHeaderWrap}> 
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

const FilterSubHeader = () => {
    return (
        <div> 
            FilterSubHeader 
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
