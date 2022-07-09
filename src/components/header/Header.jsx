import React from 'react'
import './header.scss'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Social from './Social'
import { BsFillCaretRightFill } from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Michael Perron</h1>
        <h5 className='text-light'>Full-Stack Developer</h5>

        <CTA />
        <Social />

        <div className="me">
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'> Scroll Down <BsFillCaretRightFill /><BsFillCaretRightFill /><BsFillCaretRightFill /></a>
      </div>
    </header>
  )
}

export default Header