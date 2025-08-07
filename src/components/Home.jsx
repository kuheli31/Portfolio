import React from 'react';
import Page1 from './Pages/Page1/Page1.jsx';
import Page2 from './Pages/Page2/Page2.jsx';
import Project from './Projects/Project.jsx';
import Contact from './Contact/Contact.jsx';

function Home() {
  return (
    <div>
      <Page1 />
      <Page2 />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;
