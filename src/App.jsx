import { useEffect, useState } from "react"

function App() {
  const [person, setPerson] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:4000/data')
        const data = await res.json();
        setPerson(data)
        console.log(data);
      } catch (err) {
        console.error('Error fetching data:', err)
        setError(err.message)
      }
    }
    
    fetchData(); // Actually calling the function
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
     
     {
      person.map(p=>(
        <h1>{p.name}</h1>
      ))
     }
    </>
  )
}

export default App
