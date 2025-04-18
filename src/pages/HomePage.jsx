import React from 'react'
import { usePerson } from '../context/PersonContext'
import Card from '../components/Card'
import styles from './HomePage.module.css'
import AddPerson from '../components/AddPerson'
const HomePage = () => {
  const { person } = usePerson()
  return (
    <div className={styles.container}>
      <AddPerson />
      <h1>لیست اشخاص</h1>
      <div className={styles.personList}>

        {person.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
