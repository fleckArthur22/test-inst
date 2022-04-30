import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Login Link={Link} />} />
        <Route path="/register" element={<Register Link={Link} />} />
        <Route path="/home" element={<Home Link={Link} />} />
      </Routes>
    </Router>
  );
}

export default App;
