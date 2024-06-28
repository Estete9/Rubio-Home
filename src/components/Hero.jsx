import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import bgHeroMobile from '../assets/mobile/hero-img-mobile.png';
import bgHeroDesktop from '../assets/desktop/hero-img-1920.png';
import heroLogo from '../assets/logos/Jorge Rubio Logo final-white.svg';

const Hero = ({ isMobile }) => (
  <>
    <Helmet>
      <link
        rel="preload"
        as="image"
        href={isMobile ? bgHeroMobile : bgHeroDesktop}
        fetchPriority="high"
      />
    </Helmet>

    <section className="hero-section relative mt-12">
      <img
        src={isMobile ? bgHeroMobile : bgHeroDesktop}
        alt="Kia Matriz"
        className="hero-bg section-bg"
        loading="eager"
        importance="high"
      />
      <div className="hero-content flex flex-col justify-center items-center gap-12 top-[15%] w-full absolute">
        <h1 className="hero-headline text-secondary font-helveticaNeue font-light text-3xl mx-auto">
          ...PIONEROS EN EL
          <br />
          ARTE DE ROTULACIÓN
        </h1>
        <img src={heroLogo} alt="Rubio Publicidad Logo" className="hero-logo max-w-[45%]" />
      </div>
    </section>
  </>
);

Hero.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Hero;
