import camo from './camo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={camo} className="App-logo" alt="logo" />
      </header>

      <div className='text'>
        <p>
          Welcome to the Camo experience.
        </p>

        <p>
          <a className="App-link"
            href="https://github.com/cseguier"
            target="_blank"
            rel="noopener noreferrer" >
            Github Pro
          </a> ___ <a className="App-link"
            href=" https://github.com/mushve"
            target="_blank"
            rel="noopener noreferrer" >
            Github Study
          </a> ___ <a className="App-link"
            href="https://cseguier-connect4.netlify.app/"
            target="_blank"
            rel="noopener noreferrer" >
            Connect4
          </a> ___ <a className="App-link"
            href={camo}
            target="_blank"
            rel="noopener noreferrer" >
            CatCafé
          </a>
        </p>
      </div>

    </div>
  );
}

export default App;
