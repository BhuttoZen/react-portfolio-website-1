import React from 'react'
import './about.css'
import ME from '../../assests/about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

import {FiUsers} from 'react-icons/fi'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Image About" />
          </div>
        </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward  className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className='about__card'>
                <FiUsers  className='about__icon'/>
                <h5>Clients</h5>
                <small>10+ Worldwide</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary  className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ Completed Projects</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil quis a natus explicabo vero illum iure quasi hic aut consequuntur fuga harum corrupti quas, quod sed. Veritatis, dolores distinctio?
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default about