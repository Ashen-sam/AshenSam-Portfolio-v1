import React from "react";
import Navbar from "./Navbar";
import Section_1 from "./Section-1"
import Section_2 from "./Section-2";
import Section_3 from "./Section-3"
import Footer from "./Footer"


function Home() {
  return (
    
      <div className="Home">
        <Navbar/>
        <Section_1/>  
        <Section_2/>
        <Section_3/>
        <Footer/>
      </div>
    
  );
}

export default Home;
