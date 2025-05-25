import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './styles/main.scss'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Error from './pages/Error/Error.jsx'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx";
import Properties from './pages/Properties/Properties.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Properties/:id" element={<Properties/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/*" element={<Error/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>,
)
