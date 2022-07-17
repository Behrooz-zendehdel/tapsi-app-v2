import React, { useState } from "react";
import "./navbarjobs.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import imagejobs1 from "../../assets/imagejobs1.webp";
// import imagejobs2 from "../../assets/imagejobs2.webp";
// import imagejobs3 from "../../assets/imagejobs3.webp";
// import imagejobs4 from "../../assets/imagejobs4.webp";
import detail1 from "../../assets/detail1.webp";
import detail2 from "../../assets/detail2.webp";
import detail3 from "../../assets/detail3.webp";
import detail4 from "../../assets/detail4.webp";
import Footer from "../../Components/Footer/Footer";
const NavbarJobs = () => {
  // const [background, setBackground] = useState({
  //   id: 1,
  //   header: "اثر گذاری",
  //   title:
  //     "ما برای انجام هر کاری، به نتیجه و اثرش فکر می‌کنیم، چرا که دوست داریم کاری انجام بدهیم که اثر مثبت و ماندگاری در زندگی هم‌وطنان‌مان بگذارد. ما باور داریم که در کشورمان، پتانسیل‌های زیادی برای خلق ارزش وجود دارد. پس هدفمان را انجام کارهای معناداری قرار داده‌ایم که اثر مثبتش بر کیفیت زندگی مردم کشورمان، ملموس باشد.",
  //   img: imagejobs1,
  // });

  // const [background1, setBackground1] = useState({
  //   id: 1,
  //   headers: "رشد هوشمندانه",
  //   title:
  //     "لازمه‌ی رشد سریع در محیط‌های چابک مثل کسب و کار ما، خلاق بودن و فکر کردن خارج از چهارچوب‌هاست. ما گاهی با مسائل سختی مواجهیم که فرصت محدودی برای حل دارند. در این مواقع، هرچند می‌دانیم که از شیوه‌های معمول نمی‌توان به نتیجه رسید، اما تسلیم نمی‌شویم چون از نظر ما «کار، نشد ندارد». اینجاست که هوش، خلاقیت و تفکر را به کار می‌گیریم تا اگر راهی نیست، راه بسازیم.",
  //   img: imagejobs2,
  // });
  // const [background2, setBackground2] = useState({
  //   id: 1,
  //   headers: " یادگیری و توسعه",
  //   p: "ما فکر می‌کنیم که اگر قرار است تاثیر مثبتی روی محیط اطرافمان بگذاریم، باید این کار را از خودمان شروع کنیم. پس در تپسی، مسیر رشد و یادگیری را برای افرادی که مشتاق و مستعدند، فراهم کرده‌ایم. ما خودمان را متعهد می‌دانیم که هم‌راه و هم‌پای رشد هم باشیم و دانسته‌هایمان را به یکدیگر منتقل کنیم. فعالانه بازخورد می‌دهیم و معتقدیم وقتی همه ما در کنار هم رشد کنیم، حتما می‌توانیم کارهای بزرگ‌تری انجام بدهیم و آثار بزرگ‌تری خلق کنیم.",
  //   img: imagejobs3,
  // });
  // const [background3, setBackground3] = useState({
  //   id: 1,
  //   headers: " بهبود مستمر",
  //   p: "ما فکر می‌کنیم «بهتر شدن»، یک امر مداوم است. پس هیچ‌وقت متوقف نمی‌شویم و سعی می‌کنیم در مسیر حرکت‌مان، هر روز بهتر از روز قبل باشیم. بهتر در ارائه خدمت و محصول به کاربران، بهتر در خلق تجربه همکاری برای همکاران و بهتر در خلق ارزش برای جامعه‌.",
  //   img: imagejobs4,
  // });

  // const handelClick = () => {
  //   setBackground((prevback) => prevback + 1);
  // };

  return (
    <>
      <section>
        <div className="navjobs">
          <div className="navlogojobs">
            <Link to="/">
              <span>تپسی </span>
            </Link>
            <img src={logo} alt="" />
          </div>
          <div className="navlinkjobs">
            <nav>
              <ul>
                <li>
                  <Link to="tapsime">درباره ما</Link>
                </li>
                <li>
                  <Link to="customerpage">تماس با ما</Link>
                </li>
                <li>
                  <Link to="bizines">خدمات سازمانی</Link>
                </li>
                <li className="active">
                  <Link to="jobs">فرصت های شغلی</Link>
                </li>
                <li>
                  <Link to="weblog">وبلاگ</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section>
        <div className="headerjobs">
          <div className="titleheader">
            <h2>از خودت سبقت بگیر!</h2>
            <p>
              اگر مشتاق یادگیری هستید، دوست دارید رشد کنید و از خودتان هم فراتر
              بروید، اینجا فرصت برای سبقت گرفتن از خودتان فراهم است، چرا که سرعت
              رشد و یادگیری در تپسی بسیار بالاست. یادگیری مفیدی که از حل کردن
              چالش‌های جذاب در کنار یک تیم متخصص و حرفه‌ای حاصل می‌شود.
            </p>
            <button>پیوستن به تپسی</button>
          </div>
        </div>
      </section>
      <section>
        <div className="title-header-jobs">
          <>
            <div className="right-title-header-jobs">
              <img src={imagejobs1} alt="title" />
            </div>
            <div className="left-title-header-jobs">
              <h1>اثرگذاری</h1>
              <p>
                ما برای انجام هر کاری، به نتیجه و اثرش فکر می‌کنیم، چرا که دوست
                داریم کاری انجام بدهیم که اثر مثبت و ماندگاری در زندگی
                هم‌وطنان‌مان بگذارد. ما باور داریم که در کشورمان، پتانسیل‌های
                زیادی برای خلق ارزش وجود دارد. پس هدفمان را انجام کارهای
                معناداری قرار داده‌ایم که اثر مثبتش بر کیفیت زندگی مردم کشورمان،
                ملموس باشد.
              </p>
              <div className="title-name-header">
                <button>اثر گذاری</button>
                <button>رشد هوشمندانه</button>
                <button>یادگیری و توسعه</button>
                <button>بهبود مستمر</button>
              </div>
            </div>
          </>
        </div>
      </section>
      <section>
        <div className="tpasiDetail">
          <h1>در تپسی چه می‌گذرد؟</h1>
          <picture className="imageDeatil">
            <img src={detail1} alt="" />
            <img src={detail2} alt="" />
            <img src={detail3} alt="" />
            <img src={detail4} alt="" />
          </picture>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NavbarJobs;
