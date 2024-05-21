import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-200 px-4 md:px-10 lg:px-20 py-16"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Contact Us
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-8">
          We would love to hear from you! Whether you have questions, feedback,
          or just want to say hello, feel free to reach out to us.
        </p>
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
            Email
          </h3>
          <p className="text-base md:text-lg lg:text-xl">
            contact@animalcatalog.com
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
            Phone
          </h3>
          <p className="text-base md:text-lg lg:text-xl">+1 234 567 890</p>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
            Address
          </h3>
          <p className="text-base md:text-lg lg:text-xl">
            123 Animal Street, Pet City, Country
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
