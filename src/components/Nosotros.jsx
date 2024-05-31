import bgNosotros from '../assets/mobile/nosotros-img-mobile.png';
import download from '../assets/icons/download.svg';

const Nosotros = () => (
  <section className="nosotros-section relative">
    <img src={bgNosotros} alt="Founder Jorge Rubio" />
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
        <button
          type="button"
          className="bg-primary text-neutral font-helveticaNeue text-xs min-w-28 h-8 rounded-md flex items-center gap-2"
        >
          <img src={download} alt="download icon" className=" h-5" />
          <p className="nosotros-btn-text mx-auto">Biografía</p>
        </button>
        <button
          type="button"
          className="bg-primary text-neutral font-helveticaNeue text-xs min-w-28 h-8 rounded-md"
        >
          Presentación
        </button>
      </section>
    </article>
  </section>
);

export default Nosotros;
