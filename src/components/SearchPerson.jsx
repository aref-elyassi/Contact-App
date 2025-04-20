import React from 'react'
import styles from './SearchPerson.module.css'

const SearchPerson = ({ search, setSearch }) => {
  return (
    <div className={styles.searchContainer}>
      <span>جستجو بر اساس نام یا ایمیل یا شماره تلفن</span>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />
      
   
    
    </div>
  )
}

export default SearchPerson