import bgHero from '../assets/mobile/hero-img-mobile.png';
import heroLogo from '../assets/logos/Jorge Rubio Logo final-white.svg';

const Hero = () => (
  <section className="hero-section relative overflow-y-scroll h-screen w-screen">
    <img src={bgHero} alt="Kia Matriz" className="w-screen top-0 left-0 z-0" />
    <div className="hero-content absolute z-10 flex flex-col items-center w-full mt-28 gap-12">
      <h1 className="text-secondary font-helveticaNeue font-light text-4xl">
        ...PIONEROS EN EL
        <br />
        ARTE DE ROTULACIÓN
      </h1>
      <img src={heroLogo} alt="Rubio Publicidad Logo" className="max-w-[45%]" />
    </div>
  </section>
);

export default Hero;
