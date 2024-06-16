import React, { useEffect } from 'react';
import primaxLogo from '../assets/logos/primax-logo.svg';
import shellLogo from '../assets/logos/shell-logo.svg';
import supermaxiLogo from '../assets/logos/supermaxi-logo.svg';
import kiaLogo from '../assets/logos/kia-logo.svg';

const Agradecimientos = () => {
  useEffect(() => {
    const logosContainer = document.body.querySelector('.agradecimientos-logos');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (logosContainer) {
            logosContainer.classList.add('start');
          }
          observer.unobserve(logosContainer);
        }
      });
    });
    observer.observe(logosContainer);

    const logos = Array.from(logosContainer.children);

    logos.forEach((logo) => {
      const duplicatedLogo = logo.cloneNode(true);
      duplicatedLogo.setAttribute('aria-hidden', true);
      logosContainer.appendChild(duplicatedLogo);
    });
  }, []);

  return (
    <section className="agradecimientos-section bg-neutral/95 flex basis-full flex-wrap justify-center px-3 py-[8%] gap-8">
      <article className="agradecimientos-content gap-6 flex flex-wrap justify-center">
        <h1 className="agradecimientos-headline headline text-secondary text-3xl font-helveticaNeue font-light">
          AGRADECIMIENTOS
        </h1>
        <p className="agradecimientos-text text-secondary text-sm font-helveticaNeue font-light">
          Agradecemos a nuestros clientes su confianza y fidelidad, a las firmas que en algún
          momento tuvimos la satisfacción de servirles.
          <br />
          <br />
          También nuestro reconocimiento a colaboradores, familia, proveedores y al grupo humano que
          nos han acompañado en este camino, desde 1961.
        </p>
      </article>
      <div className="agradecimientos-wrapper w-full">
        <section className="agradecimientos-logos flex justify-start h-fit w-full">
          <img src={primaxLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={shellLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={supermaxiLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={kiaLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={primaxLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={shellLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={supermaxiLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={kiaLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={primaxLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={shellLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={supermaxiLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={kiaLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={primaxLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={shellLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={supermaxiLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={kiaLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={primaxLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={shellLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={supermaxiLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={kiaLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={primaxLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={shellLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={supermaxiLogo} alt="primax logo" className="agradecimientos-logo" />
          <img src={kiaLogo} alt="primax logo" className="agradecimientos-logo" />
        </section>
      </div>
    </section>
  );
};

export default Agradecimientos;
