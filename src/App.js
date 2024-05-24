import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Divider from './components/Divider';

function App() {
  document.body.classList.add(
    'debug-screens',
    'bg-[url(./assets/mobile/bg-img-mobile.png)]',
    'bg-cover',
    'bg-fixed',
  );

  return (
    <>
      <header className="h-12 bg-secondary flex justify-between px-3">
        <Header />
      </header>
      <main className="">
        <Hero />
        <Divider quote="Decididos al trabajo con excelencia" />
        <Servicios />
      </main>
      <footer className="px-3 pb-3 bg-neutral">
        <Footer />
      </footer>
    </>
  );
}

export default App;
