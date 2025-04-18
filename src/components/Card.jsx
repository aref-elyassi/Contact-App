import React, { useEffect, useState } from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { TbListDetails } from 'react-icons/tb';

const Card = ({ item, deleteHandler }) => {
    const { id } = item

   

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <p>نام: {item.name}</p>
                <p>ایمیل: {item.email}</p>
                <p>شماره تلفن: {item.phone}</p>

                <div className={styles.actions}>
                    <Link to={`/person/${id}`}>
                    <TbListDetails />
                    </Link>

                    <button onClick={() => deleteHandler(id)} className={styles.btn}>
                        <MdDelete/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
