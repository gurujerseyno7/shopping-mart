import "./App.css";
import LandingPage from "./app/pages/landing/LandingPage";
import ProductCard from "./components/productcard/ProductCard";
import NavBar from "./layouts/navbar/Navbar";
import ProductCarousel from "./layouts/product-carousel/ProductCarousel";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      {/* <CustomCarousel /> */}

      <div className="flex-1 overflow-auto">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
