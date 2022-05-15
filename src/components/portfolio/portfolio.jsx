import React from 'react'
import './portfolio.css'
import IMG from '../../assests/portfolio1.jpg'


//Don't use this sample

const data =[
  {
    id:1,
    image: IMG,
    title: 'Crypto NFT dashboard',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/18246885-NFT-Website-Components-Dark'
  },
  {
    id:2,
    image: IMG,
    title: 'Crypto NFT dashboard',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/18246885-NFT-Website-Components-Dark'
  },
  {
    id:3,
    image: IMG,
    title: 'Crypto NFT dashboard',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/18246885-NFT-Website-Components-Dark'
  },
  {
    id:4,
    image: IMG,
    title: 'Crypto NFT dashboard',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/18246885-NFT-Website-Components-Dark'
  },
  {
    id:5,
    image: IMG,
    title: 'Crypto NFT dashboard',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/18246885-NFT-Website-Components-Dark'
  },
  {
    id:6,
    image: IMG,
    title: 'Crypto NFT dashboard',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/18246885-NFT-Website-Components-Dark'
  },
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
            <article key={id} className='portfolio__item'>
              
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              
              <h3>{title}</h3>
              
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio