import PropTypes from 'prop-types';
import iso from '../assets/logos/iso-logo.svg';
import computer from '../assets/icons/computer.svg';
import pin from '../assets/icons/pin.svg';
import email from '../assets/icons/email.svg';
import phone from '../assets/icons/phone.svg';
import copyright from '../assets/icons/copyright.svg';

const DesktopFooter = ({ scrollTop }) => (
  <>
    <article className="footer-content flex items-center">
      <button
        type="button"
        className="iso-home-btn my-auto h-full"
        alt="jorge Rubio Logo home button"
        onClick={scrollTop}
      >
        <img className="header-iso ml-2 h-8" src={iso} alt="logo iso" />
      </button>
      <section className="footer-content-list">
        <div className="flex justify-center gap-12">
          <div className="footer-contact-info">
            <img src={pin} alt="location icon" className="footer-icon" />
            <p className="font-helveticaNeue font-light">
              Av. Galo Plaza Lasso N53 208 y Los Pinos
            </p>
          </div>
          <div className="footer-contact-info">
            <img src={phone} alt="telephone icon" className="footer-icon" />
            <p className="font-helveticaNeue font-light">0999441305 - 0985722115 - 02240047</p>
          </div>
          <div className="footer-contact-info">
            <img src={email} alt="email icon" className="footer-icon" />
            <div className="flex flex-col">
              <p className="font-helveticaNeue font-light">
                ventas@rubiopublicidad.com.ec - rubioarte@rubiopublicidad.com.ec
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-12">
          <div className="footer-legal-info">
            <img src={copyright} alt="copyright icon" className="footer-icon" />
            <p className="font-helveticaNeue font-light">2024 Rubio & Asociados Cia. Ltda.</p>
          </div>
          <div className="footer-legal-info">
            <img src={computer} alt="computer icon" className="footer-icon" />
            <p className="font-helveticaNeue font-light">Developed by Notylines</p>
          </div>
        </div>
      </section>
    </article>
  </>
);

DesktopFooter.propTypes = {
  scrollTop: PropTypes.func.isRequired,
};

export default DesktopFooter;
