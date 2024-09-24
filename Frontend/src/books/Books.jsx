// import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Book from '../component/Book'
function books() {

  
  return (
    <>
      <Navbar />

      <div className='min-h-screen'>
      <Book />
      </div>
      
      <Footer />
    </>
  )
}

export default books
