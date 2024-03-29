import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'
const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>
          </ul>
        </article>

        {/*End of first service */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>
          </ul>
        </article>

        {/*End of second service */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>
          </ul>
        </article>

        {/*End of third service */}
      </div>
    </section>
  )
}

export default services