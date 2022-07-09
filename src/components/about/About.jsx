import React from 'react'
import './about.scss'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { toContainHTML } from '@testing-library/jest-dom/dist/matchers'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h4>Experience</h4>
              <h6>2-years Professional</h6>
              <h6>8-years Overall</h6>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h4>Projects</h4>
              <h6>10</h6>
            </article>
          </div>
          <p>
            Hi, my name is Michael Perron, and I am a reliable, detail-oriented, full-stack developer based in Austin, TX.
            I have 2-years of professional experience, and 8-years of overall coding experience.
            In January of 2021 (4-months before graduation), I started at Wipro Ltd. and began work as a Software QA for Facebook and Instagram.
            On March 14, 2022, I began an Internship as a Software Engineer at Emerson Automation Solutions in Round Rock, Texas.
            At the end of my 4-month internship, I was offered a position as a full-time Software Engineer.
            Although I love developing software, my passion is full-stack development, and I have put together this portfolio showing some of my work in that arena.
            Thanks for checking out my portfolio, and please contact me with any questions.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About