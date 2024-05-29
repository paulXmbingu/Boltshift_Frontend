import React from 'react';
import styles from './SearchInput.module.css';
import SearchIcon from '../../assets/Icons/UI/search-sm.svg';

const SearchInput = () => {
    return (
        <div className={styles.searchInput}>
            <div className={styles.inputWithLabel}>
                <img src={SearchIcon} alt="Search" className={styles.searchIcon} />
                <input
                    className={styles.input}
                    placeholder='Search for products, brands, and more...'
                    type="search"
                />
            </div>
        </div>
    );
};

export default SearchInput;
