import React from "react";
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
function Section_2() {
  return (
    <div>
      <motion.div
        id="Section-2"
        className="section-2"
        variants={fadefromtop}
        initial="initial"
        whileInView="animate"
      >
        <h1 id="h1"><span>Technologies</span>-2ls; </h1>
        <div className="section-languages">
          <div className="technologies">
            <h1>Languages</h1>
            <ul className="tech">
              <li>
                <a id="java" href="">
                  <BiLogoJava />
                </a>
                <a id="cplus" href="">
                  <BiLogoCPlusPlus/>
                </a>
              </li>
            </ul>
          
          </div>
          <div className="technologies">
            <h1>2ls</h1>
            <ul className="tech">
              <li>
                <a id="vscode" href="">
                  <BiLogoVisualStudio />
                </a>
                <a id="dribble" href="">
                  <AiFillDribbbleCircle />
                </a>
                <a id="git" href="">
                  <BiLogoGit />
                </a>
              </li>
            </ul>
            <ul className="tech">
              <li>
                <a id="github" href="">
                  <AiOutlineGithub />
                </a>
                <a id="android" href="">
                  <AiFillAndroid />
                </a>
              </li>
            </ul>
          </div>
          <div className="languages">
            <h1>Web-Dev</h1>
            <ul className="lan">
              <li>
                <a id="react" href="">
                  <BiLogoReact />
                </a>
                <a id="tailwind" href="">
                  <BiLogoTailwindCss />
                </a>
                <a id="js" href="">
                  <BiLogoJavascript />
                </a>
              </li>
            </ul>
            <ul className="lan">
              <li>
                <a id="html" href="">
                  <AiFillHtml5 />
                </a>
                
                <a id="css" href="">
                  <BiLogoCss3 />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Section_2;
