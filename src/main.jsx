import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter , createBrowserRouter , createRoutesFromElements , RouterProvider} from "react-router-dom";
import App from './App.jsx'
import { Route } from 'react-router-dom';
import Page1 from './components/Pages/Page1/Page1.jsx';
import Page2 from './components/Pages/Page2/Page2.jsx';
import Contact from './components/Contact/Contact.jsx';
import Project from './components/Projects/Project.jsx';
import Routing from './Routing.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Routing/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='skills' element={<Page2/>}/>
      <Route path='projects' element={<Project/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
