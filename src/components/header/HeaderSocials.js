import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsStackOverflow } from 'react-icons/bs'

export default function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href="www.linkedin.com" target="_blank"> <BsLinkedin /> </a>
            <a href="www.github.com" target="_blank"> <BsGithub /> </a>
            <a href="www.stackoverflow.com" target="_blank"><BsStackOverflow /></a>
        </div>
    )
}
