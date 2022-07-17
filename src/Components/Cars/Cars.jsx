import React from "react";
import "./cars.css";
import * as data from "../../db/data";
import imageclasicc from "../../assets/illus-classic.webp";

const Cars = () => {
  return (
    <section className="topsection">
      <h1>سرویس های تپسی</h1>
      <div className="services">
        {data.cars.map((car) => (
          <>
            <div className="line">
              <div className="itemImage">
                <img src={car.image} alt={car.name} />
              </div>
              <p>{car.name}</p>
            </div>
          </>
        ))}
      </div>
      <div className="desc">
        <div className="desc-right">
          <h1>تپسی کلاسیک</h1>
          <p>
            با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید.
            تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از
            روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف
            در مسیر را دارید.
          </p>
        </div>
        <div className="desc-left">
          <img src={imageclasicc} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Cars;
