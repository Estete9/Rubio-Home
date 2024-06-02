import PropTypes from 'prop-types';
import chevronDown from '../assets/icons/chevron-down.svg';

const menuItems = ['servicios', 'nosotros', 'contacto'];

const MobileMenu = ({ isMobile, isOpen, closeMenu }) => {
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
      className={`menu fixed top-12 z-10 bg-secondary/95 min-w-[75%] h-screen right-[-75%] ${
        isOpen && 'open'
      }`}
    >
      <ul style={navStyles} className="navbar flex flex-col items-center gap-12 mt-36">
        {menuItems.map((item) => (
          <li key={item}>
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
              <p className="text-neutral font-helveticaNeue font-light text-2xl capitalize">
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
  isOpen: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
