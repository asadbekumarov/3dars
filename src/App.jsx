import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import Partner from "./components/partner/Partner";
import Result from "./components/result/Result";
import Employees from "./components/employees/Employees";
import How from "./components/how/How";
import Consider from "./components/consider/Consider";
import Its from "./components/its/Its";
import Not from "./components/not/Not";
import Get from "./components/get/Get";
import Stay from "./components/stay/Stay";
import Footer from "./components/footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Partner />
      <Result />
      <Employees />
      <How />
      <Consider />
      <Its />
      <Not />
      <Get />
      <Stay />
      <Footer />
    </>
  );
};

export default App;
