import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Investigation from './pages/investigation/Investigation';
import Footer from './components/Footer';
import FAQs from './components/Faqs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/investigation" element={<Investigation />} />
        <Route exact path="/FAQs" element={<FAQs />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
