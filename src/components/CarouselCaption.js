import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const CarouselCaption = ({ mainTitle }) => {
  const theme = useTheme();
  const matches864 = useMediaQuery(theme.breakpoints.down("864"));
  const matches682 = useMediaQuery(theme.breakpoints.down("682"));
  const matches458 = useMediaQuery(theme.breakpoints.down("458"));
  return (
    <div
      className="carousel-caption"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        bottom: "initial",
      }}
    >
      <Typography
        style={{
          fontFamily: "Permanent Marker",
          color: theme.palette.tertiary.main,
          fontSize: "1.1rem",
        }}
      >
        Every Child Deserve a future
      </Typography>
      <Typography
        style={{
          fontSize: matches458
            ? "1.3rem"
            : matches682
            ? "2rem"
            : matches864
            ? "3rem"
            : "3.8rem",
          fontWeight: "bold",
          lineHeight: matches458
            ? "2rem"
            : matches682
            ? "3rem"
            : matches864
            ? "3.5rem"
            : "4.5rem",
          marginTop: "1rem",
        }}
      >
        {mainTitle}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        style={{
          borderRadius: "2rem",
          padding: matches458 ? ".8rem 1.3rem" : ".8rem 2rem",
          marginTop: "1rem",
        }}
      >
        <Typography
          style={{
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Make a Donation <FavoriteIcon style={{ fontSize: "1.2rem" }} />
        </Typography>
      </Button>
    </div>
  );
};

export default CarouselCaption;
