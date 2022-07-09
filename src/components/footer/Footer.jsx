import React from 'react'
import './footer.scss'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { GiOrbDirection } from 'react-icons/gi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Back To Top<GiOrbDirection /></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com"><AiOutlineGithub /></a>
        <a href="https://linkedin.com"><AiOutlineLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer