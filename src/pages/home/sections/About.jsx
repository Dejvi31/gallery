import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 md:px-10 lg:px-20 py-16"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          About Us
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-4">
          Welcome to our animal catalog! We are dedicated to providing
          comprehensive information about various animals, including their
          origin, characteristics, and more. Our goal is to educate and inspire
          animal lovers everywhere.
        </p>
        <p className="text-base md:text-lg lg:text-xl mb-4">
          Whether you're interested in dogs, cats, birds, or any other animal,
          you'll find detailed information and beautiful photos to help you
          learn more about them. We believe in the power of knowledge and the
          importance of understanding the creatures we share our planet with.
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          Join us in exploring the amazing world of animals and discover
          fascinating facts that will deepen your appreciation for the diversity
          of life on Earth.
        </p>
      </div>
    </section>
  );
};

export default About;
