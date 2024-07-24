import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Stay tune and get the latest update</h1>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>VIDYARTHI TECH</h1>
            <span>Online e-Learning Platform</span>
            <p></p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Bolg</li>
              <li>Feedbacks</li>
              <li>Contact Us</li>
              <li>Help & Support</li>
              
            </ul>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>City: Hyderabad</li>
              <li>
                <i className='fa fa-phone-alt'></i>Mobi: +919876543XXX</li>
              <li>
                <i className='fa fa-paper-plane'></i>Mail: info@vidyarthitech.com</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
      Copyright ©2024 All rights reserved | This template is made <i className='fa fa-heart'></i> by 𝗥𝗮𝘃𝗶𝗞𝘂𝗺𝗮𝗿 𝗦
        </p>
      </div>
    </>
  )
}

export default Footer
