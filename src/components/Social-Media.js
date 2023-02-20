import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div className="social-media">
      <span className="d-inline">
        <Link to="/" className="icon d-inline">
          <FontAwesomeIcon icon={faFacebookF} spin />
        </Link>
      </span>
      <span className="d-inline">
        <Link to="/" className="icon">
          <FontAwesomeIcon icon={faGithub} spin />
        </Link>
      </span>
      <span className="d-inline">
        <Link to="/" className="icon">
          <FontAwesomeIcon icon={faInstagram} spin />
        </Link>
      </span>
    </div>
  );
};

export default SocialIcons;