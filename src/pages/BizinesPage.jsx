import React, { useRef } from "react";
import Layout from "../Layout/Layout";
import Banner from "../Components/Banner/Banner";
import "./bizinespage.css";
import * as data from "../db/data";
import bizinesman from "../assets/bizinesman.webp";
import cod from "../assets/cod.webp";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineCall } from "react-icons/md";
import Footer from "../Components/Footer/Footer";
import emailjs from "@emailjs/browser";

const BizinesPage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ylpx4rg",
        "template_lcqsbnh",
        form.current,
        "oCfX3be4Ry8A3DO7A"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Layout>
        <Banner />
        <div className="header-bizines">
          <div className="title-bizines">
            <h1>مزایای استفاده از پنل سازمانی تپسی</h1>
          </div>
          <div className="detail-title">
            <span>
              دسترسی به خودرو در <br /> تمام روزهای هفته <br /> و ۲۴ ساعت شبانه
              روز
            </span>
            <span>
              سهولت در درخواست <br />
              خودرو بدون نیاز به <br /> تماس تلفنی
            </span>
            <span>
              انجام سفرهای روزانه با <br /> قیمت های به صرفه و <br />
              اقتصادی
            </span>
          </div>
        </div>
        <section className="header-city">
          <div className="city">
            {data.nameCity.map((city) => (
              <div className="tehran-city">
                <span>{city.namefa}</span>
                <label>{city.name}</label>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="panel-sazmani">
            <h1>خدمات تپسی به شرکت ها و سازمان ها</h1>

            <div className="title-panel-sazmani">
              <div className="right-panel-sazmani">
                <h2>پنل سازمانی تپسی</h2>
                <p>
                  پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان
                  درخواست خودرو برای تعداد نامحدود از کارکنان، نظارت بر سفرها،
                  دریافت صورتحساب خودکار و گزارش‌گیری آنلاین را برای شرکت‌ها و
                  سازمان‌ها فراهم آورده است
                </p>
                <div className="bullet-title">
                  <ul>
                    <li>قابلیت درخواست چندین خودرو به صورت همزمان</li>
                    <li>امکان انتخاب چند مقصد برای یک سفر</li>
                    <li>امکان استفاده از تمامی سرویس های تپسی</li>
                    <li>قابلیت مشاهده و دریافت گزارش سفرها</li>
                  </ul>

                  <button>ثبت نام در پنل</button>
                  <button>ورود به پنل سازمانی </button>
                </div>
              </div>
              <div className="left-panel-sazmani">
                <img src={bizinesman} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="panel-sazmani">
            <div className="title-panel-sazmani">
              <div className="left-panel-sazmani">
                <img src={cod} alt="" />
              </div>
              <div className="right-panel-sazmani">
                <h1>کدهای سفر سازمانی تپسی </h1>
                <h2> کد اعتبار</h2>
                <p>
                  کسب و کارها و سازمان ها می‌توانند به تعداد و مبلغ مورد نظرشان،
                  کد اعتبار تهیه کرده و در اختیار اشخاص مدنظر، پرسنل و یا
                  مشتریان خود قرار بدهند. با وارد کردن این کدها در قسمت "هدیه و
                  تخفیف" در اپلیکیشن تپسی، اعتبار کاربر به میزان مبلغ کد افزایش
                  می‌یابد و می‌تواند از محل آن، از سرویس‌های مختلف تپسی استفاده
                  کند.
                </p>
                <button className="btn-code">خرید کد اعتبار</button>
                <p>
                  این کدها قابلیت سفارشی‌سازی دارند و می‌توانند به تعداد مورد
                  نظر در اختیار کسب و کارها قرار بگیرند. از مهم‌ترین ویژگی‌های
                  این راهکار، می‌توان به موارد زیر اشاره کرد:
                </p>
                <div className="bullet-title">
                  <ul>
                    <li>قابلیت سفارشی‌سازی بر اساس مبدا، مقصد، زمان و تاریخ</li>
                    <li>امکان تعیین درصد و سقف مبلغ تخفیف</li>
                    <li>امکان اتصال به کیف پول</li>
                    <li>قابلیت دریافت گزارش سفرها در فواصل زمانی دلخواه</li>
                    <p>
                      برای خرید کد تخفیف درخواست خود را به{" "}
                      <span>corporate@tapsi.cab </span>
                      ارسال کرده یا با شماره <span>1630</span> داخلی 4 در تماس
                      باشید.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="reseveData">
            <h2>دریافت اطلاعات بیشتر</h2>
            <div className="title-reseveData">
              <div className="right-reseve">
                <p>
                  برای دریافت اطلاعات بیشتر، مشخصات خود و سازمان خود را در این
                  قسمت وارد کنید. همکاران ما در اولین زمان با شما تماس خواهند
                  گرفت.
                </p>
                <p>
                  همچنین شما می‌توانید از راه‌های زیر با ما در ارتباط باشید:
                </p>
                <div className="call-reseve">
                  <label>
                    <MdOutlineCall /> شماره تماس:
                  </label>
                  <span>021 - 41630333</span>
                </div>
                <div className="post-reseve">
                  <label>
                    <AiOutlineMail /> پست الکترونیک:
                  </label>
                  <span>corporate@tapsi.cab</span>
                </div>
              </div>
              <div className="border-sider"></div>

              <div className="left-reseve">
                <div className="input-reseve">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="name">
                      <label>نام و نام خانوادگی:</label>
                      <input type="text" name="message" />
                    </div>
                    <div className="email">
                      <label>نام سازمان :</label>
                      <input type="email" name="user_email" />
                    </div>
                    <div className="phonenumber">
                      <label>شماره تماس :</label>
                      <input name="phone" type="tel" />
                    </div>
                    <button className="btn-send" type="submit">
                      ارسال مشخصات
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    </div>
  );
};

export default BizinesPage;
