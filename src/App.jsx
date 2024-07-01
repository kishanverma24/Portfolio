import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import "./App.css";
import Academics from "./pages/academics/Academics";
import Contact from "./pages/contact/Contact";
import Project from "./pages/project/Project";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:projectid" element={<Project />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
