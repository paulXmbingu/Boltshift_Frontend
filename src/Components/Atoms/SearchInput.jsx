import React, { useState } from 'react';
import styles from './SearchInput.module.css';
import SearchIcon from '../../assets/Icons/UI/search-sm.svg';

const SearchInput = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your search logic here
        console.log('Searching for:', query);
        // For example, you could call a search API or update the state of your application
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className={styles.searchInput}>
            <form className={styles.inputWithLabel} onSubmit={handleSubmit}>
                <img src={SearchIcon} alt="Search" className={styles.searchIcon} />
                <input
                    className={styles.input}
                    placeholder='What are you looking for today?'
                    type="search"
                    value={query}
                    onChange={handleInputChange}
                />
                <button type='submit' className={styles.searchButton}>Search</button>
            </form>
        </div>
    );
};

export default SearchInput;
