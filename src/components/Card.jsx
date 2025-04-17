import React, { use, useState } from 'react'
import styles from './Card.module.css'
import { TbListDetails } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Card = ({ item }) => {

 
    const { id } = item
  
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <p>نام: {item.name}</p>
                <p>ایمیل: {item.email}</p>
                <p>شماره تلفن: {item.phone}</p>

                <div className={styles.actions}>
                    <Link to={`/person/${id}`}>
                        <p>مشاهده جزئیات</p>
                    </Link>

                    <button>
                        <CiEdit />
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Card
