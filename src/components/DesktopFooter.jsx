import iso from '../assets/logos/iso-logo.svg';
import computer from '../assets/icons/computer.svg';
import pin from '../assets/icons/pin.svg';
import email from '../assets/icons/email.svg';
import phone from '../assets/icons/phone.svg';
import copyright from '../assets/icons/copyright.svg';

const DesktopFooter = () => (
  <>
    <div className="footer-content flex items-center">
      <img className="header-iso ml-2 max-h-8" src={iso} alt="logo iso" />
      <ul className="footer-content-list mt-4">
        <div className="flex justify-center gap-12">
          <li>
            <img src={pin} alt="location icon" className="footer-icon" />
            <p className="font-helveticaNeue font-light">
              Av. Galo Plaza Lasso N53 208 y Los Pinos
            </p>
          </li>
          <li>
            <img src={phone} alt="telephone icon" className="footer-icon" />
            <p className="font-helveticaNeue font-light">0999441305 - 0985722115 - 02240047</p>
          </li>
          <li>
            <img src={email} alt="email icon" className="footer-icon" />
            <div className="flex flex-col">
              <p className="font-helveticaNeue font-light">
                ventas@rubiopublicidad.com.ec - rubioarte@rubiopublicidad.com.ec
              </p>
            </div>
          </li>
        </div>
        <div className="flex justify-center gap-12">
          <li>
            <img src={copyright} alt="copyright icon" className="footer-icon" />
            <p className="font-helveticaNeue font-light">2024 Rubio & Asociados Cia. Ltda.</p>
          </li>
          <li>
            <img src={computer} alt="computer icon" className="footer-icon" />
            <p className="font-helveticaNeue font-light">Developed by Notylines</p>
          </li>
        </div>
      </ul>
    </div>
  </>
);

export default DesktopFooter;
