import classic from "../assets/cc-classic.png";
import tel from "../assets/cc-tel.png";
import line from "../assets/cc-line.png";
import moto from "../assets/cc-motopeyk.png";
import auto from "../assets/cc-autopeyk.png";
import plus from "../assets/cc-plus.png";
import taxi from "../assets/cc-taxi.png";
import hamiar from "../assets/cc-hamyar.png";
import tclassic from "../assets/illus-classic.webp";
import ttel from "../assets/illus-tel.webp";
import tline from "../assets/illus-line.webp";
import tpeyk from "../assets/illus-motopeyk.webp";
import tauto from "../assets/illus-autopeyk.webp";
import tplus from "../assets/illus-plus.webp";
import ttaxi from "../assets/illus-taxi.webp";
import thamyar from "../assets/illus-hamyar.webp";
import etehadie from "../assets/etehadie-no-logo-scaled.jpg";
import digikala from "../assets/vaksan.jpeg";
import vaksan from "../assets/vaksann.jpg";
import imagejobs1 from "../assets/imagejobs1.webp";
import imagejobs2 from "../assets/imagejobs2.webp";
import imagejobs3 from "../assets/imagejobs3.webp";
import imagejobs4 from "../assets/imagejobs4.webp";

export const cars = [
  {
    id: 1,
    name: "تپسی کلاسیک ",
    image: classic,
    description:
      "با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.",
    img: tclassic,
  },
  {
    id: 2,
    name: "تپسی تلفنی ",
    image: tel,
    description:
      "سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.",
    img: ttel,
  },
  {
    id: 3,
    name: "تپسی لاین ",
    image: line,
    description:
      "تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود. این سرویس در حال حاضر به دلیل شرایط همه‌گیری بیماری کرونا از دسترس خارج شده اما با بهبود شرایط می‌توانید از سرویس لاین استفاده کنید.",
    img: tline,
  },
  {
    id: 4,
    name: "موتو پیک ",
    image: moto,
    description:
      "با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید.",
    img: tpeyk,
  },
  {
    id: 5,
    name: "اتو پیک ",
    image: auto,
    description:
      "اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است.",
    img: tauto,
  },
  {
    id: 6,
    name: "تپسی پلاس ",
    image: plus,
    description:
      "در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.",
    img: tplus,
  },
  {
    id: 7,
    name: "تاکسی ",
    image: taxi,
    description:
      "در سرویس تاکسی تپسی، تاکسی‌های زرد یا سبز شما را به مقصدتان می‌رسانند. این سرویس در حال حاضر در تهران فعال است و چنانچه به دلایلی مانند ورود به محدوده طرح ترافیک یا طرح آلودگی هوا، ترجیح بدهید از تاکسی برای رفت‌وآمدتان استفاده کنید، گزینه مناسبی خواهد بود.",
    img: ttaxi,
  },
  {
    id: 8,
    name: "همیار ",
    image: hamiar,
    description:
      "سرویس همیار تپسی، به جای شما خرید می‌کند. کافیست فروشگاه مورد نظر خود را به عنوان مبدا مشخص کرده و لیست خریدتان را داخل اپ وارد کنید. این خرید‌ها می‌تواند از سوپرمارکت یا داروخانه مورد نظر شما باشند.",
    img: thamyar,
  },
];

export const weblogTapsi = [
  {
    id: 1,
    image: etehadie,
    header: "دومین دوره انتخابات اتحادیه کسب و کارهای مجازی",
    description:
      "دیدگاه و اهداف میلاد منشی پور ، کاندیدای دومین دوره انتخابات اتحادیه کسب و کارهای مجازی درباره من من میلاد منشی پور و...",
  },
  {
    id: 2,
    image: digikala,
    header: "تخفیف ویژه دیجی کالا جت برای کاربران تپسی",
    description:
      " سوپر مارکت آنلاین دیجی کالا جت با ارسال سریع محصولات سوپرمارکتی شروع به کار کرده است و سفارش های آنلاین(منقضی شده)",
  },
  {
    id: 3,
    image: vaksan,
    header: "برای دریافت دز سوم واکسن ، با تخفیف به مراکز واکسیناسیون بروید !",
    description:
      "تپسی با همراهی شرکت سیناژن (تولید کننده واکسن اسپایکوژن ) برای رفتن به مراکز واکسیناسیون و تزریق دز سوم ، تخفیف و ...",
  },
];

export const nameCity = [
  {
    name: "tehran",
    namefa: "تهران",
  },
  {
    name: "karaj",
    namefa: "کرج",
  },
  {
    name: "ardabil",
    namefa: "اردبیل",
  },
  {
    name: "yazd",
    namefa: "یزد",
  },
  {
    name: "shomal",
    namefa: "شمال",
  },
  {
    name: "Mashhad",
    namefa: "مشهد",
  },
  {
    name: "Isfahan",
    namefa: "اصفهان",
  },
  {
    name: "Shiraz",
    namefa: "شیراز",
  },
  {
    name: "Urmia",
    namefa: "ارومیه",
  },
  {
    name: "Kerman",
    namefa: "کرمان",
  },
  {
    name: "Qom",
    namefa: "قم",
  },
  {
    name: "Ahvaz",
    namefa: "اهواز",
  },
  {
    name: "Gorgan",
    namefa: "گرگان",
  },
  {
    name: "Qazvin",
    namefa: "قزوین",
  },
  {
    name: "Arak",
    namefa: "اراک",
  },
  {
    name: "Neyshabur",
    namefa: "نیشابور",
  },
  {
    name: "Sari",
    namefa: "ساری",
  },
  {
    name: "Qaem Shahr",
    namefa: "قائم‌شهر",
  },
  {
    name: "Rasht",
    namefa: "رشت",
  },
  {
    name: "Anzali",
    namefa: "انزلی",
  },
];
