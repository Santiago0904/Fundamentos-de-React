import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Header } from './layouts/Header/Header'
import { Footer } from './layouts/Footer/Footer'
import { Home } from './Pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
  <Routes>
    <Route path='/' element={<Home/>} />
  </Routes>
  <Footer/>
   </>
  )
}

export default App
