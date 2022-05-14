import React from 'react'
import './header.css'
//import '../../../src/index.css'

import CTA from './CTA'
import ME from '../../assests/profile.png'
import HeaderSocial from './headerSocial'
const header = () => {
  return (
  <header>
    <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Zain UL Abdin</h1>
        <h5 className='text-light'>React Native Developer</h5>
        <CTA/>
        <HeaderSocial/>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
        <div className="me">
          <img src={ME} alt="me"></img>  
      </div>
      
    </div>
  </header>
  )
}

export default header