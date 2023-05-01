import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import SidebarMenu from './components/SidebarMenu';

import Home from './pages/Home';
import Clients from './pages/Clients';
import Classes from "./pages/Classes";

function App() {
  return (
    <Router>
      <div className="App" style={{ height: "100vh", display: "flex" }}>
        <div style={{ display: "flex", width: "100%", maxWidth: "100vw" }}>
          <SidebarMenu />
          <div style={{ flexGrow: 1 }}>
            <Navbar />
            <div style={{ padding: 20 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/classes" element={<Classes />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}


export default App;
