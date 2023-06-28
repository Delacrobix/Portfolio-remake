import React, { forwardRef, useState } from 'react';

const Footer = forwardRef((__, ref) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <section className='contact' ref={ref}>
      <div className='container'>
        <header className='header-contact'>
          <h2>Contact me</h2>
          <p>Send me a message if you are interested ;D</p>
        </header>
        <form className='form-contact' onSubmit={handleSubmit}>
          <div className='text-input-container'>
            <div className='input-container'>
              <input
                type='text'
                name='name'
                placeholder='Name'
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='textarea-container'>
              <textarea
                name='message'
                placeholder='Message'
                rows='6'
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='submit-container'>
            <button
              className='contact-submit'
              type='submit'
              value='Send Message'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
});

export default Footer;
