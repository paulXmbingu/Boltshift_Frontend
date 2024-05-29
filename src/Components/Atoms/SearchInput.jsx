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
                    placeholder='What are you looking for today?'
                    type="search"
                />
                <button className={styles.searchButton}>Search</button>
            </div>
        </div>
    );
};

export default SearchInput;
