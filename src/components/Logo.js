import React from 'react';
import logohead from '../assets/new.png';

const Logo = ({ w, h }) => {
  return (
    <div>
      <img src={logohead} alt="logo" width={w} />
    </div>
  );
}

export default Logo;
