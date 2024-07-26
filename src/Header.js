import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="social-icons">
          <a href="https://www.facebook.com/slipknot" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/slipknot" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/slipknot/" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/slipknot" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://open.spotify.com/artist/05fG473iIaoy82BF1aGhL8" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-spotify"></i>
          </a>
          <a href="https://music.apple.com/us/artist/slipknot/1094201" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-apple"></i>
          </a>
          <a href="https://www.tiktok.com/@slipknot" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://slipknotmerch.com/" target="_blank" rel="noreferrer noopener">
            <img src="/img/carrinho-de-compras.png" alt="Loja Slipknot" className="store-icon" />
          </a>
        </div>
        <img src="/img/logo.jpg" alt="Slipknot Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
