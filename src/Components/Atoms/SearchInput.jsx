import React from 'react';
import styles from './SearchInput.module.css';
import SearchIcon from '../../assets/Icons/UI/search-sm.svg';

const SearchInput = () => {
    return (
        <div className={styles.searchInput}>
           
               <form className={styles.inputWithLabel}>
               <img src={SearchIcon} alt="Search" className={styles.searchIcon} />

               <input
               className={styles.input}
               placeholder='What are you looking for today?'
               type="search"
           />
           <button type='submit' className={styles.searchButton} >Search</button>
       
               </form>
              
        </div>
    );zzzzzzzzzzzzz
};

export default SearchInput;
