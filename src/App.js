import camo from './camo.png'
import cv from './cv.pdf'
import './App.css';
import './button.css'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={camo} className="App-logo-dev" alt="logo" /> */}
        <img src={camo} className="App-logo" alt="logo" />
      </header>

      <div className='bodyContainer'>
        <p>
          Welcome to the Camo experience.
        </p>

        <p>
          {/* <a className="arc-dev" href={cv} download> */}
          <a className="arc" href={cv} download="cseguier_resume">
            Download my Resumey
          </a>
        </p>



        <div className='linksContainer'>

          <a className="App-link" href="https://github.com/cseguier">
            Github Pro
          </a>

          <br />

          <a className="App-link" href=" https://github.com/mushve">
            Github Study
          </a>

          <br />

          <a className="App-link" href="https://cseguier-connect4.netlify.app/">
            Connect4
          </a>

          <br />

          <a className="App-link" href={camo}>
            CatCafé
          </a>

        </div>




      </div>
    </div>
  );
}

export default App;
