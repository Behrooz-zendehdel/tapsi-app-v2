import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Banner from "../Components/Banner/Banner";
import "./customerspage.css";
import Select from "react-select";
import { MdOutlineCall } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import Footer from "../Components/Footer/Footer";

const options = [
  {
    value: "tehran",
    label: "تهران",
  },
  {
    value: "karaj",
    label: "کرج",
  },
  {
    value: "ardabil",
    label: "اردبیل",
  },
  {
    value: "yazd",
    label: "یزد",
  },
  {
    value: "shomal",
    label: "شمال",
  },
  {
    value: "Mashhad",
    label: "مشهد",
  },
  {
    value: "Isfahan",
    label: "اصفهان",
  },
  {
    value: "Shiraz",
    label: "شیراز",
  },
  {
    value: "Urmia",
    label: "ارومیه",
  },
  {
    value: "Kerman",
    label: "کرمان",
  },
  {
    value: "Qom",
    label: "قم",
  },
  {
    value: "Ahvaz",
    label: "اهواز",
  },
  {
    value: "Babol",
    label: "بابل",
  },
];

const CustomersPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <Layout>
        <Banner />
        <div className="header-customer">
          <span>تماس با ما</span>
          <span>درخواست بازگشت اعتبار </span>
          <span>ثبت مشکل یا طرح پرسش</span>
          <div className="header-location">
            <div className="right-location">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
              <div className="maps">
                <img
                  src=""
                  alt=""
                  width={"563px"}
                  height={"200px"}
                  background-color={"balck"}
                />
              </div>
              <div className="title-loaction">
                <label htmlFor="">شماره تماس : 1630</label>
                <label htmlFor="">
                  آدرس: تهران، سعادت‌آباد، بالاتر از میدان کاج،
                  <br /> بلوار بهزاد، نبش کوچه باغستان یکم، پلاک ۲. کد پستی:
                  ۱۹۹۸۶۳۵۸۲۰
                </label>
              </div>
            </div>
            <div className="left-location">
              <div className="title-left">
                <label htmlFor="">
                  <MdOutlineCall style={{ marginLeft: "5px" }} /> شماره تماس با
                  پشتیبانی
                </label>
                <div className="title-call">
                  <span>1630</span>
                </div>
              </div>
              <div className="title-left">
                <label htmlFor="">
                  <FaFax style={{ marginLeft: "5px" }} /> شماره فکس:
                </label>
                <div className="title-call">
                  <span>+98 (21) 41630680</span>
                </div>
              </div>
              <div className="title-left">
                <label htmlFor="">
                  <AiOutlineMail style={{ marginLeft: "5px" }} />
                  پست الکترونیکی:
                </label>
                <div className="title-call">
                  <span>info@tapsi.cab</span>
                </div>
              </div>
              <div className="title-border"></div>
              <div className="icons">
                <span className="icons">
                  <FiFacebook />
                </span>
                <span className="icons">
                  <BsInstagram />
                </span>
                <span className="icons">
                  <FiTwitter />
                </span>
                <span className="icons">
                  <GrLinkedinOption />
                </span>
                <span className="icons">
                  <FaTelegramPlane />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default CustomersPage;
