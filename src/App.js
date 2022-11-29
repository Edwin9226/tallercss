
import './App.css';
import HomePages from './pages/HomePages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import Profile from './pages/Profile';
import ClockPage from './pages/ClockPage';
import Calculadora from './pages/Calculadora';
import ImcCalculadora from './pages/ImcCalculadora'; 
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  return (
    <div className="App">
      <Router>
                <Routes>
                    <Route exact path="/" element={<HomePages />} />
                    <Route exact path="/imc" element={<ImcCalculadora />} />
                    <Route exact path="/age" element={<Calculadora />} />
                    <Route exact path="/clock" element={<ClockPage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/contact" element={<Profile />} />
                </Routes>
            </Router>
  
    </div>
  );
}

export default App;
