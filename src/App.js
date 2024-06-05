import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Divider from './components/Divider';
import Nosotros from './components/Nosotros';
import Agradecimientos from './components/Agradecimientos';

function App() {
  document.body.classList.add(
    'debug-screens',
    'bg-[url(./assets/mobile/bg-img-mobile.png)]',
    'bg-no-repeat',
    'bg-cover',
    'bg-fixed',
  );

  const [isMobile] = useState(window.innerWidth < 400);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <header className="h-12 bg-secondary flex justify-between px-3 w-screen fixed z-10 top-0">
        <Header scrollTop={scrollTop} />
      </header>
      <main className="">
        <Hero isMobile={isMobile} />
        <Divider quote='"Decididos al trabajo con excelencia con eficacia y amor"' />
        <Servicios />
        <Divider quote="'Decididos al trabajo con excelencia'" />
        <Nosotros />
        <Agradecimientos />
      </main>
      <footer id="contacto" className="px-3 pb-3 bg-neutral">
        <Footer scrollTop={scrollTop} />
      </footer>
    </>
  );
}

export default App;
