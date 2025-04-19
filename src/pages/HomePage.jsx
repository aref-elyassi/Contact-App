import React, { useContext, useEffect, useState } from 'react'
import { PersonContext } from '../context/PersonContext'
import Card from '../components/Card'
import styles from './HomePage.module.css'
import AddPerson from '../components/AddPerson'
import Swal from 'sweetalert2'
import SearchPerson from '../components/SearchPerson'

const HomePage = () => {
  const { person, setPerson } = useContext(PersonContext)
  const [search, setSearch] = useState("")
  const [displayed, setDisplayed] = useState([])

  useEffect(() => {
       if (search.trim() === '') {
      setDisplayed(person);
    } else {
      const filtered = person.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.email.toLowerCase().includes(search.toLowerCase()) ||
        p.phone.includes(search)
      );
      setDisplayed(filtered);
    }
  }, [search, person]);

  const deleteHandler = async (id) => {


    try {
      const result = await Swal.fire({
        title: 'آیا مطمئن هستید؟',
        text: "همه داده‌ها حذف خواهند شد!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'بله، حذف کن!',
        cancelButtonText: 'انصراف'
      });

      if (!result.isConfirmed) return;

      const response = await fetch(`http://localhost:4000/data/${id}`, {
        method: 'DELETE'
      })
      if (!response.ok) {
        throw new Error('Failed to delete person')
      }
      const newPerson = person.filter(p => p.id !== id)
      setPerson(newPerson)
      
      Swal.fire({
        position: "top-end",
        icon: "success",
        width: 300,
        title: " داده با موفقیت حذف شدند.",
        showConfirmButton: false,
        timer: 2500
      });

    } catch (error) {
      console.error('Error deleting all data:', error);
      Swal.fire({
        icon: 'error',
        title: 'خطا',
        text: `حذف داده‌ها با مشکل مواجه شد: ${error.message}`,
        confirmButtonText: 'متوجه شدم'
      });
    }






  }

  const deleteAllHandler = async () => {
    try {
      const result = await Swal.fire({
        title: 'آیا مطمئن هستید؟',
        text: "همه داده‌ها حذف خواهند شد!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'بله، حذف کن!',
        cancelButtonText: 'انصراف'
      });

      if (!result.isConfirmed) return;

      const response = await fetch(`http://localhost:4000/data`, {
        method: 'DELETE'
      })
      if (!response.ok) {
        throw new Error('Failed to delete person')
      }
      let newArray = person.splice(0, person.length)
      console.log(newArray);
      // پاک کردن state محلی
      //setPerson(newArray);

      Swal.fire({
        position: "top-end",
        icon: "success",
        width: 300,
        title: "همه داده‌ها با موفقیت حذف شدند.",
        showConfirmButton: false,
        timer: 2500
      });

    } catch (error) {
      console.error('Error deleting all data:', error);
      Swal.fire({
        icon: 'error',
        title: 'خطا',
        text: `حذف داده‌ها با مشکل مواجه شد: ${error.message}`,
        confirmButtonText: 'متوجه شدم'
      });
    }
  };

  return (
    <div className={styles.container} >
      <AddPerson />
      <SearchPerson search={search} setSearch={setSearch} />
      <h1>لیست اشخاص</h1>
      <div className={styles.personList}>
        {displayed.map((item) => (
          <Card key={item.id} item={item} deleteHandler={deleteHandler} />
        ))}
      </div>
      <button onClick={deleteAllHandler} className={styles.deleteAll}>حذف همه</button>
    </div>
  )
}

export default HomePage
