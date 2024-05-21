import { Box, Modal, Typography } from "@mui/material";
import React from "react";

// Defining the fields that will be displayed for each category
const categoryFields = {
  dogs: [
    "origin",
    "breed_group",
    "lifespan",
    "size",
    "colors",
    "temperament",
    "description",
  ],
  cats: ["origin", "colors", "temperament", "description"],
  birds: [
    "place_of_found",
    "family",
    "habitat",
    "species",
    "diet",
    "weight_kg",
    "wingspan_cm",
    "description",
  ],
};

// Function to capitalize the first letter of each word in a field name
// This replaces underscores with spaces and capitalizes each word
const capitalizeFieldName = (fieldName) => {
  return fieldName
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const DetailsCard = ({ open, onClose, item, category }) => {
  const fields = categoryFields[category] || [];

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(3px)",
      }}
    >
      <Box
        className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3"
        sx={{
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease",
        }}
      >
        <Typography
          variant="h5"
          className="mb-4"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {item.name}
        </Typography>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover rounded mb-4"
          sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        />
        <Box className="space-y-2">
          {fields.map(
            (field) =>
              // Check if the item has a value for the current field
              item[field] && (
                <Typography key={field} variant="body1">
                  <span className="font-bold">
                    {capitalizeFieldName(field)}:
                  </span>{" "}
                  {Array.isArray(item[field])
                    ? item[field].join(", ")
                    : item[field]}
                </Typography>
              )
          )}
        </Box>
        <button
          onClick={onClose}
          className="mt-4 py-2 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          style={{ display: "block", margin: "0 auto" }}
        >
          Close
        </button>
      </Box>
    </Modal>
  );
};

export default DetailsCard;
