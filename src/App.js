import logo from './logo.svg';
import './App.css';
import { Logo } from './components/Logo';
import { Link } from './components/Links';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div>
          <Logo/>
        </div>
        <div className="middle">
            <Link/>
        </div>
        <div>
            <Button/>
        </div>
      </div>
    </div>
  );
}

export default App;
