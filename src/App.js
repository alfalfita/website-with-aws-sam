import logo from './chikorita.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Te amo chami!
        </p>
        <a
          className="App-link"
          href="https://alfalfita.cloud/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Despliegue con AWS SAM
        </a>
      </header>
    </div>
  );
}

export default App;
