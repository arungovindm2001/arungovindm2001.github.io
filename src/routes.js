import React from "react";
import { Routes as AllRoutes, Route } from "react-router-dom";

import Hero from "./pages/Home/page";
import Projects from "./pages/Projects/page";
import Blogs from "./pages/Blogs/page";
import OnePiece from "./pages/OnePiece/page";
import Episode from "./pages/OnePiece/[id]/page";

function Routes() {
  return (
    <AllRoutes>
      <Route path="/" element={<Hero />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/one-piece" element={<OnePiece />} />
      <Route path="/one-piece/:epId" element={<Episode />} />
    </AllRoutes>
  );
}

export default Routes;
