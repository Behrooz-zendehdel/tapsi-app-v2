import React from "react";
import "./footer.css";
import logo2 from "../../assets/logo-2.png";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-title">
        <div className="footer-logo">
          <h1>تپسی</h1>
          <img src={logo2} alt="" />
        </div>
        <div className="footer-link">
          <p> اپلیکیشن درخواست خودرو و پیک </p>
          <p>تمام حقوق مادی و معنوی این</p>
          <p> وبسایت متعلق به تپسی است.</p>
          <div className="socialTapsi">
            <span>تپسی در شبکه های اجتماعی </span>
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
      <div className="footer-title">
        <div className="footer-logo">
          <h2>تپسی</h2>
        </div>
        <div className="footer-link">
          <Link to="/WebLogPage" style={{ marginTop: "1rem" }}>
            <span> وبلاگ تپسی</span>
          </Link>
          <Link to="/JobsPage" style={{ marginTop: "1rem" }}>
            <span>فرصت شغلی</span>
          </Link>
          <Link to="/CustomersPage" style={{ marginTop: "1rem" }}>
            <span>تماس با ما</span>
          </Link>
          <Link to="/" style={{ marginTop: "1rem" }}>
            <span>لوگو و هویت سازمانی</span>
          </Link>
          <Link to="/CourierPage" style={{ marginTop: "1rem" }}>
            <span>معرفی راننده به تپسی</span>
          </Link>
        </div>
      </div>
      <div className="footer-title">
        <div className="footer-logo">
          <h2>مسافران</h2>
        </div>
        <div className="footer-link">
          <Link to="DownloadPage" style={{ marginTop: "1rem" }}>
            <span> دانلود اپ مسافر</span>
          </Link>

          <Link to="/WebAppTapsi" style={{ marginTop: "1rem" }}>
            <span>نسخه وب تپسی </span>
          </Link>
          <Link to="/PorseshPage" style={{ marginTop: "1rem" }}>
            <span> پرسش‌های متداول مسافران</span>
          </Link>
          <Link to="/RulesPage" style={{ marginTop: "1rem" }}>
            <span> شرایط و قوانین مسافران </span>
          </Link>
          <Link to="/CustomersPage" style={{ marginTop: "1rem" }}>
            <span> باشگاه مشتریان </span>
          </Link>
        </div>
      </div>
      <div className="footer-title">
        <div className="footer-logo">
          <h2>رانندگان</h2>
        </div>
        <div className="footer-link">
          <Link to="/DownloadPage" style={{ marginTop: "1rem" }}>
            <span> دانلود اپ سفیر </span>
          </Link>
          <Link to="/CourierPage" style={{ marginTop: "1rem" }}>
            <span> ثبت نام راننده تاکسی اینترنتی</span>
          </Link>
          <Link to="/PorseshPage" style={{ marginTop: "1rem" }}>
            <span> پرسش‌های متداول سفیران</span>
          </Link>
          <Link to="/RulesPage" style={{ marginTop: "1rem" }}>
            <span> شرایط و قوانین سفیران </span>
          </Link>
          <Link to="/CourierPage" style={{ marginTop: "1rem" }}>
            <span> باشگاه سفیران </span>
          </Link>
        </div>
      </div>
      <div className="footer-title">
        <div className="footer-logo">
          <h2 className="detail">کسب وکارها</h2>
        </div>
        <div className="footer-link">
          <Link to="/PanelPage" style={{ marginTop: "1rem" }}>
            <span> پنل سازمانی تپسی</span>
          </Link>
          <Link to="/CopunPage" style={{ marginTop: "1rem" }}>
            <span> خرید کد اعتبار و تخفیف</span>
          </Link>

          <span> دریافت API</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
