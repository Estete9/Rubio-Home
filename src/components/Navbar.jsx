import PropTypes from 'prop-types';
import { useState } from 'react';
import chevronDown from '../assets/icons/chevron-down.svg';
import chevronUp from '../assets/icons/chevron-up.svg';
import ContactosDropdown from './ContactosDropdown';

const Navbar = ({ isMobile }) => {
  const menuItems = ['servicios', 'nosotros', 'contacto'];
  const [isContactosOpen, setContactosOpen] = useState(false);
  const toggleContactosDropdown = () => setContactosOpen(!isContactosOpen);
  return (
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
              }
            }}
          >
            <p className="font-helveticaNeue font-light text-sm capitalize">{item}</p>
            {item === 'contacto' && (
              <button type="button" onClick={toggleContactosDropdown} className="relative">
                <img
                  src={isContactosOpen ? chevronUp : chevronDown}
                  alt="test"
                  className="min-h-4"
                />
                <ContactosDropdown isMobile={isMobile} isContactosOpen={isContactosOpen} />
              </button>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

Navbar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Navbar;
