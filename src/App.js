import './App.css';

function App() {
  document.body.classList.add('debug-screens');

  return (
    <div>
      <h1 className="font-helveticaNeue font-normal"> this text is regular</h1>
      <h1 className="font-helveticaNeue font-light"> this text is light</h1>
      <h1 className="font-helveticaNeue font-light italic"> this text is light italic</h1>
      <h3 className="font-helveticaNeue font-bold italic"> this text is bold italic</h3>
    </div>
  );
}

export default App;
