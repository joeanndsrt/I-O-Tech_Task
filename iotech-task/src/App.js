import Navbar from './components/Navbar';
import SidebarMenu from './components/SidebarMenu';
import HomePage from './pages/HomePage'
import './App.css';

function App() {
  return (
    <div className="App" style={{ height: "100vh", display: "flex" }}>
      <div style={{ display: "flex", width: "100%", maxWidth: "100vw" }}>
        <SidebarMenu />
        <div style={{ flexGrow: 1 }}>
          <Navbar />
          <div style={{ padding: 20 }}>
            <HomePage/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
