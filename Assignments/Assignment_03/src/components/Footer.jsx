import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faGithub, faInstagram, faLinkedin, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer flex padding">
        <a href="https://www.facebook.com/m_ammad_hassan" target="_self"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://x.com/m_ammadhassan" target="_self"><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href="https://www.instagram.com/m_ammadhassan/" target="_self"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.linkedin.com/in/m-ammadhassan/" target="_self"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/m-ammadhassan" target="_self"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://ammad-hassan.web.app/" target="_self"><FontAwesomeIcon icon={faGlobe} /></a>
    </footer>
  )
}

export default Footer