import React from 'react'
import Spinner from '../components/Spinner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'

const Courses = () => {
  return (
    <>
  <Spinner/>
  <Navbar/>
  {/* Header Start */}
  <div>
        <h1 className="text-center m-4" style={{ fontSize: "50px", fontFamily: "serif" }}>
          Courses
        </h1>
      </div>
  {/* Header End */}

  <Course/>

 <Footer/> 
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
</>

  )
}

export default Courses