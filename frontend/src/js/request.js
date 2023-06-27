/*
 * Code for send the email
 */
const submitButton = document.getElementById('contact-submit');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  let message = document.getElementById('message-input').value;
  let name = document.getElementById('name-input').value;
  let email = document.getElementById('email-input').value;

  if (message === '') {
    alert('Please enter a message.');
  } else if (email === '') {
    alert('Please enter a email.');
  } else if (name === '') {
    alert('Please enter a name.');
  } else {
    let info = {
      name: name,
      email: email,
      message: message,
    };

    fetch('/send-email', {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => alert('Thanks for sending'))
      .catch(() => alert('Error. Please try again'));
  }
});
