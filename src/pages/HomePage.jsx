import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";
import { SiPwa } from "react-icons/si";
import { AiOutlineCar } from "react-icons/ai";
import headerImage from "../assets/header.tapsi.webp";
import mobile from "../assets/mobile.tapsi.webp";
import "./homePage.css";
import Cars from "../Components/Cars/Cars";
import PanelTapsi from "../Components/panel/PanelTapsi";
import NewWeblog from "../Components/NewWeblog/NewWeblog";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";

const HomePage = () => {
  return (
    <>
      <section>
        <Layout>
          <Banner />
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

      <Cars />
      <PanelTapsi />
      <NewWeblog />
      <Footer />
    </>
  );
};

export default HomePage;
