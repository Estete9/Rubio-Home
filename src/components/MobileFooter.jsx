import PropTypes from 'prop-types';
import iso from '../assets/logos/iso-logo.svg';
import chevronUp from '../assets/icons/chevron-up.svg';
import computer from '../assets/icons/computer.svg';
import pin from '../assets/icons/pin.svg';
import email from '../assets/icons/email.svg';
import phone from '../assets/icons/phone.svg';
import copyright from '../assets/icons/copyright.svg';

const MobileFooter = ({ scrollTop }) => (
  <>
    <div className="footer-top h-12 flex justify-between items-center">
      <img className="header-iso ml-2 max-h-5" src={iso} alt="logo iso" />
      <div className="footer-actions flex h-full items-center gap-1 mr-2">
        <button
          type="button"
          className="footer-actions-word text-xs font-helveticaNeue font-light text-secondary"
          onClick={scrollTop}
        >
          Inicio
        </button>
        <img className="footer-actions-chevron h-3" src={chevronUp} alt="scroll to top" />
      </div>
    </div>
    <hr className="w-full border-primary border-y-[1px]" />
    <div className="footer-content">
      <ul className="footer-content-list flex flex-col gap-3 mt-3">
        <li>
          <img src={copyright} alt="copyright icon" className="footer-icon" />
          <p className="font-helveticaNeue font-light">2024 Rubio & Asociados Cia. Ltda.</p>
        </li>
        <li>
          <img src={pin} alt="location icon" className="footer-icon" />
          <p className="font-helveticaNeue font-light">Av. Galo Plaza Lasso N53 208 y Los Pinos</p>
        </li>
        <li>
          <img src={phone} alt="telephone icon" className="footer-icon" />
          <p className="font-helveticaNeue font-light">0999441305 - 0985722115 - 02240047</p>
        </li>
        <li>
          <img src={email} alt="email icon" className="footer-icon" />
          <div className="flex flex-col">
            <p className="font-helveticaNeue font-light">ventas@rubiopublicidad.com.ec</p>
            <p className="font-helveticaNeue font-light">rubioarte@rubiopublicidad.com.ec</p>
          </div>
        </li>
        <li>
          <img src={computer} alt="computer icon" className="footer-icon" />
          <p className="font-helveticaNeue font-light">Developed by Notylines</p>
        </li>
      </ul>
    </div>
  </>
);

MobileFooter.propTypes = {
  scrollTop: PropTypes.func.isRequired,
};

export default MobileFooter;
