import React, { createContext, useContext, useEffect, useState } from 'react'

const PersonContext = createContext()
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

    <PersonContext.Provider value={{person}}>{children}</PersonContext.Provider>
  )
}
const usePerson = () => {
  const context = useContext(PersonContext)
  if (!context) {
    throw new Error('usePerson must be used within a PersonProvider')
  }
  return context
}
export { PersonProvider, usePerson }