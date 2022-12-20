import React from 'react'
import CallToAction from './CallToAction'
import HeaderSocials from './HeaderSocials'
import './header.css'
import ME from '../../assets/me.png'

export default function Header() {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Prashant Singh</h1>
          <h5 className="text-light">fullstack Developer</h5>

          <CallToAction />
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="It's Me" style={{width: "200px"}}/>
          </div>

          <a href="#contact" className="scroll__down">Scroll Down</a>

        </div>
      </header>

    </>
  )
}


