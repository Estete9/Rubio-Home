import iso from '../assets/logos/iso-logo.svg';
import logoText from '../assets/logos/text-logo.svg';
import menu from '../assets/icons/menu.svg';

const Header = () => (
  <>
    <img className="header-iso my-3 ml-2" src={iso} alt="logo iso" />
    <img className="header-text my-2" src={logoText} alt="logo text" />
    <img className="menu-btn my-3 mr-2" src={menu} alt="menu button" />
  </>
);

export default Header;
