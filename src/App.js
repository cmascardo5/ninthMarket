import logo from './nine.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Website in development; follow our Instagram at
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/ninthmarket/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.instagram.com/ninthmarket/
        </a>
      </header>
    </div>
  );
}

export default App;
