import React from "react";
import "./Home.css";
import ashenlogo from "../images/ashenlogo.png";
import { motion, spring } from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
function Section_1() {
  return (
    <div>
      <motion.div
        id="Section-hero"
        className="section-hero"
        initial={{
          opacity: -10,
          x: -10000,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 25,
        }}
      >
        <div className="section-para">
          <h1 className="h1">Hey 👋, I'm <span>Ashen</span> Sam!</h1>
          <p>
            Glad to see you here pals! I’m an undergraduate student pursuing a
            Software Engineering degree program.
          </p>

          <ul className="icons">
            <li>
              <a href=" https://github.com/Ashen-sam">
                {""}
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ashen-samarasekera-08354a249/">
                {" "}
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/AshenSamar17513">
                {" "}
                <AiFillTwitterCircle />
              </a>
            </li>
          </ul>
        </div>
        <div className="section-image">
          <img src={ashenlogo} alt="" />
        </div>
      </motion.div>
    </div>
  );
}
export default Section_1;
