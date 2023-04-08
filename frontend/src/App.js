import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route ></Route> */}
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
