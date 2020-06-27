import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import style from "./footer.module.css";

const Footer = (Props) => {
  const codeSymbol = "</>";
  return (
    <footer id="footer">
      <div className="container">
        <span className={style["footer-span"]}>
          {codeSymbol} by{" "}
          <a
            className={style["github-span"]}
            href="https://github.com/AnonSar"
            target="_blank"
            rel="noopener noreferrer"
          >
            AnonSar <FontAwesomeIcon icon={faGithub} />{" "}
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
