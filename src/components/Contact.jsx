import React, { useEffect } from 'react'
import { Link } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  useEffect(() => {
    const clicking = () => {

    }
  window.addEventListener("click",clicking )

return () => {
  window.removeEventListener("click", clicking)

} }, [])

  return (

    <div class="store-info">
        <h4 className="store-name">Fake Music Store</h4>
        <h4 className="store-address">123 Harmony Street Musicville, MV12345</h4>
        <h4 className="store-phone">Phone: (555) 555-5555</h4>
        <h4 className="store-email">Email: info@Fake-musicstore.com</h4>
        <h4 className='store-legend'>Feel free to reach out to us, and we'll be delighted to assist you in your musical journey.</h4>

        <div>
              <ul className="contact-icons-list">
                <li className="contact-icon-item">
                  <Link href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebook} className="icon-facebook" />
                  </Link>
                </li>
                <li className="contact-icon-item">
                  <Link href="https://www.linkedin.com">
                    <FontAwesomeIcon icon={faLinkedin} className="icon-linkedin" />
                  </Link>
                </li>
                <li className="contact-icon-item">
                  <Link href="https://github.com/">
                    <FontAwesomeIcon icon={faGithub} className="icon-github" />
                  </Link>
                </li>
              </ul>
          </div>
          
    </div>

    

  )
}

export default Contact