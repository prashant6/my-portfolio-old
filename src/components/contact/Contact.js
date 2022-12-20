import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

export default function Contact() {

  const service_id = process.env.REACT_APP_SERVICE_ID
  const template_id = process.env.REACT_APP_TEMPLATE_ID
  const public_key = process.env.REACT_APP_PUBLIC_KEY

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, form.current, public_key)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
      alert('Thanks for showing the interest')
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option--icon' />
            <h4>Email</h4>
            <h5>prashantsingh41195@gmail.com</h5>
            <a href="mailto:prashantsingh41195@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option--icon' />
            <h4>WhatsApp</h4>
            <h5>+91-9717585208</h5>
            <a href="https://api.whatsapp.com/send?phone=9717585208" target="_blank">Send a message</a>
          </article>
           
        </div>

        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
 