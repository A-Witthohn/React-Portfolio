import React from 'react';
import Navbar from './navbar';

function Header() {
  return (
    <header id='header'>
      <div className='d-flex flex-column'>
        <div className='profile'>
          <img src='' alt='profile headshot' className='img-fluid rounded-circle' />
          <h1 className='text-light'>
            <a href='index.html'>Aaron Witthohn</a>
          </h1>
          <div className='social-links mt-3 text-center'>
            <a href='http://Github.com' className='github'>
              <i className='bx bxl-github'>G</i>
            </a>            <a href='http://Twitter.com' className='twitter'>
              <i className='bx bxl-twitter'>T</i>
            </a>            <a href='http://Linkedin.com' className='linkedin'>
              <i className='bx bxl-linkedin'>L</i>
            </a>
          </div>
          <Navbar/>
        </div>
      </div>
    </header>
  );
}

export default Header;