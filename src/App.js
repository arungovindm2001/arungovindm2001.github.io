import './App.css';

import Navbar from './components/Navbar';
import Routes from './routes';

function App() {
  return (
    <div className="m-0 h-screen bg-primary text-white select-none">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
