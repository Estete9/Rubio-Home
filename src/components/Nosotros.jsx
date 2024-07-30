import PropTypes from 'prop-types';
import bgNosotrosMobile from '../assets/mobile/nosotros-img-mobile.png';
import bgNosotrosDesktop from '../assets/desktop/nosotros-img-1920.png';
import download from '../assets/icons/file-arrow-down-solid.svg';
import presentacion from '../assets/presentacion.pdf';

const Nosotros = ({ isMobile }) => (
  <section
    id="nosotros"
    className="nosotros-section relative flex items-center bg-neutral h-[800px]"
  >
    <img
      src={isMobile ? bgNosotrosMobile : bgNosotrosDesktop}
      alt="Founder Jorge Rubio"
      className="nosotros-bg section-bg"
    />
    <article className="nosotros-content absolute flex flex-col gap-6 top-[8%] w-full justify-center px-3">
      <h1 className="nosotros-headline headline text-secondary font-helveticaNeue font-light text-3xl mx-auto">
        NOSOTROS
      </h1>
      <p className="nosotros-text text-secondary font-helveticaNeue font-light text-sm">
        Jorge Isaac Rubio Apraez, nació en 1937. Fue el primer hijo del reconocido poeta Nicolás
        Rubio Vásquez y Ana Apráez Ordeñana. Realizó sus estudios en la Escuela de Bellas Artes.
        <br />
        <br />
        Los años de experiencia desde la fundación de la Empresa (1961), los lineamientos, años de
        continuo y arduo trabajo como diseñador, artista y publicista de Jorge Rubio Apráez se
        cristalizaron en un emprendimiento estructurado y en la creación de una organización “Rubio
        y Asociados Cia. Ltda”. En sus inicios “Jorge Rubio Taller de Publicidad”, creó formas, uso
        de materiales nuevos, diseños tanto en rotulación comercial como en la parte artística.
        <br />
        <br />
        La experiencia del señor Jorge Rubio Apráez como artista, diseñador y publicista galardonado
        con premios nacionales e internacionales es la base monolítica de RUBIO Y ASOCIADOS.
        <br />
        <br />
        Jorge Rubio A. destacado deportista, ha sido galardonado por sus logros en el deporte del
        billar, llegando a ser campeón a nivel nacional e internacional (campeón del Circuito
        Mundial de Billar, Club Delicias-Méjico, entre otros). Campeón en el ámbito del futbol
        también. Entre sus vocaciones está la entrega por la defensa de la vida, tanto humana como
        animal (1er puesto al Afiche por el Día Mundial del Agua - Unesco-Fao)
      </p>
      <section className="nosotros-btns flex gap-3 justify-center">
        <a
          className="nosotros-btn bg-primary text-neutral font-helveticaNeue text-xs min-w-28 h-8 max-w-44 rounded-md flex items-center justify-center gap-1"
          href={presentacion}
          target="_blank"
          rel="noreferrer"
        >
          <img src={download} alt="download icon" className=" h-5" />
          <p className="nosotros-btn-text font-light">Biografía</p>
        </a>
        <a
          className="nosotros-btn bg-primary text-neutral font-helveticaNeue text-xs min-w-28 max-w-44 h-8 rounded-md flex items-center justify-center gap-1"
          href={presentacion}
          target="_blank"
          rel="noreferrer"
        >
          <img src={download} alt="download icon" className="h-5" />
          <p className="nosotros-btn-text font-light">Presentación</p>
        </a>
      </section>
    </article>
  </section>
);

Nosotros.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Nosotros;
