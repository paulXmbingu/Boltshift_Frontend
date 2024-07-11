import React from 'react';
import styles from "./SearchResultOutput.module.css"

const SearchResultOutput = ({NoOfHits, SearchPhrase }) => {
  return (
    <div className={styles.SearchResultOutput}>
        <span className={styles.NoOfHits}>{NoOfHits}</span>
        <span className={styles.SearchPhrase}>{SearchPhrase}</span>
    </div>
  )
}

export default SearchResultOutput