import React, { useContext } from 'react'
import { PersonContext } from '../context/PersonContext'
import Card from '../components/Card'
import styles from './HomePage.module.css'
import AddPerson from '../components/AddPerson'

const HomePage = () => {
    const { person, setPerson } = useContext(PersonContext)
    console.log(person);

    const deleteHandler = async (id) => {
        try {
            // ارسال درخواست DELETE به سرور با ID در URL
            const response = await fetch(`http://localhost:4000/data/${id}`, {
                method: 'DELETE'
            })

            if (!response.ok) {
                throw new Error('Failed to delete person')
            }

            // به‌روزرسانی state در React
            const newPerson = person.filter(p => p.id !== id)
            setPerson(newPerson)

        } catch (error) {
            console.error('Error deleting person:', error)
            alert('خطا در حذف شخص')
        }
    }

    return (
        <div className={styles.container}>
            <AddPerson />
            <h1>لیست اشخاص</h1>
            <div className={styles.personList}>
                {person.map((item) => (
                    <Card key={item.id} item={item} deleteHandler={deleteHandler} />
                ))}
            </div>
        </div>
    )
}

export default HomePage
