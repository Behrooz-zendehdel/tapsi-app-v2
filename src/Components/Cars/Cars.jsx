import React, { useState } from "react";
import "./cars.css";
import { cars } from "../../db/data";
// import imageclasicc from "../../assets/illus-classic.webp";

const Cars = () => {
  const [selected, setSelected] = useState(0);
  const tlength = cars.length;
  return (
    <section className="topsection">
      <h1>سرویس های تپسی</h1>
      <div className="services">
        {cars.map((car) => (
          <>
            <div className="line">
              <div
                className="itemImage"
                onClick={() => {
                  selected === 0
                    ? setSelected(tlength - 1)
                    : setSelected((prev) => prev - 1);
                }}
              >
                <img src={cars[selected].image} alt={cars[selected].name} />
              </div>
              <p>{cars[selected].name}</p>
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
          <img src={cars[selected].img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Cars;
