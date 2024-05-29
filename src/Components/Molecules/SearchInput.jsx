import React from 'react';
import styles from './SearchInput.module.css';

const SearchInput = () => {
    return(
        <div className={styles.searchInput}>
            <div className={styles.inputWithLabel}>
                <input
                    type="search" 
                    name="" 
                    id="" 
                    className={styles.input}
                />
            </div>
        </div>
    );
};

export default SearchInput;
