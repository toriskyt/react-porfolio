import React from 'react';

function Contact() {
  return <div className="body"><h1>Contact</h1>
  <form>
    <span>Name: </span><br/>
    <input type="text" placeholder='John Smith'/> <br/>
    <span>Email: </span><br/>
    <input type="email" placeholder='john@smith.com'/> <br/>
    <span>Message: </span><br/>
    <textarea rows="10"></textarea>
  </form>
  <button>Submit</button>

  </div>;
}

export default Contact;

