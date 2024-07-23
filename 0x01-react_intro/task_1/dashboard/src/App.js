import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className='App'>
      <div className="App-header">
        <img src={logo} alt='logo' className="App-logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
      Login to access the full dashboard
      </div>
      <div className="App-footer">
      <p>{`${getFooterCopy(true)} - ${getFullYear()}`}</p>
      </div>
    </div>
  );
}

export default App;
