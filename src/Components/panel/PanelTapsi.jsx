import React from "react";
import "./paneltapsi.css";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import bizines from "../../assets/tapis.bizines.webp";
import copuns from "../../assets/tapsi.code.webp";

const PanelTapsi = () => {
  return (
    <>
      <div className="head"></div>
      <div className="panelTpasi-title">
        <div className="panel-right">
          <h1>خدمات تپسی ویژه کسب‌وکارها</h1>
          <p>
            پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست
            هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها و سازمان‌ها
            فراهم می‌کند. و با استفاده از آن می‌توانید ماموریت های درون‌شهری و
            ارسال کالاهای خود را به سادگی مدیریت کنید.
          </p>
          <Link to="/PanelPage">
            <span>اطلاعات بیشتر سرویس سازمانی</span>
            <AiOutlineLeft
              style={{ margin: "15px 5px 0 0", color: "#ff5722" }}
            />
          </Link>
          <Link to="/LoginPanelPage">
            <button className="btn-sazmani">ورود و ثبت نام سازمانی</button>
          </Link>
        </div>
        <div className="panel-left">
          <img src={bizines} alt="" />
        </div>
      </div>
      <div className="copunTapsi">
        <div className="right-copun">
          <img src={copuns} alt="" />
        </div>

        <div className="left-copun">
          <div className="left-copun-right">
            <h1>خرید کد اعتبار تپسی</h1>
            <p>
              کاربران، کسب‌وکارها و سازمان‌ها می‌توانند به تعداد و مبلغ مورد
              نظرشان، کد اعتبار یا کد تخفیف تپسی تهیه کرده، برای خود، پرسنل و یا
              مشتریانشان استفاده کنند و از تخفیف‌های ویژه تپسی نیز بهره‌مند
              شوند. این کدها امکان سفارشی‌سازی بر اساس مبدا، مقصد، زمان، درصد و
              مبلغ را دارند.
            </p>

            <Link to="/CopunPage">
              <button className="btn-sazmani">خرید کد اعتبار و تخفیف</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelTapsi;
