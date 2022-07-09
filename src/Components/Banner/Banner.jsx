import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="header-banner">
      <div className="right">
        <p>
          در قرعه‌کشی ۱۰ سفر به قطر شرکت کنید و با هر سفر تپسی، شانس خود را برای
          برنده شدن افزایش دهید.
        </p>
      </div>
      <div className="left">
        <Link  to='/ghorekeshi' className="link-ghorekeshi">شرکت در قرعه کشی</Link>
      </div>
    </div>
  );
};

export default Banner;
