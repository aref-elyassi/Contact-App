import React from 'react'
import styles from './SearchPerson.module.css'

const SearchPerson = ({ search, setSearch }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="جستجو بر اساس نام، ایمیل یا تلفن..."
        className={styles.searchInput}
      />
      
   
    
    </div>
  )
}

export default SearchPerson