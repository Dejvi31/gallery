import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const AnimalCard = ({ filteredCatalog, handleCardClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
      {filteredCatalog.map((item, index) => (
        <Card
          key={index}
          className="max-w-[345px]"
          onClick={() => handleCardClick(item)}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height={140}
              image={item.image}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              {item.origin && (
                <Typography variant="body2" color="text.secondary">
                  Origin: {item.origin}
                </Typography>
              )}
              {item.place_of_found && (
                <Typography variant="body2" color="text.secondary">
                  Place of Found: {item.place_of_found}
                </Typography>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default AnimalCard;
