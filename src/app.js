import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import MainContent from "./components/content";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/about"
import Contact from "./components/contact"
import Portfolio from './components/portfolio';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<About />} />
            <Route path ="/contact" element={<Contact />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;