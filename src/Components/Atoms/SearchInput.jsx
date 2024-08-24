import React, { useState } from 'react';
import styles from './SearchInput.module.css';
import SearchIcon from '../../assets/Icons/UI/search-sm.svg';

const SearchInput = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', query);
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className={styles.searchInput}>
            <form className={styles.inputWithLabel} onSubmit={handleSubmit}>
                <img 
                    src={SearchIcon} 
                    alt="Search" 
                    className={styles.searchIcon}
                />
                <input
                    type="search"
                    className={styles.input}
                    aria-label='Search to find products in our catalog'
                    placeholder='What are you looking for today?'
                    value={query}
                    onChange={handleInputChange}
                    autoComplete='on'
                />
                <button 
                    type='submit' 
                    className={styles.searchButton}>
                        Search
                </button>
            </form>
        </div>
    );
};

export default SearchInput;
