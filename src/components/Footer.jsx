import React from "react";
import {Link} from "react-scroll"

import {
  BiLogoJava,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoCss3,
  BiLogoGit,
  BiLogoVisualStudio,
} from "react-icons/bi";
import {
  AiFillHtml5,
  AiFillFacebook,
  AiFillInstagram,
  AiFillDribbbleCircle,
  AiOutlineGithub,
  AiFillAndroid,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaPhp } from "react-icons/fa";
import { motion } from "framer-motion";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-card">
          <ul className="social">
            <li>
              <a href="https://m.facebook.com/Ashensam27">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href="https://github.com/Ashen-sam">
                <AiOutlineGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ashen-samarasekera-08354a249/">
                <AiFillLinkedin/>
              </a>
            </li>
          </ul>
          
          <ul className="copyrights">
            <li>
            <Link to="Section-hero" spy={true} smooth={true} offset={0} duration={10}>- Home -</Link>

            </li>
            <li>
              <a href="https://www.linkedin.com/in/ashen-samarasekera-08354a249/">- Connect me -</a>
            </li>
            <li>
              <a href="https://github.com/Ashen-sam/PORTFOLIO">- Source Code -</a>
            </li>
            <li>
              <a href="">- 👋-</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
