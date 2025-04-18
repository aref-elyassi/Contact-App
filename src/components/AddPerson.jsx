import React, { useState } from 'react'
import styles from './AddPerson.module.css'

const AddPerson = () => {
    const handleChange = () => {

    }

    return (
        <div className={styles.container}>
            <h1>افزودن شخص جدید</h1>
            <div className={styles.inputs}>

                <input
                    type="text"
                    name="name"

                    onChange={handleChange}
                    placeholder="نام"
                    required
                />
                <input
                    type="email"
                    name="email"

                    onChange={handleChange}
                    placeholder="ایمیل"
                    required
                />
                <input
                    type="tel"
                    name="phone"

                    onChange={handleChange}
                    placeholder="تلفن"
                    required
                />
                <input
                    type="text"
                    name="skills"

                    onChange={handleChange}
                    placeholder="مهارت ها (با کاما جدا کنید)"
                    required
                />
            </div>
                <button type="submit">افزودن</button>
        </div>
    )
}

export default AddPerson
