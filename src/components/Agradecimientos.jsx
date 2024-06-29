import React, { useEffect } from 'react';
import images from '../utils/loadImages';
import splitImages from '../utils/splitImages';

const Agradecimientos = () => {
  const sections = splitImages(images);

  useEffect(() => {
    const logosContainers = document.body.querySelectorAll('.agradecimientos-logos');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('start');
          observer.unobserve(entry.target);
        }
      });
    });

    logosContainers.forEach((container) => observer.observe(container));

    return () => {
      logosContainers.forEach((container) => observer.unobserve(container));
    };
  }, []);

  return (
    <section className="agradecimientos-section bg-neutral/95 flex basis-full flex-wrap justify-center px-3 py-[16%] gap-8">
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
      <div className="agradecimientos-wrapper w-full bg-secondary/40">
        {sections.map((section) => (
          <section
            key={`section-${section[0]}`}
            className="agradecimientos-logos flex justify-start h-fit w-full ml-30"
          >
            {section.map((key) => (
              <img key={key} src={images[key]} alt={key} className="agradecimientos-logo mx-4" />
            ))}
          </section>
        ))}
      </div>
    </section>
  );
};

export default Agradecimientos;
