import React, { useState } from 'react'
import styles from './Modal.module.css'

const Modal = ({ isOpen, onClose, person }) => {
    const [editForm, setEditForm] = useState({
        name: person.name,
        email: person.email,
        phone: person.phone,
        skills: person.skills.join(', ')
    })

    const changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setEditForm(prevForm => ({ ...prevForm, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
           
            const skillsArray = editForm.skills.split(',').map(skill => skill.trim())
            
    
            const updatedPerson = {
                ...person,
                name: editForm.name,
                email: editForm.email,
                phone: editForm.phone,
                skills: skillsArray
            }

            const response = await fetch(`http://localhost:4000/data/${person.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedPerson)
            })

            if (!response.ok) {
                throw new Error('Failed to update person')
            }

         
            onClose()
            window.location.reload()

        } catch (error) {
            console.error('Error updating person:', error)
            alert('خطا در ویرایش شخص')
        }
    }

    if (!isOpen) return null

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <h2>ویرایش شخص</h2>
                <form onSubmit={handleSubmit} className={styles.editForm}>
                    <div className={styles.formGroup}>
                        <label>نام:</label>
                        <input
                            type="text"
                            name="name"
                            value={editForm.name}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>ایمیل:</label>
                        <input
                            type="email"
                            name="email"
                            value={editForm.email}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>شماره تماس:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={editForm.phone}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>مهارت‌ها (با کاما جدا کنید):</label>
                        <input
                            type="text"
                            name="skills"
                            value={editForm.skills}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        ذخیره تغییرات
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Modal
