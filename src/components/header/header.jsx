import React from 'react'
import './header.css'
//import '../../../src/index.css'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Zain UL Abdin</h1>
        <h5 className='text-light'>React Native Developer</h5>
      </div>
    </header>
  )
}

export default header