import Login from './components/LoginModal';
import logo from './logo.svg';
import './App.css';
import "./styles.css";

function App() {
  let loggedIn = false;
  let login;
  if(!loggedIn) {
    login = <Login></Login>
  }
  return (
    <div className="App">
      <header className="App-header">
        {login}

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
