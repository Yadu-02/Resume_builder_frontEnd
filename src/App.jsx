import { useState } from 'react'
import './App.css'
import Landingpage from './pages/Landingpage'
import { Route, Routes } from 'react-router-dom'
import Form from './pages/Form'
import Resume from './pages/Resume'
import History from './pages/History'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Pnf from './pages/Pnf'
import Steps from './Components/Steps'


Pnf



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='' element={<Landingpage/>} />
        <Route path='resume' element={<Resume/>} />
        <Route path='form' element={<Form/>} />
        <Route path='history' element={<History/>} />
        <Route path='steps' element={<Steps/>} />
        <Route path='/*' element={<Pnf/>} />
      </Routes>
      <Footer />
    
    </>
  )
}

export default App
