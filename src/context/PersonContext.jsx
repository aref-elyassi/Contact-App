import React, { createContext, useContext, useEffect, useState } from 'react'

export const PersonContext = createContext()
const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState([])
  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await fetch('http://localhost:4000/data')
        const data = await response.json()
        setPerson(data)

      } catch (error) {
        console.log(error.message);
      }
    }
    fetchPerson()
  }, [])
  return (

    <PersonContext.Provider value={{person,setPerson}}>{children}</PersonContext.Provider>
  )
}

export { PersonProvider }