import React from 'react';
import { Routes as AllRoutes, Route } from 'react-router-dom';

import Hero from './pages/Home/page';
import Projects from './pages/Projects/page';
import Blogs from './pages/Blogs/page';

function Routes() {
  return (
    <AllRoutes>
      <Route path="/" element={<Hero />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
    </AllRoutes>
  );
}

export default Routes;
