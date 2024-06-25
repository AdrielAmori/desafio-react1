import styles from './Footer.module.css'

import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer} id='contato'>
      <div>
        <a href='https://www.facebook.com/'><FaFacebookSquare size={30}/></a>
        <a href='https://www.instagram.com/'><FaInstagram size={30}/></a>
        <a href='https://x.com/'><FaTwitter size={30}/></a>
        <a href='https://www.linkedin.com/'><FaLinkedin size={30}/></a>
      </div>
      <p>Copyright ©2030 All rights reserved</p>
    </footer>
  );
}

export default Footer;
