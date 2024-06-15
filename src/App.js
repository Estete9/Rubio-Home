import './App.css';
import { useState } from 'react';
import MobileFooter from './components/MobileFooter';
import Header from './components/Header';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Divider from './components/Divider';
import Nosotros from './components/Nosotros';
import Agradecimientos from './components/Agradecimientos';
import DesktopFooter from './components/DesktopFooter';

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
      <header className=" header-container h-12 bg-secondary flex justify-between px-3 w-full fixed z-10 top-0 shadow-sm shadow-neutral/10">
        <Header scrollTop={scrollTop} isMobile={isMobile} />
      </header>
      <main className="">
        <Hero isMobile={isMobile} />
        <Divider quote='"Decididos al trabajo con excelencia con eficacia y amor"' />
        <Servicios isMobile={isMobile} />
        <Divider quote="'Decididos al trabajo con excelencia'" />
        <Nosotros isMobile={isMobile} />
        <Agradecimientos />
      </main>
      <footer id="contacto" className="px-3 pb-3 bg-neutral">
        {isMobile ? <MobileFooter scrollTop={scrollTop} /> : <DesktopFooter />}
      </footer>
    </>
  );
}

export default App;
