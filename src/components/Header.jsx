import PropTypes from 'prop-types';
import { useState } from 'react';
import iso from '../assets/logos/iso-logo.svg';
import logoText from '../assets/logos/text-logo.svg';
import menu from '../assets/icons/menu.svg';
import close from '../assets/icons/close.svg';
import MobileMenu from './MobileMenu';
import jorgeRubioLogo from '../assets/logos/Jorge Rubio Logo horizontal.svg';
import rubioAsociadosLogo from '../assets/logos/Rubio & Asociados Logo final-black.svg';
import chevronDown from '../assets/icons/chevron-down.svg';
import chevronUp from '../assets/icons/chevron-up.svg';
import ContactosDropdown from './ContactosDropdown';

const Header = ({ scrollTop, isMobile }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isContactosOpen, setContactosOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleContactosDropdown = () => setContactosOpen(!isContactosOpen);

  const menuItems = ['servicios', 'nosotros', 'contacto'];

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
            <img src={isMenuOpen ? close : menu} alt="menu button" />
          </button>
        </>
      )}
      {!isMobile && (
        <>
          <ul className="desktop-nav-menu flex justify-evenly gap-8">
            {menuItems.map((item) => (
              <li key={item} className="nav-item flex">
                <a
                  href={`#${item}`}
                  className="flex items-center gap-1"
                  onClick={(event) => {
                    event.preventDefault();
                    if (item === 'contacto') {
                      toggleContactosDropdown();
                    } else {
                      const targetSection = document.getElementById(item);
                      if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                      }
                      closeMenu();
                    }
                  }}
                >
                  <p className="font-helveticaNeue font-light text-sm capitalize">{item}</p>
                  {item === 'contacto' && (
                    <button type="button" onClick={toggleContactosDropdown} className="relative">
                      <img src={isContactosOpen ? chevronUp : chevronDown} alt="test" className="min-h-4" />
                      <ContactosDropdown isMobile={isMobile} isContactosOpen={isContactosOpen} />
                    </button>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="home-text-btn h-full max-h-8 my-auto"
            src={logoText}
            alt="home button"
            onClick={scrollTop}
          >
            <img className="home-btn h-full" src={rubioAsociadosLogo} alt="logo text" />
          </button>
        </>
      )}
      {isMobile && <MobileMenu isMobile={isMobile} isMenuOpen={isMenuOpen} closeMenu={closeMenu} />}
    </>
  );
};

Header.propTypes = {
  scrollTop: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Header;
