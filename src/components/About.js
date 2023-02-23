import React from 'react'
import image from '../Headshot.jpg'

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
                <p>Not sure what to put here at the moment</p>
            </article>
        </div>
    </div>
  )
}

export default About