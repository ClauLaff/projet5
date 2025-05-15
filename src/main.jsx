import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './styles/main.scss'
import App from './pages/App.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={ <App/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/*" element={<Error/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>,
)
