import React from 'react';

function Footer() {
  return (
    <footer>
      <p>Connect 4 Game - Created by Fabian Sykes</p>
      <p>© {new Date().getFullYear} All rights reserved.</p>
    </footer>
  );
}

export default Footer;