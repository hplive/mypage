import React from "react";
import "./style.css";
import Icon from '@mdi/react'
import { mdiPhone, mdiEmail, mdiGoogleMaps  } from '@mdi/js'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <p><Icon path={mdiPhone}  size={2}  horizontal  vertical  rotate={180} color="white" /> +351 91 823 11 94</p>
      <p><Icon path={mdiEmail}  size={2}  horizontal  vertical  rotate={180} color="white" />  hplive@hotmail.com</p>
      <p><Icon path={mdiGoogleMaps }  size={2}  horizontal  vertical  rotate={180} color="white" />  Portugal, Porto</p>
    </div>
  );
};

export default Contact;