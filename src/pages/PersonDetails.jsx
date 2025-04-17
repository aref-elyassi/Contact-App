import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './PersonDetails.module.css'
import Modal from '../components/Modal'

const PersonDetails = () => {
    const [person, setPerson] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchPerson = async () => {
            try {
                const response = await fetch('http://localhost:4000/data')
                const data = await response.json()
                const foundPerson = data.find(p => p.id == id)
                setPerson(foundPerson)
            } catch (error) {
                console.error('Error fetching person:', error)
            }
        }
        fetchPerson()
    }, [id])

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    if (!person) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.container}>
            <h1>جزئیات شخص</h1>
            <div className={styles.person}>
                <h2>{person.name}</h2>
                <h2>{person.email}</h2>
                <h2>{person.phone}</h2>

                <h1>مهارت ها</h1>
                {
                    person.skills.map((skill) => (
                        <h4 key={skill}>{skill}</h4>
                    ))
                }

                <button onClick={openModal} className={styles.modalButton}>
                    ویرایش
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} person={person} />


        </div>
    )
}

export default PersonDetails