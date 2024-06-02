import './App.css';
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

  return (
    <>
      <header className="h-12 bg-secondary flex justify-between px-3 overflow-hidden">
        <Header />
      </header>
      <main className="">
        <Hero />
        <Divider quote='"Decididos al trabajo con excelencia con eficacia y amor"' />
        <Servicios />
        <Divider quote="'Decididos al trabajo con excelencia'" />
        <Nosotros />
        <Agradecimientos />
      </main>
      <footer className="px-3 pb-3 bg-neutral">
        <Footer />
      </footer>
    </>
  );
}

export default App;
