import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import { Routes, Route, Navigate } from 'react-router-dom';





const App = () => {
    return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/" element = {<Home/>} />
    <Route exact path="/about" element = {<About/>} />
    <Route exact path="/service" element = {<Service/>} />
    <Route exact path="/contact" element = {<Contact/>} />
    <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <Footer/>
     </>
    );

};
export default App;