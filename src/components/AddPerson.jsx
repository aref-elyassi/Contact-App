import React, { useState } from 'react'
import styles from './AddPerson.module.css'
import Swal from 'sweetalert2'

const AddPerson = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        skills: ""
    })

    const changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setForm(prevForm => ({ ...prevForm, [name]: value }))
    }

    const addHandler = async (e) => {
        if(form.name==="" || form.value==="" || form.phone==="" || form.skills===""){
            alert("لطفا همه مقادیر را وارد کنید")
            return
        }
        e.preventDefault()     
        const skillsArray = form.skills.split(',').map(skill => skill.trim())  
        const newPerson = {
            name: form.name,
            email: form.email,
            phone: form.phone,
            skills: skillsArray,
            id: Date.now().toString()
        }
        try {
            const response = await fetch('http://localhost:4000/data', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPerson)
            })

            if (!response.ok) {
                throw new Error('Failed to add person')
            }
            setForm({
                name: "",
                email: "",
                phone: "",
                skills: ""
            })
            Swal.fire({
                position: "top-end",
                icon: "success",
                width:300,
                height:100,
                title: "عملیات موفقیت آمیز بود",
                showConfirmButton: false,
                timer: 2500
              });

           
        } catch (error) {
            console.error('Error adding person:', error)
            alert('خطا در افزودن شخص جدید')
        }
    }

    return (
        <div className={styles.container}>
            <h1>افزودن شخص جدید</h1>
            <form  className={styles.inputs}>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={changeHandler}
                    placeholder="نام"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={changeHandler}
                    placeholder="ایمیل"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={changeHandler}
                    placeholder="تلفن"
                    required
                />
                <input
                    type="text"
                    name="skills"
                    value={form.skills}
                    onChange={changeHandler}
                    placeholder="مهارت ها (با کاما جدا کنید)"
                    required
                />
            </form>
                <button onClick={addHandler}>افزودن</button>
        </div>
    )
}

export default AddPerson
