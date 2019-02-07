const React = require('react');

module.exports = function Contact() {
  return (
    <div>
      <h3>Contact Us</h3>
      <input type="text" placeholder="your email" className="form-control"/>
      <textarea placeholder="your message" className="form-control"/>
      <button className="btn btn-primary">send</button>
    </div>
  )
};