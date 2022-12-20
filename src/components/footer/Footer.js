import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Prashant Singh</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><AiFillFacebook /></a>
        <a href="https://instagram.com"><BsInstagram /></a>
        <a href="https://twitter.com"><BsTwitter /></a>
      </div>
    </footer>
  )
}
