import React from "react";
import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Banner />
      {children}
    </div>
  );
};

export default Layout;
