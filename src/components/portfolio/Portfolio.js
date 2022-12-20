import React from 'react'
import './portfolio.css'
import img from '../../assets/img.jpg'

export default function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio--image">
                        <img src={img} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item--cta">
                        <a href="https://github.com/prashant6" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com/prashant6" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio--image">
                        <img src={img} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item--cta">
                        <a href="https://github.com/prashant6" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com/prashant6" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

            </div>
        </section>
    )
}
