import React from 'react'
import styles from './Modal.module.css'

const Modal = ({ isOpen, onClose, person }) => {
    if (!isOpen) return null

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalDetails}>
                <h2>جزئیات کامل</h2>
                <p>نام: {person.name}</p>
                <p>ایمیل: {person.email}</p>
                <p>شماره تماس: {person.phone}</p>
                <div className={styles.skillsSection}>
                    <h3>مهارت ها:</h3>
                    <ul>
                        {person.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <button>اعمال ویرایش</button>
            </div>
        </div>
    )
}

export default Modal
