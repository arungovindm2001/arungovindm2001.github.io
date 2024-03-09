import './App.css';

import Navbar from './components/Navbar';
import Routes from './routes';

function App() {
  return (
    <div className="m-0 text-white select-none">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
