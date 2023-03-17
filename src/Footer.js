import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function linkGithub() {
  return (
    <>
      <div className="Footer">
        <a
          href="https://github.com/Shanmv/shecodes-weather-react"
          target="_blank"
          rel="norefferer"
          className="Github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <span>Built by Shanice Valentine</span>
      </div>
    </>
  );
}
