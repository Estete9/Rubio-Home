import iso from '../assets/logos/iso-logo.svg';
import chevronUp from '../assets/icons/chevron-up.svg';

const Footer = () => (
  <>
    <div className="footer-top h-12 flex justify-between">
      <img className="header-iso my-3 ml-2" src={iso} alt="logo iso" />
      <div className="footer-actions flex h-full items-center gap-1 mr-2">
        <p className="footer-actions-word text-xs font-helveticaNeue font-light text-secondary">
          Inicio
        </p>
        <img className="footer-actions-chevron h-3" src={chevronUp} alt="scroll to top" />
      </div>
    </div>
  </>
);

export default Footer;
