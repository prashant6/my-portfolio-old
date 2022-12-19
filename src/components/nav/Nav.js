import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { MdCleaningServices } from 'react-icons/md'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

export default function Nav() {
  const [activeNav, setActiveNav] = useState('#')

  const activeClass = (event) => {
    event.stopPropagation()
    event.target.className = 'active'
    console.log(event.target.className)
  }

  return (
    <nav>

      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><AiOutlineHome /></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')} ><AiOutlineUser /></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><BiBook /></a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={() => setActiveNav('#services')}><MdCleaningServices /></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></a>

    </nav>
  )
}

