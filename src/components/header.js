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
            <a href='Github.com' className='github'>
              <i className='bx bxl-github'>Git</i>
            </a>            <a href='Twitter.com' className='twitter'>
              <i className='bx bxl-twitter'>Tweet</i>
            </a>            <a href='Linkedin.com' className='linkedin'>
              <i className='bx bxl-linkedin'>Linked</i>
            </a>
          </div>
          <Navbar/>
        </div>
      </div>
    </header>
  );
}

export default Header;