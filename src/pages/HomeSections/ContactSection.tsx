import React, { useId } from 'react'
import { Sections } from '../../components/Sections'
import { useTheme } from '../../hooks/ThemeContextProvider'
import Button from '../../components/Button';

const ContactSection: React.FC = () => {
    const {theme} = useTheme();
    const name = useId();
    const email = useId();
    const message = useId();

  return (
    <Sections className={`contactSection ${theme === 'dark' ? 'dark' : 'light'}`} id="contact">
        <div className='contact-content-wrapper'>
            <p>Looks like you need some help!!!</p>
            <h2>Reach Out</h2>
            <p>I usually respond within an hour.<br />Thank you and I am looking to hearing from you.</p>
            <div className='contact-form'>
                <form action="#" method="post">
                    <div className="input-group">
                        <label htmlFor={name}>Name</label>
                        <input type="text" name="name" id={name} placeholder='john doe' />
                    </div>
                    <div className="input-group">
                        <label htmlFor={email}>Email Address</label>
                        <input type="text" name="email" id={email} placeholder='johndoe123@gmail.com' />
                    </div>
                    <div className="input-group">
                        <label htmlFor={message}>Email Address</label>
                        <textarea name="message" id={message} placeholder='What is the issue?'></textarea>
                    </div>
                    <div className="form-submit">
                        <aside>
                            <Button type='button' className='submitBtn'>Submit</Button>
                        </aside>
                        <p>By submiting this form, you acknowledge receipt our company privacy and Policy.</p>
                    </div>
                </form>
            </div>
        </div>
    </Sections>
  )
}

export default ContactSection
