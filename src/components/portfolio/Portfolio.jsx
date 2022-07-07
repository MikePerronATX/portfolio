import React from 'react'
import './portfolio.scss'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Past Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/MikePerronATX" className='btn'>GitHub</a>
            <a href="https://.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio