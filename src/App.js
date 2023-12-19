import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
// import Auth from "./components/Layout/Auth";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/auth" element={<Auth />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
