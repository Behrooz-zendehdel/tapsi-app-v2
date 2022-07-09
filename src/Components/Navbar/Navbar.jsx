import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <Link to="/">
          <span>تپسی</span>
        </Link>
        <img src={logo} alt="" />
      </div>
      <div className="navlink">
        <nav>
          <ul>
            <li>
              <Link to="/customers">پشتیبانی</Link>
            </li>
            <li>
              <Link to="/courier">معرفی راننده</Link>
            </li>
            <li>
              <Link to="/bizines">خدمات و کسب و کارها</Link>
            </li>
            <li>
              <Link to="/jobs">فرصت های شغلی</Link>
            </li>
            <li>
              <Link to="/weblog">وبلاگ</Link>
            </li>
            <li className="download">
              <Link to="/download">دانلود تپسی</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
