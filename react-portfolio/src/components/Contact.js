import React from 'react';

function Contact() {
  const sendMail=(event) => {
    event.preventDefault()
    const formData=new FormData(event.target)
    const name=formData.get("name")
    const email=formData.get("email")
    const message=formData.get("message")
    window.open(`mailto:ttorisky@gmail.com?subject=${name}\r\n${email}\r\n${message}`)
  }
  return <div className="body"><h1>Contact</h1>
    <form onSubmit={sendMail}>
      <span>Name: </span><br />
      <input type="text" placeholder='John Smith' /> <br />
      <span>Email: </span><br />
      <input type="email" placeholder='john@smith.com' /> <br />
      <span>Message: </span><br />
      <textarea rows="10"></textarea>
    <div><button>Submit</button></div>
    </form>

  </div>;
}

export default Contact;

