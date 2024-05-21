import React from "react";
import Menu from "./sections/Menu";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Nav from "../../components/nav/Nav";

const Home = () => {
  return (
    <>
      <div className="h-16">
        <Nav />
      </div>
      <Menu />
      <About />
      <Contact />
    </>
  );
};

export default Home;
