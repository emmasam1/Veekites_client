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
// import DetailsPage from "./pages/services/DetailsPage";
// import Blog from "./pages/blog/Blog";
// import Blogs from "./components/blog/Blogs";
import ProjDetails from "./pages/project/ProjDetails";
import TermsPage from "./pages/terms/TermsPage";
import Privacy from "./pages/privacy/Privacy";
// import BlogDetails from "./components/blog/BlogDetails";

//fetch(`${process.env.REACT_APP_API_URL}/api/blogs`)

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
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/project/:name/:id" element={<ProjDetails />} />
        {/* <Route path="/services/:name/:id" element={<DetailsPage />} /> */}
        {/* <Route path="/blog" element={<Blog />}>
          <Route index element={<Blogs />} />
          <Route path="blog-details/:name/:id" element={<BlogDetails />} />
        </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
