import camo from './camo.png'
import cv from './cv.pdf'
import './App.css';
import './button.css'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={camo} className="App-logo" alt="logo" />
      </header>

      <div className='bodyContainer'>
        <p>
          Welcome to the Camo experience.
        </p>

        <a className="arc"
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          download>
          Download my Resumey
        </a>




        <div className='linksContainer'>

          <a className="App-link"
            href="https://github.com/cseguier"
            target="_blank"
            rel="noopener noreferrer" >
            Github Pro
          </a>

          <br />

          <a className="App-link"
            href=" https://github.com/mushve"
            target="_blank"
            rel="noopener noreferrer" >
            Github Study
          </a>

          <br />

          <a className="App-link"
            href="https://cseguier-connect4.netlify.app/"
            target="_blank"
            rel="noopener noreferrer" >
            Connect4
          </a>

          <br />

          <a className="App-link"
            href={camo}
            target="_blank"
            rel="noopener noreferrer" >
            CatCafé
          </a>

        </div>




      </div>
    </div>
  );
}

export default App;
