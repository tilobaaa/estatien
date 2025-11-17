
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {


  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs/>}/> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
