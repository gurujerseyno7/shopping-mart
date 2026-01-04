import "./App.css";
import LandingPage from "./app/pages/landing/LandingPage";
import NavBar from "./layouts/navbar/Navbar";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-1 overflow-auto">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
