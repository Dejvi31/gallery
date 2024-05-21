import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../../components/cards/DetailsCard";
import GalleryNav from "../../components/nav/GalleryNav";
import AnimalCard from "../../components/cards/AnimalCard";
import { Box, CircularProgress, Pagination } from "@mui/material";

const Gallery = () => {
  const { category } = useParams();
  const baseUrl = "https://freetestapi.com/api/v1";
  const [catalog, setCatalog] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/${category.toLowerCase()}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCatalog(data);
        setFilteredCatalog(data);
        console.log(data);
      } catch (error) {
        console.error("Fetch error: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    setCurrentPage(1);

    if (searchTerm === "") {
      setFilteredCatalog(catalog);
    } else {
      const filtered = catalog.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCatalog(filtered);
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const offset = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredCatalog.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredCatalog.length / itemsPerPage);

  return (
    <>
      <div className="h-16">
        <GalleryNav search={search} handleSearch={handleSearch} />
      </div>

      <div className="p-8">
        <h1 className="text-sm md:text-base  font-serif italic">
          {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}{" "}
          Gallery
        </h1>

        {loading && (
          <Box className="flex justify-center mt-4">
            <CircularProgress />
          </Box>
        )}
        {!loading && filteredCatalog.length === 0 && (
          <p className="text-red-500">
            There is no animal with such name. Please rewrite the name
            correctly!
          </p>
        )}

        <AnimalCard
          filteredCatalog={currentItems}
          handleCardClick={handleCardClick}
        />
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          color="primary"
          className="flex justify-center mt-2"
        />
        {selectedItem && (
          <DetailsCard
            open={open}
            onClose={() => setOpen(false)}
            item={selectedItem}
            category={category}
          />
        )}
      </div>
    </>
  );
};

export default Gallery;
