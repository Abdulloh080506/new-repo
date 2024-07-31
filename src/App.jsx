import Home from "./pages/home/home";
import About from "./pages/about_us";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Plan from "./pages/plan";
import "../src/App.css";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/plan" element={<Plan/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
