import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";
import { SiPwa } from "react-icons/si";
import { AiOutlineCar } from "react-icons/ai";
import headerImage from "../assets/header.tapsi.webp";
import mobile from "../assets/mobile.tapsi.webp";
import "./homePage.css";
import { cars, data } from "../db/data";

const HomePage = () => {
  return (
    <>
      <section>
        <Layout>
          <div className="headerImg">
            <img src={headerImage} alt="header" style={{ width: "100% " }} />
            <div className="right-home">
              <div className="overlay">
                <div className="title">
                  <h1>تپسی</h1>
                  <p>اپلیکیشن درخواست خودرو و پیک</p>
                </div>
                <div className="btn-downloads">
                  <Link to="/download">
                    <button>
                      <BsArrowDown style={{ marginLeft: "5px" }} />
                      دانلود اپلیکیشن مسافران
                    </button>
                  </Link>
                  <Link to="/download">
                    <button>
                      <SiPwa style={{ marginLeft: "5px" }} />
                      وب اپلیکیشن مسافران
                    </button>
                  </Link>
                  <Link to="/download">
                    <button className="btn-white">
                      <BsArrowDown style={{ marginLeft: "5px" }} />
                      دانلود اپلیکیشن رانندگان
                    </button>
                  </Link>
                  <Link to="/download">
                    <button className="btn-white">
                      <AiOutlineCar style={{ marginLeft: "15px" }} />
                      ثبت نام راننده
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="left-home">
              <img src={mobile} alt="mobile" />
            </div>
          </div>
        </Layout>
      </section>

      <section className="service">
        {/* <h1>سرویس های تپسی</h1>
        {cars.map((car) => (
          <div className="title-service">
            <p>{car.name}</p>
            <img src={car.img} alt="" />
          </div>
        ))} */}
      </section>
    </>
  );
};

export default HomePage;
