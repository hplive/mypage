import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96119.53720488789!2d-8.691994632113248!3d41.16212173646433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465abc4e153c1%3A0xa648d95640b114bc!2sPorto!5e0!3m2!1spt-PT!2spt!4v1633651081605!5m2!1spt-PT!2spt"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>+351 91 823 11 94</p>

      <h4>Email</h4>
      <p>hplive@hotmail.com</p>

      <h4>Address</h4>
      <p>Portugal, Porto</p>
    </div>
  );
};

export default Contact;