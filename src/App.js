import './App.css';
import Header from './components/Header';

function App() {
  document.body.classList.add('debug-screens');
  document.body.classList.add('h-screen');

  return (
    <>
      <header className="h-12 bg-secondary flex justify-between px-5">
        <Header />
      </header>
      <main>this is the main</main>
    </>
  );
}

export default App;
