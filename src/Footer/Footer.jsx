import React from 'react';
import ReactDom from 'react-dom';

const Footer = () => {
  return (
    <footer style={{backgroundColor: 'black', padding: '1rem', textAlign: 'center', color: 'white'}} className='footer'>
      <div className='footer__in'>
        <h6>Developed by Rohit Mondal</h6>
        <h5 style={{textDecoration: 'underline'}}>@GymLyf</h5>
        <h6>13th of Jan, 2023</h6>
        <h6>Contact: +91-9630xxxxxx</h6>
        <h6>E-mail: rohitmondall8000@gmail.com</h6>
      </div>
    </footer>
  )
}

export default Footer
