import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/top/ScrollToTop";
import Scroll from "./components/top/Scroll";
import SocialMediaFloatingMenu from "./components/social-media/SocialMediaFloatingMenu";
import DetailsPage from "./pages/services/DetailsPage";
import Blog from "./pages/blog/Blog";
import News from "./pages/news/News";
import ProjDetails from "./pages/project/ProjDetails";

function App() {
  return (
    <>
    <SocialMediaFloatingMenu />
      <Navbar />
      <ScrollToTop />
      <Scroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/our-projects" element={<Project />} />
        <Route path="/contact-us" element={<Contact />} />
         <Route path="/project/:name/:id" element={<ProjDetails />} />
        <Route path="/services/:name/:id" element={<DetailsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
