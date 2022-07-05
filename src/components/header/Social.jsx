import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Social = () => {
  return (
    <div className='social'>
      <a href='http://linkedin.com' target='_blank'><BsLinkedin /></a>
      <a href='http://github.com' target='_blank'><BsGithub /></a>
    </div>
  )
}

export default Social