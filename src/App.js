import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Servicios from './components/Servicios';

function App() {
  document.body.classList.add('debug-screens');
  document.body.classList.add('h-screen');

  return (
    <>
      <header className="h-12 bg-secondary flex justify-between px-3">
        <Header />
      </header>
      <main className="">
        <Hero />
        <Servicios />
      </main>
      <footer className="px-3 pb-3 bg-neutral">
        <Footer />
      </footer>
    </>
  );
}

export default App;
