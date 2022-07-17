import React from "react";
import "./newweblog.css";
import { weblogTapsi } from "../../db/data";
import { Link } from "react-router-dom";

const NewWeblog = () => {
  return (
    <div className="headerweblog">
      <h1>تازه ترین های وبلاگ تپسی</h1>
      <Link to="/WebLogPage">
        <div className="listweblog">
          {weblogTapsi.map((weblog) => (
            <div className="itemweblog">
              <img src={weblog.image} alt={weblog.header} />
              <span>{weblog.header}</span>
              <p>{weblog.description}</p>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default NewWeblog;
