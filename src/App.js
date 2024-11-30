import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Grid from './components/grid.js';
import HomePage from './components/home.js';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/grid" element={<Grid/>} />
          <Route path="/" element={<HomePage/>} />
        </Routes>        
      </BrowserRouter>
  );
}

export default App;
