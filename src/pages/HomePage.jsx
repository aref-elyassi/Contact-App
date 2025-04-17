import React from 'react'
import { usePerson } from '../context/PersonContext'
import Card from '../components/Card'
import styles from './HomePage.module.css'
const HomePage = () => {
  const { person } = usePerson()
  return (
    <div className={styles.container}>
  
      {person.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}

export default HomePage
