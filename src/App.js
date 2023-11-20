import logo from './logo.svg';
import './App.css';

function App() {
  const hash = window.location.hash.slice(1);
  const params = new URLSearchParams(hash);
  const initData = new URLSearchParams(params.get('tgWebAppData'));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {initData}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
