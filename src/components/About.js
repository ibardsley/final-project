import React from 'react'
import image from '../Headshot.jpg'
import Footer from './Footer'

const About = () => {
  return (
    <div className='wrapper'>
        <div className='testimonial'>
            <article>
                <h1>About Me</h1>
                <img src={image} alt='male headshot' height='180px' width='180px' />
                <blockquote>
                    Hello my name is John Smith and I created this app to help
                    anyone who needs to keep track of their todo's
                </blockquote>
                <h5>John Smith</h5>
                <p>I am a new developer and excited to start a new career in Front End Development</p>
            </article>
        </div>
        <Footer />
    </div>
  )
}

export default About