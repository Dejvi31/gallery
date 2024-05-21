import React from "react";
import Search from "../Search";
import { Link } from "react-router-dom";

const GalleryNav = ({ search, handleSearch }) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-800">
      <div className="flex justify-between items-center px-4 py-2 md:py-4">
        <Link
          to="/"
          className="text-white text-sm md:text-base hover:underline"
        >
          Go Back
        </Link>

        <Search
          search={search}
          handleSearch={handleSearch}
          className="w-1/3 md:w-1/4"
        />
      </div>
    </nav>
  );
};

export default GalleryNav;
