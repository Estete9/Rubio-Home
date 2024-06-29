import PropTypes from 'prop-types';
import pin from '../assets/icons/pin.svg';
import email from '../assets/icons/email.svg';
import phone from '../assets/icons/phone.svg';

const ContactosDropdown = ({ isMobile, isContactosOpen }) => {
  const contactosStyles = {
    visibility: isContactosOpen ? 'visible' : 'hidden',
    top: isContactosOpen ? `${isMobile ? '4rem' : '2rem'}` : '-226px',
    opacity: isContactosOpen ? '1' : '0',
    transition: 'top 0.5s ease-in-out, visibility 0.5s ease-in-out, opacity 0.5s ease-in-out',
  };
  return (
    <ul
      style={contactosStyles}
      className={`contactos-dropdown flex flex-col absolute ${
        isMobile ? 'left-[-56vw]' : 'left-[-6vw]'
      } bg-secondary/90 gap-2 -z-10`}
    >
      <li>
        <img src={pin} alt="location icon" className="contactos-icon" />
        <p className="contact-text font-helveticaNeue font-light">
          Av. Galo Plaza Lasso N53 208 y Los Pinos
        </p>
      </li>
      <li>
        <img src={phone} alt="telephone icon" className="contactos-icon" />
        <p className="contact-text font-helveticaNeue font-light">
          0999441305 - 0985722115 - 02240047
        </p>
      </li>
      <li>
        <img src={email} alt="email icon" className="contactos-icon" />
        <div className="flex flex-col">
          <p className="contact-text font-helveticaNeue font-light">
            ventas@rubiopublicidad.com.ec
            <br />
            rubioarte@rubiopublicidad.com.ec
          </p>
        </div>
      </li>
    </ul>
  );
};

ContactosDropdown.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isContactosOpen: PropTypes.bool.isRequired,
};

export default ContactosDropdown;
