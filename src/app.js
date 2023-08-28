import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import MainContent from "./components/content";

function App() {
  return (
    <div id="full-screen">
      <Header />
        <div className="background-color">
          <MainContent/>
        </div>
      <Footer />
    </div>
  );
}

export default App;