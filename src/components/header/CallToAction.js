import React from 'react'
import CV from '../../assets/my-resume.pdf'
import './header.css'

export default function CallToAction() {
    return (
        <div className='cta'>
            <a className='btn' href={CV} download>Download CV</a>
            <a className='btn btn-primary' href="#contact">Let's Talk</a>
        </div>
    )
}
