import PropTypes from 'prop-types';
import { useState } from 'react';
import iso from '../assets/logos/iso-logo.svg';
import logoText from '../assets/logos/text-logo.svg';
import menu from '../assets/icons/menu.svg';
import close from '../assets/icons/close.svg';
import MobileMenu from './MobileMenu';
import jorgeRubioLogo from '../assets/logos/Jorge Rubio Logo horizontal.svg';
import rubioAsociadosLogo from '../assets/logos/Rubio & Asociados Logo final-black.svg';

const Header = ({ scrollTop, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        className="iso-home-btn max-h-5 my-auto h-full"
        alt="jorge Rubio Logo home button"
        onClick={scrollTop}
      >
        <img className="iso-home-img h-full" src={isMobile ? iso : jorgeRubioLogo} alt="logo iso" />
      </button>
      {isMobile && (
        <>
          <button
            type="button"
            className="home-text-btn h-full max-h-8 my-auto"
            src={logoText}
            alt="home button"
            onClick={scrollTop}
          >
            <img className="home-btn h-full mt-1" src={logoText} alt="logo text" />
          </button>
          <button
            type="button"
            className="menu-btn my-3 w-6 z-20"
            alt="menu button"
            onClick={toggleMenu}
          >
            <img src={isOpen ? close : menu} alt="menu button" />
          </button>
        </>
      )}
      {!isMobile && (
        <button
          type="button"
          className="home-text-btn h-full max-h-8 my-auto"
          src={logoText}
          alt="home button"
          onClick={scrollTop}
        >
          <img className="home-btn h-full" src={rubioAsociadosLogo} alt="logo text" />
        </button>
      )}
      {isMobile && (
        <MobileMenu
          isMobile={isMobile}
          isOpen={isOpen}
          closeMenu={closeMenu}
        />
      )}
    </>
  );
};

Header.propTypes = {
  scrollTop: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Header;
