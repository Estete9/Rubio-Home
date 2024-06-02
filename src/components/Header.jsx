import { useState } from 'react';
import iso from '../assets/logos/iso-logo.svg';
import logoText from '../assets/logos/text-logo.svg';
// import menu from '../assets/icons/menu.svg';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobile] = useState(window.innerWidth < 400);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <img className="header-iso ml-2 max-h-5 my-auto" src={iso} alt="logo iso" />
      <img className="header-text my-2" src={logoText} alt="logo text" />
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      {isMobile && <button type="button" className="menu-btn my-3 mr-2 w-6" onClick={toggleMenu} />}
      {isMobile && <MobileMenu isMobile={isMobile} isOpen={isOpen} />}
    </>
  );
};

export default Header;
