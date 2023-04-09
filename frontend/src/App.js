import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Investigation from './pages/investigation/Investigation';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/investigation" element={<Investigation />} />
      </Routes>
    </div>
  );
}

export default App;
