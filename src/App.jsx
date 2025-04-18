import { useEffect, useState } from "react"
import HomePage from "./pages/HomePage"
import { PersonProvider } from "./context/PersonContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PersonDetails from "./pages/PersonDetails"

function App() {



  return (
    <>
      <PersonProvider>

        <Routes>
        <Route  path='/' element={<HomePage />}/>
        <Route path="/person/:id"  element={<PersonDetails/>}/>
        </Routes>
      </PersonProvider>

    </>
  )
}

export default App
