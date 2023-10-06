import React from "react";
import "./Home.css";
import java from "../images/java.gif";
import port from "../images/port.gif";
import Ashen from "../images/Ashen.gif"
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  BiLogoJava,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoCss3,
  BiLogoGit,
  BiLogoVisualStudio,
  BiLogoCPlusPlus,
} from "react-icons/bi";
import {
  AiFillHtml5,
  AiFillDribbbleCircle,
  AiOutlineGithub,
  AiFillAndroid,
} from "react-icons/ai";

import{ MdVisibility} from "react-icons/md";
import { FaPhp } from "react-icons/fa";
import { motion } from "framer-motion";
const fadefromtop = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
  },
  transition: {
    duration: 1,
    Delay: 5,
    type: "spring",
  },
};
function Section_3() {
  return (
    <div>
      <motion.div
        className="projects"
        variants={fadefromtop}
        initial="initial"
        whileInView="animate"
      >
        <h1><span>Personal-</span>Projects;</h1>
        <div className="pro-section">
          <div id="team" className="pro-cards">
            <img src={Ashen} alt="" />
            <p>
              Tech-Chronicle is a dynamic website meticulously crafted by our
              university team to share our fervor for technology and innovation.
              Powered by HTML5, CSS, and JavaScript.
            </p>
            <h2>Team-Web</h2>
            <ul className="icons-new">
              <li>
                <a href="">
                  <AiFillHtml5 />
                </a>
              </li>
              <li>
                <a href="">
                  <BiLogoCss3 />
                </a>
              </li>
              <li>
                <a href="">
                  <BiLogoJavascript />
                </a>
              </li>
              <li>
                <a id="small" href="https://github.com/Ashen-sam/TEAM-TECH-TRONICLES">
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a id="small" href="https://ashen-sam.github.io/TEAM-TECH-TRONICLES/">
                  <MdVisibility />
                </a>
              </li>
            </ul>
          </div>
          <div id="swing" className="pro-cards">
            <img src={java} alt="" />
            <p>
              We have developed this project for the Apple store Employees
              (Casshiers, Manager) and they can easily manage their products and
              stocks in the store with this simple Application.
            </p>
            <h2>Store-Management</h2>

            <ul className="icons-new">
              <li>
                <a href="">
                  <BiLogoJava />
                </a>
              </li>
              <li>
                <a id="small" href="https://github.com/Ashen-sam/APPPLE-ISTORES">
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </div>
          <div id="swing" className="pro-cards">
            <img src={port} alt="" />
            <p id="port">
              I am excited to present my latest personal project, a dynamic and
              visually appealing portfolio website built using React and CSS.
            </p>
            <h2>Portfolio-Web</h2>
            <ul className="icons-new">
              <li>
                <a href="">
                  <BiLogoCss3 />
                </a>
              </li>
              <li>
                <a href="">
                  <BiLogoReact />
                </a>
              </li>
              <li>
                <a href="">
                  <BiLogoJavascript />
                </a>
              </li>
              <li>
                <a id="small" href="https://github.com/Ashen-sam/PORTFOLIO">
                  <AiFillGithub />
                </a>
              </li>
            </ul>
            <ul className="visit">
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default Section_3;
