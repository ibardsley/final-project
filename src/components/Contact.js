import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='mainContact'>
    <section className='contact'>
        <div className='content'>
            <h2>Contact Us</h2>
            <p>test info about whatever I want to say in this particular section of the page so I am just writing nothingness</p>
        </div>
        <div className='containerA'>
            <div className='contactInfo'>
                <div className='box'>
                    <div className='iconA'><FontAwesomeIcon icon={faMapMarker} /></div>
                    <div className='text'>
                        <h3>Address</h3>
                        <p>123 Main St, <br/>Anywhere, US<br/>111111</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='iconA'><FontAwesomeIcon icon={faPhone} /></div>
                    <div className='text'>
                        <h3>Phone</h3>
                        <p>999-999-9999</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='iconA'><FontAwesomeIcon icon={faEnvelope} /></div>
                    <div className='text'>
                        <h3>Email</h3>
                        <p>testemail@nowhere.com</p>
                    </div>
                </div>
            </div>
            <div className='contactForm'>
                <form>
                    <h2>Send Message</h2>
                    <div className='inputBox'>
                        <input type='text' name='' required='required'/>
                        <span>Full Name</span>
                    </div>
                    <div className='inputBox'>
                        <input type='text' name='' required='required'/>
                        <span>Email</span>
                    </div>
                    <div className='inputBox'>
                        <textarea required='required'></textarea>
                        <span>Type your Message...</span>
                    </div>
                    <div className='inputBox'>
                        <input type='submit' name='' value='Send'/>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact