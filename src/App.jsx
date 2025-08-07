import './App.css'
import Page1 from './components/Pages/Page1/Page1';
import Page2 from './components/Pages/Page2/Page2';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';

function App() 
{
  return (
  <div>
    <Header/>
    <Page1/>
    <Page2/>
    <Project/>
    <Contact/>
  </div>
  );
}

export default App
