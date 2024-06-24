import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <>
      <footer className="footer text-center text-lg-start bg-body-tertiary text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span style={{color:'#d9d0c2'}}>Get connected with us on social networks:</span>
            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} size='2x' color='#e0b354' className="ms-2" /></a>
            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} size='2x' color='#e0b354' className="ms-2" /></a>
            <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} size='2x' color='#e0b354' className="ms-2" /></a>
            <a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} size='2x' color='#e0b354' className="ms-2" /></a>
          </div>
          {/* Left */}

        </section>
        {/* Section: Social media */}

        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="footer-grid-column col-md-1 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Laravel</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="footer-grid-column col-md-1 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="footer-grid-column col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}

        {/* Copyright */}
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright:
        </div>
        {/* Copyright */}
      </footer>
    </>
  )
}

export default Footer;