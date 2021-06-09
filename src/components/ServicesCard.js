import React from "react";
import Typography from "@material-ui/core/Typography";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  serviceCardButton: {
    transition: "all .1s ",
    "&:hover": {
      marginRight: ".5rem",
    },
  },
}));

const ServicesCard = ({ img, text }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div>
      <img src={img} alt={img} style={{ cursor: "pointer", height: "5rem" }} />
      <Typography
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          lineHeight: "1.9rem",
          marginTop: "1rem",
          color: theme.palette.quaternary.main,
          cursor: "pointer",
        }}
      >
        {text}
      </Typography>
      <Typography
        style={{
          color: theme.palette.quaternary.main,
          marginTop: "1rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        <span className={classes.serviceCardButton}>Read More</span>
        <ArrowRightAltIcon />
      </Typography>
    </div>
  );
};

export default ServicesCard;
