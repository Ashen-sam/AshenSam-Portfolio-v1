import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import Section_2 from "./Section-2"
import { Link } from 'react-scroll'


function Navbar() {
  return (
    <div>
      <motion.div className="header"
        initial=
        {{
          y: -100,
        }}
        animate={{
          y:0,
        }}
        
        transition={{
          duration:1,
          
          
        }}
        >
        <div className="logo">
          <h2>Ashen Samraseksera</h2>
        </div>
        <div className="nav-list">
          <ul>
            <li>
              <Link to="Section-hero" spy={true} smooth={true} offset={0} duration={10}>Home</Link>
            </li>
          
            <li>
            <Link to="footer" spy={true} smooth={true} offset={0} duration={10}>Contact me</Link>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </motion.div>
    </div>
  );
}
export default Navbar;
