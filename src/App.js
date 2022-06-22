import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IspitiPrijava from './components/IspitiPrijava';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ispitiprijava" element={<IspitiPrijava />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
