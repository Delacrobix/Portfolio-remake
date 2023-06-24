import React from 'react';

const Footer = () => {
  return (
    <section id='contact' className='contact'>
      <div className='content'>
        <header>
          <h2>Contact me.</h2>
          <p>Send me a message if you are interested ;D</p>
        </header>
        <div className='box'>
          <form name='form-contact'>
            <div className=''>
              <div className=''>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  id='name-input'
                />
              </div>
              <div className=''>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  id='email-input'
                />
              </div>
              <div className=''>
                <textarea
                  name='message'
                  placeholder='Message'
                  rows='6'
                  id='message-input'
                ></textarea>
              </div>
            </div>
            <div className='submit-container'>
              <button
                id='contact-submit'
                className='contact-submit'
                type='submit'
                value='Send Message'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
