import PropTypes from 'prop-types';
import { useState } from 'react';
import iso from '../assets/logos/iso-logo.svg';
import logoText from '../assets/logos/text-logo.svg';
// import menu from '../assets/icons/menu.svg';
import MobileMenu from './MobileMenu';

const Header = ({ scrollTop }) => {
  const [isMobile] = useState(window.innerWidth < 400);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        type="button"
        className="iso-home-btn max-h-5 my-auto h-full"
        alt="logo home button"
        onClick={scrollTop}
      >
        <img className="iso-home-btn h-full" src={iso} alt="logo iso" />
      </button>
      <button
        type="button"
        className="home-btn h-full max-h-8 my-auto"
        src={logoText}
        alt="home button"
        onClick={scrollTop}
      >
        <img className="home-btn h-full mt-1" src={logoText} alt="logo text" />
      </button>
      {isMobile && (
        <button
          type="button"
          className="menu-btn my-3 mr-2 w-6"
          alt="menu button"
          onClick={toggleMenu}
        />
      )}
      {isMobile && <MobileMenu isMobile={isMobile} isOpen={isOpen} />}
    </>
  );
};

Header.propTypes = {
  scrollTop: PropTypes.func.isRequired,
};

export default Header;
