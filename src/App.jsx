import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/our-projects" element={<Project />} />
          <Route path="/our-projects" element={<Project />} />
          <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
