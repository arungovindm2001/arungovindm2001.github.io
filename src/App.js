import { Route, Routes } from "react-router-dom";

import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="m-0 h-screen bg-primary text-white overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
