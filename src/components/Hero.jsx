import bgHero from '../assets/mobile/hero-img-mobile.png';
import heroLogo from '../assets/logos/Jorge Rubio Logo final-white.svg';

const Hero = () => (
  <section className="hero-section relative mt-12">
    <img src={bgHero} alt="Kia Matriz" className="hero-bg section-bg" />
    <div className="hero-content flex flex-col justify-center items-center gap-12 top-[15%] w-screen absolute">
      <h1 className="hero-headline text-secondary font-helveticaNeue font-light text-3xl mx-auto">
        ...PIONEROS EN EL
        <br />
        ARTE DE ROTULACIÓN
      </h1>
      <img src={heroLogo} alt="Rubio Publicidad Logo" className="max-w-[45%]" />
    </div>
  </section>
);

export default Hero;
