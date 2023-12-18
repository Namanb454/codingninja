import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Auth from "./components/Layout/Auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
