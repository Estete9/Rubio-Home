import PropTypes from 'prop-types';
import chevronDown from '../assets/icons/chevron-down.svg';

const menuItems = ['servicios', 'nosotros', 'contacto'];

const MobileMenu = ({ isMobile, isMenuOpen, closeMenu }) => {
  const menuStyles = {
    right: isMenuOpen && isMobile ? '0' : '-100%',
    transition: 'right 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0)',
  };

  return (
    <nav
      style={menuStyles}
      className="nav-menu flex flex-col items-center justify-center fixed z-10 bg-neutral/95 backdrop-blur-sm min-w-full h-screen"
    >
      <ul className="nav-list flex flex-col items-center">
        {menuItems.map((item) => (
          <li key={item} className="nav-item">
            <a
              href={`#${item}`}
              className="flex items-center gap-1"
              onClick={(event) => {
                event.preventDefault();
                const targetSection = document.getElementById(item);
                if (targetSection) {
                  targetSection.scrollIntoView({ behavior: 'smooth' });
                }
                closeMenu();
              }}
            >
              <p className="text-secondary font-helveticaNeue font-light text-2xl capitalize">
                {item}
              </p>
              {item === 'contacto' && <img src={chevronDown} alt="test" className="max-h-4" />}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

MobileMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
