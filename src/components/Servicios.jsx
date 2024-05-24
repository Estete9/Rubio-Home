import bgServicios from '../assets/mobile/servicios-img-mobile.png';
import bullet from '../assets/icons/bullet.svg';

const services = [
  'Rotulación en Acrilico1',
  'Rotulación en Acrilico2',
  'Rotulación en Acrilico3',
  'Rotulación en Acrilico4',
  'Rotulación en Acrilico5',
  'Rotulación en Acrilico6',
  'Rotulación en Acrilico7',
  'Rotulación en Acrilico8',
  'Rotulación en Acrilico9',
  'Rotulación en Acrilico10',
];

const Servicios = () => (
  <section className="services-section relative">
    <img src={bgServicios} alt="Estación Primax" />
    <div className="services-content w-screen flex flex-col items-center absolute top-[8%] left-0 gap-8 h-[45%]">
      <h1 className="services-headline text-secondary font-helveticaNeue font-light text-3xl mx-auto">
        SERVICIOS
      </h1>
      <section className="services-list flex w-screen px-3">
        <ul className="services-ul mt-5 flex flex-col gap-8 flex-1">
          {services.slice(0, Math.floor(services.length / 2)).map((service) => (
            <li key={service} className="service-item flex max-h-3 justify-end items-center gap-2">
              <p className="font-helveticaNeue font-light text-secondary text-xs">{service}</p>
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
