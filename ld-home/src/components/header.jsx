import React from "react";
import Logo from "../images/ld-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link
            to={"https://www.ldhome.ardigital.support"}
            className="site-logo"
          >
            {" "}
            <img src={Logo} alt="" />{" "}
          </Link>


          <div className="contact-num">
            <Link to={"tel:+352 27 91 88 77"}  className="phone-link" >
              {" "}
              <FontAwesomeIcon icon={faPhone} /> +352 27 91 88 77
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
