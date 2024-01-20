import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/Login";
import Profile from "./Components/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
