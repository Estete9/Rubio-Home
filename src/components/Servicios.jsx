import bgServicios from '../assets/mobile/servicios-img-mobile.png';
import bullet from '../assets/icons/bullet.svg';

const services = [
  'Instalación de ACM',
  'Rótulos iluminados a base de Leds',
  'Fotomurales',
  'Estructuras',
  'Vallas Publicitarias',
  'Totems / Monolitos',
  'Directorios',
  'Señalética industrial y vial',
  'Banderolas',
  'Diseño y asesoramiento',
];

const Servicios = () => (
  <section id="servicios" className="services-section relative">
    <img src={bgServicios} alt="Estación Primax" className="servicios-bg section-bg" />
    <div className="services-content w-full flex flex-col items-center absolute top-[8%] left-0 gap-6 h-[45%]">
      <h1 className="services-headline text-secondary font-helveticaNeue font-light text-3xl mx-auto">
        SERVICIOS
      </h1>
      <section className="services-list flex w-full px-3">
        <ul className="services-ul mt-5 flex flex-col gap-8 flex-1">
          {services.slice(0, Math.floor(services.length / 2)).map((service) => (
            <li key={service} className="service-item flex max-h-3 justify-end items-center gap-2">
              <p className="font-helveticaNeue font-light text-secondary text-xs text-end">{service}</p>
              <img src={bullet} alt="bullet icon" className="bullet-icon max-h-2" />
            </li>
          ))}
        </ul>
        <hr className="h-full border-primary border-x-[1px] mx-3" />
        <ul className="services-ul mt-10 mb-5 flex flex-col gap-8 flex-1">
          {services.slice(Math.floor(services.length / 2)).map((service) => (
            <li key={service} className="service-item flex max-h-3 items-center gap-2">
              <img src={bullet} alt="bullet icon" className="bullet-icon max-h-2" />
              <p className="font-helveticaNeue font-light text-secondary text-xs">{service}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </section>
);

export default Servicios;
