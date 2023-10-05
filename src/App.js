import logo from './logo.svg';
import './App.css';
import MainPanel from './MainPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        
          <MainPanel/>
          
  
      </header>
    </div>
  );
}

export default App;
