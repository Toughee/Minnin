import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Tab2 from "./components/Tab2";

import "./App.css";

function App() {
  return (
    <div>
      <header>
        <BrowserRouter>
          <ul>
            <li>Minnin</li>

            <Link to="/Dashboard">
              <li>Dashboard</li>
            </Link>

            <Link to="/Tab2">
              <li>Followers tab</li>
            </Link>
          </ul>

          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Tab2" element={<Tab2 />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
