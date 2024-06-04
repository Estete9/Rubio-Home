import bgNosotros from '../assets/mobile/nosotros-img-mobile.png';
import download from '../assets/icons/file-arrow-down-solid.svg';
import cv from '../assets/mobile/cv.pdf';

const Nosotros = () => (
  <section id="nosotros" className="nosotros-section relative">
    <img src={bgNosotros} alt="Founder Jorge Rubio" className="nosotros-bg section-bg" />
    <article className="nosotros-content absolute flex flex-col gap-6 top-[8%] w-full justify-center px-3">
      <h1 className="nosotros-headline text-secondary font-helveticaNeue font-light text-3xl mx-auto">
        NOSOTROS
      </h1>
      <p className="nosotros-text text-secondary font-helveticaNeue font-light text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <section className="nosotros-buttons flex gap-3 justify-center">
        <a
          className="bg-primary text-neutral font-helveticaNeue text-xs min-w-28 h-8 rounded-md flex items-center justify-center gap-1"
          href={cv}
          target="_blank"
          rel="noreferrer"
        >
          <img src={download} alt="download icon" className=" h-5" />
          <p className="nosotros-btn-text font-semibold">Biografía</p>
        </a>
        <a
          className="bg-primary text-neutral font-helveticaNeue text-xs min-w-28 h-8 rounded-md flex items-center justify-center gap-1"
          href={cv}
          target="_blank"
          rel="noreferrer"
        >
          <img src={download} alt="download icon" className="h-5" />
          <p className="presentacion-btn-text font-semibold">Presentación</p>
        </a>
      </section>
    </article>
  </section>
);

export default Nosotros;
