import React from 'react'
import './portfolio.scss'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Imaginary Dashboard 1',
    github: 'https://github.com/MikePerronATX',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Imaginary Dashboard 2',
    github: 'https://github.com/MikePerronATX',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Imaginary Dashboard 3',
    github: 'https://github.com/MikePerronATX',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Imaginary Dashboard 4',
    github: 'https://github.com/MikePerronATX',
    demo: 'https://dribbble.com/Alien_pixels'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Past Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div >
    </section >
  )
}

export default Portfolio