import React from "react";
import CategoryCard from "../../../components/cards/CategoryCard";

const Menu = () => {
  return (
    <section
      id="menu"
      className="min-h-screen flex flex-col justify-center items-center overflow-y-auto py-8 pt-0 mt-0"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl px-6 py-2 mb-8  rounded-md shadow-lg font-serif italic tracking-wide">
        Welcome to our Animal Catalog
      </h1>
      <p className="text-lg mb-4 md:text-xl lg:text-2xl text-center">
        Explore our collection and learn more about your favorite animals!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CategoryCard img="/assets/dog.jpg" type="Dogs" />
        <CategoryCard img="/assets/cat.jpg" type="Cats" />
        <CategoryCard img="/assets/bird.jpg" type="Birds" />
      </div>
    </section>
  );
};

export default Menu;
