import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import MainContent from "./components/content";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar"
import About from "./components/about"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar /> {/* Placed outside of the <main> */}
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;