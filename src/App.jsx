import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skill from './pages/Skill';
import Footer from './pages/Footer';
import Project from './pages/Project';
import Html from './pages/Projectpage/Html';
import Javascript from "./pages/Projectpage/Javascript";
import Reactproject from './pages/Projectpage/Reactproject';
import {BrowserRouter , Routes , Route}   from "react-router-dom";
import Headder from './Headder';
import "./index.css";

function App() {
  return (
    <div>
   <BrowserRouter>
   <Headder/>
   <Routes>
    <Route path="/" element = {<Home />}/>
    <Route path="/Experience" element = {< Experience/>}/>
    <Route path="/Skill" element = {< Skill/>}/>
    <Route path="/Project" element = {< Project/>} >
        <Route path="html" element = {< Html/>}/>
        <Route path="javascript" element = {< Javascript/>}/>
        <Route path="react" element = {<Reactproject />}/>
    </Route>
    <Route path="/contact" element = {< Footer/>}/>

   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
