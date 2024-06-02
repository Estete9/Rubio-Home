import PropTypes from 'prop-types';
import chevronDown from '../assets/icons/chevron-down.svg';

const menuItems = ['Servicios', 'Nosotros', 'Contacto'];

const MobileMenu = ({ isMobile, isOpen }) => {
  const navStyles = {
    display: isOpen && isMobile ? 'flex' : 'none',
  };

  const menuStyles = {
    right: isOpen && isMobile ? '0' : '-75%',
    transition: 'right 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0)',
  };

  return (
    <nav
      style={menuStyles}
      className={`menu fixed top-12 z-10 bg-secondary/95 min-w-[75%] h-screen right-[-75%] ${isOpen && 'open'}`}
    >
      <ul style={navStyles} className="navbar flex flex-col items-center gap-12 mt-36">
        {menuItems.map((item) => (
          <li key={item}>
            <a href="/" className="flex items-center gap-1">
              <p className="text-neutral font-helveticaNeue font-light text-2xl">{item}</p>
              {item === 'Contacto' && <img src={chevronDown} alt="test" className="max-h-4" />}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default MobileMenu;
