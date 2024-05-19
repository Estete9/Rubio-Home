import './App.css';
import Navbar from './components/Navbar';

function App() {
  document.body.classList.add('debug-screens');

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
