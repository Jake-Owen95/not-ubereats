
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <div className="footer mt-4 mb-4">
    <div className="text-center">
      Site by 
      <FontAwesomeIcon color="red" icon={faHeart} />
      Website by{' '}
      <a href="https://www.linkedin.com/in/jake-owen-196960a8/" target="_blank" rel="noreferrer">
        Jake Owen {' '} 
      </a>
      <div>
        <div>
          Images are property of their respective owners.
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
