import React from 'react';
import styles from './SearchInput.module.css';

const SearchInput = () => {
    return(
        <div className={styles.searchInput}>
            <div className={styles.inputWithLabel}>
                <input
                    className={styles.input}
                    placeholder='Search for products, brands, and more...'
                    type="search" 
                    name="" 
                    id="" 
                />
            </div>
        </div>
    );
};

export default SearchInput;
