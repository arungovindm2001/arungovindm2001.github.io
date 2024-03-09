import React from 'react';
import { Routes as AllRoutes, Route } from 'react-router-dom';

import Hero from './pages/Home/page';
import Projects from './pages/Projects/page';
import Blogs from './pages/Blogs/page';
import Blog from './pages/Blogs/Title/page';

function Routes() {
  return (
    <AllRoutes>
      <Route path="/" element={<Hero />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:blogTitle" element={<Blog/>}/>
    </AllRoutes>
  );
}

export default Routes;
