import bgHero from '../assets/mobile/hero-img-mobile.png';
import heroLogo from '../assets/logos/Jorge Rubio Logo final-white.svg';

const Hero = () => (
  <section className="hero-section w-screen relative h-[80vh]">
    <img src={bgHero} alt="Kia Matriz" className="w-screen z-0 absolute" />
    <div className="hero-content absolute z-10 flex flex-col justify-center items-center w-full mt-28 gap-12">
      <h1 className="text-secondary font-helveticaNeue font-light text-3xl mx-auto">
        ...PIONEROS EN EL
        <br />
        ARTE DE ROTULACIÓN
      </h1>
      <img src={heroLogo} alt="Rubio Publicidad Logo" className="max-w-[45%]" />
    </div>
  </section>
);

export default Hero;
