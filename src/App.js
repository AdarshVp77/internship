import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import AdminDashboard from './Admin/AdminDashboard'
import Carrers from './Pages/Carrers'

const App = () => {
  return (
    <div>
      <Routes>
        {/* Home Page */}
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/carrers' element={<Carrers />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        
        {/* Admin */}
        <Route path='/admin' element={<AdminDashboard/>} />

      </Routes>


    </div>
  )
}

export default App